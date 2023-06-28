import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-dark text-light p-3">
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-light">Link 1</Nav.Link>
        <Nav.Link href="#" className="text-light">Link 2</Nav.Link>
        <Nav.Link href="#" className="text-light">Link 3</Nav.Link>
        <Nav.Link href="#" className="text-light">Link 4</Nav.Link>
        <Nav.Link href="#" className="text-light">Link 5</Nav.Link>
        <Nav.Link href="#" className="text-light">Link 6</Nav.Link>
        <Nav.Link href="#" className="text-light">Link 7</Nav.Link>
        <Nav.Link href="#" className="text-light">Link 8</Nav.Link>
      </Nav>

      <hr />

      <Nav>
        <Nav.Link href="#" className="text-light" title="Sign Out" >
          <FontAwesomeIcon icon={faCog} className="mr-2" />
        </Nav.Link>
        <Nav.Link href="#" className="text-light" title="Profile">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
        </Nav.Link>
        <Nav.Link href="#" className="text-light" title="Enlist Property">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

 