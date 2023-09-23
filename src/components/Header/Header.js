import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import burgerIcon from "../../images/BurgerIcon.svg";
import burgerIconClose from "../../images/burgerIconClose.svg";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderInputAddress from "../HeaderInputAddress/HeaderInputAddress";

function Header(props) {

  const {onOpenClosePopup, isOpen} = props;

 
  return (
    <header className="header" id="fooddelivery">
      <button className="header__burger" onClick={onOpenClosePopup} type="button">
        <img
          src={isOpen ? burgerIconClose : burgerIcon }
          className="header__burger-icon"
          alt="иконка бургер меню"
        />
      </button>
      <Logo />
      <HeaderInputAddress />
      <HeaderNav />
    </header>
  );
}

export default Header;
