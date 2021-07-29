import React, { useRef, useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getBrochure } from '../apiRoutes';

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
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home" className="px-5">
          <img
            width="250px"
            height="100px"
            src={imgLogoLitoral}
            alt="Logo Litoral"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nv-responsive" />
        <Navbar.Collapse
          id="nv-responsive"
          className="px-5 flex mr-auto justify-content-end"
        >
          <Nav.Link href="#descargar" className="sm-12">
            <a href={getBrochure} target="_blank" download>
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
