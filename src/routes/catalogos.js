const { Router } = require("express");
const router = Router();
const { Catalogo } = require("../db");
const requestFunctions = require("../controllers/index");

router.get("/", requestFunctions.getAllCatalogos);

module.exports = router;
