const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;
const companyMap = require("./src/DbData/companies");
const { Company } = require("./src/db");
const createCatalogos = require("./src/DbData/catalogos");
conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    try {
      (await Company.bulkCreate(companyMap))
        ? console.log("Se crearon las compañias con exito...")
        : console.log("Error al crear las compañias...");
      await createCatalogos.andreaDb();
      await createCatalogos.cklassDb();
      await createCatalogos.priceShoesDb();
      await createCatalogos.betterwareDb();
      await createCatalogos.concordDb();
      console.log("Catalogos creados con exito...");
    } catch (error) {
      console.log(error);
    }
    console.log(`listening at ${PORT}`);
  });
});
