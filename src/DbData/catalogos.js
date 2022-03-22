const { Catalogo } = require("../db");

const cklass = [
  {
    image: "https://www.cklass.com/site/assets/files/1529/ropa_verano.jpg",
    url: "https://www.cklass.com/Catalogo/Verano1/",
    name: "Complemento Verano",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1528/calzado_verano.jpg",
    url: "https://www.cklass.com/Catalogo/Verano2/",
    name: "Complemento Verano",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1514/urban_verano-min.jpg",
    url: "https://www.cklass.com/Catalogo/Urban",
    name: "Urban",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1533/sportbrands.jpg",
    url: "https://www.cklass.com/Catalogo/SportBrands",
    name: "Sport Brands",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1542/we_cosmetics_verano.jpg",
    url: "https://www.cklass.com/Catalogo/WeCosmetics",
    name: "We Cosmetics",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1561/estrellas_de_la_semana_2-min.jpg",
    url: "https://www.cklass.com/Catalogo/PromoSemanal/",
    name: "Estrellas de la Semana",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1577/super_remate_ropa.jpg",
    url: "https://www.cklass.com/Catalogo/Rematetemporada/",
    name: "Súper Remate",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1612/super_remate_calzado.jpg",
    url: "https://www.cklass.com/Catalogo/Rematetemporada2/",
    name: "Súper Remate",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1667/urban_trendy-min.jpg",
    url: "https://www.cklass.com/Catalogo/Urbantrendy/",
    name: "Urban Trendy",
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
    image:
      "https://www.cklass.com/site/assets/files/1576/we_cosmetics_verano.jpg",
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
    image: "https://www.cklass.com/site/assets/files/1535/urban_trendy-min.jpg",
    url: "https://www.cklass.com/Catalogo/Urbantrendy/",
    name: "Urban Trendy",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1295/urban_verano-min.jpg",
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
    image: "https://www.cklass.com/site/assets/files/1311/sportbrands.jpg",
    url: "https://www.cklass.com/Catalogo/SportBrands",
    name: "Sport Brands",
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
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/263-1-1-1-30/Imagen/attachments/CALZADO%20DAMA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/263/",
    name: "CALZADO DAMA",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/241-1-1-1-30/Imagen/attachments/ANDREA%20VESTIR.jpg",
    url: "https://cdn-img.andrea.com/mx/1/241/",
    name: "ANDREA VESTIR",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/14-1-1-1-30/Imagen/attachments/LENCERIA%20VESTIR%20INTERIOR.jpg",
    url: "https://cdn-img.andrea.com/mx/1/14/",
    name: "LENCERÍA & VESTIR INTERIOR",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/16-1-1-1-30/Imagen/attachments/BELLEZA%20INTEGRAL%20DAMA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/16/",
    name: "BELLEZA INTEGRAL DAMA",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/89-1-1-1-30/Imagen/attachments/CALZADO%20CONFORT.jpg",
    url: "https://cdn-img.andrea.com/mx/1/89/",
    name: "CALZADO CONFORT",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/5-1-1-1-30/Imagen/attachments/CALZADO%20CABALLERO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/5/",
    name: "CALZADO CABALLERO",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/36-1-1-1-30/Imagen/attachments/VESTIR%20CABALLERO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/36/",
    name: "VESTIR CABALLERO",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/242-1-1-1-30/Imagen/attachments/INFANTIL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/242/",
    name: "INFANTIL",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/434-1-1-1-30/Imagen/attachments/INFANTIL%20BABY.jpg",
    url: "https://cdn-img.andrea.com/mx/1/434/",
    name: "INFANTIL BABY",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/94-1-1-1-30/Imagen/attachments/ANDREA%20TEENS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/94/",
    name: "ANDREA TEENS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/18-1-1-1-30/Imagen/attachments/BOLSAS%20Y%20ACCESORIOS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/18/",
    name: "BOLSAS Y ACCESORIOS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/337-1-1-26-30/Imagen/attachments/DEPORTIVO%20COMPLETO.jpg",
    url: "https://cdn-img.andrea.com/mx/26/337/",
    name: "DEPORTIVO COMPLETO",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/410-1-1-26-30/Imagen/attachments/ANDREA%20SPORT.jpg",
    url: "https://cdn-img.andrea.com/mx/26/410/",
    name: "ANDREA SPORT",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/411-1-1-26-30/Imagen/attachments/FERRATO%20SPORT.jpg",
    url: "https://cdn-img.andrea.com/mx/26/411/",
    name: "FERRATO SPORT",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/349-1-1-17-30/Imagen/attachments/OUTLET.jpg",
    url: "https://cdn-img.andrea.com/mx/17/349/",
    name: "OUTLET",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/449-1-1-1-30/Imagen/attachments/PROMOTOR%20CURVY.jpg",
    url: "https://cdn-img.andrea.com/mx/1/449/",
    name: "PROMOTOR CURVY",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/448-1-1-1-30/Imagen/attachments/PROMOTOR%20LO%20MEJOR%20DE%20LA%20PRIMAVERA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/448/",
    name: "PROMOTOR LO MEJOR DE LA PRIMAVERA",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/441-1-1-1-30/Imagen/attachments/PROMOTOR%20SANDALIAS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/441/",
    name: "PROMOTOR SANDALIAS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/199-1-1-1-30/Imagen/attachments/REGRESO%20A%20CLASES.jpg",
    url: "https://cdn-img.andrea.com/mx/1/199/",
    name: "REGRESO A CLASES",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/439-1-1-1-30/Imagen/attachments/F21%20AERO%20URBANOS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/439/",
    name: "F21 | AERO | URBANOS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/42-1-1-1-30/Imagen/attachments/DR%20SCHOLLS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/42/",
    name: "DR. SCHOLLS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/283-1-1-1-30/Imagen/attachments/ANDREA%20TROPICAL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/283/",
    name: "ANDREA TROPICAL",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/407-1-1-26-30/Imagen/attachments/URBANO%20DEPORTIVO.jpg",
    url: "https://cdn-img.andrea.com/mx/26/407/",
    name: "URBANO DEPORTIVO",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/412-1-1-26-30/Imagen/attachments/DEPORTIVO%20INFANTIL.jpg",
    url: "https://cdn-img.andrea.com/mx/26/412/",
    name: "DEPORTIVO INFANTIL",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/59-1-1-26-30/Imagen/attachments/ADIDAS.jpg",
    url: "https://cdn-img.andrea.com/mx/26/59/",
    name: "ADIDAS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/60-1-1-26-30/Imagen/attachments/NIKE.jpg",
    url: "https://cdn-img.andrea.com/mx/26/60/",
    name: "NIKE",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/63-1-1-26-30/Imagen/attachments/PUMA.jpg",
    url: "https://cdn-img.andrea.com/mx/26/63/",
    name: "PUMA",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/62-1-1-26-30/Imagen/attachments/REEBOK.jpg",
    url: "https://cdn-img.andrea.com/mx/26/62/",
    name: "REEBOK",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/334-1-1-26-30/Imagen/attachments/AEROPOSTALE.jpg",
    url: "https://cdn-img.andrea.com/mx/26/334/",
    name: "AEROPOSTALE",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/336-1-1-26-30/Imagen/attachments/VANS.jpg",
    url: "https://cdn-img.andrea.com/mx/26/336/",
    name: "VANS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/249-1-1-26-30/Imagen/attachments/SKECHERS.jpg",
    url: "https://cdn-img.andrea.com/mx/26/249/",
    name: "SKECHERS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/247-1-1-26-30/Imagen/attachments/PIRMA.jpg",
    url: "https://cdn-img.andrea.com/mx/26/247/",
    name: "PIRMA",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/287-1-1-26-30/Imagen/attachments/PANAM.jpg",
    url: "https://cdn-img.andrea.com/mx/26/287/",
    name: "PANAM",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/255-1-1-26-30/Imagen/attachments/WILSON.jpg",
    url: "https://cdn-img.andrea.com/mx/26/255/",
    name: "WILSON",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/435-1-1-26-30/Imagen/attachments/POLO%20CLUB.jpg",
    url: "https://cdn-img.andrea.com/mx/26/435/",
    name: "POLO CLUB",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/444-1-1-26-30/Imagen/attachments/LAMBORGHINI.jpg",
    url: "https://cdn-img.andrea.com/mx/26/444/",
    name: "LAMBORGHINI",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/332-1-1-26-30/Imagen/attachments/EVERLAST.jpg",
    url: "https://cdn-img.andrea.com/mx/26/332/",
    name: "EVERLAST",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/419-1-1-26-30/Imagen/attachments/PARA%20LA%20AVENTURA.jpg",
    url: "https://cdn-img.andrea.com/mx/26/419/",
    name: "PARA LA AVENTURA",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/307-1-1-1-30/Imagen/attachments/PROFESIONAL%20E%20INDUSTRIAL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/307/",
    name: "PROFESIONAL E INDUSTRIAL",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/217-1-1-26-30/Imagen/attachments/ACCESORIOS%20DEPORTIVOS.jpg",
    url: "https://cdn-img.andrea.com/mx/26/217/",
    name: "ACCESORIOS DEPORTIVOS",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/392-1-1-26-30/Imagen/attachments/AFTER%20SPORT.jpg",
    url: "https://cdn-img.andrea.com/mx/26/392/",
    name: "AFTER SPORT",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/294-1-1-26-30/Imagen/attachments/ZONA%20DESCUENTOS.jpg",
    url: "https://cdn-img.andrea.com/mx/26/294/",
    name: "ZONA DESCUENTOS",
  },
];

const priceShoes = [
  {
    image: "https://images.priceshoes.digital/catalogos/1050758_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1050758",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1050745_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1050745",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1050752_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1050752",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1050755_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1050755",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1050749_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1050749",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1049630_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1049630",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1049264_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1049264",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1049274_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1049274",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1048822_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1048822",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1042320_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1042320",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1042870_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1042870",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1043091_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1043091",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1041071_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1041071",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1034987_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1034987",
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
    image: "https://images.priceshoes.digital/catalogos/Confort2021_0.jpg",
    url: "https://www.priceshoes.com/catalogos/Confort2021",
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
