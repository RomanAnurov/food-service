import React from "react";
import "./SpecialMenu.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function SpecialMenu(props) {
  const { onBurgerPopup, onCallPopup, isOpen, onAddressPopup, onAddressSavePopup } = props;
  return (
    <section className="special-menu">
      <Header
        onBurgerPopup={onBurgerPopup}
        onCallPopup={onCallPopup}
        isOpen={isOpen}
        onAddressPopup={onAddressPopup}
        onAddressSavePopup={onAddressSavePopup}
      />
      <Navigation />
      <h2 className="special-menu__title">
        Тут будет страница специальное меню
      </h2>
    </section>
  );
}

export default SpecialMenu;
