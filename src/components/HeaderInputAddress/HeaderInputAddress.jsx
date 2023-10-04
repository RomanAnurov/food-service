import React from "react";
import "./HeaderInputAddress.scss";

function HeaderInputAddress(props) {

  const { onAddressPopup, onAddressSavePopup } = props;
  return (
    <form className="addressform">

      <div className="addressform__container">
        <button className="addressform__geo-button" type="button" onClick={onAddressPopup}></button>
        <input className="addressform__input" placeholder="Укажите адрес доставки" />
        <button className="addressform__edit-button" type="button" onClick={onAddressSavePopup}></button>
      </div>
    </form>
  );
}

export default HeaderInputAddress;
