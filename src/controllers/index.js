//@ts-ignore
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const { Company, Catalogo } = require("../db");

module.exports = {
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
  getCatalogosById: async (req, res) => {
    const { id } = req.params;
    try {
      const catalogosList = await Company.findAll({
        where: { id: id },
        include: [{ model: Catalogo }],
      });
      res.status(200).json(catalogosList[0]?.catalogos);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};
