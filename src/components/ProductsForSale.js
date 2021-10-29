import React from "react";
import uniqid from "uniqid";

import specklesI from "../images/yarn/dreamy/speckles.jpg";
import dnaturalI from "../images/yarn/dreamy/natural.jpg";
import coldmorningI from "../images/yarn/dreamy/coldmorning.jpeg";

import beigeI from "../images/yarn/wooly/beige.jpg";
import wgreenI from "../images/yarn/wooly/green.jpg";
import wnaturalI from "../images/yarn/wooly/natural.jpg";

import pcblueI from "../images/yarn/purlite/classicblue.jpg";
import pcgreyI from "../images/yarn/purlite/classicgrey.jpg";
import pblueI from "../images/yarn/purlite/marineblue.jpg";
import pyellowI from "../images/yarn/purlite/sunnyyellow.jpg";

import vgreenI from "../images/yarn/variegations/green.jpg";
import vpurpleI from "../images/yarn/variegations/purple.jpg";

// form for purchasing items and items information
class ProductsForSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockquantities: [],
      dreamyStock: [
        {
          name: "Dreamy Speckles",
          price: 19,
          alias: "dreamyspeckles",
          id: uniqid(),
          image: specklesI,
        },
        {
          name: "Dreamy Natural",
          price: 17,
          alias: "dreamynatural",
          id: uniqid(),
          image: dnaturalI,
        },
        {
          name: "Dreamy Cold Morning",
          price: 19,
          alias: "dreamycoldmorning",
          id: uniqid(),
          image: coldmorningI,
        },
      ],
      woolyStock: [
        {
          name: "Wooly Beige",
          price: 25,
          alias: "woolybeige",
          id: uniqid(),
          image: beigeI,
        },
        {
          name: "Wooly Dark Green",
          price: 25,
          alias: "woolygreen",
          id: uniqid(),
          image: wgreenI,
        },
        {
          name: "Wooly Natural",
          price: 23,
          alias: "woolynatural",
          id: uniqid(),
          image: wnaturalI,
        },
      ],

      purliteStock: [
        {
          name: "Purlite Marine Blue",
          price: 16,
          alias: "purlitemarineblue",
          id: uniqid(),
          image: pblueI,
        },
        {
          name: "Purlite Sunny Yellow",
          price: 15,
          alias: "purlitesunnyyellow",
          id: uniqid(),
          image: pyellowI,
        },
        {
          name: "Purlite Classic Blue",
          price: 15,
          alias: "purliteclassicblue",
          id: uniqid(),
          image: pcblueI,
        },
        {
          name: "Purlite Classic Grey",
          price: 15,
          alias: "purliteclassicgrey",
          id: uniqid(),
          image: pcgreyI,
        },
      ],
      variegationsStock: [
        {
          name: "Variegations of Green",
          price: 30,
          alias: "variegationsofgreen",
          id: uniqid(),
          image: vgreenI,
        },
        {
          name: "Variegations of Purple",
          price: 30,
          alias: "variegationsofpurple",
          id: uniqid(),
          image: vpurpleI,
        },
      ],
      itemsInCart: [],
      selectedItem: { itemname: "", quantity: 0, transactionkey: uniqid() },
    };
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.getItemInfo = this.getItemInfo.bind(this);
    this.getCurrentStock = this.getCurrentStock.bind(this);
  }

  handlerOfChange = function (event) {
    this.setState({
      selectedItem: {
        itemname: event.target.dataset.product,
        quantity: event.target.value,
        transactionkey: this.state.selectedItem.transactionkey,
      },
    });
  };

  // creates object for item purchased with a name, quantity and uniqid; adds item to items in cart; gets information about the item from supplier; sends both the object created and the obj from supplier to Shop.js
  handlerOfSubmit = function (event) {
    event.preventDefault();
    this.setState({
      selectedItem: {
        itemname: this.state.selectedItem.itemname,
        quantity: this.state.selectedItem.quantity,
        transactionkey: uniqid(),
      },
    });
    const iteminfo = this.getItemInfo(this.state.selectedItem);
    this.setState({
      itemsInCart: this.state.itemsInCart.concat(this.state.selectedItem),
    });
    this.props.sendtocart([this.state.selectedItem, iteminfo]);
    event.target.reset();
  };

  // look for item information according to the item's supplier
  getItemInfo = function (obj) {
    const selectedItemAlias = obj.itemname.substring(0, 3);
    if (selectedItemAlias === "dre") {
      const index = this.state.dreamyStock.findIndex(
        (anobject) => anobject.alias === obj.itemname
      );
      return this.state.dreamyStock[index];
    } else if (selectedItemAlias === "woo") {
      const index = this.state.woolyStock.findIndex(
        (anobject) => anobject.alias === obj.itemname
      );
      return this.state.woolyStock[index];
    } else if (selectedItemAlias === "pur") {
      const index = this.state.purliteStock.findIndex(
        (anobject) => anobject.alias === obj.itemname
      );
      return this.state.purliteStock[index];
    } else {
      const index = this.state.variegationsStock.findIndex(
        (anobject) => anobject.alias === obj.itemname
      );
      return this.state.variegationsStock[index];
    }
  };

  getCurrentStock = function (itemalias) {
    const stockquantitiesarray = this.state.stockquantities;
    let stock;
    for (let i = 0; i < stockquantitiesarray.length; i++) {
      if (stockquantitiesarray[i].alias === itemalias) {
        stock = stockquantitiesarray[i].stock;
        break;
      }
    }
    return stock;
  };

  // if there was a change in stock between renders, updates stock quantities array
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sendCurrentStock !== this.props.sendCurrentStock) {
      this.setState({
        stockquantities: this.props.sendCurrentStock,
      });
    }
  }

  //sets the initial stock available according to info sent from Shop.js
  componentDidMount() {
    this.setState({
      stockquantities: this.props.sendCurrentStock,
    });
  }

  render() {
    let currentsupplier;
    if (this.props.supplier === "dreamy") {
      currentsupplier = this.state.dreamyStock;
    } else if (this.props.supplier === "woolymonster") {
      currentsupplier = this.state.woolyStock;
    } else if (this.props.supplier === "purlite") {
      currentsupplier = this.state.purliteStock;
    } else {
      currentsupplier = this.state.variegationsStock;
    }
    return (
      <div>
        <ul className="stock">
          {currentsupplier.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <div>
                <img src={item.image} alt={item.alias} />
              </div>
              <div className="productDesc">
                <form onSubmit={this.handlerOfSubmit}>
                  <label>
                    {this.getCurrentStock(item.alias)} in stock, {item.price}
                    €/uni
                  </label>
                  <input
                    type="number"
                    min="0"
                    defaultValue="0"
                    max={this.getCurrentStock(item.alias)}
                    className="inputquantity"
                    onChange={this.handlerOfChange}
                    data-product={item.alias}
                  />

                  <button data-product={item.alias} title="Add to Cart">
                    <i
                      className="las la-cart-plus"
                      data-product={item.alias}
                    ></i>
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsForSale;
