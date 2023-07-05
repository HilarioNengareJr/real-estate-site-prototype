import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import './ServiceSection.css';

const ServiceSection = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <p className="text-center text-primary">Our Services</p>
        <h2 className="text-center p-3">Our Main Focus</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="service-card my-3">
              <div className="card-icon">
              <FontAwesomeIcon icon={faHome} className="house-icon" />
              </div>
              <h3 className="h3 card-title">
                <a href="#">Rent A Place</a>
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
          <div className="col-md-6">
            <div className="service-card my-3 ">
            <div className="card-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />
              </div>
              <h3 className="h3 card-title">
                <a href="#">List a Place</a>
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
