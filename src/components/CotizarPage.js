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
        return [242, 465, 242, 512, 316, 512, 316, 465]; //
      case 'piso1-c':
        return [168, 465, 168, 512, 240, 512, 240, 465]; //
      case 'piso1-l':
        return [91, 465, 91, 512, 165, 512, 165, 465]; //
      case 'piso2-r':
        return [242, 416, 242, 460, 316, 460, 316, 416]; //
      case 'piso2-c':
        return [168, 416, 168, 460, 240, 460, 240, 416]; //
      case 'piso2-l':
        return [91, 416, 91, 460, 165, 460, 165, 416]; //
      case 'piso3-r':
        return [242, 364, 242, 411, 316, 411, 316, 364]; //
      case 'piso3-c':
        return [168, 364, 168, 411, 240, 411, 240, 364]; //
      case 'piso3-l':
        return [91, 364, 91, 411, 165, 411, 165, 364]; //
      case 'piso4-r':
        return [242, 315, 242, 360, 316, 360, 316, 315]; //
      case 'piso4-c':
        return [168, 315, 168, 360, 240, 360, 240, 315]; //
      case 'piso4-l':
        return [91, 315, 91, 360, 165, 360, 165, 315]; //
      case 'piso5-r':
        return [242, 266, 242, 312, 316, 312, 316, 266]; //
      case 'piso5-c':
        return [168, 266, 168, 312, 240, 312, 240, 266]; //
      case 'piso5-l':
        return [91, 266, 91, 312, 165, 312, 165, 266]; //
      case 'piso6-r':
        return [242, 213, 242, 260, 316, 260, 316, 213]; //
      case 'piso6-c':
        return [168, 213, 168, 260, 240, 260, 240, 213]; //
      case 'piso6-l':
        return [91, 213, 91, 260, 165, 260, 165, 213]; //
      case 'piso7-r':
        return [242, 165, 242, 211, 316, 211, 316, 165]; //
      case 'piso7-c':
        return [168, 165, 168, 211, 240, 211, 240, 165]; //
      case 'piso7-l':
        return [91, 165, 91, 211, 165, 211, 165, 165]; //
      case 'pisoph-r':
        return [242, 60, 242, 160, 316, 160, 316, 60]; //
      case 'pisoph-c':
        return [168, 60, 168, 160, 240, 160, 240, 60]; //
      case 'pisoph-l':
        return [91, 60, 91, 160, 165, 160, 165, 60]; //
      default:
        return [0, 0, 0, 0, 0, 0, 0, 0]; //
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
      <div style={{ height: '80px' }} />
      <Row className="cotizar-bg">
        <Col md={4} xs={12} className="align-self-center d-none d-sm-block">
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
          <Row className="pl-0">
            <img
              width="120px"
              src={imgDesde}
            />
          </Row>
        </Col>
        <Col md={4} xs={12} className="text-center float-center align-self-center">
          <ImageMapper
            src={edificio}
            map={MAP}
            height={630}
            width={370}
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
        <Col md={4} xs={12} className="text-center float-center align-self-center pb-5">
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
