const { Router } = require("express");
const router = Router();
const requestFunctions = require("../controllers/index");
const scrapingAuth = require("../middleware/scrapingAuth");
const { scrapingRateLimit } = require("../middleware/scrapingLimits");

router.get("/", requestFunctions.getAllCatalogos);

router.post(
  "/updateCatalogues/:id",
  scrapingAuth,
  scrapingRateLimit,
  requestFunctions.updateCatalogues
);

router.get("/updateCatalogues/:id", (_req, res) => {
  res.status(405).json({
    message:
      "Metodo no permitido. Usa POST /catalogos/updateCatalogues/:id con credencial de administrador.",
  });
});

router.get("/:id", requestFunctions.getCatalogosById);

module.exports = router;
