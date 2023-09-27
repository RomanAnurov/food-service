import React from "react";
import "./SpecialMenu.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function SpecialMenu(props) {
  const { onBurgerPopup, onCallPopup, isOpen } = props;
  return (
    <section className="special-menu">
      <Header
        onBurgerPopup={onBurgerPopup}
        onCallPopup={onCallPopup}
        isOpen={isOpen}
      />
      <Navigation />
      <h2 className="special-menu__title">
        Тут будет страница специальное меню
      </h2>
    </section>
  );
}

export default SpecialMenu;
