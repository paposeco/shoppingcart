import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./components/Homepage.js";
import Shop from "./components/Shop.js";
import Contact from "./components/Contact.js";
import DisplayCart from "./components/DisplayCart.js";

const Routes = () => {
  //lifted state of items in cart so that when the user navigates across the website, the cart remains the same
  const [itemsInCart, setItemsInCart] = useState([]);
  const [numberItemsInCart, setNumberItemsInCart] = useState(0);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);
  //adds item to array of items and updates total price and total number of items
  const addItemToCart = function (item) {
    setItemsInCart(itemsInCart.concat(item));
    const itemquantity = Number(item[0].quantity);
    setNumberItemsInCart(numberItemsInCart + itemquantity);
    const itemsubtotal = Number(item[1].price) * itemquantity;
    setTotalPriceInCart(totalPriceInCart + itemsubtotal);
  };

  //delete selected item; if there are no more items in cart, resets cart
  const deleteItem = function (event) {
    if (itemsInCart.length === 2) {
      setItemsInCart([]);
      setNumberItemsInCart(0);
      setTotalPriceInCart(0);
    } else {
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
    }
  };

  return (
    <BrowserRouter>
      <div id="headertitle">
        <h1>
          <a href="/" title="Homepage">
            Fictional Yarn Shop
          </a>
        </h1>
        <div>
          <span id="socialmedia">
            <a
              href="https://www.youtube.com/watch?v=Fx0G6DHMfXM"
              title="Instagram"
            >
              <i className="lab la-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=Fx0G6DHMfXM"
              title="Youtube"
            >
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
            <li className="shoppingcarticon" title="Go to Cart">
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
          <Shop itemsincart={itemsInCart} additemtocart={addItemToCart} />
        </Route>
        <Route exact path="/contact">
          <Contact itemsincart={itemsInCart} />
        </Route>
        <Route exact path="/shoppingcart">
          <DisplayCart itemsincart={itemsInCart} deleteitem={deleteItem} />
        </Route>
      </Switch>

      <footer>
        <a href="https:github.com/paposeco/" alt="github">
          <span>
            <i className="lab la-github"></i>
          </span>
          Fabi
        </a>
      </footer>
    </BrowserRouter>
  );
};

export default Routes;
