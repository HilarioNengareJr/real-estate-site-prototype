import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './NavCard.css';
import Gallery from './Gallery';

const NavCard = () => {
  const [isOpen, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }
  
  return (
    <div className='navCard w-75 m-auto bg-dark text-center rounded-pill p-2'>
      <Link className='p-1 text-white' title='Google Maps'>Map</Link>
      <span className='text-success'>|</span>
      <Link className='p-1 text-white gallery' onClick={openModal} title='Gallery'>Gallery</Link>
      <span className='text-success display-none'>|</span>
      <Link className='p-1 text-white' title="Amenities">Overview</Link>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Gallery />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavCard;
