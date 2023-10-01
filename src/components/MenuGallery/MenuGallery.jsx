import React, { useState, useEffect, useRef } from "react";
import { Galleria } from "primereact/galleria";
import { GalleryList } from "../../utils/GalleryList";
import Button from "../Button/Button";

import "./MenuGallery.scss";

function MenuGallery() {
  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);

  useEffect(() => {
    GalleryList.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <div className="gallery__item">
        <img
          src={item.itemImageSrc}
          alt={item.alt}
          style={{ width: "100%", display: "block" }}
        />
        <h3 className="gallery__item-title">{item.title}</h3>
        <Button  isSlider={"true"} text={"Попробовать"}/>
      </div>
    );
  };

  /*const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }*/

  return (
    <div className="scroll-hidden">
      <section className="gallery">
        <Galleria
          ref={galleria}
          value={images}
          numVisible={3}
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
          circular
          fullScreen
          showItemNavigators
          showIndicators          
          showThumbnails={false}
          item={itemTemplate} /*thumbnail={thumbnailTemplate}*/
        />
        <div className="gallery__grid">
          {images &&
            images.map((image, index) => {
              const imgEl = (
                <div
                  onClick={() => {
                    setActiveIndex(index);
                    galleria.current.show();
                  }}
                >
                  <img
                    className="gallery__item"
                    src={image.itemImageSrc}
                    alt={image.alt}
                    style={{ cursor: "pointer" }}
                  />
                  <h3 className="gallery__card-title">{image.title} </h3>
                  
                </div>
              );
              return (
                <div className="gallery__card" key={index}>
                  {imgEl}
                
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default MenuGallery;
