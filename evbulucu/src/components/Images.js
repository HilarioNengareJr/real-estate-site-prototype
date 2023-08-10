import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Images.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Images = ({ imageFilenames }) => {

  if (imageFilenames.length === 0) {
    return <div>No images available</div>;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setIsModalOpen(true);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow prev-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </div>
    );
  };

  console.log('Image files in images ', imageFilenames);

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

  const modalContentRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div>
      <Slider {...settings}>
        {imageFilenames.map((filename, index) => (
          <div
            className="slider image-container d-flex justify-content-sm-center"
            key={index}
            onClick={() => openModal(index)}
          >
            <figure>
              <img
                className="carousel-image img-fluid"
                src={`/uploads/${filename}`}  
                alt={`Image ${index}`}
                style={imgStyle}
              />
            </figure>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalContentRef}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal-image "
              src={`/uploads/${imageFilenames[selectedImageIndex]}`} 
              alt={`Image ${selectedImageIndex}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
