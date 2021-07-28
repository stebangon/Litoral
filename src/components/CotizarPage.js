/* eslint-disable prettier/prettier */

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from 'react-bootstrap';
import { CardBody, CardFooter } from 'reactstrap';
import { Button } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';

import { loadDepartamentos } from '../apiRoutes';
import NavMenu from './NavMenu';
import Footer from './Footer';

import edificio from '../assets/edificio.png'; // with import
import ImageMapper from 'react-img-mapper';
import imgDisponible from '../assets/Recursos - LITORAL-85.svg'; // with import
import imgVendido from '../assets/Recursos - LITORAL-86.svg'; // with import
import imgApartado from '../assets/Recursos - LITORAL-87.svg'; // with import
import imgDesde from '../assets/Recursos - LITORAL-18.svg'; // with import

function CotizarPage() {
  const [departamentos, setDepartamentos] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showDetail, setShowDetail] = useState(false);
  const [area, setArea] = useState(null);
  const [MAP, setMAP]  = useState ({
    areas: [],
  });
  function getCoordenadas(id) {
    switch (id) {
      case 'piso1-r':
        return [329, 591, 329, 648, 430, 648, 430, 591];
      case 'piso1-c':
        return [226, 591, 226, 648, 325, 648, 325, 591];
      case 'piso1-l':
        return [121, 591, 121, 648, 221, 648, 221, 591];
      case 'piso2-r':
        return [329, 528, 329, 585, 430, 585, 430, 528];
      case 'piso2-c':
        return [226, 528, 226, 585, 325, 585, 325, 528];
      case 'piso2-l':
        return [121, 528, 121, 585, 221, 585, 221, 528];
      case 'piso3-r':
        return [329, 464, 329, 521, 430, 521, 430, 464];
      case 'piso3-c':
        return [226, 464, 226, 521, 325, 521, 325, 464];
      case 'piso3-l':
        return [121, 464, 121, 521, 221, 521, 221, 464];
      case 'piso4-r':
        return [329, 401, 329, 458, 430, 458, 430, 401];
      case 'piso4-c':
        return [226, 401, 226, 458, 325, 458, 325, 401];
      case 'piso4-l':
        return [121, 401, 121, 458, 221, 458, 221, 401];
      case 'piso5-r':
        return [329, 336, 329, 393, 430, 393, 430, 336];
      case 'piso5-c':
        return [226, 336, 226, 393, 325, 393, 325, 336];
      case 'piso5-l':
        return [121, 336, 121, 393, 221, 393, 221, 336];
      case 'piso6-r':
        return [329, 273, 329, 330, 430, 330, 430, 273];
      case 'piso6-c':
        return [226, 273, 226, 330, 325, 330, 325, 273];
      case 'piso6-l':
        return [121, 273, 121, 330, 221, 330, 221, 273];
      case 'piso7-r':
        return [329, 210, 329, 268, 430, 268, 430, 210];
      case 'piso7-c':
        return [226, 210, 226, 268, 325, 268, 325, 210];
      case 'piso7-l':
        return [121, 210, 121, 268, 221, 268, 221, 210];
      case 'pisoph-r':
        return [329, 80, 329, 203, 430, 203, 430, 80];
      case 'pisoph-c':
        return [226, 80, 226, 203, 325, 203, 325, 80];
      case 'pisoph-l':
        return [121, 80, 121, 203, 221, 203, 221, 80];
      default:
        return [329, 591, 329, 648, 430, 648, 430, 591];
    }
  }
  function getColorCuadro(estatus) {
    switch (estatus) {
      case 'disponible':
        return 'rgba(0,0,0,0.1)' // blanco
      case 'vendido':
        return 'rgba(255,0,0,0.6)' // rojo
      case 'apartado':
        return 'rgba(255,215,0,0.6)' // amarillo
      default:
        return 'rgba(0,0,0,0.1)'
    }
  }
  function getColorIndicador(estatus) {
    switch (estatus) {
      case 'disponible':
        return ''// blanco
      case 'vendido':
        return 'rgb(163,98,95)' // rojo
      case 'apartado':
        return 'rgb(218,165,32)' // amarillo
      default:
        return 'rgba(0,0,0,0.1)'
    }
  }
  const handleClick = (area) => {
    setShowDetail(true);
    setArea(area);
  };
  useEffect(() => {
    fetch(loadDepartamentos, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Volvemos el objeto data en un array de elementos
        const departamentos = data ? Object.entries(data) : [];
        // el formato de la departamentos quedo asi:
        // array
        // [0] - ID
        // [1] - Objeto
        // - departamento: xxxx
        // - tipo: xxxx
        // - m2: xxxx
        // - estatus: xxxx
        setDepartamentos(departamentos);
        let MAPTemp = new Object;
        MAPTemp.name = 'my-app';
        MAPTemp.areas = [];
        departamentos.forEach(departamento => {
          MAPTemp.areas.push(
            {
              id : departamento[1].departamento,
              shape : 'poly',
              strokeColor : 'black',
              coords:  getCoordenadas(departamento[1].departamento),
              fillColor : getColorCuadro(departamento[1].estatus), //color segun el estatus
              tipo : departamento[1].tipo,
              m2 : departamento[1].m2,
              estatus : departamento[1].estatus,
            }
          )
        });
        setMAP(MAPTemp);
        console.log(MAPTemp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <div id="menu">
        <NavMenu />
      </div>
      <div id="cuerpo" className="cotizar-bg">
        <Row>
          <Col className="md-4 align-self-center">
            <Row className="pl-5 pb-5">
              <span>Si está interesado en conocer LITORAL, <br />póngase en contacto con nosotros.</span>
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
            <Row className="pl-0 pt-5">
              <img
                width="120px"
                src={imgDesde}
              />
            </Row>
          </Col>
          <Col className="md-4">
            <ImageMapper
              src={edificio}
              map={MAP}
              height={800}
              width={500}
              onClick={(area) => {
                handleClick(area);
              }}
            />
            {departamentos.map((itemdepartamento) => (
                <div>
                  <div className={itemdepartamento[1].departamento}
                    key={itemdepartamento[1].departamento}
                    style={{
                    backgroundColor: getColorIndicador(itemdepartamento[1].estatus),
                    }} 
                    data-tip
                    data-for={itemdepartamento[1].departamento}
                  /> 
                  <ReactTooltip
                    id={itemdepartamento[1].departamento}
                    effect="solid"
                    border={true}
                    type={
                      itemdepartamento[1].estatus === 'disponible'
                      ? 'light'
                      : itemdepartamento[1].estatus === 'vendido'
                        ? 'error'
                        : 'warning'}
                  >
                    DEPARTAMENTO <br />
                    Tipo: {itemdepartamento[1].tipo} <br />
                    M<sup>2</sup>: {itemdepartamento[1].m2} <br />
                    Estatus: {itemdepartamento[1].estatus} <br />
                  </ReactTooltip>
                </div>
              ))
            }
          </Col>
          <Col className="md-4 align-self-center">
            <Row className="pr-5 justify-content-end">
              <span>DISPONIBLE</span>&nbsp;&nbsp;
              <img
                width="24px"
                src={imgDisponible}
              />
            </Row>
            <Row className="pr-5 pt-3 justify-content-end">
              <span>VENDIDO</span>&nbsp;&nbsp;
              <img
                width="24px"
                src={imgVendido}
              />
            </Row>
            <Row className="pr-5 pt-3 justify-content-end">
              <span>APARTADO</span>&nbsp;&nbsp;
              <img
                width="24px"
                src={imgApartado}
              />
            </Row>
          </Col>
        </Row>
      </div>
      <div id="footer">
        <Footer />
      </div>
      {area != null ? (
          <Modal show={showDetail} centered>
            <CardBody>
              <Col>
              <Row className="justify-content-center">
                DEPARTAMENTO <br /><br />
              </Row>
              <Row className="justify-content-center">
                Tipo: {area.tipo} <br />
              </Row>
              <Row className="justify-content-center">
                de {area.m2} M<sup>2</sup> <br />
              </Row>
              <Row className="justify-content-center">
                Estatus: {area.estatus} <br />
              </Row>
              <Row className="justify-content-center">    
                <img
                  width="200px"
                  height="40px"
                  className="btnAgendarCita"
                  // src={imgAgendarCita}
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    handleShow();
                    setShowDetail(false);
                  }}
                />
              </Row>
              </Col>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => setShowDetail(false)}>
                Cerrar
              </Button>
            </CardFooter>
          </Modal>
        ) : null}
    </div>
  );
}

export default CotizarPage;
