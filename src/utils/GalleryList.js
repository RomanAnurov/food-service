import kulichi from "../images/vitrina/kulichi.png";
import kompoty from "../images/vitrina/kompoty.png";
import brusketta from "../images/vitrina/brusketta.png";
import tortik from "../images/vitrina/tortik.png";
import postnoe from "../images/vitrina/postnoe.png";
import graffik from "../images/vitrina/graffik.png";

export const GalleryList = {
  getData() {
    return [
      {
        itemImageSrc: kulichi,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',*/
        alt: "Картинка",
        title: "Пасхальные куличи от 320 руб.",
      },
      {
        itemImageSrc: kompoty,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',*/
        alt: "Картинка",
        title: "Новые морсы и компоты",
      },
      {
        itemImageSrc: brusketta,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',*/
        alt: "Картинка",
        title: "Брускетта с вялеными томатами и курицей",
      },
      {
        itemImageSrc: tortik,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',*/
        alt: "Картинка",
        title: "Хотете сладкого?",
      },
      {
        itemImageSrc: postnoe,
        /* thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',*/
        alt: "Картинка",
        title: "Постное меню",
      },
      {
        itemImageSrc: graffik,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',*/
        alt: "Картинка",
        title: "График работы на праздниках",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
