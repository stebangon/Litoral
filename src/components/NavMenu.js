import React, { useRef, useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import imgLogoLitoral from '../assets/00Logo.svg'; // with import
import imgDescargarBrochure from '../assets/01descargar.png'; // with import

import FormularioContacto from './FormularioContacto';
import MenuOpciones from './MenuOpciones';

function NavMenu() {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShowMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);
  console.log('Entro nav menu');
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
          <Nav.Link href="#descargar" className="sm-12">
            <a href="../assets/brochure/LITORAL-EXTENDED-DIGITAL.pdf" download>
              <img width="18px" height="20px" src={imgDescargarBrochure} />
            </a>
          </Nav.Link>
          <Nav.Link
            style={{
              fontSize: '24px',
              fontFamily: 'Benne-Regular',
              color: 'rgb(21,76, 94)',
            }}
            className="sm-12"
            onClick={handleShow}
          >
            contacto
          </Nav.Link>
          <Nav.Link
            style={{
              fontSize: '24px',
              fontFamily: 'Benne-Regular',
              color: 'rgb(21,76, 94)',
            }}
            className="sm-12"
            onClick={handleShowMenu}
          >
            menú
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <FormularioContacto handleClose={handleClose} show={show} />
      <MenuOpciones handleCloseMenu={handleCloseMenu} showMenu={showMenu} />
    </div>
  );
}

export default NavMenu;
