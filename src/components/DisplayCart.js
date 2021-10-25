import React from "react";
import uniqid from "uniqid";
import GetInfo from "./CurrentStock.js";

class DisplayCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: [],
      totalprice: 0,
    };
  }

  componentDidMount() {
    const completeInfo = this.props.sendItems;
    for (let i = 0; i < completeInfo.length; i++) {
      let obj = new Object();
      obj.quantity = completeInfo[i].quantity;
      obj.itemname = completeInfo[i + 1].name;
      obj.price =
        Number(completeInfo[i + 1].price) * Number(completeInfo[i].quantity);
      this.setState({
        itemsToShow: this.state.itemsToShow.concat([obj]),
        totalprice: this.state.totalprice + obj.price,
      });
      i++;
    }
  }

  render() {
    return (
      <div>
        <table id="shoppingcartdescription">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
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
