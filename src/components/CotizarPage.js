/* eslint-disable prettier/prettier */

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState, useEffect, useLayoutEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from 'react-bootstrap';
import { CardBody, CardFooter } from 'reactstrap';
import { Button } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';

import FormularioContacto from './FormularioContacto';
import { loadDepartamentos } from '../apiRoutes';
import NavMenu from './NavMenu';
import Footer from './Footer';

import edificio from '../assets/edificio.png'; // with import
import ImageMapper from 'react-img-mapper';
import imgDisponible from '../assets/Recursos - LITORAL-85.svg'; // with import
import imgVendido from '../assets/Recursos - LITORAL-86.svg'; // with import
import imgApartado from '../assets/Recursos - LITORAL-87.svg'; // with import
import imgDesde from '../assets/Recursos - LITORAL-18.svg'; // with import

import img1DeptoT1N1 from '../assets/deptot1n1/SALA.jpg';
import img2DeptoT1N1 from '../assets/deptot1n1/RECÁMARA.jpg';
import img3DeptoT1N1 from '../assets/deptot1n1/TERRAZA.jpg';

import img1DeptoT2N2 from '../assets/deptot2n2/SALA.jpg';
import img2DeptoT2N2 from '../assets/deptot2n2/RECÁMARA.jpg';
import img3DeptoT2N2 from '../assets/deptot2n2/_TERRAZA.jpg';

import img1DeptoT3N2 from '../assets/deptot3n2/SALA.jpg';
import img2DeptoT3N2 from '../assets/deptot3n2/RECÁMARA.jpg';
import img3DeptoT3N2 from '../assets/deptot3n2/TERRAZA.jpg';

import img1DeptoT4N2 from '../assets/deptot4n2/SALA.jpg';
import img2DeptoT4N2 from '../assets/deptot4n2/RECÁMARA.jpg';
import img3DeptoT4N2 from '../assets/deptot4n2/_TERRAZA.jpg';

import img1DeptoPHt1 from '../assets/deptoPHt1/ROOF.jpg';
import img2DeptoPHt1 from '../assets/deptoPHt1/RECÁMARA.jpg';
import img3DeptoPHt1 from '../assets/deptoPHt1/_TERRAZA.jpg';

import img1DeptoPHt2 from '../assets/deptoPHt2/SALA.jpg';
import img2DeptoPHt2 from '../assets/deptoPHt2/RECÁMARA.jpg';
import img3DeptoPHt2 from '../assets/deptoPHt2/ROOF.jpg';

