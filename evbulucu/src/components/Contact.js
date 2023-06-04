import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ContactInfo = () => {

  return (
      <section id="contactInfo">
          <div className="container-fluid p-5">
            <div className="row">
              <div className="col-md-8 mx-auto text-center">
                <h6 className="text-primary p-3">Contact</h6>
                <h1>Get In Touch</h1>
                <p className="p-3">Leave your thoughts down below please.</p>
              </div>
            </div>
            <div className="p-6 text-success">
              <form action="" className="row g-3 justify-content-center">
                <div className="col-md-5">
                  <input className="form-control" placeholder="Full Name" type="text"/>
                </div>
                <div className="col-md-5">
                  <input className="form-control" placeholder="Enter E-mail" type="text"/>
                </div>
                <div className="col-md-10">
                  <input className="form-control" placeholder="Enter Subject" type="text"/>
                </div>
                <div className="col-md-10">
                  <textarea className="form-control" cols="30" id="" name="" placeholder="Enter Message"
                    rows="5"></textarea>
                </div>
                <div className="col-md-10 d-grid">
                  <button className="btn btn-primary">Contact</button>
                </div>
              </form>
            </div>
          </div>
      </section>

  );
};

export default ContactInfo;
