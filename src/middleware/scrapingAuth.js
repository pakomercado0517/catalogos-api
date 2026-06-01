const { logRejectedAccess } = require("../utils/logger");

function getProvidedKey(req) {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.slice(7).trim();
  }

  const apiKey = req.headers["x-api-key"];
  if (typeof apiKey === "string" && apiKey.length > 0) {
    return apiKey.trim();
  }

  return null;
}

function scrapingAuth(req, res, next) {
  const expectedKey = process.env.SCRAPING_API_KEY;

  if (!expectedKey) {
    console.error("SCRAPING_API_KEY no esta configurada");
    logRejectedAccess({
      status: 503,
      reason: "missing_env_key",
      req,
    });
    return res.status(503).json({
      message: "Servicio de actualizacion no configurado",
    });
  }

  const providedKey = getProvidedKey(req);

  if (!providedKey) {
    logRejectedAccess({
      status: 401,
      reason: "missing_credentials",
      req,
    });
    return res.status(401).json({ message: "Credencial requerida" });
  }

  if (providedKey !== expectedKey) {
    logRejectedAccess({
      status: 403,
      reason: "invalid_credentials",
      req,
    });
    return res.status(403).json({ message: "Credencial invalida" });
  }

  next();
}

module.exports = scrapingAuth;
