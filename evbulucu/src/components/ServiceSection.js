import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowForward } from '@fortawesome/free-solid-svg-icons';
import './ServiceSection.css';

const ServiceSection = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section-subtitle">Our Services</p>
        <h2 className="h2 section-title">Our Main Focus</h2>
        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                
              </div>
              <h3 className="h3 card-title">
                <a href="#">Buy a home</a>
              </h3>
              <p className="card-text">
                over 1 million+ homes for sale available on the website, we can match you with a house you will want
                to call home.
              </p>
              <a href="#" className="card-link">
                <span>Find A Home</span>
                
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                
              </div>
              <h3 className="h3 card-title">
                <a href="#">Buy a home</a>
              </h3>
              <p className="card-text">
                over 1 million+ homes for sale available on the website, we can match you with a house you will want
                to call home.
              </p>
              <a href="#" className="card-link">
                <span>Find A Home</span>
                
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
