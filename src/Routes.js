import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./components/Homepage.js";
import Shop from "./components/Shop.js";
import Contact from "./components/Contact.js";
import DisplayCart from "./components/DisplayCart.js";

const Routes = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [numberItemsInCart, setNumberItemsInCart] = useState(0);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);
  const updateCart = function (item) {
    setItemsInCart(itemsInCart.concat(item));
    const itemquantity = Number(item[0].quantity);
    setNumberItemsInCart(numberItemsInCart + itemquantity);
    const itemsubtotal = Number(item[1].price) * itemquantity;
    setTotalPriceInCart(totalPriceInCart + itemsubtotal);
  };

  const deleteItem = function (event) {
    const target = event.target.dataset.itemalias;
    const itemsDisplayed = Array.from(itemsInCart);
    let indexToDelete = 0;
    const itemToDelete = itemsDisplayed.filter((element, index) => {
      if (element.itemname === target) {
        indexToDelete = index;
      }
      return element.itemname === target;
    });

    const itemquantity = Number(itemToDelete[0].quantity);
    const itemprice =
      Number(itemsDisplayed[indexToDelete + 1].price) * itemquantity;
    itemsDisplayed.splice(indexToDelete, 2);

    setItemsInCart(itemsDisplayed);
    setTotalPriceInCart(totalPriceInCart - itemprice);
    setNumberItemsInCart(numberItemsInCart - itemquantity);
  };

  return (
    <BrowserRouter>
      <div id="headertitle">
        <h1>
          <a href="/">Fictional Yarn Shop</a>
        </h1>
        <div>
          <span id="socialmedia">
            <a href="https://www.youtube.com/watch?v=Fx0G6DHMfXM">
              <i className="lab la-instagram"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=Fx0G6DHMfXM">
              <i className="lab la-facebook"></i>
            </a>
          </span>
        </div>
      </div>
      <div id="top">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="shoppingcarticon">
              <Link to="/shoppingcart">
                <i className="las la-shopping-cart"></i>
                <span id="itemnumber">{numberItemsInCart}</span>
                <span>|{totalPriceInCart}€</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Homepage itemsincart={itemsInCart} />
        </Route>
        <Route exact path="/shop">
          <Shop itemsincart={itemsInCart} additemtocart={updateCart} />
        </Route>
        <Route exact path="/contact">
          <Contact itemsincart={itemsInCart} />
        </Route>
        <Route exact path="/shoppingcart">
          <DisplayCart itemsincart={itemsInCart} deleteitem={deleteItem} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
