import React from "react";
import "./BurgerMenuPopup.scss";
import BurgerInputSearch from "../BurgerInputSearch/BurgerInputSearch";
import Navigation from "../Navigation/Navigation";
import Accordeon from "../Accordeon/Accordeon";
import Popup from "../Popup/Popup";

function BurgerMenuPopup(props) {
  const { isOpen } = props;

  return (
    <Popup isOpen={isOpen} name="burger">
      <BurgerInputSearch />
      <div className="popup__catalogs">
        <h4 className="popup__catalogs-title">Меню и каталоги</h4>
        <Navigation isBurger="true" />
      </div>
      <Accordeon />
      <a className="popup__catalogs-link" href="#grafik">
        График работы
      </a>
    </Popup>
  );
}

export default BurgerMenuPopup;
