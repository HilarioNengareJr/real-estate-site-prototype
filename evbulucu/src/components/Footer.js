import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedIn, faInstagram } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
    return ( 
    <div className="footer-bottom py-3 bg-dark mt-3">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <p className="text-white mb-0">© 2023 copyright all rights reserved | Designed by Hilario
                    Nengare.
                </p>
            </div>
        </div>
    </div>
    </div>);
};

export default Footer;