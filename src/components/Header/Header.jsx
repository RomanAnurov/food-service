import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import burgerIcon from "../../images/BurgerIcon.svg";
import burgerIconClose from "../../images/burgerIconClose.svg";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderInputAddress from "../HeaderInputAddress/HeaderInputAddress";

function Header(props) {

  const { onBurgerPopup, onCallPopup, onAddressPopup, isOpen } = props;


  return (
    <header className="header" id="fooddelivery">
      <button className="header__burger" onClick={onBurgerPopup} type="button">
        <img
          src={isOpen ? burgerIconClose : burgerIcon}
          className="header__burger-icon"
          alt="иконка бургер меню"
        />
      </button>
      <Logo />
      <HeaderInputAddress onAddressPopup={onAddressPopup}/>
      <HeaderNav onCallPopup={onCallPopup}  />
    </header>
  );
}

export default Header;
