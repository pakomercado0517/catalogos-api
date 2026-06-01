function normalizeCatalogUrl(url) {
  if (!url || typeof url !== "string") {
    return "";
  }

  let normalized = url.trim();

  if (!normalized) {
    return "";
  }

  try {
    const parsed = new URL(normalized);

    if (parsed.pathname.length > 1 && parsed.pathname.endsWith("/")) {
      parsed.pathname = parsed.pathname.slice(0, -1);
    }

    normalized = parsed.toString();
  } catch {
    normalized = normalized.replace(/\s+/g, "");
  }

  return normalized;
}

function normalizeCatalogName(name) {
  if (!name || typeof name !== "string") {
    return null;
  }

  const cleaned = name.replace(/\s+/g, " ").trim();
  return cleaned || null;
}

function normalizeImageUrl(url) {
  const normalized = normalizeCatalogUrl(url);
  return normalized || null;
}

function sanitizeCatalogItem(item = {}) {
  return {
    name: normalizeCatalogName(item.name),
    url: normalizeCatalogUrl(item.url),
    image: normalizeImageUrl(item.image),
  };
}

module.exports = {
  normalizeCatalogUrl,
  normalizeCatalogName,
  normalizeImageUrl,
  sanitizeCatalogItem,
};
