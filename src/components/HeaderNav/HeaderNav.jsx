import React from "react";
import { useEffect, useState } from "react";
import "./HeaderNav.scss";
import "../Button/Button";
import Button from "../Button/Button";
import phoneIcon from "../../images/PhoneIconSvg.svg";
import favoritesIcon from "../../images/FavouritesIconSvg.svg";
import profileIcon from "../../images/ProfileIconSvg.svg";
import basketIconWhite from "../../images/BasketIconWhiteSvg.svg";
import basketIconBlack from "../../images/BasketIconBlackSvg.svg";

function HeaderNav(props) {
  const { onCallPopup } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = (event) => {
    setScreenWidth(event.target.innerWidth);
  };
  
      useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


  return (
    <ul className="header-navigation">
      <li> <Button src={phoneIcon} text={"Позвонить"} isHeader={"true"} onClick={onCallPopup} type="button" /></li>
      <li> <Button src={favoritesIcon} text={"Избранное"} isHeader={"true"} /></li>
      <li> <Button src={profileIcon} text={"Профиль"} isHeader={"true"}/></li>
      <li> <Button src={screenWidth < 768 ? basketIconBlack : basketIconWhite} text={"Корзина"} isBasket={"true"} /></li>
    </ul>
  );
}

export default HeaderNav;
