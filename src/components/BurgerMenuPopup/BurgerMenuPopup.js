import React from "react";
import "./BurgerMenuPopup.scss";
import BurgerInputSearch from "../BurgerInputSearch/BurgerInputSearch";
import Navigation from "../Navigation/Navigation";

function BurgerMenuPopup(props) {

  const { isOpen } = props;

  return (
    <section className={`popup ${isOpen ? "popup_type_opened" : ""}`}>
      <div className="popup__container">
        <BurgerInputSearch />
        <div className="popup__catalogs">
          <h4 className="popup__catalogs-title">Меню и каталоги</h4>
          <Navigation isBurger="true"/>


        </div>
        
      </div>

    </section>
  )
}

export default BurgerMenuPopup;