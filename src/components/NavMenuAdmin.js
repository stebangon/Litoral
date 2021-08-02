import React, { useEffect, useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useHistory } from 'react-router-dom';
import { logout } from '../actions/auth';
import { useDispatch } from 'react-redux';

import imgLogoLitoral from '../assets/00Logo.svg'; // with import

function NavMenuAdmin() {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleRedirectAdminSolicitudes = () => {
    history.push('/adminsolicitudes');
  };
  const handleRedirectAdminDepartamentos = () => {
    history.push('/admindepartamentos');
  };
  const handleRedirectAdminGaleria = () => {
    history.push('/admingaleria');
  };
  const [showNavBar, setShowNavBar] = useState(true);
  const controlaNavBar = () => {
    window.scrollY > 100 ? setShowNavBar(false) : setShowNavBar(true);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    //Nos salimos de la aplicacion
    dispatch(logout());
    //Lo mandamos a la pagina de login
    history.push('/login');
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
      >
        <Navbar.Brand href="#home" className="px-5">
          <img
            width="160px"
            height="100px"
            src={imgLogoLitoral}
            alt="Logo Litoral"
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
          <Nav.Link
            style={{
              fontSize: '24px',
              fontFamily: 'Benne-Regular',
              color: 'rgb(21,76, 94)',
            }}
            className="sm-12"
            onClick={handleLogout}
          >
            LogOut
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavMenuAdmin;
