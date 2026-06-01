function getClientIp(req) {
  if (!req) {
    return "unknown";
  }

  if (req.ip) {
    return req.ip;
  }

  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  return "unknown";
}

const rejectionTotals = {
  401: 0,
  403: 0,
  429: 0,
  503: 0,
  405: 0,
};

function writeLog(level, payload) {
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    ...payload,
  });

  if (level === "error") {
    console.error(line);
    return;
  }

  if (level === "warn") {
    console.warn(line);
    return;
  }

  console.log(line);
}

function logEvent(event, data = {}) {
  writeLog("info", { event, ...data });
}

function logRejectedAccess({ status, reason, req, companyId }) {
  if (rejectionTotals[status] !== undefined) {
    rejectionTotals[status] += 1;
  }

  writeLog("warn", {
    event: "scraping_access_rejected",
    status,
    reason,
    path: req?.originalUrl || req?.path,
    method: req?.method,
    companyId: companyId || req?.params?.id,
    ip: getClientIp(req),
    rejectionTotals: { ...rejectionTotals },
  });
}

function logScrapingStart({ companyId, companyName }) {
  logEvent("scraping_start", { companyId, companyName });
}

function logScrapingEnd({ companyId, companyName, durationMs, status, error }) {
  logEvent("scraping_end", {
    companyId,
    companyName,
    durationMs,
    status,
    ...(error ? { error } : {}),
  });
}

function getRejectionTotals() {
  return { ...rejectionTotals };
}

function resetRejectionTotalsForTests() {
  Object.keys(rejectionTotals).forEach((key) => {
    rejectionTotals[key] = 0;
  });
}

module.exports = {
  getClientIp,
  logEvent,
  logRejectedAccess,
  logScrapingStart,
  logScrapingEnd,
  getRejectionTotals,
  resetRejectionTotalsForTests,
};
