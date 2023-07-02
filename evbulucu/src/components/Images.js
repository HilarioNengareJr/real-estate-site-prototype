import React, { useState } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Images.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

export const accommodationImages = [
 '/images/pexels-photo-106399.jpeg',
 '/images/pexels-photo-186077.jpeg',
 '/images/pexels-photo-323780.jpeg',
 '/images/pexels-photo-1475938.jpeg',
];

const Images = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setIsModalOpen(true);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

 
  // Custom arrow component for the previous arrow
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow prev-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </div>
    );
  };

  // Custom arrow component for the next arrow
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow next-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const imgStyle = {
    width: '100%',
    display: 'block',
  };

  return (
    <div>
      <Slider {...settings}>
        {accommodationImages.map((image, index) => (
          <div
            className="slider image-container d-flex justify-content-sm-center"
            key={index}
            onClick={() => openModal(index)}
          >
            <img className="carousel-image img-fluid" src={image} alt={`Image ${index}`} style={imgStyle} />
            
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal-image"
              src={accommodationImages[selectedImageIndex]}
              alt={`Image ${selectedImageIndex}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
