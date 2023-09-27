import React from "react";
import "./HeaderInputAddress.scss";

function HeaderInputAddress() {
  return (
    <form className="addressform">
      
        <button className="addressform__geo-button" type="button"></button>
        <input className="addressform__input" placeholder="Укажите адрес доставки"/>
        <button className="addressform__edit-button" type="button"></button>
      
    </form>
  );
}

export default HeaderInputAddress;
