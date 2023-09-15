import React from "react";
import "./SpecialMenu.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function SpecialMenu() {
  return (
    <>
      <Header />
      <Navigation />
      <p className="special-menu">Тут будет странца специальное меню</p>
    </>
  );
}

export default SpecialMenu;
