import React from "react";
import "./BurgerInputSearch.scss";

function BurgerInputSearch() {
  return (
    <form className="searchfood">
      <input className="searchfood__input" placeholder="Поиск"/>
      <button className="searchfood__button" type="submit"></button>
    </form>
  );
}

export default BurgerInputSearch;
