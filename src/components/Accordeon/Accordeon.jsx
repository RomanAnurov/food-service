import React, { useState } from "react";
import { Data } from "../../utils/DataAccordeonBurger";
import  "./Accordeon.scss";
import iconAccordeon from '../../images/AccordeonIcon.svg';





const Accordeon = () => {


 
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (

    <section className="accordeon">
      <div className="accordeon__container">
        {Data.map((item, index) => {
          return (
            <div className="accordeon__wrap" key={index}>
              <div className={`accordeon__button ${clicked === index ?
                "accordeon__button_active" : ''}`}  onClick={() => toggle(index)}>
                <h4 className="accordeon__title">{item.title}</h4>
                <img className={`accordeon__icon ${clicked === index ? "accordeon__icon_rotate" : ''}`}
                 src={iconAccordeon} alt="иконка чекбокс"/>
              </div>
              {clicked === index ? ( 
                <div className="accordeon__dropdown"> 
                  <a className="accordeon__dropdown-link" href="/">{item.textone}</a>
                  <a className="accordeon__dropdown-link" href="/">{item.texttwo}</a>
                  <a className="accordeon__dropdown-link" href="/">{item.textthree}</a>
                  <a className="accordeon__dropdown-link" href="/">{item.textfour}</a>
                  <a className="accordeon__dropdown-link" href="/">{item.textfive}</a>
                  <a className="accordeon__dropdown-link" href="/">{item.textsix}</a>
                  <a className="accordeon__dropdown-link" href="/">{item.textseven}</a>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>


  );
};

export default Accordeon;
