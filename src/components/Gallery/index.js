// Gallery.js
import React, { useRef, useCallback } from "react";
import { imagesSelector } from "../../redux";
import { useAppSelector } from "../../redux/hooks";

const Gallery = ({ loadMore }) => {
  const observer = useRef();
  const images = useAppSelector(imagesSelector);
  const lastImageRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMore]
  );

  return (
    <div className="gallary-wrapper">
    <div className="gallery">
      {images.map((img, index) => {
        if (images.length === index + 1) {
          return (
            <div ref={lastImageRef} key={index}>
              <img
                className="gallary-img"
                alt="sample-img"
                key={index}
                src={img.urls.small}
              />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <img
                className="gallary-img"
                alt="sample-img"
                key={index}
                src={img.urls.small}
              />
            </div>
          );
        }
      })}
    </div>
    </div>
  );
};

export default Gallery;
