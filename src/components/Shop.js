import Stock from "./Stock.js";
import Cart from "./ShoppingCart.js";
import React, { useState, useEffect } from "react";
import DisplayCart from "./DisplayCart.js";
import { Link } from "react-router-dom";
import GetInfo from "./CurrentStock.js";

const Shop = () => {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [currentSelectedItem, setCurrentSelectedItem] = useState("");
  const [updateCart, setUpdateCart] = useState(false);
  const [clicked, setClicked] = useState(false);
  const sendtocart = function (props) {
    setItemsSelected(itemsSelected.concat(props));
    setCurrentSelectedItem(props);
    setUpdateCart(true);
  };

  const handlerOfClick = function (event) {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  // de cada vez que clico aumenta o numero de items

  if (!clicked) {
    return (
      <div className="main">
        <div id="shopheader">
          <h2>Shop</h2>
          <div onClick={handlerOfClick}>
            <Cart incart={currentSelectedItem} />
          </div>
        </div>

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
  } else {
    return (
      <div className="main">
        <div id="shopheader">
          <h2>Shop</h2>
          <div onClick={handlerOfClick}>
            <Cart incart={itemsSelected} onClick={handlerOfClick} />
          </div>
        </div>
        <div>
          <DisplayCart sendItems={itemsSelected} />
        </div>
      </div>
    );
  }
};

export default Shop;
