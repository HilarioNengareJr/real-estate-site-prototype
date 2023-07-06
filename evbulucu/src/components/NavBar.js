import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Listing from './Listing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleMenuToggle = () => {
    setShowMenuModal(!showMenuModal);
  };

  const handleMenuModalClose = () => {
    setShowMenuModal(false);
  };

  const handleLoginToggle = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleSignupToggle = () => {
    setShowSignupModal(!showSignupModal);
  }

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  }

  return (
    <div>
      <Navbar className="navbar fixed-top bg-dark navbar-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="ml-auto brand-font">
            Student Rental
            <div className="line"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" onClick={handleMenuToggle} />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link className="nav-item w-100 m-3 d-flex justify-content-center no-wrap" href="#" active>
                Home
              </Nav.Link>
              <Nav.Link className="nav-item m-3">
                <Link to="listings">
                  Listings
                </Link>
              </Nav.Link>
              <Nav.Link href="#service" className="nav-item m-3">
                Services
              </Nav.Link>
              <Nav.Link className="nav-item w-100 m-3 d-flex justify-content-center" href="#contactInfo" active>
                Contact
              </Nav.Link>
              <Nav.Link className="nav-item m-3" onClick={handleSignupToggle}>
                Register
              </Nav.Link>
            </Nav>
            <div className="no-display row">
              <div className="col-6">
                <Nav.Link className="nav-item m-3">
                  <button
                    type="button"
                    className="btn sign-in btn-primary"
                    onClick={handleLoginToggle}
                  >
                    Log In
                  </button>
                </Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal className="text-center modal-card mx-auto d-flex justify-content-center border-0" show={showMenuModal} onHide={handleMenuModalClose} centered>
        <Modal.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" onClick={handleMenuModalClose}>
              Home page
            </Nav.Link>
            <Nav.Link onClick={handleMenuModalClose}>
              <Link to="listings">
                Listings
              </Link>
            </Nav.Link>
            <Nav.Link href="/register" onClick={handleMenuModalClose}>
              Register
            </Nav.Link>
          </Nav>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Link to="/login">
            <button type="button" className="btn sign-in btn-primary btn-lg">
              sign in
            </button>
          </Link>
        </Modal.Footer>
      </Modal>

      <Modal className="text-center d-flex justify-content-center w-100" show={showLoginModal} onHide={handleLoginModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-modal-content">
            <Login />
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="text-center d-flex justify-content-center w-100" show={showSignupModal} onHide={handleSignupModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-modal-content">
            <Register />
          </div>
        </Modal.Body>
      </Modal>


    </div>
  );
};

export default NavBar;