import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
function App() {
  return (
    <div className="page__content">
    <Routes>
      <Route path="/" element={<FoodDelivery />}/>
    </Routes>
    </div>
  );
}

export default App;