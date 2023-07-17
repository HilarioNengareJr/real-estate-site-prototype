import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Container, Form, FormControl, Modal, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarOnCreatePost = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleMenuModalToggle = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Navbar id="navbarOnCreatePost" className="navbarOnCreatePost d-flex justify-content-center fixed-top bg-dark navbar-dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleMenuModalToggle} />
          <Nav className="mx-auto dnone">
            <Nav.Link className="nav-item w-100 m-3 text-center no-wrap" active>
              <Link to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-item w-100 m-3 text-center no-wrap" href="#" active>
              Profile
            </Nav.Link>
          </Nav>
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
          </Nav>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavBarOnCreatePost;
