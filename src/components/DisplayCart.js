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

  deleteItem = function (event) {};

  componentDidMount() {
    const completeInfo = this.props.sendItemsInCart;
    let arrayOfItems = [];
    let currenttotalprice = 0;
    for (let i = 0; i < completeInfo.length; i++) {
      const currentitemname = completeInfo[i + 1].name;
      let indexOfItemInArray;
      const itemInArray = this.state.itemsToShow.filter((element, index) => {
        if (element.itemname === "currentitemname") {
          indexOfItemInArray = index;
          return element;
        }
      });
      if (itemInArray.length === 0) {
        let obj = {};
        obj.quantity = completeInfo[i].quantity;
        obj.itemname = completeInfo[i + 1].name;
        obj.price =
          Number(completeInfo[i + 1].price) * Number(completeInfo[i].quantity);
        arrayOfItems.push(obj);
        currenttotalprice = currenttotalprice + obj.price;
      } else {
        const copyOfArray = Array.from(this.state.itemsToShow);
        copyOfArray.splice(indexOfItemInArray, 1);
        // falta fazer update ao objecto e depois junta lo ao array novamente
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
                    {element.itemname}, Quantity: {element.quantity}
                  </td>
                  <td className="price">{element.price}€</td>
                  <td>
                    <button onClick={this.deleteItem}>Delete</button>
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
