import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import './ServiceSection.css';

const ServiceSection = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <p className="text-center service-h">Services</p>
        <hr className='w-25 mx-auto' />

        <div className="row">
          <div className="col-md-6">
            <div className="service-card height mt-3">
              <div className="card-icon">
                <img src="/images/service-2.png" alt='service-icon' />
              </div>
              <h3 className="card-title">
                <a href="#" className='text-black display-5'>Rent A Place</a>
              </h3>
              <p className="card-text">
                Over 1 thousand+ homes for rent available in Northern Cyprus, we can match you with a house you will want
                to call home.
              </p>
              <a href="#" className="card-link">
                <span>Find your next home</span>
              </a>
            </div>
          </div>
          <div className='m-3 d-lg-none'></div>
          <div className="col-md-6">
            <div className="service-card mt-3 height">
              <div className="card-icon">
                <img src="/images/service-1.png" alt='service-icon' />
              </div>
              <h3 className="h3 card-title">
                <a href="#" className='text-black display-5'>List a Place</a>
              </h3>
              <p className="card-text">
                Many students are actively searching for space to settle down.
              </p>
              <a href="#" className="card-link">
                <span>Find your next tenant</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
