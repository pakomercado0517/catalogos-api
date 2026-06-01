//@ts-ignore
const { Company, Catalogo } = require("../db");
const { companyMap } = require("../DbData/companies");
// const { concordDb, betterwareDb } = require("../DbData/catalogos");
const scrapingFunction = require("../puppeteer/");
const {
  tryAcquireScrapingLock,
  releaseScrapingLock,
  recordCompanyScrapeStart,
} = require("../middleware/scrapingLimits");

module.exports = {
  createCompanies: async () => {
    try {
      const companies = await Company.findAll();
      if (companies.length > 0)
        return console.log("companies finded and ready to use");
      await Company.bulkCreate(companyMap);
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
  getCatalogosById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const company = await Company.findOne({ where: { id } });

      const catalogues = await Company.findAll({
        where: { id },
        include: [{ model: Catalogo }],
      });
      res.status(200).json(catalogues[0].catalogos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  updateCatalogues: async (req, res, next) => {
    const { id } = req.params;
    const companyKey = String(id);

    if (!tryAcquireScrapingLock(companyKey)) {
      return res.status(429).json({
        message: "Ya hay una actualizacion en curso para esta empresa.",
      });
    }

    try {
      const company = await Company.findOne({
        where: { id },
        include: { model: Catalogo },
      });

      if (!company) {
        return res.status(404).json({ message: "Empresa no encontrada" });
      }

      if (typeof scrapingFunction[company.name] !== "function") {
        return res.status(400).json({
          message: "Actualizacion no disponible para esta empresa",
        });
      }

      recordCompanyScrapeStart(companyKey);

      console.log(company.name);
      if (company.catalogos.length > 0) {
        for (const catalogo of company.catalogos) {
          console.log("catalogos eliminados");
          await catalogo.destroy();
        }
      }

      await scrapingFunction[company.name]();
      res.status(200).json({ message: "Catálogos actualizados con éxito!" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    } finally {
      releaseScrapingLock(companyKey);
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
