import React from "react";
import { useState, useEffect } from "react";
import "./CardList.scss";
import { CardsPopular } from "../../utils/CardListPopular";
import { CardsColdFood } from "../../utils/CardListColdFood";

import Card from "../Card/Card";

function CardList(props) {
  const { title, isSecondNumber } = props;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    isSecondNumber
      ? CardsColdFood.getImages().then((data) => setCards(data))
      : CardsPopular.getImages().then((data) => setCards(data));
  }, []);

  return (
    <div className="card-container">
      <h3
        className={`card-container__title ${
          isSecondNumber && "card-container__title_second"
        }`}
      >
        {title}
      </h3>
      <ul className="card-container__list">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Card card={card} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardList;
