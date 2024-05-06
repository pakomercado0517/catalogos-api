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
  {
    id: "4",
    name: "vianney",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJ6BX--xsTQoG_zME2zchRj4reBo7AUlkYlqom0wleg&s",
    slogan: "Expertos en Confort",
  },
  {
    id: "5",
    name: "concord",
    img: "https://wp-test-uploaddocs.s3.amazonaws.com/wp-content/uploads/2023/04/10164946/logo-concord-2.png",
    slogan: "Los #1",
  },
  {
    id: "6",
    name: "betterware",
    img: "https://betterwareytu.com/wp-content/uploads/2018/04/logo-betterware.jpg",
    slogan: "Hogar en Armonía",
  },
];

const companyMap = companies.map((el) => {
  return {
    name: el.name,
    image: el.img,
  };
});

module.exports = { companyMap };
