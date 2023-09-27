import React from "react";
import "./HeaderNav.scss";
import "../Button/Button";
import Button from "../Button/Button";
import phoneIcon from "../../images/PhoneIconSvg.svg";
import favoritesIcon from "../../images/FavouritesIconSvg.svg";
import profileIcon from "../../images/ProfileIconSvg.svg";
import basketIconWhite from "../../images/BasketIconWhiteSvg.svg";

function HeaderNav(props) {
  const { onCallPopup } = props;


  return (
    <ul className="header-navigation">
      <li> <Button src={phoneIcon} text={"Позвонить"} onClick={onCallPopup} type="button" /></li>
      <li> <Button src={favoritesIcon} text={"Избранное"} /></li>
      <li> <Button src={profileIcon} text={"Профиль"} /></li>
      <li> <Button src={basketIconWhite} text={"Корзина"} isBasket={"true"} /></li>
    </ul>
  );
}

export default HeaderNav;
