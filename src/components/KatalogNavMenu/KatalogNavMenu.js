import React from "react";
import "./KatalogNavMenu.scss";
import Button from "../Button/Button";
import popular from "../../images/kulinarya/popular.png";
import coldFood from "../../images/kulinarya/coldFood.png";
import salat from "../../images/kulinarya/salat.png";
import pervoe from "../../images/kulinarya/pervoe.png";
import garnir from "../../images/kulinarya/garnir.png";
import vtoroe from "../../images/kulinarya/vtoroe.png";
import checkIcon from "../../images/kulinarya/ptichka.svg";


function KatalogNavMenu() {

  return (
    <section className="katalog">
      <h2 className="katalog__title">Каталог кулинарии</h2>
      <div className="katalog__container">
        <div className="katalog__list">
          <Button src={popular} text={"Популярное"} isKul={"true"} link={"#popular"} />
          <Button src={coldFood} text={"Холодные закуски"} isKul={"true"} link={"#coldfood"} />
          <Button src={salat} text={"Салаты"} isKul={"true"} />
          <Button src={pervoe} text={"Первые блюда"} isKul={"true"} />
          <Button src={garnir} text={"Гарниры"} isKul={"true"} />
          <Button src={vtoroe} text={"Вторые блюда"} isKul={"true"} />
          <Button src={checkIcon} text={"Ещё"} isKul={"true"} />

        </div>
      </div>
    </section>


  )
}

export default KatalogNavMenu;