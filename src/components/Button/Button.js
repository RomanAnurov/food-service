import React from "react";
import "./Button.scss";

function Button(props) {
  const { src, text, isBasket } = props;

  return (
    <button className={`button ${isBasket ? "button_basket" : ''}`} type="button">
      <img src={src} className="button__icon" alt="иконка" />
      {text}
    </button>
  );
}

export default Button;
