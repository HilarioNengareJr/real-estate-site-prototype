import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactInfo = () => {
  const [state, handleSubmit] = useForm("xrgwgwen");
  if (state.succeeded) {
    return <span className='bg-white text-success'><p>Thanks for contacting!</p></span>;
  }

  return (
    <section id="contactInfo">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h6 className="contact">Contact</h6>
            <hr className="w-25 mx-auto" />
            <h1>Get In Touch</h1>
            <p className="p-3">Leave your thoughts down below please.</p>
          </div>
        </div>
        <div className="p-6 text-success">
          <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
            <div className="col-md-5">
              <input className="form-control" placeholder="Full Name" type="text" name="name" />
            </div>
            <div className="col-md-5">
              <input className="form-control" placeholder="Enter E-mail" type="email" name="email" />
            </div>
            <div className="col-md-10">
              <input className="form-control" placeholder="Enter Subject" type="text" name="subject" />
            </div>
            <div className="col-md-10">
              <textarea className="form-control" id="message" name="message" placeholder="Enter Message" rows="5" />
            </div>
            <div className="col-md-10 d-grid d-flex justify-content-center">
              <button className="btn btn-primary" type="submit" disabled={state.submitting}>Contact</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
