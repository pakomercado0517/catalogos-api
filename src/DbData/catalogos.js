const { Catalogo } = require("../db");
const cklass = [
  {
    image: "https://cklass.com/cdn/shop/files/ROPA_large.png?v=1695947224",
    url: "https://cklass.com/pages/ropa-invierno",
  },
  {
    image: "https://cklass.com/cdn/shop/files/CALZADO_large.png?v=1695947224",
    url: "https://cklass.com/pages/calzado-invierno",
  },
  {
    image: "https://cklass.com/cdn/shop/files/URBAN_large.png?v=1695947049",
    url: "https://cklass.com/pages/urban-1",
  },
  {
    image: "https://cklass.com/cdn/shop/files/SB_PUMA_large.png?v=1695947224",
    url: "https://cklass.com/pages/sport-brands",
  },
  {
    image: "https://cklass.com/cdn/shop/files/HOME_large.png?v=1695947224",
    url: "https://cklass.com/pages/we",
  },
  {
    image: "https://cklass.com/cdn/shop/files/WE_1_large.png?v=1695948215",
    url: "https://cklass.com/pages/we-1",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/FASHIONLINE_5d564050-b348-4af5-b2e3-c93abb0ae070_large.jpg?v=1689259870",
    url: "https://cklass.com/pages/fashionline",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/LENCERIA_4d7f11e0-696b-42e4-86e6-04e8e79f80b7_large.jpg?v=1689259870",
    url: "https://cklass.com/pages/secrets-lenceria",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/DAMA_b77151ec-653d-484e-b7cd-5efdf5b02708_large.jpg?v=1689259869",
    url: "https://cklass.com/pages/dama-calzado",
  },
  {
    image: "https://cklass.com/cdn/shop/files/HANDBAGS_large.jpg?v=1689259870",
    url: "https://cklass.com/pages/handbags",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/BOTAS_Y_BOTINES_7914b7c3-2d0e-4584-a850-fa23d34c7d0a_large.jpg?v=1689259869",
    url: "https://cklass.com/pages/botas-botines",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/GALA_Y_GLAMOUR_large.jpg?v=1689259867",
    url: "https://cklass.com/pages/gala-glamour",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/CONFORT_b1b38cf1-c760-45ab-9fd5-c42a93cdf5a1_large.jpg?v=1689259870",
    url: "https://cklass.com/pages/confort",
  },
  {
    image: "https://cklass.com/cdn/shop/files/DUO_PACK_large.jpg?v=1689259869",
    url: "https://cklass.com/pages/duopack",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/ROPA_CABALLERO_0048c61c-3b3b-4389-a3ea-c049f61d8f27_large.jpg?v=1689259870",
    url: "https://cklass.com/pages/mens-wear",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/CALZADO_CABALLERO_ddfa2a38-55ed-48ad-b860-9b305a4414bf_large.jpg?v=1689259870",
    url: "https://cklass.com/pages/caballero-calzado",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/KIDS_TEENS_large.jpg?v=1689259869",
    url: "https://cklass.com/pages/kids-calzado",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/ROPA_KIDS_b522d9f1-1f5c-4bf9-8fed-3df50ef5408f_large.jpg?v=1689694293",
    url: "https://cklass.com/pages/ropa-kids",
  },
  {
    image: "https://cklass.com/cdn/shop/files/JOYERIA_large.jpg?v=1689259869",
    url: "https://cklass.com/pages/joyeria",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLA-OFERTAS-ROPA_97ff682b-e9d7-4f45-83a7-76bdbe0a8737_large.jpg?v=1690560623",
    url: "https://cklass.com/pages/backtoschool",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLA_SNEAKERMANIA_large.jpg?v=1691426557",
    url: "https://cklass.com/pages/sneakermania",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/Portadilla_large.png?v=1691784135",
    url: "https://cklass.com/pages/coleccionpink",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLA_af263650-65ef-4102-93b9-355218f98627_large.jpg?v=1691428310",
    url: "https://cklass.com/pages/chicgirl",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLA_9d2ad45f-8a5c-4bca-95de-6976ee6eda9b_large.jpg?v=1692386109",
    url: "https://cklass.com/pages/especialcurvy",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/Portadilla_2_large.png?v=1696264943",
    url: "https://cklass.com/pages/promosemanal",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLA3X2ROPA_large.jpg?v=1696445547",
    url: "https://cklass.com/pages/ofertasropa",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLA3X2CALZADO_large.jpg?v=1696445546",
    url: "https://cklass.com/pages/ofertascalzado",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLAKSWISS_large.jpg?v=1693586063",
    url: "https://cklass.com/pages/especialchamarras",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PORTADILLA_BOTAS_large.jpg?v=1693586063",
    url: "https://cklass.com/pages/especialbotas",
  },
  {
    image:
      "https://cklass.com/cdn/shop/files/PortadillaPAW_CONTROL_1_large.png?v=1694477315",
    url: "https://cklass.com/pages/especialpawpatrol",
  },
];

