const puppeteer = require("puppeteer");
const { Company } = require("../db");
const { syncCatalogosForCompany } = require("../services/catalogoSync");

const BROWSER_ARGS = ["--no-sandbox", "--disable-setuid-sandbox"];
const PAGE_TIMEOUT_MS =
  Number(process.env.SCRAPING_PAGE_TIMEOUT_MS) || 30 * 1000;
const NAVIGATION_TIMEOUT_MS =
  Number(process.env.SCRAPING_NAVIGATION_TIMEOUT_MS) || 45 * 1000;

async function launchBrowser() {
  return puppeteer.launch({
    headless: true,
    args: BROWSER_ARGS,
  });
}

async function closeBrowser(browser) {
  if (browser) {
    await browser.close().catch(() => {});
  }
}

async function createPage(browser) {
  const page = await browser.newPage();
  page.setDefaultTimeout(PAGE_TIMEOUT_MS);
  page.setDefaultNavigationTimeout(NAVIGATION_TIMEOUT_MS);
  return page;
}

async function gotoWithTimeout(page, url) {
  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: NAVIGATION_TIMEOUT_MS,
  });
}

async function priceShoes() {
  let browser;
  let catalogItems = [];
  let company;

  try {
    browser = await launchBrowser();
    const page = await createPage(browser);
    await gotoWithTimeout(page, "https://www.priceshoes.com/catalogos");

    const lists = await page.$$(
      '[class="relative sm:bg-gray-100 flex items-center overflow-hidden"]'
    );

    for (const list of lists) {
      const enlace = await list.$("a");
      const href = await list.$eval("a[href]", (el) => el.href);
      if (enlace) {
        const imgSrc = await enlace.$eval("img", (item) => item.src);
        catalogItems.push({ image: imgSrc, url: href });
      }
    }

    company = await Company.findOne({
      where: { name: "priceShoes" },
    });
  } catch (error) {
    console.error(`[scraping] priceShoes: ${error.message}`);
    throw error;
  } finally {
    await closeBrowser(browser);
  }

  await syncCatalogosForCompany(company, catalogItems);
  console.log("Terminando priceShoes scraping...");
}

async function andrea() {
  let browser;
  let catalogItems = [];
  let company;

  try {
    browser = await launchBrowser();
    const page = await createPage(browser);
    await gotoWithTimeout(page, "https://mx.andrea.com/catalogos");
    await page.waitForSelector("select[name='estado']", {
      timeout: PAGE_TIMEOUT_MS,
    });
    await page.select("select[name='estado']", "30");
    await page.waitForSelector(
      ".vicomstudio-catalogos-andrea-0-x-stateSelectorSubmit",
      { timeout: PAGE_TIMEOUT_MS }
    );
    await page.click(".vicomstudio-catalogos-andrea-0-x-stateSelectorSubmit");
    await page.click(".vicomstudio-catalogos-andrea-0-x-stateSelectorSubmit");

    const main = await page.$(
      ".vicomstudio-catalogos-andrea-0-x-catalogsWrapper"
    );
    await main.waitForSelector(
      ".vicomstudio-catalogos-andrea-0-x-catalogsList",
      {
        timeout: PAGE_TIMEOUT_MS,
      }
    );
    const ulList = await main.waitForSelector(
      ".vicomstudio-catalogos-andrea-0-x-catalogsList",
      { timeout: PAGE_TIMEOUT_MS }
    );
    const lists = await ulList.$$(
      "li.vicomstudio-catalogos-andrea-0-x-catalog"
    );

    for (const list of lists) {
      const enlace = await list.$("a");
      const title = await list.$eval(
        ".vicomstudio-catalogos-andrea-0-x-catalogTitle",
        (t) => t.textContent
      );
      const href = await list.$eval("a[href]", (el) => el.href);
      if (enlace) {
        const imgSrc = await enlace.$eval("img", (item) => item.src);
        catalogItems.push({ name: title, image: imgSrc, url: href });
      }
    }

    company = await Company.findOne({ where: { name: "andrea" } });
  } catch (error) {
    console.error(`[scraping] andrea: ${error.message}`);
    throw error;
  } finally {
    await closeBrowser(browser);
  }

  await syncCatalogosForCompany(company, catalogItems);
  console.log("Terminando andrea scraping...");
}

