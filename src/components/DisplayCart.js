import React from "react";
import uniqid from "uniqid";

class DisplayCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: [],
      totalprice: 0,
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem = function (event) {
    const target = event.target.dataset.itemalias;
    const itemsDisplayed = Array.from(this.state.itemsToShow);
    let indexToDelete = 0;
    const itemToDelete = itemsDisplayed.filter((element, index) => {
      if (element.alias === target) {
        indexToDelete = index;
      }
      return element.alias === target;
    });
    itemsDisplayed.splice(indexToDelete, 1);
    const itemprice = Number(itemToDelete[0].price);
    this.setState({
      itemsToShow: itemsDisplayed,
      totalprice: Number(this.state.totalprice) - itemprice,
    });
    this.props.deleteInShop(target);
  };

  componentDidMount() {
    const completeInfo = this.props.sendItemsInCart;
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
        const previousPrice =
          itemInArray[0].quantity * completeInfo[i + 1].price;
        arrayOfItems.push(obj);
        currenttotalprice = currenttotalprice - previousPrice + obj.price;
      }
      i++;
    }
    this.setState({
      itemsToShow: this.state.itemsToShow.concat(arrayOfItems),
      totalprice: currenttotalprice,
    });
  }

  render() {
    return (
      <div>
        <table id="shoppingcartdescription">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemsToShow.map((element) => {
              return (
                <tr key={uniqid()}>
                  <td>
                    {element.name}, Quantity: {element.quantity}
                  </td>
                  <td className="price">{element.price}€</td>
                  <td>
                    <button
                      onClick={this.deleteItem}
                      data-itemalias={element.alias}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td className="price">{this.state.totalprice}€</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default DisplayCart;
