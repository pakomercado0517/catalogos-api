const { Catalogo } = require("../db");

const cklass = [
  {
    image:
      "https://www.cklass.com/site/assets/files/1528/promo_semana_feb-min.jpg",
    url: "https://www.cklass.com/Catalogo/PromoSemanal/",
    name: "Promoción de la Semana",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1533/remate_temporada-min.jpg",
    url: "https://www.cklass.com/Catalogo/Rematetemporada2",
    name: "Remate de Temporada",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1514/remate_temporada-min.jpg",
    url: "https://www.cklass.com/Catalogo/Rematetemporada",
    name: "Remate de Temporada",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1446/fashionline.jpg",
    url: "https://www.cklass.com/Catalogo/Fashionline/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1515/lencer_a_1.jpg",
    url: "https://www.cklass.com/Catalogo/Lenceria/",
    name: "Lencería",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1576/we.jpg",
    url: "https://www.cklass.com/Catalogo/WeCosmetics/",
    name: "We Cosmetics",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1641/cklass_home.jpg",
    url: "https://www.cklass.com/Catalogo/Home",
    name: "Cklass Home",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1398/c_mujer.jpg",
    url: "https://www.cklass.com/Catalogo/Dama/",
    name: "Dama",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1294/confort.jpg",
    url: "https://www.cklass.com/Catalogo/Confort/",
    name: "Confort",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1296/gala_glamour.jpg",
    url: "https://www.cklass.com/Catalogo/Gala/",
    name: "Gala & Glamour",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1295/urban.jpg",
    url: "https://www.cklass.com/Catalogo/Urban/",
    name: "Urban",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1383/six_d_o.jpg",
    url: "https://www.cklass.com/Catalogo/Six/",
    name: "Six & Duo Pack",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1309/bolsos.jpg",
    url: "https://www.cklass.com/Catalogo/Bolsos/",
    name: "Colección",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1306/calzado_caballero.jpg",
    url: "https://www.cklass.com/Catalogo/Caballero/",
    name: "Calzado",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1424/ropa_caballero.jpg",
    url: "https://www.cklass.com/Catalogo/Caballero2/",
    name: "Ropa",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1311/sportbrands_caballero.jpg",
    url: "https://www.cklass.com/Catalogo/SportBrands",
    name: "Sport Brands Caballero",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1626/sportbrands_dama.jpg",
    url: "https://www.cklass.com/Catalogo/SportBrands2",
    name: "Sport Brands Dama",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1310/kids_ni_a.jpg",
    url: "https://www.cklass.com/Catalogo/Kids/",
    name: "Kids- Niña",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1534/kids_ni_o.jpg",
    url: "https://www.cklass.com/Catalogo/Kids2/",
    name: "Kids - Niño",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1632/bts.jpg",
    url: "https://www.cklass.com/Catalogo/backtoschool",
    name: "Back to School",
  },
];

