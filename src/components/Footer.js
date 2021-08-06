/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FormularioContacto from './FormularioContacto';
import { getBrochure } from '../apiRoutes';

import imgLogoLitoral from '../assets/Recursos - LITORAL-57.svg'; // with import
import imgEstrella from '../assets/Recursos - LITORAL-55.svg'; // with import
import imgDescargarBrochure2 from '../assets/Recursos - LITORAL-67.svg'; // with import
import imgEmail from '../assets/Recursos - LITORAL-71.svg'; // with import
import imgGPI from '../assets/Recursos - LITORAL-54.svg'; // with import
import imgInstagram from '../assets/Recursos - LITORAL-16.svg'; // with import
// import imgYoutube from '../assets/Recursos - LITORAL-12.svg'; // with import
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
        <Col md={6} xs={6}>
          <img className="imgLogoFooter" src={imgLogoLitoral} />
        </Col>
        <Col md={6} xs={6}>
          <img className="imgEstrellaFooter" src={imgEstrella} />
        </Col>
      </Row>
      <Row
        style={{
          height: 'auto',
          backgroundColor: 'rgb(236, 236, 230)',
        }}
        className="pb-5"
      >
        <Container className="pt-5 pl-5">
          <Row>
            <Col md={4} xs={7} className="pt-5">
              <span>Oficina ventas:</span><br />
              <span>
                Local 13 Planta Alta, Plaza
                <br />
                Moombú en calle 7A1 x 24 y 22
                <br />
                Santa Gertrudis Copó.
              </span><br /><br />
              <div className="text-left float-left">
                <span>Descargar PDF</span><br />
                <span>Brochure LITORAL</span><br />
                <a href={getBrochure} target="_blank" download>
                  <img
                    width="45px"
                    height="45px"
                    src={imgDescargarBrochure2}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </div>
            </Col>
            <Col md={4} xs={5} className="pt-5">
              <span>Siguenos en:</span><br />
              <span>
                <img width="18px" src={imgFacebook} />
                &nbsp; <a href="https://www.facebook.com/LitoralBeachApartaments">Facebook</a>
                <br />
                <img width="18px" src={imgInstagram} />
                &nbsp; <a href="https://www.instagram.com/litoral_beachapartaments/">Instagram</a>
                <br />
                {/* <img width="18px" src={imgYoutube} />
                &nbsp; <a href="#">Youtube</a> */}
                <span>Tel: (999) 920 21 09</span>
              </span><br /><br />
              <div className="text-left float-left">
                <span>Contáctanos</span><br />
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  className="text-break"
                >
                  hola@grupogpi.com
                </span><br />
                <img
                  width="45px"
                  height="45px"
                  src={imgEmail}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={handleShow}
                />
              </div>
            </Col>
            <Col md={4} xs={6} className="py-5 pl-4">
              <Row>
                <span>© 2021 Litoral Beach Apartaments</span>
              </Row>
              <Row>
                <span>
                  <a href="https://www.grupogpi.com/aviso-de-privacidad">Aviso de privacidad</a>
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
