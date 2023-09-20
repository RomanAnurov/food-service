import React from "react";
import { useState, useEffect } from "react";
import "./Card.scss";

import Button from "../Button/Button";

import basketIcon from "../../images/BasketIconWhiteSvg.svg";

function Card(props) {
  const { card } = props;

  const [isFavorites, setIsFavorites] = useState(false);

  const cardFavoritesButtonClassName = `card__like ${
    isFavorites && "card__like_active"
  }`;

  function handleFavoritesCard() {
    if (!isFavorites) {
      setIsFavorites(true);
    } else {
      setIsFavorites(false);
    }
  }

  return (
    <div className="card">
      <div className="card__container-image">
        <img className="card__image" src={card.link} alt={card.title} />
        <button
          className={cardFavoritesButtonClassName}
          onClick={handleFavoritesCard}
          type="button"
        ></button>

        <div
          className={`card__stiker ${
            card.stikerFon === "procenty"
              ? "card__stiker_skidka"
              : card.stikerFon === "novinka"
              ? "card__stiker_novinka"
              : ""
          }`}
        >
          <p className="card__stiker-text">{card.stikerText}</p>
        </div>
      </div>
      <h3 className="card__title">{card.title}</h3>
      <p className="card__discription">{card.discription}</p>
      <div className="card__info">
      <p className="card__price">{card.price}</p>
      <p className="card__massa">{card.massa}</p>
      <Button isBasket="true" text="В корзину" src={basketIcon} />
      </div>
    </div>
  );
}

export default Card;
