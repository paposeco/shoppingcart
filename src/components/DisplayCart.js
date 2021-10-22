import React from "react";
import uniqid from "uniqid";

class DisplayCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: [],
    };
    // this.extractItems = this.extractItems.bind(this);
  }
  // extractItems = function (array) {
  //   const shallowcopyofarray = [...array];
  //   let organizedArray = [];
  //   for (let i = 0; i < shallowcopyofarray.length; i++) {
  //     organizedArray.push([shallowcopyofarray[i], shallowcopyofarray[i + 1]]);
  //     i++;
  //   }
  //   return organizedArray;
  // };

  componentDidMount() {
    const allCookies = document.cookie;
    const array = allCookies.split(";");
    const cleanarray = [];
    array.forEach((element) => {
      console.log(element);
      const string = element.substring(
        Number(element.indexOf("$")) + 1,
        element.indexOf("£")
      );
      const alias = string.subtring(0, string.indexOf("|"));
      const quantityselected = string.substring(
        Number(string.indexOf("|")) + 1
      );
      const obj = { itemname: alias, quantity: quantityselected };
      cleanarray.concat(obj);
    });
    console.log(cleanarray);
    //    item="dreamynatural1" SameSite=Lax; item1="dreamynatural1" SameSite=Lax; item2="dreamycoldmorning2" SameSite=Lax
    // const organizearray = this.extractItems(this.props.itemsInCart);
    // console.log(organizearray);
    // this.setState({
    //   itemsToShow: this.state.itemsToShow.concat(organizearray),
    // });
  }

  render() {
    return (
      <div>
        {/* <table> */}
        {/*   <thead> */}
        {/*     <tr> */}
        {/*       <th>Item</th> */}
        {/*       <th>Price</th> */}
        {/*     </tr> */}
        {/*   </thead> */}
        {/*   <tbody> */}
        {/*     {this.state.itemsToShow.length !== 0 */}
        {/*       ? this.state.itemsToShow.map((element) => { */}
        {/*           console.log(element); */}
        {/*           return ( */}
        {/*             <tr key={uniqid()}> */}
        {/*               <td> */}
        {/*                 {element[1].name}, Quantity: {element[0].quantity} */}
        {/*               </td> */}
        {/*               <td>{element[1].price}€</td> */}
        {/*             </tr> */}
        {/*           ); */}
        {/*         }) */}
        {/*       : null} */}
        {/*   </tbody> */}
        {/* </table> */}
      </div>
    );
  }
}

export default DisplayCart;
