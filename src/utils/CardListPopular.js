import kuskus from "../images/kartochki/kuskus.png";
import kapusta from "../images/kartochki/kapusta.png";
import pechenyeOvoshi from "../images/kartochki/pechenyeOvoshi.png";
import shampinyony from "../images/kartochki/shampinyony.png";
import kapustaTwo from "../images/kartochki/kapusta2.png";
import pechenyeOvoshiTwo from "../images/kartochki/pechenye2.png";
import shampinyonyTwo from "../images/kartochki/shampinyony2.png";
import kuskusTwo from "../images/kartochki/kuskus2.png";


export const CardsPopular = {
  getData() {
    return [
      {
        link: kuskus,
        title: "Кускус с вялеными томатами",
        stikerFon: "sezonnoe",
        stikerText: "Сезонное",
        discription:
          "Кускус, вяленые томаты, чеснок, петрушка, соль, специи, растительное масло.",
          skidka: "150",
        price: "135",
        massa: "200г",
        id: "1",
      },
      {
        link: kapusta,
        title: "Капуста жаренная с грибами",
        stikerFon: "sezonnoe",
        stikerText: "Сезонное",
        discription:
          "Капуста белокочанная, шампиньоны, кинза, чеснок, соль, специи, растительное масло.",
          skidka: "150",
        price: "140",
        massa: "200г",
        id: "2",
      },
      {
        link: pechenyeOvoshi,
        title: "Печеные овощи с соусом песто",
        stikerFon: "procenty",
        stikerText: "-20%",
        discription:
          "Кабачок, баклажан, помидор, лук репчатый, чеснок, растительное масло, соус песто",
          skidka: "290",
        price: "250",
        massa: "200г",
        id: "3",
      },
      {
        link: shampinyony,
        title: "Шампиньоны маринованные",
        stikerFon: "procenty",
        stikerText: "-35%",
        discription:
          "Шампиньоны ,лук репчатый, душистое масло, зелень, чеснок ",
          skidka: "270",
        price: "238",
        massa: "200г",
        id: "4",
      },
      {
        link: kapustaTwo,
        title: "Капуста жаренная с грибами",
        stikerFon: "sezonnoe",
        stikerText: "Сезонное",
        discription:
          "Капуста белокочанная, шампиньоны, кинза, чеснок, соль, специи, растительное масло.",
          skidka: "175",
        price: "140",
        massa: "200г",
        id: "5",
      },
      {
        link: pechenyeOvoshiTwo,
        title: "Печеные овощи с соусом песто",
        stikerFon: "nonstiker",
        stikerText: "",
        discription:
          "Кабачок, баклажан, помидор, лук репчатый, чеснок, растительное масло, соус песто ",
          skidka: "290",
        price: "250",
        massa: "200г",
        id: "6",
      },
      {
        link: shampinyonyTwo,
        title: "Шампиньоны маринованные",
        stikerFon: "nonstiker",
        stikerText: "",
        discription:
          "Шампиньоны, лук репчатый, душистое масло, зелень, чеснок ",
          skidka: "290",
        price: "238",
        massa: "200г",
        id: "7",
      },
      {
        link: kuskusTwo,
        title: "Кускус с вялеными томатами",
        stikerFon: "novinka",
        stikerText: "Новинка",
        discription:
          "Кускус, вяленые томаты, чеснок, петрушка, соль, специи, растительное масло.",
          skidka: "175",
        price: "135",
        massa: "200г",
        id: "8",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