const andrea = [
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/263-1-1-1-30/Imagen/attachments/CALZADO%20DAMA.jpg",
    url: "http://cdn-img.andrea.com/mx/1/263/",
    name: "CALZADO DAMA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/241-1-1-1-30/Imagen/attachments/ANDREA%20VESTIR.jpg",
    url: "http://cdn-img.andrea.com/mx/1/241/",
    name: "ANDREA VESTIR",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/14-1-1-1-30/Imagen/attachments/LENCERIA%20Y%20VESTIR%20INTERIOR.jpg",
    url: "http://cdn-img.andrea.com/mx/1/14/",
    name: "LENCERÍA & VESTIR INTERIOR",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/16-1-1-1-30/Imagen/attachments/BELLEZA%20INTEGRAL%20DAMA.jpg",
    url: "http://cdn-img.andrea.com/mx/1/16/",
    name: "BELLEZA INTEGRAL DAMA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/89-1-1-1-30/Imagen/attachments/CALZADO%20CONFORT.jpg",
    url: "http://cdn-img.andrea.com/mx/1/89/",
    name: "CALZADO CONFORT",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/5-1-1-1-30/Imagen/attachments/CALZADO%20CABALLERO.jpg",
    url: "http://cdn-img.andrea.com/mx/1/5/",
    name: "CALZADO CABALLERO",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/36-1-1-1-30/Imagen/attachments/VESTIR%20CABALLERO.jpg",
    url: "http://cdn-img.andrea.com/mx/1/36/",
    name: "VESTIR CABALLERO",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/242-1-1-1-30/Imagen/attachments/INFANTIL.jpg",
    url: "http://cdn-img.andrea.com/mx/1/242/",
    name: "INFANTIL",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/434-1-1-1-30/Imagen/attachments/INFANTIL%20BABY.jpg",
    url: "http://cdn-img.andrea.com/mx/1/434/",
    name: "INFANTIL BABY",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/94-1-1-1-30/Imagen/attachments/ANDREA%20TEENS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/94/",
    name: "ANDREA TEENS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/18-1-1-1-30/Imagen/attachments/BOLSAS%20Y%20ACCESORIOS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/18/",
    name: "BOLSAS Y ACCESORIOS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/337-1-1-26-30/Imagen/attachments/DEPORTIVO%20COMPLETO.jpg",
    url: "http://cdn-img.andrea.com/mx/26/337/",
    name: "DEPORTIVO COMPLETO",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/410-1-1-26-30/Imagen/attachments/ANDREA%20SPORT.jpg",
    url: "http://cdn-img.andrea.com/mx/26/410/",
    name: "ANDREA SPORT",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/411-1-1-26-30/Imagen/attachments/FERRATO%20SPORT.jpg",
    url: "http://cdn-img.andrea.com/mx/26/411/",
    name: "FERRATO SPORT",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/348-1-1-17-30/Imagen/attachments/OUTLET.jpg",
    url: "http://cdn-img.andrea.com/mx/17/348/",
    name: "OUTLET",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/207-1-1-1-30/Imagen/attachments/SAN%20VALENTIN.jpg",
    url: "http://cdn-img.andrea.com/mx/1/207/",
    name: "SAN VALENTÍN",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/42-1-1-1-30/Imagen/attachments/DR.%20SCHOLLS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/42/",
    name: "DR. SCHOLLS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/283-1-1-1-30/Imagen/attachments/ANDREA%20TROPICAL.jpg",
    url: "http://cdn-img.andrea.com/mx/1/283/",
    name: "ANDREA TROPICAL",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/407-1-1-26-30/Imagen/attachments/URBANO%20DEPORTIVO.jpg",
    url: "http://cdn-img.andrea.com/mx/26/407/",
    name: "URBANO DEPORTIVO",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/412-1-1-26-30/Imagen/attachments/DEPORTIVO%20INFANTIL.jpg",
    url: "http://cdn-img.andrea.com/mx/26/412/",
    name: "DEPORTIVO INFANTIL",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/59-1-1-26-30/Imagen/attachments/ADIDAS.jpg",
    url: "http://cdn-img.andrea.com/mx/26/59/",
    name: "ADIDAS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/60-1-1-26-30/Imagen/attachments/NIKE.jpg",
    url: "http://cdn-img.andrea.com/mx/26/60/",
    name: "NIKE",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/63-1-1-26-30/Imagen/attachments/PUMA.jpg",
    url: "http://cdn-img.andrea.com/mx/26/63/",
    name: "PUMA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/62-1-1-26-30/Imagen/attachments/REEBOK.jpg",
    url: "http://cdn-img.andrea.com/mx/26/62/",
    name: "REEBOK",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/334-1-1-26-30/Imagen/attachments/AEROPOSTALE.jpg",
    url: "http://cdn-img.andrea.com/mx/26/334/",
    name: "AEROPOSTALE",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/336-1-1-26-30/Imagen/attachments/VANS.jpg",
    url: "http://cdn-img.andrea.com/mx/26/336/",
    name: "VANS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/249-1-1-26-30/Imagen/attachments/SKECHERS.jpg",
    url: "http://cdn-img.andrea.com/mx/26/249/",
    name: "SKECHERS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/247-1-1-26-30/Imagen/attachments/PIRMA.jpg",
    url: "http://cdn-img.andrea.com/mx/26/247/",
    name: "PIRMA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/287-1-1-26-30/Imagen/attachments/PANAM.jpg",
    url: "http://cdn-img.andrea.com/mx/26/287/",
    name: "PANAM",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/255-1-1-26-30/Imagen/attachments/WILSON.jpg",
    url: "http://cdn-img.andrea.com/mx/26/255/",
    name: "WILSON",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/435-1-1-26-30/Imagen/attachments/POLO%20CLUB.jpg",
    url: "http://cdn-img.andrea.com/mx/26/435/",
    name: "POLO CLUB",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/444-1-1-26-30/Imagen/attachments/LAMBORGHINI.jpg",
    url: "http://cdn-img.andrea.com/mx/26/444/",
    name: "LAMBORGHINI",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/332-1-1-26-30/Imagen/attachments/EVERLAST.jpg",
    url: "http://cdn-img.andrea.com/mx/26/332/",
    name: "EVERLAST",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/419-1-1-26-30/Imagen/attachments/PARA%20LA%20AVENTURA.jpg",
    url: "http://cdn-img.andrea.com/mx/26/419/",
    name: "PARA LA AVENTURA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/307-1-1-1-30/Imagen/attachments/PROFESIONAL%20E%20INDUSTRIAL.jpg",
    url: "http://cdn-img.andrea.com/mx/1/307/",
    name: "PROFESIONAL E INDUSTRIAL",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/217-1-1-26-30/Imagen/attachments/ACCESORIOS%20DEPORTIVOS.jpg",
    url: "http://cdn-img.andrea.com/mx/26/217/",
    name: "ACCESORIOS DEPORTIVOS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/392-1-1-26-30/Imagen/attachments/AFTER%20SPORT.jpg",
    url: "http://cdn-img.andrea.com/mx/26/392/",
    name: "AFTER SPORT",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/294-1-1-26-30/Imagen/attachments/ZONA%20DESCUENTOS.jpg",
    url: "http://cdn-img.andrea.com/mx/26/294/",
    name: "ZONA DESCUENTOS",
  },
];

