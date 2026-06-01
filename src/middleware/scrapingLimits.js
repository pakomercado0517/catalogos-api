const COMPANY_COOLDOWN_MS =
  Number(process.env.SCRAPING_COMPANY_COOLDOWN_MS) || 15 * 60 * 1000;
const IP_MAX_REQUESTS = Number(process.env.SCRAPING_IP_MAX_REQUESTS) || 5;
const IP_WINDOW_MS =
  Number(process.env.SCRAPING_IP_WINDOW_MS) || 60 * 60 * 1000;

const ipBuckets = new Map();
const companyLastScrapeStart = new Map();
const activeScrapes = new Set();

function getClientIp(req) {
  if (req.ip) {
    return req.ip;
  }

  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  return "unknown";
}

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

function checkCompanyCooldown(companyId) {
  const now = Date.now();
  const lastStart = companyLastScrapeStart.get(companyId);

  if (!lastStart) {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  const elapsed = now - lastStart;
  if (elapsed >= COMPANY_COOLDOWN_MS) {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  const retryAfterSeconds = Math.ceil((COMPANY_COOLDOWN_MS - elapsed) / 1000);
  return { allowed: false, retryAfterSeconds };
}

function tryAcquireScrapingLock(companyId) {
  if (activeScrapes.has(companyId)) {
    return false;
  }

  activeScrapes.add(companyId);
  return true;
}

function releaseScrapingLock(companyId) {
  activeScrapes.delete(companyId);
}

function recordCompanyScrapeStart(companyId) {
  companyLastScrapeStart.set(companyId, Date.now());
}

function scrapingRateLimit(req, res, next) {
  const companyId = String(req.params.id);
  const ip = getClientIp(req);

  const ipLimit = checkIpLimit(ip);
  if (!ipLimit.allowed) {
    console.warn(
      `[scraping-limit] IP bloqueada ip=${ip} companyId=${companyId}`
    );
    return respondTooManyRequests(
      res,
      "Demasiadas solicitudes de actualizacion desde esta IP. Intenta mas tarde.",
      ipLimit.retryAfterSeconds
    );
  }

  if (activeScrapes.has(companyId)) {
    console.warn(
      `[scraping-limit] Scraping en curso companyId=${companyId} ip=${ip}`
    );
    return respondTooManyRequests(
      res,
      "Ya hay una actualizacion en curso para esta empresa.",
      0
    );
  }

  const companyLimit = checkCompanyCooldown(companyId);
  if (!companyLimit.allowed) {
    console.warn(
      `[scraping-limit] Cooldown activo companyId=${companyId} ip=${ip}`
    );
    return respondTooManyRequests(
      res,
      "Esta empresa se actualizo recientemente. Espera antes de volver a intentarlo.",
      companyLimit.retryAfterSeconds
    );
  }

  next();
}

function resetScrapingLimitsForTests() {
  ipBuckets.clear();
  companyLastScrapeStart.clear();
  activeScrapes.clear();
}

module.exports = {
  scrapingRateLimit,
  tryAcquireScrapingLock,
  releaseScrapingLock,
  recordCompanyScrapeStart,
  resetScrapingLimitsForTests,
};
