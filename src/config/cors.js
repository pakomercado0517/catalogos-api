const DEFAULT_CORS_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://catalogos-de-sissy.vercel.app",
  "catalogos-de-sissy.vercel.app",
  "https://catalogos-de-sissy-2-0-hnde29zqr-pakomercado0517s-projects.vercel.app/",
];

function parseOriginsFromEnv(raw) {
  if (!raw || typeof raw !== "string") {
    return [];
  }

  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function getCorsOrigins() {
  const origins = [...DEFAULT_CORS_ORIGINS];

  if (process.env.ADMIN_PANEL_URL) {
    origins.push(process.env.ADMIN_PANEL_URL.trim());
  }

  origins.push(...parseOriginsFromEnv(process.env.CORS_ALLOWED_ORIGINS));

  return [...new Set(origins)];
}

module.exports = { getCorsOrigins, DEFAULT_CORS_ORIGINS };
