import React from "react";
import "./Cakes.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Cakes() {
  return (
    <section className="cakes">
      <Header />
      <Navigation />

      <h2 className="cakes__title">Здесь будет страница торты</h2>
    </section>
  );
}

export default Cakes;
