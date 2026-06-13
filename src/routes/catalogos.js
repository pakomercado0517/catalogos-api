const { Router } = require("express");
const router = Router();
const requestFunctions = require("../controllers/index");
const scrapingAuth = require("../middleware/scrapingAuth");
const { scrapingRateLimit } = require("../middleware/scrapingLimits");
const { logRejectedAccess } = require("../utils/logger");

router.get("/", requestFunctions.getAllCatalogos);

router.post(
  "/updateCatalogues/:id",
  scrapingAuth,
  scrapingRateLimit,
  requestFunctions.updateCatalogues
);

router.get(
  "/updateCatalogues/:id/status",
  scrapingAuth,
  requestFunctions.getUpdateCataloguesStatus
);

router.get("/jobs/:jobId", scrapingAuth, requestFunctions.getScrapingJob);

router.get("/categories", requestFunctions.getCatalogCategories);

router.get("/updateCatalogues/:id", (req, res) => {
  logRejectedAccess({
    status: 405,
    reason: "method_not_allowed",
    req,
  });
  res.status(405).json({
    message:
      "Metodo no permitido. Usa POST /catalogos/updateCatalogues/:id con credencial de administrador.",
  });
});

router.get("/:id", requestFunctions.getCatalogosById);

module.exports = router;
