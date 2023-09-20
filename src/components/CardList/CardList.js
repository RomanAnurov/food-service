import React from "react";
import { useState, useEffect } from "react";
import "./CardList.scss";
import { InitialCards } from "../../utils/CardList";
import Card from "../Card/Card";

function CardList(props) {

  const { title } = props;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    InitialCards.getImages().then((data) => setCards(data));
  }, []);

  return (
    <div className="card-container">
      <h3 className="card-container__title">{title}</h3>
      <ul className="card-container__list">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Card card={card}  />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardList;
