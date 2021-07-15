import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FormularioContacto from './FormularioContacto';

import imgLogoLitoral from '../assets/Recursos - LITORAL-57.svg'; // with import
import imgEstrella from '../assets/Recursos - LITORAL-55.svg'; // with import
import imgDescargarBrochure2 from '../assets/Recursos - LITORAL-67.svg'; // with import
import imgEmail from '../assets/Recursos - LITORAL-71.svg'; // with import
import imgGPI from '../assets/Recursos - LITORAL-54.svg'; // with import
import imgInstagram from '../assets/Recursos - LITORAL-16.svg'; // with import
import imgYoutube from '../assets/Recursos - LITORAL-12.svg'; // with import
import imgFacebook from '../assets/Recursos - LITORAL-05.svg'; // with import

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Row
        style={{
          height: '100px',
        }}
      >
        <img className="imgLogoFooter" src={imgLogoLitoral} />
        <img className="imgEstrellaFooter" src={imgEstrella} />
      </Row>
      <Row
        style={{
          height: '400px',
          backgroundColor: 'rgb(236, 236, 230)',
        }}
      >
        <Container className="pt-5 pl-5">
          <Row>
            <Col className="md-4 pt-5">
              <Row>
                <span>Oficina ventas:</span>
              </Row>
              <Row>
                <span>
                  Local 13 Planta Alta, Plaza
                  <br />
                  Moombú en calle 7A1 x 24 y 22
                  <br />
                  Santa Gertrudis Copó.
                </span>
              </Row>
              <Row className="pt-4">
                <span>Descargar PDF</span>
              </Row>
              <Row>
                <span>Brochure LITORAL</span>
              </Row>
              <Row className="pt-4">
                <a
                  href="../assets/brochure/LITORAL-EXTENDED-DIGITAL.pdf"
                  download
                >
                  <img
                    width="45px"
                    height="45px"
                    src={imgDescargarBrochure2}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </Row>
            </Col>
            <Col className="md-4 pt-5">
              <Row>
                <span>Siguenos en:</span>
              </Row>
              <Row>
                <span>
                  <img width="18px" src={imgFacebook} />
                  &nbsp; <a href="#">Facebook</a>
                  <br />
                  <img width="18px" src={imgInstagram} />
                  &nbsp; <a href="#">Instagram</a>
                  <br />
                  <img width="18px" src={imgYoutube} />
                  &nbsp; <a href="#">Youtube</a>
                </span>
              </Row>
              <Row className="pt-4">
                <span>Contáctanos</span>
              </Row>
              <Row>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  hola@grupogpi.com
                </span>
              </Row>
              <Row className="pt-4">
                <img
                  width="45px"
                  height="45px"
                  src={imgEmail}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={handleShow}
                />
              </Row>
            </Col>
            <Col className="md-4 pt-5">
              <Row>
                <span>© 2021 Litoral Beach Apartaments</span>
              </Row>
              <Row>
                <span>
                  <a href="#">Aviso de privacidad</a>
                  <br />
                  <a href="#">Avisos legales</a>
                </span>
              </Row>
              <Row className="pt-5">
                <img width="180px" src={imgGPI} />
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
      <FormularioContacto handleClose={handleClose} show={show} />
    </div>
  );
};

export default Footer;
