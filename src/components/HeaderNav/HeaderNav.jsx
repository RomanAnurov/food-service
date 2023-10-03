import React from "react";
import { useEffect, useState } from "react";
import "./HeaderNav.scss";
import "../Button/Button";
import Button from "../Button/Button";
import phoneIcon from "../../images/PhoneIconSvg.svg";
import phoneIconMob from "../../images/PhoneIconMob.svg";
import favouritesIcon from "../../images/FavouritesIconSvg.svg";
import favouritesIconMob from "../../images/FavouritesIconMob.svg";
import profileIcon from "../../images/ProfileIconSvg.svg";
import basketIconWhite from "../../images/BasketIconWhiteSvg.svg";
import basketIconMob from "../../images/BasketIconMob.svg";

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
      <li className="header-navigation__link">
        
        <Button
          src={screenWidth <= 768 ? phoneIconMob : phoneIcon}
          text={"Позвонить"}
          isHeader={"true"}
          onClick={onCallPopup}
          type="button"
        />
      </li>
      <li className="header-navigation__link">
        
        <Button
          src={screenWidth <= 768 ? favouritesIconMob : favouritesIcon}
          text={"Избранное"}
          isHeader={"true"}
        />
      </li>
      <li className="header-navigation__link">
        
        <Button src={profileIcon} text={"Профиль"} isHeader={"true"} />
      </li>
      <li className="header-navigation__link">
        
        <Button
          src={screenWidth <= 768 ? basketIconMob : basketIconWhite}
          text={"Корзина"}
          isBasket={"true"}
        />
      </li>
    </ul>
  );
}

export default HeaderNav;
