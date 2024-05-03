//@ts-ignore
const { Company, Catalogo } = require("../db");
const { companyMap } = require("../DbData/companies");
const { concordDb } = require("../DbData/catalogos");
const scrapingFunction = require("../puppeteer/index");

module.exports = {
  createCompanies: async () => {
    try {
      const companies = await Company.findAll();
      if (companies.length > 0)
        return console.log("companies finded and ready to use");
      await Company.bulkCreate(companyMap);
      concordDb();
      console.log("Companies created");
    } catch (error) {
      console.log(error);
    }
  },
  getAllCompanies: async (req, res) => {
    try {
      const company = await Company.findAll({});
      res.status(200).json(company);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getAllCatalogos: async (req, res) => {
    try {
      const catalogo = await Catalogo.findAll({});
      res.status(200).json(catalogo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  scrapingCatalogues: async (req, res) => {
    const { id } = req.params;
    try {
      //Buscamos si hay catalogos para eliminarlos y no repetirlos en la BD
      await Catalogo.destroy({ where: {} });

      //Hacemos el scraping y creamos la nueva Tabla con los catalogos...
      const company = await Company.findOne({ where: { id } });
      const scraping = await scrapingFunction[company.name]();
      console.log("done, catalogues on DB");
      console.log("scraping.message", scraping.message);

      res.status(200).json(scraping);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  getCatalogosById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const company = await Company.findOne({ where: { id } });

      const catalogues = await Company.findAll({
        where: { id },
        include: [{ model: Catalogo }],
      });

      await scrapingFunction[company.name]();
      console.log("done, catalogues on DB");
      // next(catalogues);

      // if (id === "2" || id === "3") {
      //   await scrapingFunction[company.name]();
      //   console.log("done, catalogues on DB");
      //   next(catalogues);
      // }
      res.status(200).json(catalogues[0].catalogos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  getCompanyById: async (req, res) => {
    const { id } = req.params;
    try {
      const company = await Company.findOne({ where: { id } });
      res.status(200).json(company);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
