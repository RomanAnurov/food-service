import React from "react";
import "./Cakes.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Cakes(props) {
  const { onBurgerPopup, onCallPopup, isOpen } = props;
  return (
    <section className="cakes">
      <Header
        onBurgerPopup={onBurgerPopup}
        onCallPopup={onCallPopup}
        isOpen={isOpen}
      />
      <Navigation />

      <h2 className="cakes__title">Здесь будет страница торты</h2>
    </section>
  );
}

export default Cakes;
