import React from "react";
import "./Button.scss";

function Button(props) {
  const { src, text, link, isBasket, isKul, isSlider, isHeader, onClick } = props;

  return (
    <button
      className={`button ${
        isBasket
          ? "button_type_basket"
          : isKul
          ? "button_type_kul"
          : isSlider
          ? "button_type_slider"
          : isHeader
          ? "button_type_header"
          : ''
      }`}
      onClick={onClick}
      type="button"
    >
      <img src={src} className="button__icon" alt="иконка" />
      <a href={link}>{text}</a>
    </button>
  );
}

export default Button;
