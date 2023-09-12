import React from "react";
import "./FoodDelivery.css";
import "../Header/Header";
import Header from "../Header/Header";

function FoodDelivery(props) {

  const {onBurgerPopup} = props;


  return (
    <section className="fooddelivery">
      <Header onBurgerPopup={onBurgerPopup} />
      

    </section>
  )
}

export default FoodDelivery;