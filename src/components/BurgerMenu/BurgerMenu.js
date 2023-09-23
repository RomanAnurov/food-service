import React from "react";
import "./BurgerMenu.scss";

function BurgerMenu(props) {

  const { isOpen } = props;

  return (
    <section className={`popup ${isOpen ? "popup_type_opened" : ""}`}>
      <div className="popup__container">
        
      </div>

    </section>
  )
}

export default BurgerMenu;