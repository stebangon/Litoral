import React, { useEffect, useState } from 'react';

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
  const [showNavBar, setShowNavBar] = useState(true);
  const controlaNavBar = () => {
    window.scrollY > 100 ? setShowNavBar(false) : setShowNavBar(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', controlaNavBar);
    return () => {
      window.removeEventListener('scroll', controlaNavBar);
    };
  }, []);
  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="light"
        hidden={!showNavBar}
        className="pr-4"
      >
        <Navbar.Brand href="#home" className="pl-5">
          <img
            width="170px"
            height="100px"
            src={imgLogoLitoral}
            alt="Logo Litoral"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nv-responsive" />
        <Navbar.Collapse
          id="nv-responsive"
          className="flex mr-auto justify-content-end"
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
