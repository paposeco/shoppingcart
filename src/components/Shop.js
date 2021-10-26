import Stock from "./Stock.js";
import React, { useState } from "react";
import Cart from "./Cart.js";

const Shop = () => {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [currentSelectedItem, setCurrentSelectedItem] = useState("");
  const [clicked, setClicked] = useState(false);
  const [currentStock, setCurrentStock] = useState([
    {
      stock: 3,
      alias: "dreamyspeckles",
    },
    {
      stock: 6,
      alias: "dreamynatural",
    },
    { stock: 4, alias: "dreamycoldmorning" },
    {
      stock: 10,
      alias: "woolybeige",
    },
    {
      stock: 8,
      alias: "woolygreen",
    },
    {
      stock: 15,
      alias: "woolynatural",
    },
    {
      stock: 5,
      alias: "purlitemarineblue",
    },
    {
      stock: 8,
      alias: "purlitesunnyyellow",
    },
    {
      stock: 1,
      alias: "purliteclassicblue",
    },
    {
      stock: 2,
      alias: "purliteclassicgrey",
    },
    {
      stock: 4,
      alias: "variegationsofgreen",
    },
    {
      stock: 6,
      alias: "variegationsofpurple",
    },
  ]);

  const sendtocart = function (props) {
    setItemsSelected(itemsSelected.concat(props));
    setCurrentSelectedItem(props);
    const itemAlias = props[0].itemname;
    const quantity = props[0].quantity;
    let indexfound;
    const findItemInArray = currentStock.filter((element, index) => {
      if (element.alias === itemAlias) {
        indexfound = index;
      }
      return element.alias === itemAlias;
    });
    let shallowCopyOfArray = Array.from(currentStock);
    shallowCopyOfArray.splice(indexfound, 1);
    const newquantity = Number(findItemInArray[0].stock) - Number(quantity);
    findItemInArray[0].stock = newquantity;
    setCurrentStock(shallowCopyOfArray.concat(findItemInArray));
  };

  const handlerOfClick = function (event) {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
      setCurrentSelectedItem("");
    }
  };

  if (clicked) {
    return (
      <div className="main">
        <Cart
          sendItemsInCart={currentSelectedItem}
          toggleCart={handlerOfClick}
        />
        <p>mostrar o que esta no cart</p>
      </div>
    );
  } else {
    return (
      <div className="main">
        <Cart
          sendItemsInCart={currentSelectedItem}
          toggleCart={handlerOfClick}
        />
        <div>
          <h3>Dreamy Yarn</h3>
          <Stock supplier="dreamy" sendtocart={sendtocart} />
        </div>
        <div>
          <h3>Wooly Monster</h3>
          <Stock supplier="woolymonster" sendtocart={sendtocart} />
        </div>
        <div>
          <h3>Purlite</h3>
          <Stock supplier="purlite" sendtocart={sendtocart} />
        </div>
        <div>
          <h3>Variegations</h3>
          <Stock supplier="variegations" sendtocart={sendtocart} />
        </div>
        <p>
          Disclaimer: The skeins of yarn displayed are from non-fictional
          companies, but the photos are mine. They are part of my yarn stash. :D
        </p>
      </div>
    );
  }
};

export default Shop;
