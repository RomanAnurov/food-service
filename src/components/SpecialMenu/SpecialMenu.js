import React from "react";
import "./SpecialMenu.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function SpecialMenu() {
  return (
    <>
      <Header />
      <Navigation />
      <h2 className="special-menu">Тут будет страница специальное меню</h2>
    </>
  );
}

export default SpecialMenu;
