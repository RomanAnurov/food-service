import React, { useEffect, useState, useCallback } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
import Cakes from "../Cakes/Cakes";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import PopupBurgerMenu from "../PopupBurgerMenu/PopupBurgerMenu";
import PopupCall from "../PopupCall/PopupCall";
import PopupAddress from "../PopupAddress/PopupAddress";
import PopupAddressSave from "../PopupAddressSave/PopupAddressSave";

function App() {
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);
  const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);
  const [isAddressSavePopupOpen, setIsAddressSavePopupOpen] = useState(false);

  useEffect(() => {
    isCallPopupOpen && handleAddressSavePopupClose();
    isCallPopupOpen && handleBurgerPopupClose();
  }, [isCallPopupOpen]);

  useEffect(() => {
    isAddressPopupOpen && handleAddressSavePopupClose();
    isAddressPopupOpen && handleCallPopupClose();
    isAddressPopupOpen && handleBurgerPopupClose();
  }, [isAddressPopupOpen]);

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

  function handleAddressPopupClose() {
    setIsAddressPopupOpen(false);
  }
  function handlePopupOpenCloseBurger() {
    isBurgerPopupOpen ? handleBurgerPopupClose() : handleBurgerPopupOpen();
  }

  function handlePopupOpenCloseCall() {
    isCallPopupOpen ? handleCallPopupClose() : handleCallPopupOpen();
  }

  function handleAddressSavePopupOpen() {
    setIsAddressSavePopupOpen(true);
  }

  function handleAddressSavePopupClose() {
    setIsAddressSavePopupOpen(false);
  }

  function handleAddressSavePopupCloseOpen() {
    isAddressSavePopupOpen
      ? handleAddressSavePopupClose()
      : handleAddressSavePopupOpen();
  }

  // Функция закрывает все попапы

  function closeAllPopups() {
    setIsBurgerPopupOpen(false);
    setIsCallPopupOpen(false);
    setIsAddressPopupOpen(false);
    setIsAddressSavePopupOpen(false);
  }

  //Закрытие попапа Esc

  const handleEscClose = useCallback((event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  }, []);

  useEffect(() => {
    const isAnyPopupOpen =
      isBurgerPopupOpen ||
      isAddressPopupOpen ||
      isAddressSavePopupOpen ||
      isCallPopupOpen;
    if (isAnyPopupOpen) {
      document.addEventListener("keydown", handleEscClose);
    } else {
      document.removeEventListener("keydown", handleEscClose);
    }
  }, [
    isBurgerPopupOpen,
    isAddressPopupOpen,
    isAddressSavePopupOpen,
    isCallPopupOpen,
    handleEscClose,
  ]);

  // Закрытие попаов при клике вне попапа

  const handleMouseClose = useCallback((event) => {
    if (
      event.target.classList.contains("popup") ||
      !event.target.classList.contains("popup")
    ) {
      closeAllPopups();
    }
  }, []);

  useEffect(() => {
    const isAnyPopupOpen =
      isBurgerPopupOpen ||
      isAddressPopupOpen ||
      isAddressSavePopupOpen ||
      isCallPopupOpen;
    if (isAnyPopupOpen) {
      document.addEventListener("mousedown", handleMouseClose);
    } else {
      document.removeEventListener("mousedown", handleMouseClose);
    }
  }, [
    isBurgerPopupOpen,
    isAddressPopupOpen,
    isAddressSavePopupOpen,
    isCallPopupOpen,
    handleMouseClose,
  ]);

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
              onAddressSavePopup={handleAddressSavePopupCloseOpen}
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
              onAddressPopup={handleAddressPopupOpen}
              onAddressSavePopup={handleAddressSavePopupCloseOpen}
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
              onAddressPopup={handleAddressPopupOpen}
              onAddressSavePopup={handleAddressSavePopupCloseOpen}
            />
          }
        />
      </Routes>
      <PopupBurgerMenu isOpen={isBurgerPopupOpen} />
      <PopupCall isOpen={isCallPopupOpen} onClose={handleCallPopupClose} />
      <PopupAddress
        isOpen={isAddressPopupOpen}
        onClose={handleAddressPopupClose}
      />
      <PopupAddressSave
        isOpen={isAddressSavePopupOpen}
        onAddressPopup={handleAddressPopupOpen}
        onClose={handleAddressSavePopupClose}
      />
    </div>
  );
}

export default App;
