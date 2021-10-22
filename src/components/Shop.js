import Stock from "./Stock.js";
import Cart from "./ShoppingCart.js";
import React, { useState, useEffect } from "react";
import DisplayCart from "./DisplayCart.js";
import { Link } from "react-router-dom";

const Shop = () => {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);
  const sendtocart = function (props) {
    console.log(props);
    setItemsSelected(itemsSelected.concat(props));
    setUpdateCart(true);
  };

  return (
    <div className="main">
      <div id="shopheader">
        <h2>Shop</h2>
        <Link to="/shoppingcart">
          <Cart incart={itemsSelected} />
        </Link>
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
};

export default Shop;

//quando clicam aqui deve ver se ha cookies e fazer update as cenas com o resultado
