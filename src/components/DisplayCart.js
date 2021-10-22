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
    const allCookies = document.cookie;
    const array = allCookies.split(";");
    let filledarray = [];
    let tracktotalprice = 0;
    array.forEach((element, index) => {
      const astring = element.substring(
        Number(element.indexOf("$")) + 1,
        element.indexOf("£")
      );
      const alias = astring.substring(0, astring.indexOf("|"));
      const quantityselected = astring.substring(
        Number(astring.indexOf("|")) + 1
      );
      const completeinfo = GetInfo(alias);
      const obj = {
        itemname: completeinfo.name,
        price: Number(completeinfo.price) * Number(quantityselected),
        quantity: quantityselected,
        itemalias: alias,
      };

      filledarray.push(obj);
      tracktotalprice = tracktotalprice + Number(obj.price);
    });
    this.setState({
      itemsToShow: this.state.itemsToShow.concat(filledarray),
      totalprice: this.state.totalprice + tracktotalprice,
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
