import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import imgEscudoPlayaVerde from '../assets/Recursos - LITORAL-59.svg'; // with import

const MenuOpciones = ({ handleCloseMenu, showMenu }) => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        width: '100%',
        height: '0.5px',
      }}
    />
  );
  let history = useHistory();
  const handleRedirectHome = () => {
    handleCloseMenu();
    history.push('/');
  };
  const handleRedirectDepartamentos = () => {
    handleCloseMenu();
    history.push('/departamentos');
  };
  const handleRedirectCotizador = () => {
    handleCloseMenu();
    history.push('/cotizar');
  };
  return (
    <div>
      <Modal show={showMenu} size="xl" onHide={handleCloseMenu}>
        <Modal.Body className="px-5 py-3">
          <Row className="pt-5 py-5">
            <Col
              className="md-3 align-self-center"
              style={{
                textAlign: 'center',
              }}
            >
              <img width="140px" src={imgEscudoPlayaVerde} />
            </Col>
            <Col className="md-9 justify-content-start">
              <Row id="01Litoral" className="pl-5">
                <a
                  href="/home/#menu"
                  style={{
                    fontSize: '22px',
                    textDecoration: 'none',
                    color: 'rgb(21,76, 94)',
                  }}
                  onClick={handleRedirectHome}
                >
                  01 &nbsp;&nbsp; LITORAL
                </a>
              </Row>
              <Row className="pr-5">
                <ColoredLine color="rgb(21,76, 94)" />
              </Row>
              <Row id="02Galeria" className="pl-5">
                <a
                  href="/home/#galeria"
                  style={{
                    fontSize: '22px',
                    textDecoration: 'none',
                    color: 'rgb(21,76, 94)',
                  }}
                  onClick={handleRedirectHome}
                >
                  02 &nbsp;&nbsp; GALERIA/ AMENIDADES
                </a>
              </Row>
              <Row className="pr-5">
                <ColoredLine color="rgb(21,76, 94)" />
              </Row>
              <Row id="03Departamentos" className="pl-5">
                <a
                  href="#"
                  style={{
                    fontSize: '22px',
                    textDecoration: 'none',
                    color: 'rgb(21,76, 94)',
                  }}
                  onClick={handleRedirectDepartamentos}
                >
                  03 &nbsp;&nbsp; DEPARTAMENTOS
                </a>
              </Row>
              <Row className="pr-5">
                <ColoredLine color="rgb(21,76, 94)" />
              </Row>
              <Row id="04Cotizar" className="pl-5">
                <a
                  href="#"
                  style={{
                    fontSize: '22px',
                    textDecoration: 'none',
                    color: 'rgb(21,76, 94)',
                  }}
                  onClick={handleRedirectCotizador}
                >
                  04 &nbsp;&nbsp; COTIZAR
                </a>
              </Row>
              <Row className="pr-5">
                <ColoredLine color="rgb(21,76, 94)" />
              </Row>
              <Row id="05Ubicacion" className="pl-5">
                <a
                  href="/home/#ubicacion"
                  style={{
                    fontSize: '22px',
                    textDecoration: 'none',
                    color: 'rgb(21,76, 94)',
                  }}
                  onClick={handleRedirectHome}
                >
                  05 &nbsp;&nbsp; UBICACIÓN
                </a>
              </Row>
              <Row className="pr-5">
                <ColoredLine color="rgb(21,76, 94)" />
              </Row>
              <Row id="06Contacto" className="pl-5">
                <a
                  href="/home/#contacto"
                  style={{
                    fontSize: '22px',
                    textDecoration: 'none',
                    color: 'rgb(21,76, 94)',
                  }}
                  onClick={handleRedirectHome}
                >
                  06 &nbsp;&nbsp; CONTACTO
                </a>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MenuOpciones;
