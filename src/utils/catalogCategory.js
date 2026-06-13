const { normalizeCatalogCategory } = require("./catalogSanitize");

const CATEGORY_RULES = [
  {
    category: "outlet",
    keywords: ["outlet", "descuento", "descuentos", "oferta", "ofertas"],
  },
  {
    category: "deportivo",
    keywords: [
      "nike",
      "adidas",
      "puma",
      "reebok",
      "fila",
      "vans",
      "panam",
      "under armour",
      "skechers",
      "pirma",
      "wilson",
      "lacoste",
      "champion",
      "k-swiss",
      "basketball",
      "futbol",
      "football",
      "sport",
      "deportivo",
    ],
  },
  {
    category: "calzado",
    keywords: [
      "calzado",
      "zapato",
      "zapatos",
      "zapatilla",
      "zapatillas",
      "bota",
      "botas",
      "botin",
      "botines",
      "sandalia",
      "sandalias",
      "tenis",
      "sneaker",
      "sneakers",
    ],
  },
  {
    category: "hogar",
    keywords: [
      "home",
      "hogar",
      "sabana",
      "sabanas",
      "colcha",
      "colchas",
      "concord",
      "vianney",
      "edredon",
      "cobertor",
      "cobija",
      "cama",
      "cocina",
      "mascota",
      "pets",
    ],
  },
  {
    category: "belleza",
    keywords: [
      "beauty",
      "belleza",
      "maquillaje",
      "cosmetico",
      "cosmeticos",
      "perfume",
      "fragancia",
    ],
  },
  {
    category: "joyeria",
    keywords: ["joya", "joyas", "joyeria", "bisuteria"],
  },
  {
    category: "accesorios",
    keywords: ["accesorio", "accesorios", "bolsa", "bolsas", "mochila"],
  },
  {
    category: "infantil",
    keywords: [
      "infantil",
      "baby",
      "bebe",
      "colegial",
      "nino",
      "nina",
      "ninos",
      "ninas",
    ],
  },
  {
    category: "ropa",
    keywords: [
      "ropa",
      "vestir",
      "lenceria",
      "interior",
      "dama",
      "caballero",
      "moda",
      "basicos",
      "tendencia",
      "fiestas",
      "papa",
      "mujer",
      "hombre",
      "playera",
      "jeans",
    ],
  },
];

const COMPANY_DEFAULT_CATEGORIES = {
  betterware: "hogar",
  concord: "hogar",
  vianney: "hogar",
};

function normalizeSearchText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function inferCatalogCategory({ companyName = "", name = "", url = "" } = {}) {
  const text = normalizeSearchText(`${companyName} ${name} ${url}`);

  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some((keyword) => text.includes(keyword))) {
      return rule.category;
    }
  }

  return (
    COMPANY_DEFAULT_CATEGORIES[companyName] ||
    COMPANY_DEFAULT_CATEGORIES[normalizeCatalogCategory(companyName)] ||
    "otros"
  );
}

module.exports = {
  CATEGORY_RULES,
  inferCatalogCategory,
};
