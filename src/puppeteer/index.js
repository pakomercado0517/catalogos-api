const puppeteer = require("puppeteer");
const { Catalogo, Company } = require("../db");

// const fs = require("fs").promises;
// const fileURL = "../src/Db/catalogos.json";

async function priceShoes() {
  const arr = [];
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("https://www.priceshoes.com/catalogos");

    const lists = await page.$$(
      '[class="relative sm:bg-gray-100 flex items-center overflow-hidden"]'
    );

    for (const list of lists) {
      const enlace = await list.$("a");
      const href = await list.$eval("a[href]", (el) => el.href);
      if (enlace) {
        const imgSrc = await enlace.$eval("img", (item) => item.src);
        // console.log({ href, imgSrc });
        arr.push({ href, imgSrc });
      }
    }

    const company = await Company.findOne({
      where: { name: "priceShoes" },
    });

    await Catalogo.destroy({ where: { companyId: company.id } });

    arr.map(async (item) => {
      const catalogue = await Catalogo.create({
        image: item.imgSrc,
        url: item.href,
      });
      catalogue.setCompany(company);
    });

    console.log("Terminando priceShoes scraping...");

    // const result = {
    //   priceShoes: arr,
    // };
    // catalogs.push(result);

    // await fs.writeFile(fileURL, JSON.stringify(catalogs, null, 2));
    await browser.close();
  } catch (error) {
    console.log(error.message);
  }
}

async function andrea() {
  const arr = [];
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox"],
      // executablePath:
      // "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      timeout: 12000,
    });

    // const browser = await puppeteer.launch({
    //   headless: false,
    // });

    const browserVersion = await browser.version();

    // console.log("browser.version", browserVersion);

    const page = await browser.newPage();
    await page.goto("https://mx.andrea.com/catalogos");
    await page.click("#state-mx");
    await page.keyboard.press("KeyV");
    await page.keyboard.press("Enter");
    await page.click("#Enviar");
    await page.waitForSelector("main");
    const main = await page.$("main");
    const wrapper = await main.$("#catalogoPrincipal");
    const reCentral = await wrapper.$$(".re-central");
    const divRow = await reCentral[1].$(".row");
    const colMain = await divRow.$(".col-main.cols-main-catalogs");
    const todosCat = await colMain.$(".todoscat");
    const catalogosxCat = await todosCat.$(".catalogosxcat");
    await catalogosxCat.waitForSelector("ul", { timeout: 12000 });
    const ulCat = await catalogosxCat.$("ul");
    await ulCat.waitForSelector(".sub_cat", { timeout: 30000 });
    const lists = await ulCat.$$(".sub_cat");

    for (const list of lists) {
      const enlace = await list.$("a");
      const title = await list.$eval(".cattit", (t) => t.textContent);
      const href = await list.$eval("a[href]", (el) => el.href);
      if (enlace) {
        const imgSrc = await enlace.$eval("img", (item) => item.src);
        // console.log({ href, imgSrc });
        arr.push({ href, imgSrc, title });
      }
    }

    // const result = {
    //   andrea: arr,
    // };
    // catalogs.push(result);

    const company = await Company.findOne({ where: { name: "andrea" } });

    await Catalogo.destroy({ where: { companyId: company.id } });

    arr.map(async (item) => {
      const catalogue = await Catalogo.create({
        name: item.title,
        image: item.imgSrc,
        url: item.href,
      });
      await catalogue.setCompany(company);
    });

    console.log("Terminando andrea scraping...");

    // await fs.writeFile(fileURL, JSON.stringify(catalogs, null, 2));

    await browser.close();
  } catch (error) {
    console.log(error.message);
  }
}

async function cklass() {
  const arr = [];
  const catalogosfinded = [];
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto("https://cklass.com/pages/catalogos");
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
        // console.log({ href, imgSrc });
        arr.push({ href, imgSrc, title });
      }
    }
    // const result = {
    //   cklass: arr,
    // };
    // catalogs.push(result);

    // await fs.writeFile(fileURL, JSON.stringify(catalogs, null, 2));

    const company = await Company.findOne({ where: { name: "cklass" } });

    await Catalogo.destroy({ where: { companyId: company.id } });

    arr.map(async (item) => {
      const catalogue = await Catalogo.create({
        name: item.title,
        image: item.imgSrc,
        url: item.href,
      });
      await catalogue.setCompany(company);
    });
    console.log("Terminando cklass scraping...");

    await browser.close();
  } catch (error) {
    console.log(error.message);
  }
}

async function vianney() {
  const arr = [];
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-features=site-per-process"],
    });

    const page = await browser.newPage();
    await page.goto("https://catalogos.vianney.mx/");
    const main = await page.$("main");
    const bgWhite = await main.$(".bg-white");
    const grid = await bgWhite.$(".grid");
    await grid.waitForSelector("a");
    const anchors = await grid.$$("a");

    for (const anchor of anchors) {
      // Extraer href del enlace
      const href = await (await anchor.getProperty("href")).jsonValue();

      // Extraer src de la imagen dentro del enlace
      const img = await anchor.$("img");
      const src = await (await img.getProperty("src")).jsonValue();

      // Extraer texto del h3 dentro del enlace
      const h3 = await anchor.$("h3");
      const text = await (await h3.getProperty("textContent")).jsonValue();

      arr.push({ href, src, text });
    }

    const company = await Company.findOne({ where: { name: "vianney" } });

    await Catalogo.destroy({ where: { companyId: company.id } });

    arr.map(async (item) => {
      const catalogue = await Catalogo.create({
        name: item.text,
        image: item.src,
        url: item.href,
      });
      await catalogue.setCompany(company);
    });

    console.log("Terminando vianney scraping...");
    await browser.close();
  } catch (error) {
    console.log(error.message);
  }
}

// Llamar a las funciones
// priceShoesScraping();
// andreaScraping();
// cklassScraping();
module.exports = { priceShoes, andrea, cklass, vianney };
