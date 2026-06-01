const { Op } = require("sequelize");
const { Catalogo, Company, conn } = require("../db");
const { logEvent } = require("../utils/logger");

const RETENTION_JOB_HISTORY_MAX =
  Number(process.env.RETENTION_JOB_HISTORY_MAX) || 100;

async function cleanupCatalogosWithoutUrl() {
  const deleted = await Catalogo.destroy({
    where: {
      [Op.or]: [{ url: null }, { url: "" }],
    },
  });

  if (deleted > 0) {
    logEvent("retention_cleanup", {
      type: "empty_url_catalogos",
      deleted,
    });
  }

  return deleted;
}

async function cleanupOrphanCatalogos() {
  const [orphanRows] = await conn.query(`
    SELECT c.id
    FROM "catalogos" c
    LEFT JOIN "companies" co ON c."companyId" = co.id
    WHERE co.id IS NULL
  `);

  if (!orphanRows.length) {
    return 0;
  }

  const orphanIds = orphanRows.map((row) => row.id);
  const deleted = await Catalogo.destroy({
    where: { id: orphanIds },
  });

  logEvent("retention_cleanup", {
    type: "orphan_catalogos",
    deleted,
  });

  return deleted;
}

async function runDataRetention() {
  if (process.env.DATA_RETENTION_ENABLED !== "true") {
    console.log(
      "[data-retention] Desactivado (DATA_RETENTION_ENABLED != true)"
    );
    return { emptyUrl: 0, orphans: 0 };
  }

  const emptyUrl = await cleanupCatalogosWithoutUrl();
  const orphans = await cleanupOrphanCatalogos();

  logEvent("retention_run_complete", { emptyUrl, orphans });

  return { emptyUrl, orphans };
}

module.exports = {
  RETENTION_JOB_HISTORY_MAX,
  runDataRetention,
  cleanupCatalogosWithoutUrl,
  cleanupOrphanCatalogos,
};
