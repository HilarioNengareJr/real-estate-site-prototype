import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBarSupport = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);

  const handleMenuToggle = () => {
    setShowMenuModal(!showMenuModal);
  };

  const handleMenuModalClose = () => {
    setShowMenuModal(false);
  };

  return (
    <div>
      <Navbar className="navbar fixed-top bg-dark navbar-dark p-lg-4" expand="lg">
        <Container fluid>
          <Navbar.Brand className="ml-auto brand-font">
            Student Rental
            <div className="line"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" onClick={handleMenuToggle} />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
            <Nav.Link className="nav-item m-3">
                <Link to="/">Home Page</Link>
              </Nav.Link>
              <Nav.Link className="nav-item m-3">
                <Link to="listings">See Listings</Link>
              </Nav.Link>
            </Nav>
            <div className="no-display row">
              <div className="col-6">
                <Nav.Link className="nav-item m-3">
                  <button type="button" className="btn sign-in btn-primary">
                    Log Out
                  </button>
                </Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        className="text-center modal-card mx-auto d-flex justify-content-center border-0"
        show={showMenuModal}
        onHide={handleMenuModalClose}
        centered
        onClick={handleMenuModalClose} // Close modal when clicking anywhere on the screen
      >
        <Modal.Body>
          <Nav className="flex-column">
            <Nav.Link>
              <Link to="/listings">Listings</Link>
            </Nav.Link>
          </Nav>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Link>
            <button type="button" className="btn sign-in btn-primary btn-lg">
              Log Out
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBarSupport;
