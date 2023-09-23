import React from "react";
import "./Button.scss";

function Button(props) {
  const { src, text, link, isBasket, isKul, isSlider } = props;

  return (
    <button
      className={`button ${
        isBasket ? "button_basket" : isKul ? "button_kul" : isSlider ? "button_slider" : ""
      }`}
      type="button"
    >
      <img src={src} className="button__icon" alt="иконка" />
      <a href={link}>{text}</a>
    </button>
  );
}

export default Button;
