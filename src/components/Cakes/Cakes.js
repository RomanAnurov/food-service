import React from "react";
import "./Cakes.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Cakes() {
  return (
    <><Header />
    <Navigation />
    <p className="cakes">Здесь будут торты</p>
    </>
  )
}

export default Cakes;