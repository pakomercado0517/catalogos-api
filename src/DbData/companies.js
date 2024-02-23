const companies = [
  {
    id: "1",
    name: "andrea",
    img: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/0f0bff8a6b062d1789ca10d1ef446db0",
    slogan: "En el nombre del diseño",
  },
  {
    id: "2",
    name: "cklass",
    img: "https://cklass.com/cdn/shop/files/logo_500x500_d6bca283-bdee-4fbb-9a3d-0f4de49478b2.png?format=jpg&v=1678226877&width=300",
    slogan: "El Calzado y Vestuario de las Estrallas",
  },
  {
    id: "3",
    name: "priceShoes",
    img: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/8ea71ff03f89cf3fd87ad77969755afe",
    slogan: "La Moda más Deseada y las más Vendida",
  },
];

const companyMap = companies.map((el) => {
  return {
    name: el.name,
    image: el.img,
  };
});

module.exports = { companyMap };
