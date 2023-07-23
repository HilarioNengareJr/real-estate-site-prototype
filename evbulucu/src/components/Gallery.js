import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import { accommodationImages } from './Images';
import './Gallery.css';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-white gallery-card '>
    <span className='p-2 m-3 text-white'>Click on the image to expand.</span>
      <div className="row">
        <div className="col-lg-8 d-lg-flex justify-content-lg-around w-100 col-md-4 ">
          {accommodationImages.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
              <img src={image} alt={`Image ${index}`} className=" w-100 gallery-image" />
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={accommodationImages[photoIndex]}
            nextSrc={accommodationImages[(photoIndex + 1) % accommodationImages.length]}
            prevSrc={accommodationImages[(photoIndex + accommodationImages.length - 1) % accommodationImages.length]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + accommodationImages.length - 1) % accommodationImages.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % accommodationImages.length)}
            animationDisabled={false}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;