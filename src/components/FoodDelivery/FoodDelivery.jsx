import React from "react";
import { useEffect, useState } from "react";
import "./FoodDelivery.scss";
import "../Header/Header";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import MenuGallery from "../MenuGallery/MenuGallery";
import KatalogNavMenu from "../KatalogNavMenu/KatalogNavMenu";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";
import HeaderInputAddress from "../HeaderInputAddress/HeaderInputAddress";

function FoodDelivery(props) {
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
    <section className="fooddelivery">
      <Header
        onBurgerPopup={onBurgerPopup}
        onCallPopup={onCallPopup}
        onAddressPopup={onAddressPopup}
        onAddressSavePopup={onAddressSavePopup}
        isOpen={isOpen}
      />
       
      <Navigation />
      <MenuGallery />
      <KatalogNavMenu />
      <CardList title={"Популярное"} id={"popular"} />
      <CardList
        title={"Холодные закуски"}
        isSecondNumber="true"
        id={"coldfood"}
      />

      <Footer />
    </section>
  );
}

export default FoodDelivery;
