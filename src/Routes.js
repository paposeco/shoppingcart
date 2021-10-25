import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop.js";
import Contact from "./components/Contact.js";
import DisplayCart from "./components/DisplayCart.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>
          <a href="/">Fictional Yarn Shop</a>
        </h1>
      </div>
      <div id="top">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
