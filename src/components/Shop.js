import speckles from "../images/yarn/dreamy/speckles.jpg";
import dnatural from "../images/yarn/dreamy/natural.jpg";
import coldmorning from "../images/yarn/dreamy/coldmorning.jpeg";

import beige from "../images/yarn/wooly/beige.jpg";
import wgreen from "../images/yarn/wooly/green.jpg";
import wnatural from "../images/yarn/wooly/natural.jpg";

import pcblue from "../images/yarn/purlite/classicblue.jpg";
import pcgrey from "../images/yarn/purlite/classicgrey.jpg";
import pblue from "../images/yarn/purlite/marineblue.jpg";
import pyellow from "../images/yarn/purlite/sunnyyellow.jpg";

import vgreen from "../images/yarn/variegations/green.jpg";
import vpurple from "../images/yarn/variegations/purple.jpg";

const Shop = () => {
  return (
    <div className="main">
      <h2>Shop</h2>
      <h3>Dreamy Yarn</h3>
      <ul className="stock">
        <li>
          <img src={speckles} alt="dreamyspeckles" />
          <div className="productDesc">
            <h4>Dreamy Speckles</h4>
            <p>Price:</p>
            <form>
              <label>Quantity:</label>
              <input type="number" min="0" className="inputquantity" />
              <button>
                <i className="las la-cart-plus"></i>
              </button>
            </form>
          </div>
        </li>
        <li>
          <img src={dnatural} alt="dreamynatural" />
          <h4>Dreamy Natural</h4>
        </li>
        <li>
          <img src={coldmorning} alt="dreamycoldmorning" />
          <h4>Dreamy Cold Morning</h4>
        </li>
      </ul>
      <h3>Wooly Monster</h3>
      <ul className="stock">
        <li>
          <img src={beige} alt="woolybeige" />
          <h4>Wooly Dark Green</h4>
        </li>
        <li>
          <img src={wgreen} alt="woolygreen" />
          <h4>Wooly Natural</h4>
        </li>
        <li>
          <img src={wnatural} alt="woolynatural" />
          <h4>Wooly Beige</h4>
        </li>
      </ul>
      <h3>Purlite</h3>
      <ul className="stock">
        <li>
          <img src={pblue} alt="purlitemarineblue" />
          <h4>Purlite Marine Blue</h4>
        </li>
        <li>
          <img src={pyellow} alt="purlitesunnyyellow" />
          <h4>Purlite Sunny Yellow</h4>
        </li>
        <li>
          <img src={pcgrey} alt="purliteclassicgrey" />
          <h4>Purlite Classic Grey</h4>
        </li>
        <li>
          <img src={pcblue} alt="purliteclassicblue" />
          <h4>Purlite Classic Blue</h4>
        </li>
      </ul>
      <h3>Variegations</h3>
      <ul className="stock">
        <li>
          <img src={vgreen} alt="variegationsofgreen" />
          <h4>Variegations of green</h4>
        </li>
        <li>
          <img src={vpurple} alt="variegationsofpurple" />
          <h4>Variegations of purple</h4>
        </li>
      </ul>
      <div>
        <p>
          Disclaimer: The skeins of yarn displayed are from non-fictional
          companies, but the photos are mine. They are part of my yarn stash. :D
        </p>
      </div>
    </div>
  );
};

export default Shop;
