import omlet from "../images/kartochki/omlet.png";
import kapusta from "../images/kartochki/kapusta.png";
import pechenyeOvoshi from "../images/kartochki/pechenyeOvoshi.png";
import shampinyony from "../images/kartochki/shampinyony.png";

export const InitialCards = {
  getData() {
    return [
      {
        link: omlet,
        title: "Кускус с вялеными томатами",
        stikerFon: "",
        stikerText: "Сезонное",
        discription:
          "Кускус, вяленые томаты, чеснок, петрушка, соль, специи, растительное масло.",
        price: "135 Р",
        massa: "200г",
        id: "1",
      },
      {
        link: kapusta,
        title: "Капуста жаренная с грибами",
        stikerFon: "",
        stikerText: "Сезонное",
        discription:
          "Капуста белокочанная, шампиньоны, кинза, чеснок, соль, специи, растительное масло.",
        price: "140 Р",
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
        price: "250 Р",
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
        price: "135 Р",
        massa: "200г",
        id: "4",
      },
      {
        link: omlet,
        title: "Кускус с вялеными томатами",
        stikerFon: "",
        stikerText: "Сезонное",
        discription:
          "Кускус, вяленые томаты, чеснок, петрушка, соль, специи, растительное масло.",
        price: "135 Р",
        massa: "200г",
        id: "5",
      },
      {
        link: omlet,
        title: "Кускус с вялеными томатами",
        stikerFon: "",
        stikerText: "Сезонное",
        discription:
          "Кускус, вяленые томаты, чеснок, петрушка, соль, специи, растительное масло.",
        price: "135 Р",
        massa: "200г",
        id: "6",
      },
      {
        link: omlet,
        title: "Кускус с вялеными томатами",
        stikerFon: "",
        stikerText: "Сезонное",
        discription:
          "Кускус, вяленые томаты, чеснок, петрушка, соль, специи, растительное масло.",
        price: "135 Р",
        massa: "200г",
        id: "7",
      },
      {
        link: omlet,
        title: "Кускус с вялеными томатами",
        stikerFon: "",
        stikerText: "Сезонное",
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
