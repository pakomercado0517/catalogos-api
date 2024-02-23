const { Router } = require("express");
const router = Router();
// const { Catalogo } = require("../db");
const requestFunctions = require("../controllers/index");

router.get("/", requestFunctions.getAllCatalogos);
router.get("/:id", requestFunctions.scrapingCatalogues);

module.exports = router;
