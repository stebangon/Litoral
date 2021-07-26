import React, { useRef, useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useHistory } from 'react-router-dom';

import imgLogoLitoral from '../assets/00Logo.svg'; // with import

function NavMenuAdmin() {
  let history = useHistory();
  const handleRedirectAdminSolicitudes = () => {
    history.push('/adminsolicitudes');
  };
  const handleRedirectAdminDepartamentos = () => {
    history.push('/admindepartamentos');
  };
  const handleRedirectAdminGaleria = () => {
    history.push('/admingaleria');
  };
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home" className="px-5">
          <img
            width="250px"
            height="200px"
            src={imgLogoLitoral}
            alt="React Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="px-5 flex mr-auto justify-content-end">
          <Nav.Link
            style={{
              fontSize: '24px',
              fontFamily: 'Benne-Regular',
              color: 'rgb(21,76, 94)',
            }}
            className="sm-12"
            onClick={handleRedirectAdminSolicitudes}
          >
            Solicitudes
          </Nav.Link>
          <Nav.Link
            style={{
              fontSize: '24px',
              fontFamily: 'Benne-Regular',
              color: 'rgb(21,76, 94)',
            }}
            className="sm-12"
            onClick={handleRedirectAdminDepartamentos}
          >
            Departamentos
          </Nav.Link>
          <Nav.Link
            style={{
              fontSize: '24px',
              fontFamily: 'Benne-Regular',
              color: 'rgb(21,76, 94)',
            }}
            className="sm-12"
            onClick={handleRedirectAdminGaleria}
          >
            Galeria
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavMenuAdmin;
