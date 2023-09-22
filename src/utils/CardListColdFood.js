import kuskus from "../images/kartochki/kuskus.png";
import kapusta from "../images/kartochki/kapusta.png";
import pechenyeOvoshi from "../images/kartochki/pechenyeOvoshi.png";
import shampinyony from "../images/kartochki/shampinyony.png";
import kapustaTwo from "../images/kartochki/kapusta2.png";
import pechenyeOvoshiTwo from "../images/kartochki/pechenye2.png";
import shampinyonyTwo from "../images/kartochki/shampinyony2.png";
import kuskusTwo from "../images/kartochki/kuskus2.png";


export const CardsColdFood = {
  getData() {
    return [
      {
        link: kuskusTwo,
        title: "Кускус с вялеными томатами",
        stikerFon: "sezonnoe",
        stikerText: "Сезонное",
        discription:
          "Кускус, вяленые томаты, чеснок, петрушка, соль, специи, растительное масло.",
        price: "135 Р",
        massa: "200г",
        id: "1",
      },
      {
        link: kuskusTwo,
        title: "Капуста жаренная с грибами",
        stikerFon: "sezonnoe",
        stikerText: "Сезонное",
        discription:
          "Капуста белокочанная, шампиньоны, кинза, чеснок, соль, специи, растительное масло.",
        price: "140 Р",
        massa: "200г",
        id: "2",
      },
      {
        link: pechenyeOvoshiTwo,
        title: "Печеные овощи с соусом песто",
        stikerFon: "procenty",
        stikerText: "20%",
        discription:
          "Кабачок, баклажан, помидор, лук репчатый, чеснок, растительное масло, соус песто",
        price: "250 Р",
        massa: "200г",
        id: "3",
      },
      {
        link: shampinyonyTwo,
        title: "Шампиньоны маринованные",
        stikerFon: "procenty",
        stikerText: "-35%",
        discription:
          "Шампиньоны ,лук репчатый, душистое масло, зелень, чеснок ",
        price: "238 Р",
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
        price: "140 Р",
        massa: "200г",
        id: "5",
      },
      {
        link: pechenyeOvoshiTwo,
        title: "Печеные овощи с соусом песто",
        stikerFon: "",
        stikerText: "",
        discription:
          "Кабачок, баклажан, помидор, лук репчатый, чеснок, растительное масло, соус песто ",
        price: "250 Р",
        massa: "200г",
        id: "6",
      },
      {
        link: shampinyonyTwo,
        title: "Шампиньоны маринованные",
        stikerFon: "",
        stikerText: "",
        discription:
          "Шампиньоны, лук репчатый, душистое масло, зелень, чеснок ",
        price: "238 Р",
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
        price: "135 Р",
        massa: "200г",
        id: "8",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
