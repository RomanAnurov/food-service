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
        alt: "Description for Image 1",
        title: "Title 1",
      },
      {
        itemImageSrc: kompoty,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',*/
        alt: "Description for Image 2",
        title: "Title 2",
      },
      {
        itemImageSrc: brusketta,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',*/
        alt: "Description for Image 3",
        title: "Title 3",
      },
      {
        itemImageSrc: tortik,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',*/
        alt: "Description for Image 4",
        title: "Title 4",
      },
      {
        itemImageSrc: postnoe,
        /* thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',*/
        alt: "Description for Image 5",
        title: "Title 5",
      },
      {
        itemImageSrc: graffik,
        /*thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',*/
        alt: "Description for Image 6",
        title: "Title 6",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