const priceShoes = [
  {
    image: "https://images.priceshoes.digital/catalogos/1043091_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1043091",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1041071_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1041071",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1037046_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1037046",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1016995_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1016995",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1036608_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1036608",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1034987_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1034987",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1034990_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1034990",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/KidsT1OI21_0.jpg",
    url: "https://www.priceshoes.com/catalogos/KidsT1OI21",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/todoenuno21_0.jpg",
    url: "https://www.priceshoes.com/catalogos/todoenuno21",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/jeansotoinv2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/jeansotoinv2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Botas2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Botas2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Caballeros20_21_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Caballeros20_21",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/LovetoLounge_0.jpg",
    url: "https://www.priceshoes.com/catalogos/LovetoLounge",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Accesorios2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Accesorios2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Escolar2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Escolar2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Caballeros20_21_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Caballeros20_21",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/LovetoLounge_0.jpg",
    url: "https://www.priceshoes.com/catalogos/LovetoLounge",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Accesorios2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Accesorios2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/VestirCasual2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/VestirCasual2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Confort2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Confort2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/sandalias2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/sandalias2021",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/Todohasta199_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Todohasta199",
  },
];

const concord = [
  {
    image: "https://www.colchasconcord.com.mx/media/wysiwyg/c1.jpg",
    url: "https://www.colchasconcord.com.mx/media/pdf/CATALOGO_DIGITAL_C8.pdf",
    name: "Catálogo Digital",
  },
];

const betterware = [
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/e0/72/d5/e072d57b-e76c-ec63-b844-9974409b61be/source/512x512bb.jpg",
    url: "https://www.betterware.com.mx/mx/es/catalogo",
  },
];

module.exports = {
  cklassDb: async () => {
    const createDb = cklass.map((el) => {
      return {
        name: el.name,
        image: el.image,
        url: el.url,
        companyId: 2,
      };
    });
    await Catalogo.bulkCreate(createDb);
  },
  andreaDb: async () => {
    const createDb = andrea.map((el) => {
      return {
        name: el.name,
        image: el.image,
        url: el.url,
        companyId: 1,
      };
    });
    await Catalogo.bulkCreate(createDb);
  },
  priceShoesDb: async () => {
    const createDb = priceShoes.map((el) => {
      return {
        name: el.name,
        image: el.image,
        url: el.url,
        companyId: 3,
      };
    });
    await Catalogo.bulkCreate(createDb);
  },
  concordDb: async () => {
    const createDb = concord.map((el) => {
      return {
        name: el.name,
        image: el.image,
        url: el.url,
        companyId: 4,
      };
    });
    await Catalogo.bulkCreate(createDb);
  },
  betterwareDb: async () => {
    const createDb = betterware.map((el) => {
      return {
        name: el.name,
        image: el.image,
        url: el.url,
        companyId: 5,
      };
    });
    await Catalogo.bulkCreate(createDb);
  },
};
