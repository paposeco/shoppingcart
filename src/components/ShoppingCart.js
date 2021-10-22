import React, { useState, useEffect } from "react";
import GetInfo from "./CurrentStock.js";

const Cart = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalItems, setTotalItems] = useState([0]);
  const [totalPrice, setTotalPrice] = useState([0]);

  const allCookies = document.cookie;

  // experimentar com map em vez de for each. cant even. so o ultimo é que é rendered.
  useEffect(() => {
    const array = allCookies.split(";");
    let filledarray = [];

    if (allCookies !== undefined) {
      array.forEach((element) => {
        console.log(element);
        const astring = element.substring(
          Number(element.indexOf("$")) + 1,
          element.indexOf("£")
        );
        const alias = astring.substring(0, astring.indexOf("|"));
        const quantityselected = astring.substring(
          Number(astring.indexOf("|")) + 1
        );
        const completeinfo = GetInfo(alias);
        console.log(completeinfo);
        const obj = {
          itemname: alias,
          quantity: quantityselected,
        };
        console.log(obj);
        setItemsInCart(itemsInCart.concat(obj));
        console.log(itemsInCart);
        setTotalItems(Number(totalItems) + Number(obj.quantity));
        setTotalPrice(
          Number(totalPrice) + Number(obj.quantity) * Number(completeinfo.price)
        );
      });
    } else {
      if (props.incart.length === 0) {
        setTotalItems(0);
        setTotalPrice(0);
      } else {
        setItemsInCart(itemsInCart.concat(props.incart[0]));
        setTotalItems(Number(totalItems) + Number(props.incart[0].quantity));
        setTotalPrice(
          Number(totalPrice) +
            Number(props.incart[0].quantity) * Number(props.incart[1].price)
        );
      }
    }
  }, [props.incart, allCookies]);

  return (
    <div onClick={props.show}>
      <i className="las la-shopping-cart"></i> {totalItems} items | {totalPrice}
      €
    </div>
  );
};

export default Cart;
