import Stock from "./Stock.js";
import Cart from "./ShoppingCart.js";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Shop = () => {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);
  const sendtocart = function (props) {
    setItemsSelected(props);
    setUpdateCart(true);
  };

  return (
    <div className="main">
      <div id="shopheader">
        <h2>Shop</h2>

        {/* se calhar posso ter conditional return e correr o displaycart onclick */}
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
        <Stock supplier="woolymonster" />
      </div>
      <div>
        <h3>Purlite</h3>
        <Stock supplier="purlite" />
      </div>
      <div>
        <h3>Variegations</h3>
        <Stock supplier="variegations" />
      </div>
      <p>
        Disclaimer: The skeins of yarn displayed are from non-fictional
        companies, but the photos are mine. They are part of my yarn stash. :D
      </p>
    </div>
  );
};

export default Shop;