async function cklass() {
  let browser;
  let catalogItems = [];
  let company;

  try {
    browser = await launchBrowser();
    const page = await createPage(browser);
    await gotoWithTimeout(page, "https://cklass.com/pages/catalogos");
    const main = await page.$("main");
    const sectionTemplate = await main.$(
      "#shopify-section-template--20952891588900__c04b24c1-4fab-468a-9f69-afc4cb457906"
    );
    const gridContainer = await sectionTemplate.$(".catalogue-grid-container");
    const lists = await gridContainer.$$(".catalogue-grid-item");

    for (const list of lists) {
      const enlace = await list.$("a");
      const href = await list.$eval("a[href]", (el) => el.href);
      const title = await list.$eval(
        ".catalogue-grid-caption",
        (t) => t.textContent
      );
      if (enlace) {
        const imgSrc = await enlace.$eval("img", (item) => item.src);
        catalogItems.push({ name: title, image: imgSrc, url: href });
      }
    }

    company = await Company.findOne({ where: { name: "cklass" } });
  } catch (error) {
    console.error(`[scraping] cklass: ${error.message}`);
    throw error;
  } finally {
    await closeBrowser(browser);
  }

  await syncCatalogosForCompany(company, catalogItems);
  console.log("Terminando cklass scraping...");
}

async function vianney() {
  let browser;
  let catalogItems = [];
  let company;

  try {
    browser = await launchBrowser();
    const page = await createPage(browser);
    await gotoWithTimeout(page, "https://catalogos.vianney.mx/");
    const main = await page.$("main");
    const bgWhite = await main.$(".bg-white");
    const grid = await bgWhite.$(".grid");
    await grid.waitForSelector("a", { timeout: PAGE_TIMEOUT_MS });
    const anchors = await grid.$$("a");

    for (const anchor of anchors) {
      const href = await (await anchor.getProperty("href")).jsonValue();
      const img = await anchor.$("img");
      const src = await (await img.getProperty("src")).jsonValue();
      const h3 = await anchor.$("h3");
      const text = await (await h3.getProperty("textContent")).jsonValue();

      catalogItems.push({ name: text, image: src, url: href });
    }

    company = await Company.findOne({ where: { name: "vianney" } });
  } catch (error) {
    console.error(`[scraping] vianney: ${error.message}`);
    throw error;
  } finally {
    await closeBrowser(browser);
  }

  await syncCatalogosForCompany(company, catalogItems);
  console.log("Terminando vianney scraping...");
}

async function concord() {
  let browser;
  let catalogItems = [];
  let company;

  try {
    browser = await launchBrowser();
    const page = await createPage(browser);
    await gotoWithTimeout(page, "https://www.colchasconcord.com.mx/catalogos");
    await page.waitForSelector(
      'a[href*="tiendas.colchasconcord.mx/Catalogos"]',
      { timeout: PAGE_TIMEOUT_MS }
    );
    const anchors = await page.$$(
      'a[href*="tiendas.colchasconcord.mx/Catalogos"]'
    );

    for (const anchor of anchors) {
      const href = await (await anchor.getProperty("href")).jsonValue();
      const img = await anchor.$("img");
      if (!img) {
        continue;
      }
      const src = await (await img.getProperty("src")).jsonValue();
      const fileName = href.split("/").pop()?.replace(/\.pdf$/i, "") || "";
      const name = fileName.replace(/_/g, " ");

      catalogItems.push({ name, image: src, url: href });
    }

    company = await Company.findOne({ where: { name: "concord" } });
  } catch (error) {
    console.error(`[scraping] concord: ${error.message}`);
    throw error;
  } finally {
    await closeBrowser(browser);
  }

  await syncCatalogosForCompany(company, catalogItems);
  console.log("Terminando concord scraping...");
}

async function betterware() {
  const company = await Company.findOne({ where: { name: "betterware" } });
  const catalogItems = [
    {
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/e0/72/d5/e072d57b-e76c-ec63-b844-9974409b61be/source/512x512bb.jpg",
      url: "https://www.betterware.com.mx/mx/es/catalogo",
    },
  ];

  await syncCatalogosForCompany(company, catalogItems);
  console.log("Terminando betterware scraping...");
}

module.exports = { priceShoes, andrea, cklass, vianney, concord, betterware };
