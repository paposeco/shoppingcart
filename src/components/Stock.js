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

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.dreamyStock = [
      {
        name: "Dreamy Speckles",
        price: "19€",
        stock: 3,
        alias: "dreamyspeckles",
        id: uniqid(),
        image: specklesI,
      },
      {
        name: "Dreamy Natural",
        price: "17€",
        stock: 6,
        alias: "dreamynatural",
        id: uniqid(),
        image: dnaturalI,
      },
      {
        name: "Dreamy Cold Morning",
        price: "19€",
        stock: 4,
        alias: "dreamycoldmorning",
        id: uniqid(),
        image: coldmorningI,
      },
    ];

    this.woolyStock = [
      {
        name: "Wooly Beige",
        price: "25€",
        stock: 10,
        alias: "woolybeige",
        id: uniqid(),
        image: beigeI,
      },
      {
        name: "Wooly Dark Green",
        price: "25€",
        stock: 8,
        alias: "woolygreen",
        id: uniqid(),
        image: wgreenI,
      },
      {
        name: "Wooly Natural",
        price: "23€",
        stock: 15,
        alias: "woolynatural",
        id: uniqid(),
        image: wnaturalI,
      },
    ];

    this.purliteStock = [
      {
        name: "Purlite Marine Blue",
        price: "16€",
        stock: 5,
        alias: "purlitemarineblue",
        id: uniqid(),
        image: pblueI,
      },
      {
        name: "Purlite Sunny Yellow",
        price: "15€",
        stock: 8,
        alias: "purlitesunnyyellow",
        id: uniqid(),
        image: pyellowI,
      },
      {
        name: "Purlite Classic Blue",
        price: "15€",
        stock: 1,
        alias: "purliteclassicblue",
        id: uniqid(),
        image: pcblueI,
      },
      {
        name: "Purlite Classic Grey",
        price: "15€",
        stock: 2,
        alias: "purliteclassicgrey",
        id: uniqid(),
        image: pcgreyI,
      },
    ];
    this.variegationsStock = [
      {
        name: "Variegations of Green",
        price: "30€",
        stock: 4,
        alias: "variegationsofgreen",
        id: uniqid(),
        image: vgreenI,
      },
      {
        name: "Variegations of Purple",
        price: "30€",
        stock: 6,
        alias: "variegationsofpurple",
        id: uniqid(),
        image: vpurpleI,
      },
    ];
    this.itemsInCart = [];
    this.handlerOfSubmit = function (event) {
      event.preventDefault();
      const target = event.target;
      console.log(target);
      // this.setState(this.itemsInCart.concat)
    };
  }

  render() {
    let currentsupplier;
    if (this.props.supplier === "dreamy") {
      currentsupplier = this.dreamyStock;
    } else if (this.props.supplier === "woolymonster") {
      currentsupplier = this.woolyStock;
    } else if (this.props.supplier === "purlite") {
      currentsupplier = this.purliteStock;
    } else {
      currentsupplier = this.variegationsStock;
    }
    return (
      <div>
        <ul className="stock">
          {currentsupplier.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.alias} />
              <div className="productDesc">
                <h4>{item.name}</h4>
                <p>Price: {item.price}/skein</p>
                <form onSubmit={this.handlerOfSubmit}>
                  <label>Quantity: ({item.stock} available)</label>
                  <input
                    type="number"
                    min="0"
                    max={item.stock}
                    className="inputquantity"
                  />
                  <button>
                    <i className="las la-cart-plus"></i>
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

export default Stock;
