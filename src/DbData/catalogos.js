const { Catalogo } = require("../db");

const cklass = [
  {
    image: "https://www.cklass.com/site/assets/files/1529/4.jpg",
    url: "https://www.cklass.com/Catalogo/RebajasRopa",
    name: "Rebajas Cklass",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1528/3.jpg",
    url: "https://www.cklass.com/Catalogo/RebajasCalzado",
    name: "Rebajas Cklass",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1514/portada1.jpg",
    url: "https://www.cklass.com/Catalogo/backtoschool/",
    name: "Back to School",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1446/fashionline-min.jpg",
    url: "https://www.cklass.com/Catalogo/Fashionline/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1515/2.jpg",
    url: "https://www.cklass.com/Catalogo/Lenceria/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1576/3.jpg",
    url: "https://www.cklass.com/Catalogo/WeCosmetics/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1641/4.jpg",
    url: "https://www.cklass.com/Catalogo/Home",
    name: "Colección",
  },
  {
    image:
      "https://www.cklass.com/site/assets/files/1700/portadita_curvy-min.jpg",
    url: "https://www.cklass.com/Catalogo/CurvyFashionline",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1701/jeans_oi22-min.jpg",
    url: "https://www.cklass.com/Catalogo/JeansFashionline",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1398/calzado_dama-min.jpg",
    url: "https://www.cklass.com/Catalogo/Dama/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1294/6.jpg",
    url: "https://www.cklass.com/Catalogo/Confort/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1296/7.jpg",
    url: "https://www.cklass.com/Catalogo/Gala/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1295/urban-min.jpg",
    url: "https://www.cklass.com/Catalogo/Urban",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1535/10.jpg",
    url: "https://www.cklass.com/Catalogo/BotasBotines/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1383/9.jpg",
    url: "https://www.cklass.com/Catalogo/Six/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1309/11.jpg",
    url: "https://www.cklass.com/Catalogo/Bolsos/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1306/12.jpg",
    url: "https://www.cklass.com/Catalogo/Caballero/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1424/13.jpg",
    url: "https://www.cklass.com/Catalogo/Caballero2/",
    name: "Colección",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1311/14.jpg",
    url: "https://www.cklass.com/Catalogo/SportBrands",
    name: "Sport Brands",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1626/15.jpg",
    url: "https://www.cklass.com/Catalogo/SportBrands2",
    name: "Sport Brands",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1310/16.jpg",
    url: "https://www.cklass.com/Catalogo/Kids/",
    name: "Kids- Niña",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1534/17.jpg",
    url: "https://www.cklass.com/Catalogo/Kids2/",
    name: "Kids - Niño",
  },
  {
    image: "https://www.cklass.com/site/assets/files/1632/portada1.jpg",
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
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/446-1-1-1-30/Imagen/attachments/ANDREA%20HOME.jpg",
    url: "http://cdn-img.andrea.com/mx/1/446/",
    name: "ANDREA HOME",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/14-1-1-1-30/Imagen/attachments/LENCERIA%20VESTIR%20INTERIOR.jpg",
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
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/74-1-1-1-30/Imagen/attachments/COLEGIAL.jpg",
    url: "http://cdn-img.andrea.com/mx/1/74/",
    name: "COLEGIAL",
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
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/337-1-1-1-30/Imagen/attachments/DEPORTIVO%20COMPLETO.jpg",
    url: "http://cdn-img.andrea.com/mx/1/337/",
    name: "DEPORTIVO COMPLETO",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/410-1-1-1-30/Imagen/attachments/ANDREA%20SPORT.jpg",
    url: "http://cdn-img.andrea.com/mx/1/410/",
    name: "ANDREA SPORT",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/411-1-1-1-30/Imagen/attachments/FERRATO%20SPORT.jpg",
    url: "http://cdn-img.andrea.com/mx/1/411/",
    name: "FERRATO SPORT",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/374-1-1-17-30/Imagen/attachments/OUTLET.jpg",
    url: "http://cdn-img.andrea.com/mx/17/374/",
    name: "OUTLET",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/283-1-1-1-30/Imagen/attachments/TROPICAL.jpg",
    url: "http://cdn-img.andrea.com/mx/1/283/",
    name: "TROPICAL",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/456-1-1-1-30/Imagen/attachments/EL%20COLOR%20DEL%20VERANO.jpg",
    url: "http://cdn-img.andrea.com/mx/1/456/",
    name: "EL COLOR DEL VERANO",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/429-1-1-1-30/Imagen/attachments/MID%20SEASON.jpg",
    url: "http://cdn-img.andrea.com/mx/1/429/",
    name: "MID SEASON",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/439-1-1-1-30/Imagen/attachments/AERO%20F21.jpg",
    url: "http://cdn-img.andrea.com/mx/1/439/",
    name: "AERO | F21",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/310-1-1-1-30/Imagen/attachments/BOTAS%20DE%20LLUVIA.jpg",
    url: "http://cdn-img.andrea.com/mx/1/310/",
    name: "BOTAS DE LLUVIA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/454-1-1-1-30/Imagen/attachments/LO%20MAS%20TRENDY.jpg",
    url: "http://cdn-img.andrea.com/mx/1/454/",
    name: "LO MÁS TRENDY",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/42-1-1-1-30/Imagen/attachments/DR%20SCHOLLS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/42/",
    name: "DR. SCHOLLS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/407-1-1-1-30/Imagen/attachments/URBANO%20DEPORTIVO.jpg",
    url: "http://cdn-img.andrea.com/mx/1/407/",
    name: "URBANO DEPORTIVO",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/412-1-1-1-30/Imagen/attachments/DEPORTIVO%20INFANTIL.jpg",
    url: "http://cdn-img.andrea.com/mx/1/412/",
    name: "DEPORTIVO INFANTIL",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/59-1-1-1-30/Imagen/attachments/ADIDAS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/59/",
    name: "ADIDAS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/60-1-1-1-30/Imagen/attachments/NIKE.jpg",
    url: "http://cdn-img.andrea.com/mx/1/60/",
    name: "NIKE",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/63-1-1-1-30/Imagen/attachments/PUMA.jpg",
    url: "http://cdn-img.andrea.com/mx/1/63/",
    name: "PUMA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/62-1-1-1-30/Imagen/attachments/REEBOK.jpg",
    url: "http://cdn-img.andrea.com/mx/1/62/",
    name: "REEBOK",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/334-1-1-1-30/Imagen/attachments/AEROPOSTALE.jpg",
    url: "http://cdn-img.andrea.com/mx/1/334/",
    name: "AEROPOSTALE",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/336-1-1-1-30/Imagen/attachments/VANS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/336/",
    name: "VANS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/289-1-1-1-30/Imagen/attachments/UNDER%20ARMOUR.jpg",
    url: "http://cdn-img.andrea.com/mx/1/289/",
    name: "UNDER ARMOUR",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/249-1-1-1-30/Imagen/attachments/SKECHERS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/249/",
    name: "SKECHERS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/247-1-1-1-30/Imagen/attachments/PIRMA.jpg",
    url: "http://cdn-img.andrea.com/mx/1/247/",
    name: "PIRMA",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/287-1-1-1-30/Imagen/attachments/PANAM.jpg",
    url: "http://cdn-img.andrea.com/mx/1/287/",
    name: "PANAM",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/255-1-1-1-30/Imagen/attachments/WILSON.jpg",
    url: "http://cdn-img.andrea.com/mx/1/255/",
    name: "WILSON",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/435-1-1-1-30/Imagen/attachments/POLO%20CLUB.jpg",
    url: "http://cdn-img.andrea.com/mx/1/435/",
    name: "POLO CLUB",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/444-1-1-1-30/Imagen/attachments/LAMBORGHINI.jpg",
    url: "http://cdn-img.andrea.com/mx/1/444/",
    name: "LAMBORGHINI",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/332-1-1-1-30/Imagen/attachments/EVERLAST.jpg",
    url: "http://cdn-img.andrea.com/mx/1/332/",
    name: "EVERLAST",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/419-1-1-1-30/Imagen/attachments/PARA%20LA%20AVENTURA.jpg",
    url: "http://cdn-img.andrea.com/mx/1/419/",
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
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/217-1-1-1-30/Imagen/attachments/ACCESORIOS%20DEPORTIVOS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/217/",
    name: "ACCESORIOS DEPORTIVOS",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/392-1-1-1-30/Imagen/attachments/AFTER%20SPORT.jpg",
    url: "http://cdn-img.andrea.com/mx/1/392/",
    name: "AFTER SPORT",
  },
  {
    image:
      "http://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/294-1-1-1-30/Imagen/attachments/ZONA%20DESCUENTOS.jpg",
    url: "http://cdn-img.andrea.com/mx/1/294/",
    name: "ZONA DESCUENTOS",
  },
];

const priceShoes = [
  {
    image: "https://images.priceshoes.digital/catalogos/1058073_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1058073",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1062489_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1062489",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1062132_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1062132",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1060567_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1060567",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1058601_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1058601",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1060176_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1060176",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1056674_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1056674",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1058605_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1058605",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1057488_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1057488",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1057144_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1057144",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1057103_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1057103",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1056791_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1056791",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1056786_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1056786",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/op_snd22_0.jpg",
    url: "https://www.priceshoes.com/catalogos/op_snd22",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1050755_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1050755",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1055798_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1055798",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1055575_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1055575",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1055743_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1055743",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1055628_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1055628",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1052583_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1052583",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1051439_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1051439",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1052257_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1052257",
  },
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
    image: "https://images.priceshoes.digital/catalogos/1049264_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1049264",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1049274_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1049274",
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
