import React from "react";
import "./PopupBurgerMenu.scss";
import InputSearch from "../InputSearch/InputSearch";
import Navigation from "../Navigation/Navigation";
import Accordeon from "../Accordeon/Accordeon";
import Popup from "../Popup/Popup";

import SearchIcon from "../../images/buttonSearchIcon.svg";

function PopupBurgerMenu(props) {
  const { isOpen } = props;

  return (
    <Popup isOpen={isOpen} name="burger">
      <InputSearch  name="burger" placeholder="Поиск" src={SearchIcon}  />
          
      
      
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

export default PopupBurgerMenu;
