import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
import Cakes from "../Cakes/Cakes";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function burgerPopupOpen() {
    setIsOpenPopup(true);
  }

  function burgerPopupClose() {
    setIsOpenPopup(false);
  }

  function handleBurgerPopup() {
    isOpenPopup ? burgerPopupClose() : burgerPopupOpen();
  }

  return (
    <div className="page__content">
      <Routes>
        <Route
          path="/"
          element={
            <FoodDelivery
              onOpenClosePopup={handleBurgerPopup}
              isOpen={isOpenPopup}
            />
          }
        />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/special-menu" element={<SpecialMenu />} />
      </Routes>
      <BurgerMenu isOpen={isOpenPopup} />
    </div>
  );
}

export default App;
