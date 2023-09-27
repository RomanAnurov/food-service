import React from "react";
import "./PopupAddress.scss";
import Popup from "../Popup/Popup";
import InputSearch from "../InputSearch/InputSearch";

function PopupAddress(props) {
  const { isOpen } = props;
  return (
    <Popup isOpen={isOpen} name="address">
      <h2 className="popup__address-title">Укажите адрес доставки</h2>
      <InputSearch
        name="address"
        text="Поиск"
        placeholder="Укажите адрес доставки"
      />
      <div className="popup__address-map">Тут будет карта</div>
    </Popup>
  );
}

export default PopupAddress;
