const DEFAULT_TTL_MS = Number(process.env.READ_CACHE_TTL_MS) || 5 * 60 * 1000;

const cache = new Map();

function getCacheKey(parts) {
  return parts.filter(Boolean).join(":");
}

function get(key) {
  const entry = cache.get(key);

  if (!entry) {
    return null;
  }

  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }

  return entry.value;
}

function set(key, value, ttlMs = DEFAULT_TTL_MS) {
  cache.set(key, {
    value,
    expiresAt: Date.now() + ttlMs,
  });
}

function invalidateByPrefix(prefix) {
  for (const key of cache.keys()) {
    if (key.startsWith(prefix)) {
      cache.delete(key);
    }
  }
}

function invalidateCompanyCatalogos(companyId) {
  invalidateByPrefix(`catalogos:company:${companyId}`);
  invalidateByPrefix("catalogos:all:");
}

function invalidateCatalogLists() {
  invalidateByPrefix("catalogos:all:");
}

function invalidateCompanyLists() {
  invalidateByPrefix("companies:all:");
}

function resetReadCacheForTests() {
  cache.clear();
}

module.exports = {
  getCacheKey,
  get,
  set,
  invalidateCompanyCatalogos,
  invalidateCatalogLists,
  invalidateCompanyLists,
  resetReadCacheForTests,
};
