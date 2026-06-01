const STATIC_CATALOG_COMPANIES = ["betterware"];
const PUPPETEER_COMPANIES = [
  "andrea",
  "cklass",
  "concord",
  "priceShoes",
  "vianney",
];

function isStaticCatalogCompany(companyName) {
  return STATIC_CATALOG_COMPANIES.includes(companyName);
}

function isPuppeteerCompany(companyName) {
  return PUPPETEER_COMPANIES.includes(companyName);
}

module.exports = {
  STATIC_CATALOG_COMPANIES,
  PUPPETEER_COMPANIES,
  isStaticCatalogCompany,
  isPuppeteerCompany,
};
