import Cart from "./ShoppingCart.js";

const DisplayCart = function (props) {
  return (
    <div className="main">
      <div id="shoppingcartheader">
        <h2>Shopping Cart</h2>
        <Cart />
      </div>
    </div>
  );
};

export default DisplayCart;
