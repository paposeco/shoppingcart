import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: [],
      totalItems: 0,
      totalPrice: 0,
      showCartContent: false,
      updateCart: true,
    };
    this.handlerOfClicks = this.handlerOfClicks.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handlerOfClicks(event) {
    const currentShowCart = this.state.showCartContent;
    const currentUpdateCart = this.state.updateCart;
    this.setState({
      showCartContent: !currentShowCart,
      updateCart: !currentUpdateCart,
    });
    this.props.toggleCart();
  }

  deleteItem(target) {
    let indexOfItem;
    const currentItemsInCart = Array.from(this.state.itemsInCart);
    currentItemsInCart.filter((element, index) => {
      if (element.itemname === target) {
        indexOfItem = index;
      }
      return element.itemname === target;
    });
    const numberOfItems = currentItemsInCart[indexOfItem].quantity;
    const priceOfItem = currentItemsInCart[indexOfItem + 1].price;
    const subTotal = Number(numberOfItems) * Number(priceOfItem);
    currentItemsInCart.splice(indexOfItem, 2);
    this.setState({
      itemsInCart: currentItemsInCart,
      totalItems: Number(this.state.totalItems) - numberOfItems,
      totalPrice: Number(this.state.totalPrice) - subTotal,
    });
  }

  //update stock

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.deleteFromCart !== this.props.deleteFromCart &&
      this.props.deleteFromCart !== ""
    ) {
      this.deleteItem(this.props.deleteFromCart);
    }
    if (!this.state.showCartContent && this.state.updateCart) {
      if (this.props.sendItemsInCart === "") {
        return;
      }

      if (
        prevProps.sendItemsInCart === "" ||
        prevProps.sendItemsInCart[0].transactionkey !==
          this.props.sendItemsInCart[0].transactionkey
      ) {
        const receivedItemObj = this.props.sendItemsInCart[0];
        const receivedItemInfo = this.props.sendItemsInCart[1];
        const itemquantity = Number(receivedItemObj.quantity);
        const itemprice = Number(receivedItemInfo.price);
        const newtotalprice = this.state.totalPrice + itemprice * itemquantity;
        const newquantity = this.state.totalItems + itemquantity;
        this.setState({
          itemsInCart: this.state.itemsInCart.concat(
            receivedItemObj,
            receivedItemInfo
          ),
          totalItems: newquantity,
          totalPrice: newtotalprice,
        });
      }
    }
  }

  render() {
    return (
      <div id="shopheader">
        <h2>Shop</h2>
        <div onClick={this.handlerOfClicks}>
          <i className="las la-shopping-cart"></i>
          <span id="carttotal">
            {" "}
            {this.state.totalItems} items | {this.state.totalPrice}€
          </span>
          <button>{this.props.showButton}</button>
        </div>
      </div>
    );
  }
}

export default Cart;

// o stock so esta a ser updatado para o dreamy
