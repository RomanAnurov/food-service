import React from "react";
import "./Card.sccs";


function Card(props) {
  const { card }= props;



  return (
    <div className="card">
      <div className="card__container-image">
        <img className="card__image" src={card.link} alt={card.name} />
       

      </div>

    </div>

  )

}

export default Card;