import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBarOnPost.css';

const NavBarOnPost = () => {
  useEffect(() => {
    let prevScrollPos = window.scrollY;
    window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementById('navbarOnPost');
      if (navbar) {
        navbar.style.top = prevScrollPos > currentScrollPos ? '0' : '-120px';
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);

  return (
    <div>
      <Navbar id="navbarOnPost" className="navbarOnPost fixed-top bg-dark navbar-dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand className="m-2 brand-font d-none d-md-flex"></Navbar.Brand>
          <Form inline className="mr-auto this">
            <div className="position-relative">
              <FormControl type="text" placeholder="Search Town, City, Address" className="mr-sm-2" />
              <span className="search-icon text-muted">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarOnPost;
