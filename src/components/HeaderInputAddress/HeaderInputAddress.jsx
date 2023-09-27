import React from "react";
import "./HeaderInputAddress.scss";

function HeaderInputAddress(props) {

  const {onAddressPopup} = props;
  return (
    <form className="addressform">
      
        <button className="addressform__geo-button" type="button"></button>
        <input className="addressform__input" placeholder="Укажите адрес доставки"/>
        <button className="addressform__edit-button" onClick={onAddressPopup} type="button"></button>
      
    </form>
  );
}

export default HeaderInputAddress;
