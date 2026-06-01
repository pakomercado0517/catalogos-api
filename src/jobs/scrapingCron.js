const cron = require("node-cron");
const { Company } = require("../db");
const { enqueueScrapingJob } = require("./scrapingQueue");
const { logEvent } = require("../utils/logger");
const {
  PUPPETEER_COMPANIES,
  isStaticCatalogCompany,
} = require("../constants/companies");

function getCronCompanyIds() {
  const raw = process.env.SCRAPING_CRON_COMPANY_IDS;

  if (!raw || raw.trim() === "") {
    return null;
  }

  return raw
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

async function runScheduledScrapes() {
  const companyIds = getCronCompanyIds();
  let companies;

  if (companyIds) {
    companies = await Company.findAll({
      where: { id: companyIds },
    });
  } else {
    companies = await Company.findAll({
      where: { name: PUPPETEER_COMPANIES },
    });
  }

  logEvent("scraping_cron_tick", {
    companies: companies.map((company) => ({
      id: company.id,
      name: company.name,
    })),
  });

  for (const company of companies) {
    if (isStaticCatalogCompany(company.name)) {
      logEvent("scraping_cron_skipped", {
        companyId: company.id,
        companyName: company.name,
        reason: "static_catalog_manual_only",
      });
      continue;
    }

    try {
      const result = enqueueScrapingJob({
        companyId: company.id,
        companyName: company.name,
        source: "cron",
      });

      if (result.conflict) {
        logEvent("scraping_cron_skipped", {
          companyId: company.id,
          companyName: company.name,
          reason: "job_already_active",
          jobId: result.job?.jobId,
        });
      }
    } catch (error) {
      logEvent("scraping_cron_skipped", {
        companyId: company.id,
        companyName: company.name,
        reason: error.message,
      });
    }
  }
}

function startScrapingCron() {
  const enabled = process.env.SCRAPING_CRON_ENABLED === "true";

  if (!enabled) {
    console.log("[scraping-cron] Desactivado (SCRAPING_CRON_ENABLED != true)");
    return;
  }

  const schedule = process.env.SCRAPING_CRON_SCHEDULE || "0 6 * * 0";

  if (!cron.validate(schedule)) {
    console.error(
      `[scraping-cron] SCRAPING_CRON_SCHEDULE invalido: ${schedule}`
    );
    return;
  }

  cron.schedule(schedule, () => {
    runScheduledScrapes().catch((error) => {
      console.error(`[scraping-cron] ${error.message}`);
    });
  });

  console.log(`[scraping-cron] Activo con schedule: ${schedule}`);
}

module.exports = { startScrapingCron, runScheduledScrapes };
