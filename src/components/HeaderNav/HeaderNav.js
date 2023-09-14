import React from "react";
import "./HeaderNav.scss";
import "../Button/Button";
import Button from "../Button/Button";
import phoneIcon from "../../images/PhoneIconSvg.svg";
import favoritesIcon from "../../images/FavouritesIconSvg.svg";
import profileIcon from "../../images/ProfileIconSvg.svg";
import basketIconWhite from "../../images/BasketIconWhiteSvg.svg";

function HeaderNav() {
  return (
    <div className="header-navigation">
      <Button src={phoneIcon} text={"Позвонить"}/>
      <Button src={favoritesIcon} text={"Избранное"}/>
      <Button src={profileIcon} text={"Профиль"} />
      <Button src={basketIconWhite} text={"Корзина"} isBasket={"true"}/>
    </div>
  );
}

export default HeaderNav;
