const GetInfo = function (analias) {
  const stock = [
    {
      name: "Dreamy Speckles",
      price: 19,
      stock: 3,
      alias: "dreamyspeckles",
    },
    {
      name: "Dreamy Natural",
      price: 17,
      stock: 6,
      alias: "dreamynatural",
    },
    {
      name: "Dreamy Cold Morning",
      price: 19,
      stock: 4,
      alias: "dreamycoldmorning",
    },
    {
      name: "Wooly Beige",
      price: 25,
      stock: 10,
      alias: "woolybeige",
    },
    {
      name: "Wooly Dark Green",
      price: 25,
      stock: 8,
      alias: "woolygreen",
    },
    {
      name: "Wooly Natural",
      price: 23,
      stock: 15,
      alias: "woolynatural",
    },
    {
      name: "Purlite Marine Blue",
      price: 16,
      stock: 5,
      alias: "purlitemarineblue",
    },
    {
      name: "Purlite Sunny Yellow",
      price: 15,
      stock: 8,
      alias: "purlitesunnyyellow",
    },
    {
      name: "Purlite Classic Blue",
      price: 15,
      stock: 1,
      alias: "purliteclassicblue",
    },
    {
      name: "Purlite Classic Grey",
      price: 15,
      stock: 2,
      alias: "purliteclassicgrey",
    },
    {
      name: "Variegations of Green",
      price: 30,
      stock: 4,
      alias: "variegationsofgreen",
    },
    {
      name: "Variegations of Purple",
      price: 30,
      stock: 6,
      alias: "variegationsofpurple",
    },
  ];

  const finditem = function (analias) {
    const item = stock.filter((element) => element.alias === analias);
    return item[0];
  };

  let itemfound = finditem(analias);
  return itemfound;
};

export default GetInfo;
