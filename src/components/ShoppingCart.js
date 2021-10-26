import React, { useState, useEffect } from "react";

const ShoppingCart = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalItems, setTotalItems] = useState([0]);
  const [totalPrice, setTotalPrice] = useState([0]);

  useEffect(() => {
    if (props.incart.length === 0) {
      setTotalItems(0);
      setTotalPrice(0);
    } else {
      console.log(props.incart);
      console.log(props.incart[0].quantity);
      setItemsInCart(itemsInCart.concat(props.incart[0]));
      setTotalItems(Number(totalItems) + Number(props.incart[0].quantity));
      setTotalPrice(
        Number(totalPrice) +
          Number(props.incart[0].quantity) * Number(props.incart[1].price)
      );
    }
  }, [props.incart]);

  return (
    <div onClick={props.show}>
      <i className="las la-shopping-cart"></i> {totalItems} items | {totalPrice}
      €
    </div>
  );
};

export default ShoppingCart;
