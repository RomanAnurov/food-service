import React from "react";
import "./FoodDelivery.scss";
import "../Header/Header";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import MenuGallery from "../MenuGallery/MenuGallery";
import KatalogNavMenu from "../KatalogNavMenu/KatalogNavMenu";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";



function FoodDelivery(props) {

  const {onBurgerPopup} = props;


  return (
    <section className="fooddelivery">
      <Header onBurgerPopup={onBurgerPopup} />
      <Navigation />
      <MenuGallery />
      <KatalogNavMenu />
      <CardList  title={"Популярное"} id={"popular"}/>
      <CardList  title={"Холодные закуски"} isSecondNumber="true"  id={"coldfood"}/>
      <Footer />
      

    </section>
  )
}

export default FoodDelivery;