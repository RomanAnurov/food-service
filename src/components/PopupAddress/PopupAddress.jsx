import React from "react";
import "./PopupAddress.scss";
import Popup from "../Popup/Popup";
import InputSearch from "../InputSearch/InputSearch";

function PopupAddress(props) {
  const { isOpen, onClose } = props;
  return (
    <Popup isOpen={isOpen} name="address">
      <button
          className="popup__close"
          onClick={onClose}
          type="button"
        ></button>
      <h2 className="popup__title popup__title_type_address">Укажите адрес доставки</h2>
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
