import ProductsForSale from "./ProductsForSale.js";
import dreamy from "../images/dreamy.png";
import wooly from "../images/wooly.png";
import purlite from "../images/purlite.png";
import varie from "../images/varie.png";
import React, { useState, useEffect } from "react";

// stock quantity availability is tracked here
const Shop = (props) => {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [stockUpdated, setStockUpdated] = useState(false);
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

  // receives information from ProductsForSale, looks for item in stock and updates stock; forwards information to Routes.js
  const sendtocart = function (items) {
    setItemsSelected(itemsSelected.concat(items));
    const itemAlias = items[0].itemname;
    const quantity = items[0].quantity;
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
    props.additemtocart(items);
  };

  // if the user exits the shop and comes back with items still in cart, updates stock
  const updateStock = function () {
    const currentItemsInCart = props.itemsincart;
    for (let i = 0; i < currentItemsInCart.length; i++) {
      const itemAlias = currentItemsInCart[i].itemname;
      const quantity = currentItemsInCart[i].quantity;
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
      // every item added to cart has two arrays with information, so every time the stock is updated, the loop advances +2 indexes
      i++;
    }
    setStockUpdated(true);
  };

  useEffect(() => {
    //only update stock on render once
    if (!stockUpdated) {
      updateStock();
    }
  });

  // each supplier is displayed independently with ProductsForSale component. currentstock is sent so that the quantity available of each item is displayed
  return (
    <div className="main">
      <h1>Shop</h1>
      <div className="suppliershelf" id="dreamyyarn">
        <img src={dreamy} alt="Dreamy Yarn" className="shopSupplierThumbnail" />
        <ProductsForSale
          supplier="dreamy"
          sendtocart={sendtocart}
          sendCurrentStock={currentStock}
        />
      </div>
      <div className="suppliershelf" id="woolymonster">
        <img
          src={wooly}
          alt="Wooly Monster"
          className="shopSupplierThumbnail"
        />
        <ProductsForSale
          supplier="woolymonster"
          sendtocart={sendtocart}
          sendCurrentStock={currentStock}
        />
      </div>
      <div className="suppliershelf" id="purlite">
        <img src={purlite} alt="Purlite" className="shopSupplierThumbnail" />
        <ProductsForSale
          supplier="purlite"
          sendtocart={sendtocart}
          sendCurrentStock={currentStock}
        />
      </div>
      <div className="suppliershelf" id="variegations">
        <img src={varie} alt="Variegations" className="shopSupplierThumbnail" />
        <ProductsForSale
          supplier="variegations"
          sendtocart={sendtocart}
          sendCurrentStock={currentStock}
        />
      </div>
      <p>
        Disclaimer: The skeins of yarn displayed are from non-fictional
        companies, but the photos are mine. They are part of my yarn stash. :D
      </p>
    </div>
  );
};

export default Shop;
