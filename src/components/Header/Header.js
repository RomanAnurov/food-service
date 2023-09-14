import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import burgerIcon from "../../images/BurgerIcon.svg";
import HeaderNav from "../HeaderNav/HeaderNav";

function Header(props) {
  const {onBurgerPopup, isOpen, onClose} = props;
  return (
    <header className="header">
      <button className="header__burger" onClick={onBurgerPopup} type="button">
        <img
          src={burgerIcon}
          className="header__burger-icon"
          alt="иконка бургер меню"
        />
      </button>
      <Logo />
      <HeaderNav />
    </header>
  );
}

export default Header;
