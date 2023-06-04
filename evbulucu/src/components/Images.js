import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Images.css'; // Import the CSS file for styling

const Images = () => {
  const accommodationImages = [
    '/images/pexels-photo-106399.jpeg',
    '/images/pexels-photo-186077.jpeg',
    '/images/pexels-photo-323780.jpeg',
    '/images/pexels-photo-1475938.jpeg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="container-fluid mb-5">
      <Slider {...settings}>
        {accommodationImages.map((image, index) => (
          <div className="d-flex justify-content-sm-center pt-4 mt-4" key={index}>
            <img className='carousel-image' src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Images;
