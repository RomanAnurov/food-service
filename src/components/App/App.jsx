import React from "react";
import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
import Cakes from "../Cakes/Cakes";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";
import PopupCall from "../PopupCall/PopupCall";

function App() {
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);

  function handleBurgerPopupOpen() {
    setIsBurgerPopupOpen(true);
  }

  function handleBurgerPopupClose() {
    setIsBurgerPopupOpen(false);
  }

  function handlePopupOpenCloseBurger() {
    isBurgerPopupOpen ? handleBurgerPopupClose() : handleBurgerPopupOpen();
  }

  function handleCallPopupOpen() {
    setIsCallPopupOpen(true);
  }

  function handleCallPopupClose() {
    setIsCallPopupOpen(false);
  }

  function handlePopupOpenCloseCall() {
    isCallPopupOpen ? handleCallPopupClose() : handleCallPopupOpen();
  }

  return (
    <div className="page__content">
      <Routes>
        <Route
          path="/"
          element={
            <FoodDelivery
              onBurgerPopup={handlePopupOpenCloseBurger}
              isOpen={isBurgerPopupOpen}
              onCallPopup={handlePopupOpenCloseCall}
            />
          }
        />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/special-menu" element={<SpecialMenu />} />
      </Routes>
      <BurgerMenuPopup isOpen={isBurgerPopupOpen} />
      <PopupCall isOpen={isCallPopupOpen} />
    </div>
  );
}

export default App;
