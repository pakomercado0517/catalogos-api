const { getClientIp, logRejectedAccess } = require("../utils/logger");
const { hasActiveJobForCompany } = require("../jobs/scrapingQueue");
const {
  isScrapingLocked,
  getCompanyCooldownRetryAfter,
  resetScrapingLockForTests,
} = require("../jobs/scrapingLock");

const IP_MAX_REQUESTS = Number(process.env.SCRAPING_IP_MAX_REQUESTS) || 5;
const IP_WINDOW_MS =
  Number(process.env.SCRAPING_IP_WINDOW_MS) || 60 * 60 * 1000;

const ipBuckets = new Map();

function respondTooManyRequests(res, message, retryAfterSeconds) {
  if (retryAfterSeconds > 0) {
    res.set("Retry-After", String(retryAfterSeconds));
  }

  return res.status(429).json({ message });
}

function checkIpLimit(ip) {
  const now = Date.now();
  let bucket = ipBuckets.get(ip);

  if (!bucket || now >= bucket.resetAt) {
    bucket = { count: 0, resetAt: now + IP_WINDOW_MS };
    ipBuckets.set(ip, bucket);
  }

  if (bucket.count >= IP_MAX_REQUESTS) {
    const retryAfterSeconds = Math.ceil((bucket.resetAt - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

function scrapingRateLimit(req, res, next) {
  const companyId = String(req.params.id);
  const ip = getClientIp(req);

  const ipLimit = checkIpLimit(ip);
  if (!ipLimit.allowed) {
    logRejectedAccess({
      status: 429,
      reason: "ip_rate_limit",
      req,
      companyId,
    });
    return respondTooManyRequests(
      res,
      "Demasiadas solicitudes de actualizacion desde esta IP. Intenta mas tarde.",
      ipLimit.retryAfterSeconds
    );
  }

  if (hasActiveJobForCompany(companyId)) {
    logRejectedAccess({
      status: 429,
      reason: "job_already_active",
      req,
      companyId,
    });
    return respondTooManyRequests(
      res,
      "Ya hay una actualizacion en curso o en cola para esta empresa.",
      0
    );
  }

  if (isScrapingLocked(companyId)) {
    logRejectedAccess({
      status: 429,
      reason: "scraping_in_progress",
      req,
      companyId,
    });
    return respondTooManyRequests(
      res,
      "Ya hay una actualizacion en curso para esta empresa.",
      0
    );
  }

  const retryAfterSeconds = getCompanyCooldownRetryAfter(companyId);
  if (retryAfterSeconds > 0) {
    logRejectedAccess({
      status: 429,
      reason: "company_cooldown",
      req,
      companyId,
    });
    return respondTooManyRequests(
      res,
      "Esta empresa se actualizo recientemente. Espera antes de volver a intentarlo.",
      retryAfterSeconds
    );
  }

  next();
}

function resetScrapingLimitsForTests() {
  ipBuckets.clear();
  resetScrapingLockForTests();
}

module.exports = {
  scrapingRateLimit,
  resetScrapingLimitsForTests,
};
