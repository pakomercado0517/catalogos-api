const crypto = require("crypto");
const scrapingFunction = require("../puppeteer");
const {
  tryAcquireScrapingLock,
  releaseScrapingLock,
  recordCompanyScrapeStart,
} = require("./scrapingLock");
const {
  logEvent,
  logScrapingStart,
  logScrapingEnd,
} = require("../utils/logger");

const MAX_JOBS_HISTORY =
  Number(process.env.RETENTION_JOB_HISTORY_MAX) || 100;

const JobStatus = {
  QUEUED: "queued",
  RUNNING: "running",
  COMPLETED: "completed",
  FAILED: "failed",
};

const jobs = new Map();
const companyJobIndex = new Map();
const queue = [];

let processing = false;

function toPublicJob(job) {
  return {
    jobId: job.id,
    companyId: job.companyId,
    companyName: job.companyName,
    status: job.status,
    source: job.source,
    createdAt: job.createdAt,
    startedAt: job.startedAt,
    finishedAt: job.finishedAt,
    error: job.error,
  };
}

function cleanupOldJobs() {
  if (jobs.size <= MAX_JOBS_HISTORY) {
    return;
  }

  const finishedJobs = [...jobs.values()]
    .filter(
      (job) =>
        job.status === JobStatus.COMPLETED || job.status === JobStatus.FAILED
    )
    .sort((a, b) => new Date(a.finishedAt) - new Date(b.finishedAt));

  while (jobs.size > MAX_JOBS_HISTORY && finishedJobs.length > 0) {
    const oldest = finishedJobs.shift();
    jobs.delete(oldest.id);
  }
}

function hasActiveJobForCompany(companyId) {
  const companyKey = String(companyId);
  const jobId = companyJobIndex.get(companyKey);
  if (!jobId) {
    return false;
  }

  const job = jobs.get(jobId);
  return (
    job &&
    (job.status === JobStatus.QUEUED || job.status === JobStatus.RUNNING)
  );
}

function getJob(jobId) {
  const job = jobs.get(jobId);
  return job ? toPublicJob(job) : null;
}

function getActiveJobForCompany(companyId) {
  const companyKey = String(companyId);
  const jobId = companyJobIndex.get(companyKey);
  if (!jobId) {
    return null;
  }

  const job = jobs.get(jobId);
  if (
    !job ||
    (job.status !== JobStatus.QUEUED && job.status !== JobStatus.RUNNING)
  ) {
    return null;
  }

  return toPublicJob(job);
}

function getLatestJobForCompany(companyId) {
  const companyKey = String(companyId);
  const jobId = companyJobIndex.get(companyKey);
  if (!jobId) {
    return null;
  }

  const job = jobs.get(jobId);
  return job ? toPublicJob(job) : null;
}

async function runJob(job) {
  const companyKey = job.companyId;

  if (!tryAcquireScrapingLock(companyKey)) {
    job.status = JobStatus.FAILED;
    job.error = "No se pudo iniciar: lock no disponible";
    job.finishedAt = new Date().toISOString();
    companyJobIndex.delete(companyKey);
    logEvent("scraping_job_failed", {
      jobId: job.id,
      companyId: companyKey,
      reason: "lock_unavailable",
    });
    return;
  }

  const startedAt = Date.now();
  job.status = JobStatus.RUNNING;
  job.startedAt = new Date().toISOString();

  recordCompanyScrapeStart(companyKey);
  logScrapingStart({
    companyId: job.companyId,
    companyName: job.companyName,
  });
  logEvent("scraping_job_started", {
    jobId: job.id,
    companyId: job.companyId,
    companyName: job.companyName,
    source: job.source,
  });

  try {
    await scrapingFunction[job.companyName]();
    job.status = JobStatus.COMPLETED;
    logScrapingEnd({
      companyId: job.companyId,
      companyName: job.companyName,
      durationMs: Date.now() - startedAt,
      status: "success",
    });
    logEvent("scraping_job_completed", {
      jobId: job.id,
      companyId: job.companyId,
      durationMs: Date.now() - startedAt,
    });
  } catch (error) {
    job.status = JobStatus.FAILED;
    job.error = error.message;
    logScrapingEnd({
      companyId: job.companyId,
      companyName: job.companyName,
      durationMs: Date.now() - startedAt,
      status: "error",
      error: error.message,
    });
    logEvent("scraping_job_failed", {
      jobId: job.id,
      companyId: job.companyId,
      error: error.message,
    });
  } finally {
    job.finishedAt = new Date().toISOString();
    releaseScrapingLock(companyKey);
    cleanupOldJobs();
  }
}

async function processQueue() {
  if (processing) {
    return;
  }

  processing = true;

  try {
    while (queue.length > 0) {
      const jobId = queue.shift();
      const job = jobs.get(jobId);

      if (!job || job.status !== JobStatus.QUEUED) {
        continue;
      }

      await runJob(job);
    }
  } finally {
    processing = false;
  }
}

function enqueueScrapingJob({ companyId, companyName, source = "manual" }) {
  const companyKey = String(companyId);

  if (hasActiveJobForCompany(companyKey)) {
    return {
      conflict: true,
      job: getActiveJobForCompany(companyKey),
    };
  }

  if (typeof scrapingFunction[companyName] !== "function") {
    throw new Error("Actualizacion no disponible para esta empresa");
  }

  const jobId = crypto.randomUUID();
  const job = {
    id: jobId,
    companyId: companyKey,
    companyName,
    status: JobStatus.QUEUED,
    source,
    createdAt: new Date().toISOString(),
    startedAt: null,
    finishedAt: null,
    error: null,
  };

  jobs.set(jobId, job);
  companyJobIndex.set(companyKey, jobId);
  queue.push(jobId);

  logEvent("scraping_job_queued", {
    jobId,
    companyId: companyKey,
    companyName,
    source,
  });

  setImmediate(() => {
    processQueue().catch((error) => {
      console.error(`[scraping-queue] ${error.message}`);
    });
  });

  return {
    conflict: false,
    job: toPublicJob(job),
  };
}

function resetScrapingQueueForTests() {
  jobs.clear();
  companyJobIndex.clear();
  queue.length = 0;
  processing = false;
}

module.exports = {
  enqueueScrapingJob,
  getJob,
  getActiveJobForCompany,
  getLatestJobForCompany,
  hasActiveJobForCompany,
  resetScrapingQueueForTests,
};
