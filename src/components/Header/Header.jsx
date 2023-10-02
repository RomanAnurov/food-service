import React from "react";
import { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import burgerIcon from "../../images/BurgerIcon.svg";
import burgerIconClose from "../../images/burgerIconClose.svg";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderInputAddress from "../HeaderInputAddress/HeaderInputAddress";

function Header(props) {

  const { onBurgerPopup, onCallPopup, onAddressPopup, onAddressSavePopup, isOpen } = props;
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
    <header className="header" id="fooddelivery">
      <div className="header__container">
      
      <button className="header__burger" onClick={onBurgerPopup} type="button">
        <img
          src={isOpen ? burgerIconClose : burgerIcon}
          className="header__burger-icon"
          alt="иконка бургер меню"
        />
      </button>
      <Logo />
      {screenWidth >= 525 &&
      <HeaderInputAddress onAddressPopup={onAddressPopup} onAddressSavePopup={onAddressSavePopup} />}
      <HeaderNav onCallPopup={onCallPopup}  />
      </div>
      {screenWidth < 525 &&
      <HeaderInputAddress onAddressPopup={onAddressPopup} onAddressSavePopup={onAddressSavePopup} />}
   
     
      
    </header>
  );
}

export default Header;

  {/*  const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

    const { locale } = useRouter();

    React.useEffect(() => {
        const handleResize = (event: any) => {
            setWidthWindow(event.target.innerWidth);
        };
        setWidthWindow(window.innerWidth)
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={style.ImmediateRent}>
                {/* <div dir="ltr" className={style.vision__img}>
            {widthWindow == null ? "" : widthWindow < 991 ? 
            theme === "theme-dark" ?  <MissionMobSVG /> : <MissionMobLightSVG />
            :
            theme === "theme-dark" ?  <MissionSVG /> : <MissionLightSVG />
            }
                           
            </div>   */}

            {/*    <div className={cl(style.ImmediateRent__img,
                    locale === "ar" && style.ImmediateRent__img_ar
                )}>
                    {widthWindow == null ? "" : (widthWindow < 1025 && widthWindow >= 525 ) ?
                        theme === "theme-light" ? <AboutDequityLightTabletSVG /> : <AboutDequityTabletSVG />
                        : widthWindow < 525 ?
                        theme === "theme-light" ? <AboutDequityLightMobSVG /> : <AboutDequityMobSVG />
                        :
                        theme === "theme-light" ? <AboutDequityLightSVG /> : <AboutDequitySVG />
                    }
                </div>  */}
