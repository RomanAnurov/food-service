import React from "react";
import "./FoodDelivery.scss";
import "../Header/Header";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import MenuGallery from "../MenuGallery/MenuGallery";

function FoodDelivery(props) {

  const {onBurgerPopup} = props;


  return (
    <section className="fooddelivery">
      <Header onBurgerPopup={onBurgerPopup} />
      <Navigation />
      <MenuGallery />
      

    </section>
  )
}

export default FoodDelivery;