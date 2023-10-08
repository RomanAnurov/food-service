import React, { useState } from "react";
import { Data } from "../../utils/DataAccordeonBurger";
import { DataFooter } from "../../utils/DataAccordeonFooter"
import  "./Accordeon.scss";
import iconAccordeon from '../../images/AccordeonIcon.svg';





const Accordeon = (props) => {

  const {name} = props;


 
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (

    <section className={`accordeon accordeon_type_${name}`}>
      <div className={`accordeon__container accordeon__container_type_${name}`}>
        {(name === "footer" ? DataFooter : Data).map((item, index) => {
          
          return (
            <div className={`accordeon__wrap accordeon__wrap_type_${name}`} key={index}>
              <div className={`accordeon__button accordeon__button_type_${name} ${clicked === index ?
                "accordeon__button_active" : ''}`}  onClick={() => toggle(index)}>
                <h4 className={`accordeon__title accordeon__title_type_${name}`}>{item.title}</h4>
                <img className={`accordeon__icon ${clicked === index ? "accordeon__icon_rotate" : ''}`}
                 src={iconAccordeon} alt="иконка чекбокс"/>
              </div>
              {clicked === index ? (  
                                
                <div className={`accordeon__dropdown accordeon__dropdown_type_${name}`}> 
                {item.stroke.map(({text, link}, index) => {
                  
                  return (
                  <a className={`accordeon__dropdown-link accordeon__dropdown-link_type_${name}`} href={link} key={index}>{text}</a>
                  )})}
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