// Recuerda cambiar el http por https con los catalogos de andrea, muy importante!!!
const andrea = [
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/328-1-1-38-30/Imagen/attachments/OUTLET.jpg",
    url: "https://cdn-img.andrea.com/mx/38/328/",
    name: "OUTLET",
    name_url: "https://cdn-img.andrea.com/mx/38/328/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/263-1-1-1-30/Imagen/attachments/CALZADO%20DAMA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/263/",
    name: "CALZADO DAMA",
    name_url: "https://cdn-img.andrea.com/mx/1/263/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/241-1-1-1-30/Imagen/attachments/ANDREA%20VESTIR.jpg",
    url: "https://cdn-img.andrea.com/mx/1/241/",
    name: "ANDREA VESTIR",
    name_url: "https://cdn-img.andrea.com/mx/1/241/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/446-1-1-1-30/Imagen/attachments/ANDREA%20HOME.jpg",
    url: "https://cdn-img.andrea.com/mx/1/446/",
    name: "ANDREA HOME",
    name_url: "https://cdn-img.andrea.com/mx/1/446/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/14-1-1-1-30/Imagen/attachments/LENCERIA%20VESTIR%20INTERIOR.jpg",
    url: "https://cdn-img.andrea.com/mx/1/14/",
    name: "LENCERÍA & VESTIR INTERIOR",
    name_url: "https://cdn-img.andrea.com/mx/1/14/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/16-1-1-1-30/Imagen/attachments/ANDREA%20BEAUTY.jpg",
    url: "https://cdn-img.andrea.com/mx/1/16/",
    name: "ANDREA BEAUTY",
    name_url: "https://cdn-img.andrea.com/mx/1/16/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/89-1-1-1-30/Imagen/attachments/CALZADO%20CONFORT.jpg",
    url: "https://cdn-img.andrea.com/mx/1/89/",
    name: "CALZADO CONFORT",
    name_url: "https://cdn-img.andrea.com/mx/1/89/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/5-1-1-1-30/Imagen/attachments/CALZADO%20CABALLERO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/5/",
    name: "CALZADO CABALLERO",
    name_url: "https://cdn-img.andrea.com/mx/1/5/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/36-1-1-1-30/Imagen/attachments/VESTIR%20CABALLERO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/36/",
    name: "VESTIR CABALLERO",
    name_url: "https://cdn-img.andrea.com/mx/1/36/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/242-1-1-1-30/Imagen/attachments/INFANTIL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/242/",
    name: "INFANTIL",
    name_url: "https://cdn-img.andrea.com/mx/1/242/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/434-1-1-1-30/Imagen/attachments/INFANTIL%20BABY.jpg",
    url: "https://cdn-img.andrea.com/mx/1/434/",
    name: "INFANTIL BABY",
    name_url: "https://cdn-img.andrea.com/mx/1/434/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/94-1-1-1-30/Imagen/attachments/ANDREA%20TEENS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/94/",
    name: "ANDREA TEENS",
    name_url: "https://cdn-img.andrea.com/mx/1/94/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/18-1-1-1-30/Imagen/attachments/BOLSAS%20Y%20ACCESORIOS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/18/",
    name: "BOLSAS Y ACCESORIOS",
    name_url: "https://cdn-img.andrea.com/mx/1/18/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/469-1-1-1-30/Imagen/attachments/ACCESORIOS%20CABALLERO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/469/",
    name: "ACCESORIOS CABALLERO",
    name_url: "https://cdn-img.andrea.com/mx/1/469/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/283-1-1-1-30/Imagen/attachments/TROPICAL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/283/",
    name: "TROPICAL",
    name_url: "https://cdn-img.andrea.com/mx/1/283/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/337-1-1-1-30/Imagen/attachments/DEPORTIVO%20COMPLETO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/337/",
    name: "DEPORTIVO COMPLETO",
    name_url: "https://cdn-img.andrea.com/mx/1/337/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/410-1-1-1-30/Imagen/attachments/ANDREA%20SPORT.jpg",
    url: "https://cdn-img.andrea.com/mx/1/410/",
    name: "ANDREA SPORT",
    name_url: "https://cdn-img.andrea.com/mx/1/410/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/411-1-1-1-30/Imagen/attachments/FERRATO%20SPORT.jpg",
    url: "https://cdn-img.andrea.com/mx/1/411/",
    name: "FERRATO SPORT",
    name_url: "https://cdn-img.andrea.com/mx/1/411/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/493-1-1-1-30/Imagen/attachments/QUINCENA%20DE%20DESCUENTOS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/493/",
    name: "QUINCENA DE DESCUENTOS",
    name_url: "https://cdn-img.andrea.com/mx/1/493/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/540-1-1-1-30/Imagen/attachments/PLATAFORMAS%20PARA%20TODAS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/540/",
    name: "PLATAFORMAS PARA TODAS",
    name_url: "https://cdn-img.andrea.com/mx/1/540/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/457-1-1-1-30/Imagen/attachments/LO%20MEJOR%20DE%20ANDREA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/457/",
    name: "LO MEJOR DE ANDREA",
    name_url: "https://cdn-img.andrea.com/mx/1/457/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/545-1-1-1-30/Imagen/attachments/FESTIVAL%20LOREAL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/545/",
    name: "FESTIVAL LOREAL",
    name_url: "https://cdn-img.andrea.com/mx/1/545/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/310-1-1-1-30/Imagen/attachments/BOTAS%20DE%20LLUVIA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/310/",
    name: "BOTAS DE LLUVIA",
    name_url: "https://cdn-img.andrea.com/mx/1/310/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/42-1-1-1-30/Imagen/attachments/DR%20SCHOLLS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/42/",
    name: "DR. SCHOLLS",
    name_url: "https://cdn-img.andrea.com/mx/1/42/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/404-1-1-1-30/Imagen/attachments/FOREVER%2021.jpg",
    url: "https://cdn-img.andrea.com/mx/1/404/",
    name: "FOREVER 21",
    name_url: "https://cdn-img.andrea.com/mx/1/404/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/520-1-1-1-30/Imagen/attachments/ZONA%20DE%20LIQUIDACION.jpg",
    url: "https://cdn-img.andrea.com/mx/1/520/",
    name: "ZONA DE LIQUIDACIÓN",
    name_url: "https://cdn-img.andrea.com/mx/1/520/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/407-1-1-1-30/Imagen/attachments/URBANO%20DEPORTIVO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/407/",
    name: "URBANO DEPORTIVO",
    name_url: "https://cdn-img.andrea.com/mx/1/407/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/412-1-1-1-30/Imagen/attachments/DEPORTIVO%20INFANTIL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/412/",
    name: "DEPORTIVO INFANTIL",
    name_url: "https://cdn-img.andrea.com/mx/1/412/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/59-1-1-1-30/Imagen/attachments/ADIDAS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/59/",
    name: "ADIDAS",
    name_url: "https://cdn-img.andrea.com/mx/1/59/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/60-1-1-1-30/Imagen/attachments/NIKE.jpg",
    url: "https://cdn-img.andrea.com/mx/1/60/",
    name: "NIKE",
    name_url: "https://cdn-img.andrea.com/mx/1/60/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/63-1-1-1-30/Imagen/attachments/PUMA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/63/",
    name: "PUMA",
    name_url: "https://cdn-img.andrea.com/mx/1/63/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/62-1-1-1-30/Imagen/attachments/REEBOK.jpg",
    url: "https://cdn-img.andrea.com/mx/1/62/",
    name: "REEBOK",
    name_url: "https://cdn-img.andrea.com/mx/1/62/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/535-1-1-1-30/Imagen/attachments/AIRWALK.jpg",
    url: "https://cdn-img.andrea.com/mx/1/535/",
    name: "AIRWALK",
    name_url: "https://cdn-img.andrea.com/mx/1/535/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/536-1-1-1-30/Imagen/attachments/DEPORTIVO%20FUTBOL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/536/",
    name: "DEPORTIVO FUTBOL",
    name_url: "https://cdn-img.andrea.com/mx/1/536/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/537-1-1-1-30/Imagen/attachments/ROPA%20DEPORTIVA%20DAMA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/537/",
    name: "ROPA DEPORTIVA DAMA",
    name_url: "https://cdn-img.andrea.com/mx/1/537/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/538-1-1-1-30/Imagen/attachments/ROPA%20DEPORTIVA%20CABALLERO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/538/",
    name: "ROPA DEPORTIVA CABALLERO",
    name_url: "https://cdn-img.andrea.com/mx/1/538/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/334-1-1-1-30/Imagen/attachments/AEROPOSTALE.jpg",
    url: "https://cdn-img.andrea.com/mx/1/334/",
    name: "AEROPOSTALE",
    name_url: "https://cdn-img.andrea.com/mx/1/334/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/262-1-1-1-30/Imagen/attachments/CHAMPION.jpg",
    url: "https://cdn-img.andrea.com/mx/1/262/",
    name: "CHAMPION",
    name_url: "https://cdn-img.andrea.com/mx/1/262/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/246-1-1-1-30/Imagen/attachments/LOTTO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/246/",
    name: "LOTTO",
    name_url: "https://cdn-img.andrea.com/mx/1/246/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/245-1-1-1-30/Imagen/attachments/K%20SWISS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/245/",
    name: "K-SWISS",
    name_url: "https://cdn-img.andrea.com/mx/1/245/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/478-1-1-1-30/Imagen/attachments/GOTCHA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/478/",
    name: "GOTCHA",
    name_url: "https://cdn-img.andrea.com/mx/1/478/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/336-1-1-1-30/Imagen/attachments/VANS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/336/",
    name: "VANS",
    name_url: "https://cdn-img.andrea.com/mx/1/336/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/289-1-1-1-30/Imagen/attachments/UNDER%20ARMOUR.jpg",
    url: "https://cdn-img.andrea.com/mx/1/289/",
    name: "UNDER ARMOUR",
    name_url: "https://cdn-img.andrea.com/mx/1/289/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/249-1-1-1-30/Imagen/attachments/SKECHERS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/249/",
    name: "SKECHERS",
    name_url: "https://cdn-img.andrea.com/mx/1/249/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/247-1-1-1-30/Imagen/attachments/PIRMA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/247/",
    name: "PIRMA",
    name_url: "https://cdn-img.andrea.com/mx/1/247/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/255-1-1-1-30/Imagen/attachments/WILSON.jpg",
    url: "https://cdn-img.andrea.com/mx/1/255/",
    name: "WILSON",
    name_url: "https://cdn-img.andrea.com/mx/1/255/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/435-1-1-1-30/Imagen/attachments/POLO%20CLUB.jpg",
    url: "https://cdn-img.andrea.com/mx/1/435/",
    name: "POLO CLUB",
    name_url: "https://cdn-img.andrea.com/mx/1/435/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/444-1-1-1-30/Imagen/attachments/LAMBORGHINI.jpg",
    url: "https://cdn-img.andrea.com/mx/1/444/",
    name: "LAMBORGHINI",
    name_url: "https://cdn-img.andrea.com/mx/1/444/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/217-1-1-1-30/Imagen/attachments/ACCESORIOS%20DEPORTIVO.jpg",
    url: "https://cdn-img.andrea.com/mx/1/217/",
    name: "ACCESORIOS DEPORTIVO",
    name_url: "https://cdn-img.andrea.com/mx/1/217/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/419-1-1-1-30/Imagen/attachments/PARA%20LA%20AVENTURA.jpg",
    url: "https://cdn-img.andrea.com/mx/1/419/",
    name: "PARA LA AVENTURA",
    name_url: "https://cdn-img.andrea.com/mx/1/419/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/307-1-1-1-30/Imagen/attachments/PROFESIONAL%20E%20INDUSTRIAL.jpg",
    url: "https://cdn-img.andrea.com/mx/1/307/",
    name: "PROFESIONAL E INDUSTRIAL",
    name_url: "https://cdn-img.andrea.com/mx/1/307/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/392-1-1-1-30/Imagen/attachments/AFTER%20SPORT.jpg",
    url: "https://cdn-img.andrea.com/mx/1/392/",
    name: "AFTER SPORT",
    name_url: "https://cdn-img.andrea.com/mx/1/392/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/294-1-1-1-30/Imagen/attachments/ZONA%20DESCUENTOS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/294/",
    name: "ZONA DESCUENTOS",
    name_url: "https://cdn-img.andrea.com/mx/1/294/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/479-1-1-1-30/Imagen/attachments/JBL%20ELECTRONICOS.jpg",
    url: "https://cdn-img.andrea.com/mx/1/479/",
    name: "JBL ELECTRÓNICOS",
    name_url: "https://cdn-img.andrea.com/mx/1/479/",
  },
  {
    image:
      "https://api.vtexcrm.com.br/andreamx/dataentities/CD/documents/287-1-1-1-30/Imagen/attachments/PANAM.jpg",
    url: "https://cdn-img.andrea.com/mx/1/287/",
    name: "PANAM",
    name_url: "https://cdn-img.andrea.com/mx/1/287/",
  },
];

