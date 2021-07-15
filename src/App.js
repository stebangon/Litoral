import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SlidersGaleria from './components/SlidersGaleria';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import FormularioContacto from './components/FormularioContacto';

import imgDesde from './assets/Recursos - LITORAL-18.svg'; // with import
import imgChuxchulub from './assets/Recursos - LITORAL-23.svg'; // with import
import imgEscudoPlaya from './assets/Recursos - LITORAL-21.svg'; // with import
import imgVive from './assets/Recursos - LITORAL-56.svg'; // with import
import imgSol from './assets/Recursos - LITORAL-07.svg'; // with import
import imgLuna from './assets/Recursos - LITORAL-08.svg'; // with import
import imgEstrella from './assets/Recursos - LITORAL-55.svg'; // with import
import imgAccesoControlado from './assets/Recursos - LITORAL-61.svg'; // with import
import imgCasetaVig from './assets/Recursos - LITORAL-62.svg'; // with import
import imgTerrazaTechada from './assets/Recursos - LITORAL-63.svg'; // with import
import imgAreaYoga from './assets/Recursos - LITORAL-64.svg'; // with import
import imgParking from './assets/Recursos - LITORAL-65.svg'; // with import
import imgDescargarBrochure2 from './assets/Recursos - LITORAL-67.svg'; // with import
import imgWhatsapp from './assets/Recursos - LITORAL-60.svg'; // with import
import imgGPS from './assets/Recursos - LITORAL-68.svg'; // with import
import imgCarro from './assets/Recursos - LITORAL-69.svg'; // with import
import imgAgendarCita from './assets/Recursos - LITORAL-84.svg'; // with import

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="App">
      <div id="menu">
        <NavMenu />
      </div>
      <div id="portada">
        <Jumbotron className="jm-bg" fluid>
          <Container className="cntr-bg"></Container>
          <img className="imgdesde" src={imgDesde} />
          <Row className="justify-content-end">
            <img className="imgchuxchulub" src={imgChuxchulub} />
          </Row>
        </Jumbotron>
      </div>
      <div id="quienessomos">
        <Container className="pt-5 px-5">
          <Row>
            <Col className="md-6">
              <span style={{ textAlign: 'start' }}>
                Stylish. Elegant. Exclusive
              </span>
              <p style={{ textAlign: 'start', color: 'rgb(183, 98, 94)' }}>
                Chicxulub Puerto
              </p>
            </Col>
            <Col className="md-6">
              <p
                style={{
                  textAlign: 'end',
                }}
              >
                P E N T H O U S E S
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="md-12">
              <p
                style={{
                  textAlign: 'start',
                  fontFamily: 'Benne-Regular',
                  fontSize: '32px',
                }}
                className="text-break"
              >
                Frente al mar nace LITORAL una torre de departamentos para gozar
                de la brisa y del clima cálido de la costa Yucateca, El lugar
                perfecto para vivir tu vida al máximo.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="md-10">
              <p style={{ textAlign: 'start' }} className="text-break">
                Entrégate al mar qué en cada brisa del viento deja una parte de
                él en ti, haciéndote sentir la libertad al sonido de las olas;
                Disfruta del sol que te acaricia en la arena con cada rayo de
                luz en tu piel compartiendo un tiempo de felicidad y libertad
                con la naturaleza.
              </p>
            </Col>
            <Col className="md-2" style={{ textAlign: 'end' }}>
              <img width="90px" height="90px" src={imgEscudoPlaya} />
            </Col>
          </Row>
          <Row>
            <Container className="px-5 pt-5" style={{ textAlign: 'start' }}>
              <img width="60px" height="60px" src={imgSol} />
            </Container>
          </Row>
          <Row>
            <Container style={{ textAlign: 'end' }}>
              <img width="700px" height="200px" src={imgVive} />
            </Container>
          </Row>
          <Row className="pt-5">
            <Col style={{ textAlign: 'start' }}>
              <span style={{ textAlign: 'start' }}>Un paraiso tropical</span>
              <p style={{ textAlign: 'start', color: 'rgb(183, 98, 94)' }}>
                en la costa yucateca
              </p>
            </Col>
            <Col style={{ textAlign: 'end' }}>
              <img width="60px" height="60px" src={imgLuna} />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="amenidades">
        <Container className="pt-5">
          <Row className="pb-4 px-5">
            <Col className="md-12">
              <p style={{ margin: 0, textAlign: 'end' }}>A M E N I D A D E S</p>
              <p style={{ margin: 0, textAlign: 'end' }}>E X C L U S I V A S</p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Jumbotron className="amenidades-bg" fluid></Jumbotron>
          </Col>
        </Row>
        <Container className="py-5 px-5">
          <Row className="pt-3">
            <Col
              color="red"
              style={{ textAlign: 'start', maxWidth: '200px' }}
              className="md-3"
            >
              <span style={{ textAlign: 'start' }}>Un paraiso tropical</span>
              <p style={{ textAlign: 'start', color: 'rgb(183, 98, 94)' }}>
                en la costa yucateca
              </p>
            </Col>
            <Col className="md-6 px-5">
              <Row className="justify-content-center">
                <Col className="pl-5">
                  <Row className="justify-content-center">
                    <img width="45px" height="45px" src={imgAccesoControlado} />
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    Acceso
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    controlado
                  </Row>
                </Col>
                <Col>
                  <Row className="justify-content-center">
                    <img width="45px" height="45px" src={imgCasetaVig} />
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    Caseta
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    de vigilancia
                  </Row>
                </Col>
                <Col>
                  <Row className="justify-content-center">
                    <img width="45px" height="45px" src={imgTerrazaTechada} />
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    Terraza
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    techada
                  </Row>
                </Col>
                <Col>
                  <Row className="justify-content-center">
                    <img width="45px" height="45px" src={imgAreaYoga} />
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    Área de yoga
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    y meditación
                  </Row>
                </Col>
                <Col className="pr-5">
                  <Row className="justify-content-center">
                    <img width="45px" height="45px" src={imgParking} />
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    Parking
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ fontSize: '12px' }}
                  >
                    y motor lobby
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              className="md-2"
              style={{ textAlign: 'end', maxWidth: '142px' }}
            >
              <Row className="justify-content-center">
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
              <Row
                className="pt-2 justify-content-center"
                style={{ fontSize: '12px', color: 'rgb(183, 98, 94)' }}
              >
                Descagar PDF
              </Row>
              <Row
                className="justify-content-center"
                style={{ fontSize: '12px', color: 'rgb(183, 98, 94)' }}
              >
                Brochure LITORAL
              </Row>
            </Col>
            <Col
              className="md-1"
              style={{ textAlign: 'end', maxWidth: '40px' }}
            >
              <Row className="justify-content-center">
                <img width="56px" height="56px" src={imgWhatsapp} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="galeria">
        <SlidersGaleria />
      </div>
      <div id="ubicacion">
        <Container className="pt-5 px-5">
          <Row className="align-items-center">
            <Col className="md-9">
              <p style={{ textAlign: 'start' }}>PUERTO DE PROGRESO</p>
              <span style={{ textAlign: 'start' }} className="text-break">
                Vivir cerca del Puerto de Progreso te permite disfrutar de un
                maravilloso malecón con más <br />
                de un kilometro de oportunidades para relajarte y ser feliz.
              </span>
              <p>
                Además se encuentra a tan sólo 30 km de Mérida y es uno de los 5
                puertos comerciales más importantes del país. su sutuación
                geográfica es de suma importancia para la economía por su
                conectividad entre México y países externos como son Estados
                Unidos, Centro América, América del Sur y Europa.
              </p>
            </Col>
            <Col className="md-1" style={{ maxWidth: '100px' }}>
              <Row className="justify-content-center">
                <img width="25px" height="25px" src={imgSol} />
                <img width="25px" height="25px" src={imgLuna} />
              </Row>
            </Col>
            <Col
              className="md-2"
              style={{ textAlign: 'end', maxWidth: '200px' }}
            >
              <span>La mayor plusvalía</span>
              <p style={{ textAlign: 'end', color: 'rgb(183, 98, 94)' }}>
                sobre costa yucateca
              </p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Jumbotron className="vistaaerea-bg" fluid></Jumbotron>
          </Col>
        </Row>
        <Container className="pt-5 px-5">
          <Row>
            <Col className="md-6">
              <span style={{ textAlign: 'start' }}>Úbicación privilegiada</span>
              <br />
              {/* prettier-ignore */}
              <span style={{ fontFamily: 'Benne-Regular', fontSize: '20px', textAlign: 'start', letterSpacing: '1em', color: 'rgb(183, 98, 94)' }}>
                FRENTE AL MAR.
              </span>
              <br />
              <img width="20px" height="20px" src={imgEstrella} />
              <img width="20px" height="20px" src={imgEstrella} />
              <img width="20px" height="20px" src={imgEstrella} />
            </Col>
            <Col
              className="md-6"
              style={{ textAlign: 'end', maxWidth: '300px' }}
            >
              <span>Ubicado en el Kilometro 7.5</span>
              <p>Carretera Progreso - Chicxulub</p>
            </Col>
          </Row>
          <Row>
            <Col className="md-11">
              <Row className="justify-content-end">
                <Col
                  className="md-1"
                  style={{ textAlign: 'end', maxWidth: '100px' }}
                >
                  <Row className="justify-content-center">
                    <a
                      href="https://www.google.com.mx/maps/@20.9861506,-89.6910211,15z"
                      target="_blank"
                    >
                      <img width="60px" height="60px" src={imgGPS} />
                    </a>
                  </Row>
                  <Row className="justify-content-center">
                    <span style={{ fontSize: '12px' }}>Ver ubicación</span>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              className="md-1"
              style={{ textAlign: 'end', maxWidth: '100px' }}
            >
              <Row className="justify-content-center">
                <img width="60px" height="60px" src={imgCarro} />
              </Row>
              <Row className="justify-content-center">
                <span style={{ fontSize: '12px' }}>Hacer recorrido</span>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contacto">
        <Row className="pt-5 px-5">
          <Col className="md-12">
            <Row className="justify-content-center">
              <p
                style={{
                  textAlign: 'center',
                  maxWidth: '300px',
                }}
                className="text-break"
              >
                Contáctanos ahora <br />
                para conocer mas de LITORE
              </p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="md-12">
            <Row className="justify-content-center">
              <img
                width="200px"
                // height="40px"
                className="btnAgendarCita"
                style={{
                  cursor: 'pointer',
                }}
                onClick={handleShow}
              />
            </Row>
          </Col>
        </Row>
      </div>
      <FormularioContacto handleClose={handleClose} show={show} />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
