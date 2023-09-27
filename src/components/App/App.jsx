import React from "react";
import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
import Cakes from "../Cakes/Cakes";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import PopupBurgerMenu from "../PopupBurgerMenu/PopupBurgerMenu";
import PopupCall from "../PopupCall/PopupCall";
import PopupAddress from "../PopupAddress/PopupAddress";

function App() {
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);
  const[isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);

  function handleBurgerPopupOpen() {
    setIsBurgerPopupOpen(true);
  }

  function handleBurgerPopupClose() {
    setIsBurgerPopupOpen(false);
  }


  function handleCallPopupOpen() {
    setIsCallPopupOpen(true);
  }

  function handleCallPopupClose() {
    setIsCallPopupOpen(false);
  }

  function handleAddressPopupOpen() {
    setIsAddressPopupOpen(true);
  }


  function handlePopupOpenCloseBurger() {
    isBurgerPopupOpen ? handleBurgerPopupClose() : handleBurgerPopupOpen();
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
              onAddressPopup={handleAddressPopupOpen}
            />
          }
        />
        <Route
          path="/cakes"
          element={
            <Cakes
              onBurgerPopup={handlePopupOpenCloseBurger}
              isOpen={isBurgerPopupOpen}
              onCallPopup={handlePopupOpenCloseCall}
            />
          }
        />
        <Route
          path="/special-menu"
          element={
            <SpecialMenu
              onBurgerPopup={handlePopupOpenCloseBurger}
              isOpen={isBurgerPopupOpen}
              onCallPopup={handlePopupOpenCloseCall}
            />
          }
        />
      </Routes>
      <PopupBurgerMenu isOpen={isBurgerPopupOpen} />
      <PopupCall isOpen={isCallPopupOpen} />
      <PopupAddress isOpen={isAddressPopupOpen} />
    </div>
  );
}

export default App;
