const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;
const companyMap = require("./src/DbData/companies");
const { Company, Catalogo } = require("./src/db");
const createCatalogos = require("./src/DbData/catalogos");
const createAllCatalogos = async () => {
  await createCatalogos.andreaDb();
  await createCatalogos.cklassDb();
  await createCatalogos.priceShoesDb();
  await createCatalogos.betterwareDb();
  await createCatalogos.concordDb();
  console.log("Catalogos creados con exito...");
};
conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    try {
      const company = await Company.findAll({});
      const catalogo = await Catalogo.findAll({});

      company.length === 0
        ? (await Company.bulkCreate(companyMap)) &&
          console.log("Compañias cargadas con exito!!")
        : console.log("Compañias cargadas con anterioridad o nulas");

      catalogo.length === 0
        ? await createAllCatalogos()
        : console.log("catalogos cargados con anterioridad o nulos");
    } catch (error) {
      console.log(error);
    }
    console.log(`listening at ${PORT}`);
  });
});
