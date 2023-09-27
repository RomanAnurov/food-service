import React from "react";
import "./PopupCall.scss";
import Popup from "../Popup/Popup";

function PopupCall(props) {
  const { isOpen } = props;

  return (
    <Popup isOpen={ isOpen } name="call">
      <div className="popup__telephones">
        <h4 className="popup__telephones-title">Служба доставки</h4>
        <p className="popup__telephone">+7 (999) 999-99-99</p>
      </div>

      <div className="popup__telephones">
        <h4 className="popup__telephones-title">Торты на заказ</h4>
        <p className="popup__telephone">+7 (999) 999-99-99</p>
      </div>

      <div className="popup__telephones">
        <h4 className="popup__telephones-title">Магазины</h4>
        
        <ul className="popup__shops-info">
          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>
          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>
          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>
          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>
          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>
          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>
          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>

          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>

          <li className="popup__shops-item">
            <p className="popup__shops-address">ул. Московская, 1</p>
            <p className="popup__telephone">+7 (999) 999-99-99</p>
          </li>
        </ul>
      </div>
    </Popup>
  );
}

export default PopupCall;
