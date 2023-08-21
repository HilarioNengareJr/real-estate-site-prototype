import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './TypedWelcome';
import TypedComponent from './TypedWelcome';

const Hero = () => {
  const strings = ['Guzelyurt', 'Lefke', 'Nicosia', 'Girne'];

  return (
    <div className="hero vh-100 d-flex align-items-center container-fluid" id="home">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="d-flex justify-content-center col-md-12">
            <div className="mb-2 typed">
              <h1 className="display-4 typed-string text-white mt-5" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
                <TypedComponent strings={strings} />
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="search-bar form-group">
              <div className="d-flex justify-content-center align-items-center position-relative">
                <div className="col-md-6 mb-2">
                  <div className="input-group">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search Town, City, Address"
                      className="search-input form-control"
                    />
                    <div className="input-group-append">
                      <span className="search-icon input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
