/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Footer from './Footer';
import NavMenu from './NavMenu';
import FormularioContacto from './FormularioContacto';

import imgDeptoT1N1 from '../assets/deptot1n1/DT1 N1.jpg'; // with import
import img1DeptoT1N1 from '../assets/deptot1n1/SALA.jpg';
import img2DeptoT1N1 from '../assets/deptot1n1/RECÁMARA.jpg';
import img3DeptoT1N1 from '../assets/deptot1n1/TERRAZA.jpg';
import imgUbicacionT1N1 from '../assets/deptot1n1/Recursos - LITORAL-25.svg'; // with import

import imgDeptoT2N2 from '../assets/deptot2n2/DT2 N2.jpg'; // with import
import img1DeptoT2N2 from '../assets/deptot2n2/SALA.jpg';
import img2DeptoT2N2 from '../assets/deptot2n2/RECÁMARA.jpg';
import img3DeptoT2N2 from '../assets/deptot2n2/_TERRAZA.jpg';
import imgUbicacionT2N2 from '../assets/deptot2n2/Recursos - LITORAL-22.svg'; // with import

import imgDeptoT3N2 from '../assets/deptot3n2/DT3 N2-7.jpg'; // with import
import img1DeptoT3N2 from '../assets/deptot3n2/SALA.jpg';
import img2DeptoT3N2 from '../assets/deptot3n2/RECÁMARA.jpg';
import img3DeptoT3N2 from '../assets/deptot3n2/TERRAZA.jpg';
import imgUbicacionT3N2 from '../assets/deptot3n2/Recursos - LITORAL-23.svg'; // with import

import imgDeptoT4N2 from '../assets/deptot4n2/DT4 N2-7.jpg'; // with import
import img1DeptoT4N2 from '../assets/deptot4n2/SALA.jpg';
import img2DeptoT4N2 from '../assets/deptot4n2/RECÁMARA.jpg';
import img3DeptoT4N2 from '../assets/deptot4n2/_TERRAZA.jpg';
import imgUbicacionT4N2 from '../assets/deptot4n2/Recursos - LITORAL-26.svg'; // with import

import imgDeptoPHt1 from '../assets/deptoPHt1/PLANTA ALTA.jpg'; // with import
import imgDeptoPHt1_2 from '../assets/deptoPHt1/PLANTA BAJA.jpg'; // with import
import img1DeptoPHt1 from '../assets/deptoPHt1/ROOF.jpg';
import img2DeptoPHt1 from '../assets/deptoPHt1/RECÁMARA.jpg';
import img3DeptoPHt1 from '../assets/deptoPHt1/_TERRAZA.jpg';
import imgUbicacionPHT1 from '../assets/deptoPHt2/Recursos - LITORAL-24.svg'; // with import

import imgDeptoPHt2 from '../assets/deptoPHt2/PLANTA ALTA.jpg'; // with import
import imgDeptoPHt2_2 from '../assets/deptoPHt2/PLANTA BAJA.jpg'; // with import
import img1DeptoPHt2 from '../assets/deptoPHt2/SALA.jpg';
import img2DeptoPHt2 from '../assets/deptoPHt2/RECÁMARA.jpg';
import img3DeptoPHt2 from '../assets/deptoPHt2/ROOF.jpg';
import imgUbicacionPHT2 from '../assets/deptoPHt1/Recursos - LITORAL-27.svg'; // with import

import imgSol from '../assets/Recursos - LITORAL-07.svg'; // with import
import imgLuna from '../assets/Recursos - LITORAL-08.svg'; // with import
import imgEstrella from '../assets/Recursos - LITORAL-55.svg'; // with import
import imgAgendarCita from '../assets/Recursos - LITORAL-84.svg'; // with import
import imgCotizar from '../assets/Recursos - LITORAL-78.svg'; // with import

function DepartamentosPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [tipodepto, setTipodepto] = useState(1);
  function handlerSetTipoDepto(tipo) {
    setTipodepto(tipo);
  }
  function renderImagenPortada() {
    switch (tipodepto) {
      case 1:
        return imgDeptoT1N1;
      case 2:
        return imgDeptoT2N2;
      case 3:
        return imgDeptoT3N2;
      case 4:
        return imgDeptoT4N2;
      case 5:
        return imgDeptoPHt1;
      case 6:
        return imgDeptoPHt2;
      default:
        return imgDeptoT1N1;
    }
  }
  function renderUbicacionesPortada() {
    switch (tipodepto) {
      case 1:
        return imgUbicacionT1N1;
      case 2:
        return imgUbicacionT2N2;
      case 3:
        return imgUbicacionT3N2;
      case 4:
        return imgUbicacionT4N2;
      case 5:
        return imgUbicacionPHT1;
      case 6:
        return imgUbicacionPHT2;
      default:
        return imgUbicacionT1N1;
    }
  }
  function renderImagenes() {
    switch (tipodepto) {
      case 1:
        return [img1DeptoT1N1, img2DeptoT1N1, img3DeptoT1N1];
      case 2:
        return [img1DeptoT2N2, img2DeptoT2N2, img3DeptoT2N2];
      case 3:
        return [img1DeptoT3N2, img2DeptoT3N2, img3DeptoT3N2];
      case 4:
        return [img1DeptoT4N2, img2DeptoT4N2, img3DeptoT4N2];
      case 5:
        return [img1DeptoPHt1, img2DeptoPHt1, img3DeptoPHt1];
      case 6:
        return [img1DeptoPHt2, img2DeptoPHt2, img3DeptoPHt2];
      default:
        return [img1DeptoT1N1, img2DeptoT1N1, img3DeptoT1N1];
    }
  }
  function renderCaracteristicas() {
    switch (tipodepto) {
      case 1:
        return [
          '3 Recámaras',
          'Cocina / barra desayunadora',
          'Sala',
          'Comedor',
          'Cuarto de servicio',
          'Terraza con Jacuzzi',
          '4, 1/2 baños',
          'Bodega',
          '',
          '',
        ];
      case 2:
        return [
          '2 Recámaras',
          'Cocina / barra desayunadora',
          'Sala',
          'Comedor',
          'Cuarto de servicio',
          'Terraza con Jacuzzi',
          '3 Baños completos',
          'Bodega',
          '',
          '',
        ];
      case 3:
        return [
          '3 Recámaras',
          'Cocina / barra desayunadora',
          'Sala',
          'Comedor',
          'Cuarto de servicio',
          'Terraza',
          '4, 1/2 baños',
          'Bodega',
          '',
          '',
        ];
      case 4:
        return [
          '2 Recámaras',
          'Cocina / barra desayunadora',
          'Sala',
          'Comedor',
          'Cuarto de servicio',
          'Terraza',
          '3 Baños completos',
          'Bodega',
          '',
          '',
        ];
      case 5:
        return [
          '3 Recámaras',
          'Cocina / barra desayunadora',
          'Sala',
          'Comedor',
          'Terraza',
          'Terraza Rooftop con Jacuzzi',
          'Bar',
          'Cuarto de servicio',
          '5, 1/2 baños',
          'Bodega',
        ];
      case 6:
        return [
          '3 Recámaras',
          'Cocina / barra desayunadora',
          'Sala',
          'Comedor',
          'Cuarto de servicio',
          'Terraza',
          'Terraza Rooftop con Jacuzzi',
          'Bar',
          '4 Baños',
          'Bodega',
        ];
      default:
        return [
          '3 Recámaras',
          'Cocina / barra desayunadora',
          'Sala',
          'Comedor',
          'Cuarto de servicio',
          'Terraza con Jacuzzi',
          '4, 1/2 baños',
          'Bodega',
          '',
          '',
        ];
    }
  }
  function renderDimensiones() {
    switch (tipodepto) {
      case 1:
        return [
          '139.26 m2', //Área interior
          '15.12 m2', //Terrraza exterior
          '25.09 m2', //Terraza techada
          '181.27 m2', //Total
        ];
      case 2:
        return [
          '79.83 m2', //Área interior
          '14.70 m2', //Terrraza exterior
          '16.77 m2', //Terraza techada
          '113.10 m2', //Total
        ];
      case 3:
        return [
          '139.26 m2', //Área interior
          '', //Terrraza exterior
          '25.09 m2', //Terraza techada
          '166.15 m2', //Total
        ];
      case 4:
        return [
          '79.83 m2', //Área interior
          '', //Terrraza exterior
          '16.77 m2', //Terraza techada
          '98.40 m2', //Total
        ];
      case 5:
        return [
          '167.07 m2', //Área interior
          '45.36 m2', //Terrraza exterior
          '53.18 m2', //Terraza techada
          '267.41 m2', //Total
        ];
      case 6:
        return [
          '97.59 m2', //Área interior
          '35.70 m2', //Terrraza exterior
          '45.23 m2', //Terraza techada
          '180.32 m2', //Total
        ];
      default:
        return [
          '139.26 m2', //Área interior
          '15.12 m2', //Terrraza exterior
          '25.09 m2', //Terraza techada
          '181.27 m2', //Total
        ];
    }
  }
  return (
    <div className="App">
      <div id="menu">
        <NavMenu />
      </div>
      <div style={{ height: '80px' }} />
      <div id="cuerpo" className="pt-5">
        <Container>
          <Row>
            <Col id="imagenesPortada" md={8} xs={12}>
              <img src={renderImagenPortada()}
                fluid
                style={{
                  width: '100%',
                  height: 'auto',
                }}/>
              <Row
                id="lineaSolLuna"
                className={
                  tipodepto == 5 || tipodepto == 6
                    ? 'hide'
                    : 'pt-3 justify-content-end'
                }
              >
                <img
                  style={{ margin: 0, textAlign: 'end' }}
                  width="25px"
                  height="25px"
                  src={imgSol}
                />
                <img
                  style={{ margin: 0, textAlign: 'end' }}
                  width="25px"
                  height="25px"
                  src={imgLuna}
                />
              </Row>
              <Row
                id="lineaPlantaBaja"
                className={
                  tipodepto == 5 || tipodepto == 6
                    ? 'pt-3 justify-content-start'
                    : 'hide'
                }
              >
                <Col md={8} xs={10} className="pl-5">
                  <span className="pr-5">PLANTA BAJA</span>
                  <img
                    className="mx-3"
                    style={{ margin: 0, textAlign: 'end' }}
                    width="12px"
                    height="12px"
                    src={imgEstrella}
                  />
                  <img
                    className="ml-3 mr-5"
                    style={{ margin: 0, textAlign: 'end' }}
                    width="12px"
                    height="12px"
                    src={imgEstrella}
                  />
                </Col>
                <Col md={4} xs={2}>
                  <Row className="justify-content-end">
                    <img
                      className="mx-5"
                      style={{ margin: 0, textAlign: 'end' }}
                      width="25px"
                      height="25px"
                      src={imgLuna}
                    />
                  </Row>
                </Col>
              </Row>
              <Row
                id="imagenPortada2"
                className={
                  tipodepto == 5 || tipodepto == 6
                    ? 'pl-3 justify-content-center'
                    : 'hide'
                }
              >
                <img
                  src={tipodepto == 5 ? imgDeptoPHt1_2 : imgDeptoPHt2_2}
                  fluid
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Row>
              <Row
                id="lineaPlantaAlta"
                className={
                  tipodepto == 5 || tipodepto == 6
                    ? 'pt-3 justify-content-start'
                    : 'hide'
                }
              >
                <Col md={8} xs={10} className="pl-5">
                  <span className="pr-5">PLANTA ALTA</span>
                  <img
                    className="mx-3"
                    style={{ margin: 0, textAlign: 'end' }}
                    width="12px"
                    height="12px"
                    src={imgEstrella}
                  />
                  <img
                    className="ml-3 mr-5"
                    style={{ margin: 0, textAlign: 'end' }}
                    width="12px"
                    height="12px"
                    src={imgEstrella}
                  />
                </Col>
                <Col md={4} xs={2}>
                  <Row className="justify-content-end">
                    <img
                      className="mx-5"
                      style={{ margin: 0, textAlign: 'end' }}
                      width="25px"
                      height="25px"
                      src={imgSol}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col id="botones" md={4} xs={12}>
              <Row className="pr-5 pt-5 text-right float-right">
                <ButtonGroup vertical fluid>
                  <span
                    style={{
                      paddingRight: '12px',
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    NIVEL &nbsp;1
                  </span>
                  <Button
                    className="btnDepartamentos"
                    style={{
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    onClick={setTipodepto.bind(this, 1)}
                  >
                    DEPTO TIPO A
                  </Button>
                  <Button
                    className="btnDepartamentos"
                    style={{
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    onClick={setTipodepto.bind(this, 2)}
                  >
                    DEPTO TIPO B
                  </Button>
                  <br />
                  <span
                    style={{
                      paddingRight: '12px',
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    NIVEL &nbsp;2 - 7
                  </span>
                  <Button
                    className="btnDepartamentos"
                    style={{
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    onClick={setTipodepto.bind(this, 3)}
                  >
                    DEPTO TIPO A
                  </Button>
                  <Button
                    className="btnDepartamentos"
                    style={{
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    onClick={setTipodepto.bind(this, 4)}
                  >
                    DEPTO TIPO B
                  </Button>
                  <br />
                  <span
                    style={{
                      paddingRight: '12px',
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    NIVEL &nbsp;8 - 9
                  </span>
                  <Button
                    className="btnDepartamentos"
                    style={{
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    onClick={setTipodepto.bind(this, 5)}
                  >
                    PENTHOUSE TIPO A
                  </Button>
                  <Button
                    className="btnDepartamentos"
                    style={{
                      width: '200px',
                      textAlign: 'end',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    onClick={setTipodepto.bind(this, 6)}
                  >
                    PENTHOUSE TIPO B
                  </Button>
                </ButtonGroup>
              </Row>
              <Row className="pr-5 pt-5 text-right float-right d-none d-sm-block">
                <img height="100px" src={renderUbicacionesPortada()} />
              </Row>
            </Col>
          </Row>
          <Row className="pb-3 pl-5">
            <Col md={9} xs={12}>
              <Row className="pb-3  pt-5">
                <span
                  style={{
                    paddingLeft: '15px',
                    fontFamily: 'OpenSans-Regular',
                    fontSize: '18px',
                    color: 'rgb(241, 168, 153)',
                  }}
                >
                  ESPECIFICACIONES
                </span>
              </Row>
              <Row>
                <Col className="md-6">
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[0]}
                  </span>
                  <br />
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[1]}
                  </span>
                  <br />
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[2]}
                  </span>
                  <br />
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[3]}
                  </span>
                  <br />
                  <img
                    width="10px"
                    src={imgEstrella}
                    className={tipodepto == 5 || tipodepto == 6 ? '' : 'hide'}
                  />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    className={tipodepto == 5 || tipodepto == 6 ? '' : 'hide'}
                  >
                    {renderCaracteristicas()[8]}
                  </span>
                </Col>
                <Col className="md-6">
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[4]}
                  </span>
                  <br />
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[5]}
                  </span>
                  <br />
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[6]}
                  </span>
                  <br />
                  <img width="10px" src={imgEstrella} />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                  >
                    {renderCaracteristicas()[7]}
                  </span>
                  <br />
                  <img
                    width="10px"
                    src={imgEstrella}
                    className={tipodepto == 5 || tipodepto == 6 ? '' : 'hide'}
                  />
                  <span
                    style={{
                      paddingLeft: '15px',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                    }}
                    className={tipodepto == 5 || tipodepto == 6 ? '' : 'hide'}
                  >
                    {renderCaracteristicas()[9]}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col md={3} xs={12}>
              <Row className="pb-3 pt-5">
                <span
                  style={{
                    fontFamily: 'OpenSans-Regular',
                    fontSize: '18px',
                    color: 'white',
                    backgroundColor: 'rgb(21, 76, 94)',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  Superficies en m2
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </Row>
              <Row>
                <Col
                  className="md-6"
                  style={{
                    maxWidth: '200px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    Área interior
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    {renderDimensiones()[0]}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                    className={tipodepto == 3 || tipodepto == 4 ? 'hide' : ''}
                  >
                    Terraza exterior
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    {renderDimensiones()[1]}
                  </span>
                </Col>
                <Col
                  className="md-6"
                  style={{
                    maxWidth: '200px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    Terraza techada
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    {renderDimensiones()[2]}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    Total
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: '12px',
                      color: 'rgb(241, 168, 153)',
                    }}
                  >
                    {renderDimensiones()[3]}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div id="imagenes" className="pt-5">
          <br />
          <Row>
            <Col>
              <img src={renderImagenes()[0]}
                fluid
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              {/* <Jumbotron src={renderImagenes()[0]} fluid style={{
                  width: '100%',
                  height: '100%',
                }}></Jumbotron> */}
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <img src={renderImagenes()[1]}
                fluid
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              {/* <Jumbotron className={renderImagenes()[1]} fluid></Jumbotron> */}
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <img src={renderImagenes()[2]}
                fluid
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              {/* <Jumbotron className={renderImagenes()[2]} fluid></Jumbotron> */}
            </Col>
          </Row>
        </div>
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
              <a
                href="/cotizar"
                style={{
                  fontSize: '22px',
                  textDecoration: 'none',
                  color: 'rgb(21,76, 94)',
                }}
              >
                <img
                  width="145px"
                  height="40px"
                  // src={imgCotizar}
                  className="btnCotizar"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              </a>
              &nbsp;&nbsp;
              <img
                width="200px"
                height="40px"
                className="btnAgendarCita"
                // src={imgAgendarCita}
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

export default DepartamentosPage;