const priceShoes = [
  {
    image: "https://images.priceshoes.digital/catalogos/1093468_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1093468",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1108325_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1108325",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1108329_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1108329",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1108333_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1108333",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1110769_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1110769",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1110773_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1110773",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1111104_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1111104",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1111329_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1111329",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1112114_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1112114",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1112174_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1112174",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1112384_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1112384",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1112388_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1112388",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1112455_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1112455",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1113185_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1113185",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1114147_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1114147",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1114708_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1114708",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1118022_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1118022",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1119590_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1119590",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1120160_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1120160",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1122951_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1122951",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1122958_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1122958",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1123914_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1123914",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1123918_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1123918",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1128509_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1128509",
  },
  {
    image: "https://images.priceshoes.digital/catalogos/1129596_0.jpg",
    url: "https://www.priceshoes.com/catalogos/1129596",
  },
];

const concord = [
  {
    image:
      "https://www.colchasconcord.com.mx/Archivos/Catalogos_Home/CATBLANCOS.jpg",
    url: "https://www.colchasconcord.com.mx/archivosD/CatalogoTiendasAbril2024.pdf",
    name: "Blancos",
  },

  {
    image:
      "https://www.colchasconcord.com.mx/Archivos/Catalogos_Home/catalogo%20home.jpg",
    url: "https://www.colchasconcord.com.mx/ArchivosD/Home%20Marzo%20Abril%2024.pdf",
    name: "Concord Home",
  },
];

