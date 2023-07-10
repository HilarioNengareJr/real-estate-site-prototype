import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faParking, faSwimmingPool, faUtensils, faBed, faBus, faSchool, faStore } from '@fortawesome/free-solid-svg-icons';
import './NavCard.css';
import Gallery from './Gallery';

const NavCard = () => {
  const [isOpen, setIsOpenModal] = useState(false);
  const [isOpenOverview, setIsOpenOverview] = useState(false);

  const openOverview = () => {
    setIsOpenOverview(true);
  }
  const closeOverview = () => {
    setIsOpenOverview(false);
  }

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <div className='navCard w-75 m-auto bg-dark text-center rounded-pill p-2'>
      <Link className='p-1 text-white' title='Google Maps'>Map</Link>
      <span className='text-success display-none'>|</span>
      <Link className='p-1 text-white gallery' onClick={openModal} title='Gallery'>Gallery</Link>
      <span className='text-success'>|</span>
      <Link className='p-1 text-white' onClick={openOverview} title="Amenities">Overview</Link>

      {isOpen && (
        <div className='container'>
          <div className="modal-overlay">
            <div className="modal-content bg-white p-5">
              <h1>Gallery</h1>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <Gallery />
            </div>
          </div>
        </div>
      )}

      {isOpenOverview && (
        <div className='container'>
          <div className='modal-overlay'>
            <div className='modal-content'>
              <span className='close' onClick={closeOverview}>
                &times;
              </span>
              <div className='overview-details bg-white p-3'>
                <h1>Overview</h1>
                <ul className='amenities-list list-unstyled p-4'>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faWifi}  className='detail-icon p-2'/>
                    <span className='ms-3'>WiFi: Installed</span>
                  </li>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faParking}  className='detail-icon p-2'/>
                    <span className='ms-3'>Parking: N/A</span>
                  </li>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faSwimmingPool} className='detail-icon p-2'/>
                    <span className='ms-3'>Running water: yes</span>
                  </li>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faUtensils}  className='detail-icon p-2'/>
                    <span className='ms-3'>Restaurant: 2km</span>
                  </li>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faBed}  className='detail-icon p-2' />
                    <span className='ms-3'>Bed(s): 1</span>
                  </li>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faBus}  className='detail-icon p-2' />
                    <span className='ms-3'>Bus Stop: 500m</span>
                  </li>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faSchool}  className='detail-icon p-2'/>
                    <span className='ms-3'>School: Nearby</span>
                  </li>
                  <li className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faStore}  className='detail-icon p-2'/>
                    <span className='ms-3'>Market: 1km</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavCard;
