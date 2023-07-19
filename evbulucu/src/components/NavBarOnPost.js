import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Container, Form, FormControl, Modal, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBarOnPost.css';

const NavBarOnPost = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMenuModalToggle = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

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

    // Function to check if the user is logged in
    const checkUserLoggedIn = async () => {
      try {
        // Make a request to the backend to check the user's authentication status
        const response = await axios.get('http://localhost:3000/check-auth');
        if (response.data.success) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        // Handle error if any
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <div>
      <Navbar id="navbarOnPost" className="navbarOnPost d-flex justify-content-center fixed-top bg-dark navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand className="ml-auto dnone brand-font">
            Student Rental
            <div className="line"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleMenuModalToggle} />
          <Nav className="mx-auto dnone">
            <Nav.Link className="nav-item w-100 m-3 text-center no-wrap" active>
              <Link to='/'>
                Home
              </Link>
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link className="nav-item w-100 m-3 text-center no-wrap" href="#" active>
                  <Link to='/create-post' className='d-inline'>
                    Enlist
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item w-100 m-3 text-center no-wrap" href="#" active>
                  <Link to='/profile'>
                    Profile
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link className="nav-item w-100 m-3 text-center no-wrap" onClick={handleMenuModalToggle} active>
                Enlist
              </Nav.Link>
            )}
          </Nav>
          <Form inline className="mr-auto this">
            <div className="position-relative">
              <FormControl type="text" placeholder="Search Town, City ..." className="mr-sm-2" />
              <span className="search-icon text-muted">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </Form>
        </Container>
      </Navbar>

      <Modal show={isOpenModal} onHide={closeModal} className='modal-card d-flex justify-content-center text-center w-100'>
        <Modal.Body>
          <Nav className="flex-column text-center px-3">
            <Nav.Link onClick={closeModal}>
              <Link to='/'>
                Home
              </Link>
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link onClick={closeModal}>
                  <Link to='/create-post'>
                    Enlist
                  </Link>
                </Nav.Link>
                <Nav.Link onClick={closeModal}>
                  <Link to='/profile'>
                    Profile
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login" onClick={closeModal}>
                Enlist
              </Nav.Link>
            )}
          </Nav>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          {!isLoggedIn ? (
            <Link to="/login">
              <button type="button" className="btn sign-in btn-primary btn-lg">
                Log In
              </button>
            </Link>
          ) : (
            <button type="button" className="btn sign-in btn-primary btn-lg" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBarOnPost;
