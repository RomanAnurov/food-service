import React from "react";
import "./Popup.scss";

function Popup(props) {
  const { isOpen, name, children } = props;

  return (
    <section
      className={`popup popup_type_${name} ${
        isOpen ? "popup_type_opened" : ""
      }`}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
      </div>
    </section>
  );
}

export default Popup;
