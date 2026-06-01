const { Catalogo } = require("../db");
const { logEvent } = require("../utils/logger");
const {
  sanitizeCatalogItem,
  normalizeCatalogUrl,
} = require("../utils/catalogSanitize");
const {
  invalidateCompanyCatalogos,
  invalidateCatalogLists,
} = require("../utils/readCache");

function catalogPayloadChanged(existing, payload) {
  return (
    existing.name !== payload.name ||
    existing.image !== payload.image ||
    existing.url !== payload.url
  );
}

async function syncCatalogosForCompany(company, items) {
  if (!company) {
    throw new Error("Empresa no encontrada para guardar catalogos");
  }

  const companyId = company.id;
  const existing = await Catalogo.findAll({ where: { companyId } });
  const existingByUrl = new Map();

  for (const catalogo of existing) {
    const key = normalizeCatalogUrl(catalogo.url);
    if (key) {
      existingByUrl.set(key, catalogo);
    }
  }

  const incomingUrls = new Set();
  let created = 0;
  let updated = 0;
  let unchanged = 0;
  let deleted = 0;
  let skipped = 0;

  for (const rawItem of items) {
    const item = sanitizeCatalogItem(rawItem);
    const normalizedUrl = item.url;

    if (!normalizedUrl) {
      skipped += 1;
      continue;
    }

    incomingUrls.add(normalizedUrl);

    const payload = {
      name: item.name,
      image: item.image,
      url: normalizedUrl,
      companyId,
    };

    const existingCatalogo = existingByUrl.get(normalizedUrl);

    if (!existingCatalogo) {
      await Catalogo.create(payload);
      created += 1;
      continue;
    }

    if (catalogPayloadChanged(existingCatalogo, payload)) {
      await existingCatalogo.update({
        name: payload.name,
        image: payload.image,
        url: payload.url,
      });
      updated += 1;
    } else {
      unchanged += 1;
    }
  }

  for (const catalogo of existing) {
    const normalizedUrl = normalizeCatalogUrl(catalogo.url);

    if (!normalizedUrl || !incomingUrls.has(normalizedUrl)) {
      await catalogo.destroy();
      deleted += 1;
    }
  }

  invalidateCompanyCatalogos(companyId);
  invalidateCatalogLists();

  logEvent("catalogos_sync", {
    companyId,
    companyName: company.name,
    created,
    updated,
    unchanged,
    deleted,
    skipped,
  });

  return { created, updated, unchanged, deleted, skipped };
}

module.exports = {
  syncCatalogosForCompany,
  normalizeCatalogUrl,
};
