/* eslint-disable prettier/prettier */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-floating-whatsapp-button/dist/index.css';
import './App.css';
import style from './App.css';

import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { FloatingWhatsApp } from 'react-floating-whatsapp-button';
import { Parallax } from 'react-scroll-parallax';

import SlidersGaleria from './components/SlidersGaleria';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import FormularioContacto from './components/FormularioContacto';
import Amenidades from './components/Amenidades';

import { getBrochure, getURLWhatsapp } from './apiRoutes';

import imgEscudoPlaya from './assets/Recursos - LITORAL-21.svg'; // with import
import imgBannerProgreso from './assets/Banner Progreso.jpg'; // with import
import imgVive from './assets/Recursos - LITORAL-56.svg'; // with import
import imgSol from './assets/Recursos - LITORAL-07.svg'; // with import
import imgLuna from './assets/Recursos - LITORAL-08.svg'; // with import
import imgEstrella from './assets/Recursos - LITORAL-55.svg'; // with import
import imgAME_AccesoControlado from './assets/AME_ACCESO CONTROLADO.svg'; // with import
import imgAME_CasetaVig from './assets/AME_CASETA DE VIGILANCIA.svg'; // with import
import imgAME_TerrazaTechada from './assets/AME_TERRAZA TECHADA.svg'; // with import
import imgAME_AreaYoga from './assets/AME_YOGA.svg'; // with import
import imgAME_Parking from './assets/AME_PARKING AND MOTOR LOBBY.svg'; // with import
import imgAME_AreaPlaya from './assets/AME_AREADEPLAYA.svg'; // with import
import imgAME_Baños from './assets/AME_BANOS.svg'; // with import
import imgAME_Bar from './assets/AME_BAR.svg'; // with import
import imgAME_BeachLounge from './assets/AME_BEACH_LOUNGE.svg'; // with import
import imgAME_Bodegas from './assets/AME_BODEGAS.svg'; // with import
import imgAME_GamesRoom from './assets/AME_GAMESROOM.svg'; // with import
import imgAME_Gym from './assets/AME_GYM.svg'; // with import
import imgAME_Picinas from './assets/AME_PISCINAS & KIDS POOL.svg'; // with import
import imgAME_PrivateSunBeach from './assets/AME_PRIVATE SUN BEACH.svg'; // with import
import imgDescargarBrochure2 from './assets/Recursos - LITORAL-67.svg'; // with import
import imgWhatsapp from './assets/Recursos - LITORAL-60.svg'; // with import
import imgGPS from './assets/Recursos - LITORAL-68.svg'; // with import
import imgCarro from './assets/Recursos - LITORAL-69.svg'; // with import
import imgAgendarCita from './assets/Recursos - LITORAL-84.svg'; // with import
import imgBanner01 from './assets/Banner Progreso-01.png'; // with import
import imgBanner02 from './assets/bannersprogreso2-01.png'; // with import
import imgBanner03 from './assets/bannersprogreso2-02.png'; // with import

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="App">
      <div id="menu">
        <NavMenu />
      </div>
      <div style={{ height: '80px' }}/>
      <Row className="pt-5">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgBanner01}
                alt="Desde 3.8"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgBanner02}
                alt="Banner 02"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgBanner03}
                alt="Banner 03"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container className="pt-5">
        <Row className="p-5">
          <Col>
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={12}>
                    <span style={{ textAlign: 'start', color: 'rgb(183, 98, 94)' }}>
                      Chicxulub Puerto
                    </span>
                  </Col>
                  {/* <Col md={12}>
                    <p
                      style={{ textAlign: 'start', color: 'rgb(183, 98, 94)' }}
                    >
                      Chicxulub Puerto
                    </p>
                  </Col> */}
                </Row>
              </Col>
              <Col md={6}>
                <p
                  style={{
                    textAlign: 'end',
                  }}
                >
                  DEPARTAMENTOS FRENTE AL MAR
                </p>
              </Col>
              <Col md={12}>
                <p
                  style={{
                    textAlign: 'start',
                    fontFamily: 'Benne-Regular',
                    fontSize: '32px',
                  }}
                  className="text-break"
                >
                  Frente al mar nace LITORAL una torre de departamentos para
                  gozar de la brisa y del clima cálido de la costa Yucateca, El
                  lugar perfecto para vivir tu vida al máximo.
                </p>
              </Col>
              <Col md={10}>
                <p className="text-left float-left text-break">
                  {/* Entrégate al mar qué en cada brisa del viento deja una parte
                  de él en ti, haciéndote sentir la libertad al sonido de las
                  olas; Disfruta del sol que te acaricia en la arena con cada
                  rayo de luz en tu piel compartiendo un tiempo de felicidad y
                  libertad con la naturaleza. */}
                </p>
              </Col>
              <Col md={2} className="text-right float-right">
                <img width="90px" height="90px" src={imgEscudoPlaya} />
              </Col>
            </Row>
            <Row>
              <Container className="px-5 pt-5 text-left float-left">
                <img width="60px" height="60px" src={imgSol} />
              </Container>
            </Row>
            <Row>
              <img
                fluid
                src={imgVive} 
                style={{
                  width: '100%',
                  height: 'auto',
                }}
            />
            </Row>
            <Row className="pt-5">
              <Col md={6} className="text-left float-left">
                <Row>
                  <Col md={12}>
                    <span className="text-left float-left">
                      Un paraiso tropical
                    </span>
                  </Col>
                  <Col md={12}>
                    <p
                      style={{ textAlign: 'start', color: 'rgb(183, 98, 94)' }}
                    >
                      en la costa yucateca
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="text-right float-right">
                <img width="60px" height="60px" src={imgLuna} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row id="amenidades">
        <Col md={12} xs={12} className="pr-5 pb-5">
          <p className="pr-5" style={{ margin: 0, textAlign: 'end' }}>A M E N I D A D E S</p>
          <p className="pr-5" style={{ margin: 0, textAlign: 'end' }}>E X C L U S I V A S</p>
        </Col>
        <Col md={12} className="pb-4">
          <Amenidades/>
        </Col>
        <Col md={10} className="px-2 py-2">
          <Row className="px-5 justify-content-center">
            <Col md={12} xs={6} className="pb-4 px-3">
              <Row className="justify-content-center">
                <img width="160px" height="160px" src={imgAME_AccesoControlado} />
                <img width="160px" height="160px" src={imgAME_CasetaVig} />
                <img width="160px" height="160px" src={imgAME_TerrazaTechada} />
                <img width="160px" height="160px" src={imgAME_AreaYoga} />
                <img width="160px" height="160px" src={imgAME_Parking} />
                <img width="160px" height="160px" src={imgAME_Bar} />
                <img width="160px" height="160px" src={imgAME_BeachLounge} />
              </Row>
            </Col>
            <Col md={12} xs={6} className="pb-4 px-3">
              <Row className="justify-content-center">
                <img width="160px" height="160px" src={imgAME_GamesRoom} />
                <img width="160px" height="160px" src={imgAME_Gym} />
                <img width="160px" height="160px" src={imgAME_Picinas} />
                <img width="160px" height="160px" src={imgAME_PrivateSunBeach} />
                <img width="160px" height="160px" src={imgAME_AreaPlaya} />
                <img width="160px" height="160px" src={imgAME_Baños} />
                <img width="160px" height="160px" src={imgAME_Bodegas} />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={2} xs={12} className="align-self-center px-5">
          <Row className="justify-content-center">
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
      </Row>
      <Row id="galeria">
        <Col>
          <SlidersGaleria />
        </Col>
      </Row>
      <Row id="ubicacion">
        <Col md={12}>
          <img
            src={imgBannerProgreso}
            fluid
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Col>
        <Col md={12}>
          <Row>
            <Col md={6} className="pl-5 pt-5">
              <span style={{ textAlign: 'start' }}>Úbicación privilegiada</span>
              <br />
              <span style={{ fontFamily: 'Benne-Regular', fontSize: '20px', textAlign: 'start', letterSpacing: '1em', color: 'rgb(183, 98, 94)' }}>
                FRENTE AL MAR.
              </span>
              <br />
              <img width="20px" height="20px" src={imgEstrella} />
              <img width="20px" height="20px" src={imgEstrella} />
              <img width="20px" height="20px" src={imgEstrella} />
            </Col>
            <Col md={6} className="pr-5 pt-5 text-right float-right" >
              <span>Ubicado en el Kilometro 7.5</span>
              <p>Carretera Progreso - Chicxulub</p>
            </Col>
          </Row>
          <Row>
            <Col md={10} xs={6} className="pt-5">
              <Row className="justify-content-end">
                <Col md={1} style={{ textAlign: 'end'}}>
                  <Row className="justify-content-center">
                    <a
                      href="https://goo.gl/maps/c76oJ57acuA6i27d8"
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
            <Col md={2} xs={6} className="pt-5 text-right float-right">
              <Row className="justify-content-center">
                <img
                  width="60px"
                  height="60px"
                  src={imgCarro}
                  onClick={handleShow}
                  style={{
                    cursor: 'pointer',
                  }}
                />
              </Row>
              <Row className="justify-content-center">
                <span style={{ fontSize: '12px' }}>Hacer recorrido</span>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id="contacto">
        <Col md={12} className="pt-5">
          <Row className="justify-content-center">
            <p
              style={{
                textAlign: 'center',
                maxWidth: '300px',
              }}
              className="text-break"
            >
              Contáctanos ahora <br />
              para conocer mas de LITORAL
            </p>
          </Row>
        </Col>
        <Col md={12}>
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
      <FormularioContacto handleClose={handleClose} show={show} />
      <div id="footer">
        <Footer />
      </div>
      <FloatingWhatsApp
        phone="9993818008"
        headerTitle="Departamentos Litoral"
        popupMessage="Hola!... ¿como podemos ayudarte?"
        zIndex="1000"
        headerColor="#F1A899"
        backgroundColor=""
        autoOpenTimeout="2000"
        showPopup="true"
        size="90px"
        buttonImage="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MCA1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTU0QzVFO30KCS5zdDF7ZmlsbDojQjc2MjVFO30KCS5zdDJ7ZmlsbDojRUNFQ0U2O30KCS5zdDN7b3BhY2l0eTowLjI3O2ZpbGw6I0YxQTg5OTt9Cgkuc3Q0e2ZpbGw6bm9uZTt9Cgkuc3Q1e2ZpbGw6I0YxQTg5OTt9Cgkuc3Q2e2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzE1NEM1RTt9Cgkuc3Q3e29wYWNpdHk6MC40MTtmaWxsOiNGMUE4OTk7fQoJLnN0OHtmaWxsOiNGNENEODc7fQoJLnN0OXtmaWxsOm5vbmU7c3Ryb2tlOiMxNTRDNUU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MTB7b3BhY2l0eTowLjI0O2ZpbGw6I0I3NjI1RTt9Cjwvc3R5bGU+CjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjI1IiBjeT0iMjUiIHI9IjIzIi8+CjxnPgoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMjUiIGN5PSIyNSIgcj0iMTguMDMiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNC41MiwxNS4xN2MtNS4yLDAuMjUtOS4zLDQuNTgtOS4yOCw5Ljc4YzAsMS41OCwwLjM5LDMuMDgsMS4wNiw0LjRsLTEuMDQsNS4wMwoJCQljLTAuMDYsMC4yNywwLjE5LDAuNTEsMC40NiwwLjQ1bDQuOTMtMS4xN2MxLjI3LDAuNjMsMi42OSwwLjk5LDQuMTksMS4wMmM1LjMxLDAuMDgsOS43NC00LjE0LDkuOTEtOS40NQoJCQlDMzQuOTMsMTkuNTQsMzAuMjMsMTQuOSwyNC41MiwxNS4xN0wyNC41MiwxNS4xN3ogTTMwLjQsMzAuMzJjLTEuNDQsMS40NC0zLjM2LDIuMjQtNS40LDIuMjRjLTEuMiwwLTIuMzQtMC4yNy0zLjQtMC44CgkJCWwtMC42OS0wLjM0bC0zLjAyLDAuNzJsMC42NC0zLjA5bC0wLjM0LTAuNjZjLTAuNTUtMS4wOC0wLjgzLTIuMjUtMC44My0zLjQ3YzAtMi4wNCwwLjc5LTMuOTYsMi4yNC01LjQKCQkJYzEuNDMtMS40MywzLjM4LTIuMjQsNS40LTIuMjRjMi4wNCwwLDMuOTYsMC43OSw1LjQsMi4yNGMxLjQ0LDEuNDQsMi4yNCwzLjM2LDIuMjQsNS40QzMyLjY0LDI2Ljk0LDMxLjgzLDI4Ljg5LDMwLjQsMzAuMzIKCQkJTDMwLjQsMzAuMzJ6IE0zMC40LDMwLjMyIi8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI5Ljc0LDI3LjA0bC0xLjg5LTAuNTRjLTAuMjUtMC4wNy0wLjUyLDAtMC43LDAuMThsLTAuNDYsMC40N2MtMC4xOSwwLjItMC40OSwwLjI2LTAuNzUsMC4xNgoJCQljLTAuODktMC4zNi0yLjc4LTIuMDMtMy4yNi0yLjg3Yy0wLjE0LTAuMjQtMC4xMi0wLjU0LDAuMDUtMC43NmwwLjQtMC41MmMwLjE2LTAuMiwwLjE5LTAuNDgsMC4wOS0wLjcybC0wLjgtMS44CgkJCWMtMC4xOS0wLjQzLTAuNzQtMC41Ni0xLjEtMC4yNWMtMC41MywwLjQ1LTEuMTUsMS4xMi0xLjIzLDEuODhjLTAuMTMsMS4zMiwwLjQzLDIuOTksMi41OCw1YzIuNDgsMi4zMiw0LjQ3LDIuNjIsNS43NiwyLjMxCgkJCWMwLjczLTAuMTgsMS4zMi0wLjg5LDEuNjktMS40N0MzMC4zOSwyNy43LDMwLjE5LDI3LjE3LDI5Ljc0LDI3LjA0TDI5Ljc0LDI3LjA0eiBNMjkuNzQsMjcuMDQiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"
      />
    </div>
  );
}
export default App;
