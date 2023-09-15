import React from "react";
import "./FoodDelivery.scss";
import "../Header/Header";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function FoodDelivery(props) {

  const {onBurgerPopup} = props;


  return (
    <section className="fooddelivery">
      <Header onBurgerPopup={onBurgerPopup} />
      <Navigation />
      

    </section>
  )
}

export default FoodDelivery;