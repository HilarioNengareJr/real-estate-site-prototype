import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { Form, FormControl } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const location = useLocation();
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

  const checkUserLoggedIn = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users/check-auth', {
        withCredentials: true,
      });
      if (response.data.success) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/api/users/logout', null, {
        withCredentials: true,
      });
      setIsLoggedIn(false);
    } catch (error) {
    }
  };

  return (
    <div>
      <Navbar id="navbar" className="navbar fixed-top bg-dark navbar-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className={`ml-auto brand-font  ${location.pathname === '/' ? 'active' : ''}`}>
            Student Rental
            <div className="line"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" onClick={handleMenuToggle} />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link className={`nav-item m-3  ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className={`nav-item m-3  ${location.pathname === '/listings' ? 'active' : ''}`}>
                <Link to="listings">Listings</Link>
              </Nav.Link>
              {isLoggedIn ? (
                <Nav.Link className={`nav-item w-100 m-3 text-center no-wrap  ${location.pathname === '/profile' ? 'active' : ''}`} href="#" >
                  <Link to='/profile'>
                    Profile
                  </Link>
                </Nav.Link>
              ) :
                (
                  <Nav.Link className="nav-item w-100 m-3 text-center no-wrap" onClick={handleLoginToggle} href="#">
                    Profile
                  </Nav.Link>
                )

              }
              {isLoggedIn ? (
                <Nav.Link className={`nav-item w-100 m-3 d-flex justify-content-center no-wrap  ${location.pathname === '/create-post' ? 'active' : ''}`} href="#">
                  <Link to="/create-post">Enlist</Link>
                </Nav.Link>
              ) : (
                <Nav.Link className="nav-item w-100 m-3 d-flex justify-content-center no-wrap" onClick={handleLoginToggle} active>
                  Enlist
                </Nav.Link>
              )}
              <Form inline className="m-3 this">
              <div className="position-relative">
                <FormControl type="text" placeholder="Search Town, City ..." className="mr-sm-2" />
                <span className="search-icon text-muted">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </Form>
              {!isLoggedIn && (
                <Nav.Link className="nav-item m-3" onClick={handleSignupToggle}>
                  Register
                </Nav.Link>
              )}
            </Nav>
            <div className="no-display row">
              <div className="col-6">
                {isLoggedIn ? (
                  <Nav.Link className="nav-item m-3">
                    <button type="button" className="btn sign-in btn-primary" onClick={handleLogout}>
                      Log Out
                    </button>
                  </Nav.Link>
                ) : (
                  <Nav.Link className="nav-item m-3">
                    <button type="button" className="btn sign-in btn-primary" onClick={handleLoginToggle}>
                      Log In
                    </button>
                  </Nav.Link>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal className="text-center modal-card mx-auto d-flex justify-content-center border-0" show={showMenuModal} onHide={handleMenuModalClose} centered>
        <Modal.Body>
          <Nav className="flex-column">
            {isLoggedIn ? (
              <Nav.Link onClick={handleMenuModalClose}>
                <Link to='/profile'>
                  Profile
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleMenuModalClose}>
                <Link to='/login'>
                  Profile
                </Link>
              </Nav.Link>)}
            <Nav.Link onClick={handleMenuModalClose}>
              <Link to="/create-post">Enlist</Link>
            </Nav.Link>
            <Nav.Link onClick={handleMenuModalClose}>
              <Link to="/listings">Listings</Link>
            </Nav.Link>
            {!isLoggedIn && (
              <Nav.Link href="/register" onClick={handleMenuModalClose}>
                Register
              </Nav.Link>
            )}
          </Nav>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          {!isLoggedIn ? (
            <Link to="/login">
              <button type="button" className="btn sign-in btn-primary btn-lg">
                Sign In
              </button>
            </Link>
          ) : (
            <button type="button" className="btn sign-in btn-primary btn-lg" onClick={handleLogout}>
              Log Out
            </button>
          )}
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
          <Modal.Title>Sign UP</Modal.Title>
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
