import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import './Gallery.css';

const Gallery = ({ postImages }) => {
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
      <div className='row'>
        <div className='col-lg-8 d-lg-flex justify-content-lg-around w-100 col-md-4'>
          {postImages.map((filename, index) => (
            <div key={index} className='gallery-item' onClick={() => openLightbox(index)}>
              <img src={`/server/uploads/${filename}`} alt={`Image ${index}`} className='w-100 gallery-image' />
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={`/server/uploads/${postImages[photoIndex]}`}
            nextSrc={`/server/uploads/${postImages[(photoIndex + 1) % postImages.length]}`}
            prevSrc={`/server/uploads/${postImages[(photoIndex + postImages.length - 1) % postImages.length]}`}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + postImages.length - 1) % postImages.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % postImages.length)}
            animationDisabled={false}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
