const { Router } = require("express");
const router = Router();
const requestFunctions = require("../controllers/index");

const { Company } = require("../db");

router.get("/", requestFunctions.getAllCompanies);
router.get("/:id", requestFunctions.getCatalogosById);

module.exports = router;
