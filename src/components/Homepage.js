import dreamy from "../images/dreamy.png";
import wooly from "../images/wooly.png";
import purlite from "../images/purlite.png";
import varie from "../images/varie.png";
import sheep from "../images/sheep.png";

import vpurpleI from "../images/yarn/variegations/purple.jpg";
import wnaturalI from "../images/yarn/wooly/natural.jpg";

const Homepage = () => {
  //wasn't able to use react links for html anchors
  return (
    <div className="main">
      <div id="slogan">
        <img src={sheep} className="logo" alt="sheeplogo" />
        <h2>A cornucopia of yarn</h2>
      </div>
      <div id="supplierssection">
        <h2>Our Suppliers</h2>
        <div id="suppliers">
          <a href="/shop#dreamyyarn">
            <img src={dreamy} alt="dreamyyarn" />
          </a>
          <a href="/shop#woolymonster">
            <img src={wooly} alt="wooly" />
          </a>
          <a href="/shop#purlite">
            <img src={purlite} alt="purlite" />
          </a>
          <a href="/shop#variegations">
            <img src={varie} alt="variegations" />
          </a>
        </div>
      </div>
      <div id="hotrightnowdiv">
        <h2>Hot right now</h2>
        <div id="hotrightnow">
          <div>
            <h3>Variegations of Purple</h3>
            <a href="/shop#variegations">
              <img src={vpurpleI} alt="Variegations of purple" />
            </a>
            <p>30€/uni</p>
          </div>
          <div>
            <h3>Wooly Natural</h3>
            <a href="/shop#woolymonster">
              <img src={wnaturalI} alt="Wooly Natural" />
            </a>
            <p>23€/uni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
