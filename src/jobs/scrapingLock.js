const COMPANY_COOLDOWN_MS =
  Number(process.env.SCRAPING_COMPANY_COOLDOWN_MS) || 15 * 60 * 1000;

const companyLastScrapeStart = new Map();
const activeScrapes = new Set();

function tryAcquireScrapingLock(companyId) {
  const companyKey = String(companyId);

  if (activeScrapes.has(companyKey)) {
    return false;
  }

  activeScrapes.add(companyKey);
  return true;
}

function releaseScrapingLock(companyId) {
  activeScrapes.delete(String(companyId));
}

function recordCompanyScrapeStart(companyId) {
  companyLastScrapeStart.set(String(companyId), Date.now());
}

function isScrapingLocked(companyId) {
  return activeScrapes.has(String(companyId));
}

function getCompanyCooldownRetryAfter(companyId) {
  const companyKey = String(companyId);
  const lastStart = companyLastScrapeStart.get(companyKey);

  if (!lastStart) {
    return 0;
  }

  const elapsed = Date.now() - lastStart;
  if (elapsed >= COMPANY_COOLDOWN_MS) {
    return 0;
  }

  return Math.ceil((COMPANY_COOLDOWN_MS - elapsed) / 1000);
}

function resetScrapingLockForTests() {
  companyLastScrapeStart.clear();
  activeScrapes.clear();
}

module.exports = {
  tryAcquireScrapingLock,
  releaseScrapingLock,
  recordCompanyScrapeStart,
  isScrapingLocked,
  getCompanyCooldownRetryAfter,
  resetScrapingLockForTests,
};
