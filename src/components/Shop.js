import Stock from "./Stock.js";

const Shop = () => {
  return (
    <div className="main">
      <h2>Shop</h2>
      <div>
        <h3>Dreamy Yarn</h3>
        <Stock supplier="dreamy" />
      </div>
      <div>
        <h3>Wooly Monster</h3>
        <Stock supplier="woolymonster" />
      </div>
      <div>
        <h3>Purlite</h3>
        <Stock supplier="purlite" />
      </div>
      <div>
        <h3>Variegations</h3>
        <Stock supplier="variegations" />
      </div>
      <p>
        Disclaimer: The skeins of yarn displayed are from non-fictional
        companies, but the photos are mine. They are part of my yarn stash. :D
      </p>
    </div>
  );
};

export default Shop;