const betterware = [
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/e0/72/d5/e072d57b-e76c-ec63-b844-9974409b61be/source/512x512bb.jpg",
    url: "https://www.betterware.com.mx/mx/es/catalogo",
  },
];

// module.exports = { cklass, andrea, priceShoes, concord, betterware };

module.exports = {
  // cklassDb: async () => {
  //   const createDb = cklass.map((el) => {
  //     return {
  //       name: el.name,
  //       image: el.image,
  //       url: el.url,
  //       companyId: 2,
  //     };
  //   });
  //   await Catalogo.bulkCreate(createDb);
  // },
  // andreaDb: async () => {
  //   const createDb = andrea.map((el) => {
  //     return {
  //       name: el.name,
  //       image: el.image,
  //       url: el.url,
  //       companyId: 1,
  //     };
  //   });
  //   await Catalogo.bulkCreate(createDb);
  // },
  // priceShoesDb: async () => {
  //   const createDb = priceShoes.map((el) => {
  //     return {
  //       name: el.name,
  //       image: el.image,
  //       url: el.url,
  //       companyId: 3,
  //     };
  //   });
  //   await Catalogo.bulkCreate(createDb);
  // },
  concordDb: async () => {
    const createDb = concord.map((el) => {
      return {
        name: el.name,
        image: el.image,
        url: el.url,
        companyId: 5,
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
        companyId: 6,
      };
    });
    await Catalogo.bulkCreate(createDb);
  },
};
