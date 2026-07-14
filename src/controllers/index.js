//@ts-ignore
const { Company, Catalogo } = require("../db");
const { companyMap } = require("../DbData/companies");
const scrapingFunction = require("../puppeteer/");
const { CATALOG_CATEGORIES } = require("../constants/catalogCategories");
const {
  enqueueScrapingJob,
  getJob,
  getLatestJobForCompany,
} = require("../jobs/scrapingQueue");
const { logRejectedAccess } = require("../utils/logger");
const {
  parsePagination,
  buildPaginationResponse,
} = require("../utils/pagination");
const { getCacheKey, get, set } = require("../utils/readCache");
const { normalizeCatalogCategory } = require("../utils/catalogSanitize");

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
      const { limit, offset } = parsePagination(req.query);
      const cacheKey = getCacheKey(["companies", "all", limit, offset]);
      const cached = get(cacheKey);

      if (cached) {
        return res.status(200).json(cached);
      }

      const { rows, count } = await Company.findAndCountAll({
        limit,
        offset,
        order: [["id", "ASC"]],
      });

      const payload = buildPaginationResponse({
        rows,
        count,
        limit,
        offset,
      });

      set(cacheKey, payload);
      res.status(200).json(payload);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getCatalogCategories: async (req, res) => {
    res.status(200).json(CATALOG_CATEGORIES);
  },

  getAllCatalogos: async (req, res) => {
    try {
      const { limit, offset } = parsePagination(req.query);
      const rawCategory = req.query.category;
      let categoryFilter = null;

      if (rawCategory !== undefined && rawCategory !== "") {
        const category = normalizeCatalogCategory(String(rawCategory));
        if (!CATALOG_CATEGORIES.includes(category)) {
          return res.status(400).json({
            message: "Categoria invalida",
            validCategories: CATALOG_CATEGORIES,
          });
        }
        categoryFilter = category;
      }

      const cacheKey = getCacheKey([
        "catalogos",
        "all",
        limit,
        offset,
        categoryFilter ?? "all",
      ]);
      const cached = get(cacheKey);

      if (cached) {
        return res.status(200).json(cached);
      }

      const where = categoryFilter ? { category: categoryFilter } : undefined;

      const { rows, count } = await Catalogo.findAndCountAll({
        where,
        limit,
        offset,
        order: [["id", "ASC"]],
      });

      const payload = buildPaginationResponse({
        rows,
        count,
        limit,
        offset,
      });

      set(cacheKey, payload);
      res.status(200).json(payload);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getCatalogosById: async (req, res) => {
    const { id } = req.params;

    try {
      const cacheKey = getCacheKey(["catalogos", "company", id]);
      const cached = get(cacheKey);

      if (cached) {
        return res.status(200).json(cached);
      }

      const company = await Company.findOne({
        where: { id },
        include: [{ model: Catalogo }],
      });

      if (!company) {
        return res.status(404).json({ message: "Empresa no encontrada" });
      }

      const catalogos = company.catalogos || [];
      set(cacheKey, catalogos);
      res.status(200).json(catalogos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateCatalogues: async (req, res) => {
    const { id } = req.params;

    try {
      const company = await Company.findOne({
        where: { id },
      });

      if (!company) {
        return res.status(404).json({ message: "Empresa no encontrada" });
      }

      if (typeof scrapingFunction[company.name] !== "function") {
        return res.status(400).json({
          message: "Actualizacion no disponible para esta empresa",
        });
      }

      const result = enqueueScrapingJob({
        companyId: company.id,
        companyName: company.name,
        source: "manual",
      });

      if (result.conflict) {
        logRejectedAccess({
          status: 429,
          reason: "job_already_active",
          req,
          companyId: String(id),
        });
        return res.status(429).json({
          message:
            "Ya hay una actualizacion en curso o en cola para esta empresa.",
          job: result.job,
        });
      }

      return res.status(202).json({
        message:
          "Actualizacion encolada. El scraping se ejecutara en segundo plano.",
        job: result.job,
        statusUrl: `/catalogos/jobs/${result.job.jobId}`,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  getUpdateCataloguesStatus: async (req, res) => {
    const { id } = req.params;
    const job = getLatestJobForCompany(id);

    if (!job) {
      return res.status(404).json({
        message:
          "No hay trabajos de actualizacion registrados para esta empresa.",
      });
    }

    return res.status(200).json({ job });
  },

  getScrapingJob: async (req, res) => {
    const { jobId } = req.params;
    const job = getJob(jobId);

    if (!job) {
      return res.status(404).json({ message: "Trabajo no encontrado" });
    }

    return res.status(200).json({ job });
  },

  getCompanyById: async (req, res) => {
    const { id } = req.params;
    try {
      const { limit, offset } = parsePagination(req.query);
      const cacheKey = getCacheKey([
        "companies",
        "information",
        id,
        limit,
        offset,
      ]);
      const cached = get(cacheKey);

      if (cached) {
        return res.status(200).json(cached);
      }

      const company = await Company.findOne({ where: { id } });

      if (!company) {
        return res.status(404).json({ message: "Empresa no encontrada" });
      }

      const { rows, count } = await Catalogo.findAndCountAll({
        where: { companyId: id },
        limit,
        offset,
        order: [["id", "ASC"]],
      });

      const payload = {
        ...company.toJSON(),
        ...buildPaginationResponse({ rows, count, limit, offset }),
      };

      set(cacheKey, payload);
      res.status(200).json(payload);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
