import dreamy from "./images/dreamy.png";
import wooly from "./images/wooly.png";
import purlite from "./images/purlite.png";
import varie from "./images/varie.png";

const App = () => {
  return (
    <div className="main">
      <div id="slogan">
        <h2>Welcome to coziest website full of yarn.</h2>
      </div>
      <div id="supplierssection">
        <h2>Suppliers</h2>
        <div id="suppliers">
          <img src={dreamy} alt="dreamyyarn" />
          <img src={wooly} alt="wooly" />
          <img src={purlite} alt="purlite" />
          <img src={varie} alt="variegations" />
        </div>
      </div>
      <div>
        <h2>Hot right now</h2>
        <div>
          <p>Show three items with links for purchase.</p>
        </div>
      </div>
      <footer>
        <a href="https:github.com/paposeco/" alt="github">
          <span>
            <i className="lab la-github"></i>
          </span>
          Fabi
        </a>
      </footer>
    </div>
  );
};

export default App;
