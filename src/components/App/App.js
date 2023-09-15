import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
import Cakes from "../Cakes/Cakes";
import SpecialMenu from "../SpecialMenu/SpecialMenu";


function App() {
  return (
    <div className="page__content">
    <Routes>
      <Route path="/" element={<FoodDelivery />}/>
      <Route path="/cakes" element={<Cakes />}/>
      <Route path="/special-menu" element={<SpecialMenu />}/>
    </Routes>
    </div>
  );
}

export default App;