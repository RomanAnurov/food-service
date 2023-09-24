import React, { useState } from "react";
import { Data } from "../../utils/DataAccordeonBurger";
import { FiPlus, FiMinus } from "react-icons/fi";
import  "./Accordeon.scss";





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
            <li className="accordeon__wrap" key={index}>
              <div className={`accordeon__button ${clicked === index ?
                "accordeon__button_active" : ''}`}  onClick={() => toggle(index)} key={index}>
                <h4 className="accordeon__title">{item.title}</h4>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
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
            </li>
          );
        })}
      </div>
    </section>


  );
};

export default Accordeon;
