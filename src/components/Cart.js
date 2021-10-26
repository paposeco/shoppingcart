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

  componentDidUpdate(prevProps, prevState) {
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
          itemsInCart: this.state.itemsInCart.concat(receivedItemObj),
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
          <i className="las la-shopping-cart"></i> {this.state.totalItems} items
          | {this.state.totalPrice}€<button>{this.props.showButton}</button>
        </div>
      </div>
    );
  }
}

export default Cart;

// o stock so esta a ser updatado para o dreamy
