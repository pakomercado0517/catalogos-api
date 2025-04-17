const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const companiesFunction = require("./src/controllers/index.js");
const scrapingFunction = require("./src/puppeteer/index.js");
const { concordDb, betterwareDb } = require("./src/DbData/catalogos.js");

const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    await companiesFunction.createCompanies();
    // await concordDb();
    // await betterwareDb();
    // await scrapingFunction["andrea"]();
    // await scrapingFunction["cklass"]();
    // await scrapingFunction["priceShoes"]();
    // await scrapingFunction["vianney"]();
    console.log("catalogues ready to use");
    console.log(`listening at ${PORT}`);
  });
});
