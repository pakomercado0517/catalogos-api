const puppeteer = require("puppeteer");
const { Catalogo, Company } = require("../db");

// const fs = require("fs").promises;
// const fileURL = "../src/Db/catalogos.json";

async function priceShoes() {
  const arr = [];
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
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
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto("https://mx.andrea.com/catalogos");
    await page.waitForSelector("select[name='estado']");
    await page.select("select[name='estado']", "30");
    await page.waitForSelector(
      ".vicomstudio-catalogos-andrea-0-x-stateSelectorSubmit"
    );
    await page.click(".vicomstudio-catalogos-andrea-0-x-stateSelectorSubmit");
    await page.click(".vicomstudio-catalogos-andrea-0-x-stateSelectorSubmit");

    const main = await page.$(
      ".vicomstudio-catalogos-andrea-0-x-catalogsWrapper"
    );
    await main.waitForSelector(
      ".vicomstudio-catalogos-andrea-0-x-catalogsList",
      {
        timeout: 30000,
      }
    );
    const ulList = await main.waitForSelector(
      ".vicomstudio-catalogos-andrea-0-x-catalogsList"
    );
    //buscamos y definimos todos los "li" que hay dentro de la lista desordenada
    const lists = await ulList.$$(
      "li.vicomstudio-catalogos-andrea-0-x-catalog"
    );
    //iteramos con la lista obtenida
    for (const list of lists) {
      const enlace = await list.$("a");
      const title = await list.$eval(
        ".vicomstudio-catalogos-andrea-0-x-catalogTitle",
        (t) => t.textContent
      );
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
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
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
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
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

async function concord() {
  const concord = [
    {
      image:
        "https://concordmx.vtexassets.com/assets/vtex.file-manager-graphql/images/1454d590-f10e-4033-89e2-13bb8b6982a5___923d1ba32e6e0a804edca8505e443570.png",
      url: "https://fiberhome.com.mx/merca/catconcordhome",
      name: "Concord Home",
    },

    {
      image:
        "https://concordmx.vtexassets.com/assets/vtex.file-manager-graphql/images/4993653d-4d51-412a-8280-2bd9b9194101___74db031fc35c4e6cc4a9ac62cf750592.png",
      url: "https://fiberhome.com.mx/merca/catdigitaljulio24.pdf",
      name: "Blancos",
    },
  ];

  const createDb = concord.map((el) => {
    return {
      name: el.name,
      image: el.image,
      url: el.url,
      companyId: 5,
    };
  });
  await Catalogo.bulkCreate(createDb);
}
async function betterware() {
  const betterware = [
    {
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/e0/72/d5/e072d57b-e76c-ec63-b844-9974409b61be/source/512x512bb.jpg",
      url: "https://www.betterware.com.mx/mx/es/catalogo",
    },
  ];
  const createDb = betterware.map((el) => {
    return {
      name: el.name,
      image: el.image,
      url: el.url,
      companyId: 6,
    };
  });
  await Catalogo.bulkCreate(createDb);
}

// Llamar a las funciones
// priceShoesScraping();
// andreaScraping();
// cklassScraping();
module.exports = { priceShoes, andrea, cklass, vianney, concord, betterware };
