import React from "react";
import "./PopupAddressSave.scss";
import Popup from "../Popup/Popup";
import iconCheck from "../../images/AddressIconCheckRed.svg";

function PopupAddressSave(props) {
  const { isOpen, onAddressPopup } = props;
  return (
    <Popup isOpen={isOpen} name="addressuser">
       <div className="popup__title-container"><h2 className="popup__title popup__title_type_addressuser">Укажите адрес доставки</h2>
      <button
        className="popup__button"
        onClick={onAddressPopup}
        type="button"
      ></button></div>
      <ul className="popup__address">
        <li className="popup__address-cotainer">
          <p className="popup__address-text popup__address-text_active">
            Никитинская 42
          </p>
          <img className="popup__address-icon" src={iconCheck} alt="иконка" />
        </li>
        <li className="popup__address-cotainer">
          <p className="popup__address-text popup__address-text_active">
          пл. Ленина 12а, д. 42
          </p>
          <img className="popup__address-icon" src={iconCheck} alt="иконка" />
        </li>
      </ul>
    </Popup>
  );
}

export default PopupAddressSave;
