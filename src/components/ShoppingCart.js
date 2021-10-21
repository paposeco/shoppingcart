import React, { useState } from "react";

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState(0);
  return (
    <div>
      <i className="las la-shopping-cart"></i> {itemsInCart} items
    </div>
  );
};

export default Cart;