function CotizarPage() {
  const [tipodepto, setTipodepto] = useState('');
  const [noclick, setNoclicks] = useState(0);
  const [departamentos, setDepartamentos] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showDetail, setShowDetail] = useState(false);
  const [area, setArea] = useState(null);
  const [MAP, setMAP]  = useState ({
    areas: [],
  });
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize)
    };
  }, []);
  function renderImagenes() {
    console.log('tipodepto',tipodepto);
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
  function getCoordenadas(id) {
    switch (id) {
      case 'piso1-r':
        return [256, 320, 256, 355, 332, 355, 332, 320]; //
      case 'piso1-c':
        return [178, 320, 178, 355, 252, 355, 252, 320]; //
      case 'piso1-l':
        return [99, 320, 99, 355, 175, 355, 175, 320]; //
      case 'piso2-r':
        return [256, 284, 256, 317, 332, 317, 332, 284]; //
      case 'piso2-c':
        return [178, 284, 178, 317, 252, 317, 252, 284]; //
      case 'piso2-l':
        return [99, 284, 99, 317, 175, 317, 175, 284]; //
      case 'piso3-r':
        return [256, 247, 256, 280, 332, 280, 332, 247]; //
      case 'piso3-c':
        return [178, 247, 178, 280, 252, 280, 252, 247]; //
      case 'piso3-l':
        return [99, 247, 99, 280, 175, 280, 175, 247]; //
      case 'piso4-r':
        return [256, 210, 256, 244, 332, 244, 332, 210]; //
      case 'piso4-c':
        return [178, 210, 178, 244, 252, 244, 252, 210]; //
      case 'piso4-l':
        return [99, 210, 99, 244, 175, 244, 175, 210]; //
      case 'piso5-r':
        return [256, 174, 256, 207, 332, 207, 332, 174]; //
      case 'piso5-c':
        return [178, 174, 178, 207, 252, 207, 252, 174]; //
      case 'piso5-l':
        return [99, 174, 99, 207, 175, 207, 175, 174]; //
      case 'piso6-r':
        return [256, 138, 256, 170, 332, 170, 332, 138]; //
      case 'piso6-c':
        return [178, 138, 178, 170, 252, 170, 252, 138]; //
      case 'piso6-l':
        return [99, 138, 99, 170, 175, 170, 175, 138]; //
      case 'piso7-r':
        return [256, 101, 256, 134, 332, 134, 332, 101]; //
      case 'piso7-c':
        return [178, 101, 178, 134, 252, 134, 252, 101]; //
      case 'piso7-l':
        return [99, 101, 99, 134, 175, 134, 175, 101]; //
      case 'pisoph-r':
        return [256, 20, 256, 97, 332, 97, 332, 20]; //
      case 'pisoph-c':
        return [178, 20, 178, 97, 252, 97, 252, 20]; //
      case 'pisoph-l':
        return [99, 20, 99, 97, 175, 97, 175, 20]; //
      default:
        return [0, 0, 0, 0, 0, 0, 0, 0]; //
    }
  }
  function getColorCuadro(estatus) {
    switch (estatus) {
      case 'disponible':
        return 'rgba(0,0,0,0.1)'; // blanco
      case 'vendido':
        return 'rgba(255,0,0,0.4)'; // rojo
      case 'apartado':
        return 'rgba(255,215,0,0.4)'; // amarillo
      default:
        return 'rgba(0,0,0,0.1)';
    }
  }
  function getColorIndicador(estatus) {
    // switch (estatus) {
    //   case 'disponible':
    //     return '';// blanco
    //   case 'vendido':
    //     return 'rgb(163,98,95)'; // rojo
    //   case 'apartado':
    //     return 'rgb(218,165,32)'; // amarillo
    //   default:
    //     return 'rgba(0,0,0,0.1)';
    // }
    return ''; // rojo
  }
  const handleClick = (area) => {
    console.log(area.tipo)
    switch (area.tipo) {
      case 'A1':
      case 'C1':
        setTipodepto(1);   
        break;
      case 'B1':
        setTipodepto(2);
        break;
      case 'A2':
      case 'C2':
      case 'A3':
      case 'C3':
      case 'A4':
      case 'C4':
      case 'A5':
      case 'C5':
      case 'A6':
      case 'C6':
      case 'A7':
      case 'C7':
        setTipodepto(3);
        break;
      case 'B2':
      case 'B3':
      case 'B4':
      case 'B5':
      case 'B6':
      case 'B7':
        setTipodepto(4);
        break;
      case 'PH A':
      case 'PH C':
        setTipodepto(5);   
        break;
      case 'PH B':
        setTipodepto(6);
        break;
      default:
        break;
    }
    setShowDetail(true);
    setArea(area);
  };
  const handleImagenClics = () => {
    switch (noclick) {
      case 0:
        setNoclicks(1);
        break;
      case 1:
        setNoclicks(2);
        break;
      case 2:
        setNoclicks(0);
        break;
      default:
        setNoclicks(0);
        break;
    }
  }
  useEffect(() => {
    console.log(loadDepartamentos)
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
              preFillColor : getColorCuadro(departamento[1].estatus), //color segun el estatus
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
      <div style={{ height: '90px' }} />
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
            height={444}
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
                  place={
                    itemdepartamento[1].departamento === 'pisoph-r' || 
                    itemdepartamento[1].departamento === 'pisoph-c' ||
                    itemdepartamento[1].departamento === 'pisoph-l' ?
                    'bottom' : 'top'
                  }
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
          <Modal show={showDetail} centered size="sm">
            <CardBody>
              <Col>
              <Row className="justify-content-center">
                DEPARTAMENTO <br /><br />
              </Row>
              <Row className="justify-content-center">
                <img
                  width="300px"
                  height="auto"
                  src={renderImagenes()[noclick]}
                  onClick={
                    handleImagenClics
                  }
                />
              </Row>
              <Row className="pt-3 justify-content-center">
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
              <Row className="justify-content-center">
                <Button color="primary" onClick={() => setShowDetail(false)}>
                  Cerrar
                </Button>
              </Row>
            </CardFooter>
          </Modal>
        ) : null}
      <FormularioContacto handleClose={handleClose} show={show} />
    </div>
  );
}

export default CotizarPage;
