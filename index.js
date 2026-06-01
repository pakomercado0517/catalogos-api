const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const companiesFunction = require("./src/controllers/index.js");
const { startScrapingCron } = require("./src/jobs/scrapingCron.js");
const { ensureDatabaseIndexes } = require("./src/db/ensureIndexes.js");
const { runDataRetention } = require("./src/jobs/dataRetention.js");

const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(async () => {
  await ensureDatabaseIndexes(conn);
  await runDataRetention();
  server.listen(PORT, async () => {
    await companiesFunction.createCompanies();
    startScrapingCron();
    console.log("catalogues ready to use");
    console.log(`listening at ${PORT}`);
  });
});
