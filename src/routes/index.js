const { Router } = require("express");
const catalogos = require("./catalogos");
const companies = require("./companies");

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Catalogos App!!");
});

router.use("/catalogos", catalogos);
router.use("/companies", companies);

module.exports = router;
