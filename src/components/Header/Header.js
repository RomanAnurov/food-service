import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import burgerIcon from "../../images/BurgerIcon.svg";

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
    </header>
  );
}

export default Header;
