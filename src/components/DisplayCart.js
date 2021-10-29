import React from "react";
import uniqid from "uniqid";
import sheep from "../images/sheep.png";

class DisplayCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: [],
      totalprice: 0,
    };
    this.displayItems = this.displayItems.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  displayItems = function (arrayofitemsreceived) {
    const completeInfo = arrayofitemsreceived;
    let arrayOfItems = [];
    let currenttotalprice = 0;
    for (let i = 0; i < completeInfo.length; i++) {
      const currentitemalias = completeInfo[i].itemname;
      let indexOfItemInArray;
      const itemInArray = arrayOfItems.filter((element, index) => {
        if (element.alias === currentitemalias) {
          indexOfItemInArray = index;
        }
        return element.alias === currentitemalias;
      });
      if (itemInArray.length === 0) {
        let obj = {};
        obj.quantity = completeInfo[i].quantity;
        obj.name = completeInfo[i + 1].name;
        obj.alias = completeInfo[i].itemname;
        obj.image = completeInfo[i + 1].image;
        obj.price =
          Number(completeInfo[i + 1].price) * Number(completeInfo[i].quantity);
        arrayOfItems.push(obj);
        currenttotalprice = currenttotalprice + obj.price;
      } else {
        arrayOfItems.splice(indexOfItemInArray, 1);
        let obj = {};
        const updatedQuantity =
          Number(itemInArray[0].quantity) + Number(completeInfo[i].quantity);
        obj.quantity = updatedQuantity;
        obj.name = completeInfo[i + 1].name;
        obj.price = Number(completeInfo[i + 1].price) * updatedQuantity;
        obj.alias = completeInfo[i].itemname;
        obj.image = completeInfo[i + 1].image;
        const previousPrice =
          itemInArray[0].quantity * completeInfo[i + 1].price;
        arrayOfItems.push(obj);
        currenttotalprice = currenttotalprice - previousPrice + obj.price;
      }
      i++;
    }
    this.setState({
      itemsToShow: arrayOfItems,
      totalprice: currenttotalprice,
    });
  };

  checkout = function (event) {
    alert("This a pretend button on a pretend online store.");
  };

  componentDidMount() {
    this.displayItems(this.props.itemsincart);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemsincart.length !== this.props.itemsincart.length) {
      this.displayItems(this.props.itemsincart);
    }
  }

  render() {
    if (this.state.itemsToShow.length === 0) {
      return (
        <div className="main">
          <h1>Shopping Cart</h1>
          <table>
            <thead>
              <tr className="total">
                <th>Item</th>
                <th className="price">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" id="empty">
                  Cart is empty!
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total">
                <td>Total</td>
                <td className="price">0€</td>
              </tr>
            </tfoot>
          </table>
          <div>
            <img src={sheep} className="logo" alt="sheeplogo" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <h1>Shopping Cart</h1>
          <table>
            <thead>
              <tr className="total">
                <th>Item</th>
                <th className="price">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.itemsToShow.map((element) => {
                return (
                  <tr key={uniqid()}>
                    <td className="displayProductDesc">
                      <img
                        src={element.image}
                        alt={`thumbnail${element.image}`}
                        className="thumbnailProduct"
                      />
                      <span>
                        {element.name} ({element.quantity})
                      </span>
                    </td>
                    <td className="price">{element.price}€</td>
                    <td className="deletebutton">
                      <button
                        onClick={this.props.deleteitem}
                        data-itemalias={element.alias}
                      >
                        <i
                          className="las la-trash-alt"
                          onClick={this.props.deleteitem}
                          data-itemalias={element.alias}
                        ></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="total">
                <td>Total</td>
                <td className="price">{this.state.totalprice}€</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <div id="checkout">
            <button onClick={this.checkout}>Checkout</button>
          </div>
          <div>
            <img src={sheep} className="logo" alt="sheeplogo" />
          </div>
        </div>
      );
    }
  }
}

export default DisplayCart;

//checkout
