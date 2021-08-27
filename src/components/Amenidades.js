/* eslint-disable prettier/prettier */
import React, { useState, useEffect ,useLayoutEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import ImageMapper from 'react-img-mapper';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from 'react-bootstrap';
import { CardBody, CardFooter } from 'reactstrap';
import { Button } from '@material-ui/core';

//Amenidades
import imgAmeParking from '../assets/amenidades/IMAGENES_PARKING.png'; //punto 1
import imgAmeGamesRoom from '../assets/amenidades/IMAGENES_GAMESROOM.png'; //punto 2
import imgAmeAccesoControlado from '../assets/amenidades/IMAGENES_EDIFICIO.png'; //punto 3
import imgAmeGYM from '../assets/amenidades/IMAGENES_GYM.png'; //punto 4
import imgAmeLoungeBar from '../assets/amenidades/IMAGENES_LOBBY2.png'; //punto 5
import imgAmeTerraza from '../assets/amenidades/IMAGENES_LOBBY1.png'; //punto 6
import imgAmeBeachLounge from '../assets/amenidades/IMAGENES.png'; //punto 7
import imgAmePiscinas from '../assets/amenidades/IMAGENES_PISCINAS.png'; //punto 8
import imgAmePlaya from '../assets/amenidades/IMAGENES.png'; //punto 9
import imgAmeKidsPool from '../assets/amenidades/IMAGENES_PISCINAS2.png'; //punto 10
import imgAmeCasetaVigilancia from '../assets/amenidades/IMAGENES.png'; //punto 11
import imgAmeBodegas from '../assets/amenidades/IMAGENES.png'; //punto 12
import imgAmeBanos from '../assets/amenidades/IMAGENES.png'; //punto 13
import imgAmePrivateBeach from '../assets/amenidades/IMAGENES_PROVATEBEACH.png'; //punto 14

import imgPlano from '../assets/Plano Amenidades.jpg'; // with import

function Amenidades() {
  const [areaClickeada, setAreaClickeada] = useState('');
  const [showRender, setShowRender] = useState(false);
  // const handleShow = () => setShow(true);
  const [MAP, setMAP] = useState({
    name: "amenidades",
    areas: [
      {
        id: "punto1",
        titulo: 'PARKING & MOTOR LOBBY',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [1065, 610, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto2",
        titulo: 'GAMES ROOM',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [1275, 955, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto3",
        titulo: 'ACCESO CONTROLADO',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [140, 690, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto4",
        titulo: 'GIMNASIO',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [1580, 1105, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto5",
        titulo: 'LOUNGE BAR',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [1645, 735, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto6",
        titulo: 'TERRAZA TECHADA',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [1865, 765, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto7",
        titulo: 'BEACH LOUNGE',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [2040, 510, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto8",
        titulo: 'PISCINAS',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [2200, 769, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto9",
        titulo: 'AREA DE PLAYA',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [2905, 700, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto10",
        titulo: 'PISCINA / KIDS POOL',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [2095, 940, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto11",
        titulo: 'CASETA DE VIGILANCIA',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [195, 520, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto12",
        titulo: 'BODEGAS',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [1610, 505, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto13",
        titulo: 'BAÑOS',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [1778, 1050, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto14",
        titulo: 'PRIVATE SUN BEACH',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [2488, 702, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
      {
        id: "punto15",
        titulo: 'ÁREA DE YOGA Y MEDITACIÓN',
        shape : 'circle',
        strokeColor : 'rgba(21,76, 94, 0)',
        coords:  [2765, 505, 50],
        fillColor : 'rgba(21,76, 94, 0)',
        preFillColor: 'rgba(183, 98, 94, 0)',
      },
    ],
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

  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    function updatePosition(e) {
      setPosition({ x: e.clientX, y: e.clientY });
      document.getElementById('myTooltip').style.left = (e.clientX+5)+"px";
      document.getElementById('myTooltip').style.top = (e.clientY+5)+"px";
    }
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  const handlerMouseIn = (area) => {
    var tooltip = document.getElementById('myTooltip');
    tooltip.style.display = 'block';
    tooltip.innerHTML = area.titulo;
  }

  const handlerMouseOut = (area) => {
    var tooltip = document.getElementById('myTooltip');
    tooltip.style.display = '';
    tooltip.innerHTML = '';
  }

  const handlerClic = (area) => {
    setShowRender(true);
    setAreaClickeada(area);
  };

  function renderImagenes(id) {
    console.log(id);
    switch (id) {
      case 'punto1':
        return imgAmeParking;
      case 'punto2':
        return imgAmeGamesRoom;
      case 'punto3':
        return imgAmeAccesoControlado;
      case 'punto4':
        return imgAmeGYM;
      case 'punto5':
        return imgAmeLoungeBar;
      case 'punto6':
        return imgAmeTerraza;
      case 'punto7':
        return imgAmeBeachLounge;
      case 'punto8':
        return imgAmePiscinas;
      case 'punto9':
        return imgAmePlaya;
      case 'punto10':
        return imgAmeKidsPool;
      case 'punto11':
        return imgAmeCasetaVigilancia;
      case 'punto12':
        return imgAmeBodegas;
      case 'punto13':
        return imgAmeBanos;
      case 'punto14':
        return imgAmePrivateBeach;
      default:
        return imgAmeAccesoControlado;  
    }
  }

  return (
    <div>
      <ImageMapper
        src={imgPlano}
        map={MAP}
        width={size[0]}
        responsive={true}
        parentWidth={size[0]}
        onMouseEnter={(area) => {
          // console.log('entro');
          handlerMouseIn(area);
        }}
        onMouseLeave={(area) => {
          //console.log('salio');
          handlerMouseOut(area);
        }}
        onClick={(area) => {
          console.log('clic de bolita')
          handlerClic(area);
        }}
      />
      <div id="myTooltip" style={{zIndex: "1000"}} 
        onClick={(area) => {
          console.log('clic de popup');
          handlerClic(area);
        }}
      />
      <Modal show={showRender} centered size="sm">
        <CardBody>
          <Col>
            <Row className="justify-content-center">
              AMENIDADES <br /><br />
            </Row>
            <Row className="justify-content-center">
              <img
                width="300px"
                height="auto"
                src={renderImagenes(areaClickeada.id)}
              />
            </Row>
            <Row className="pt-3 justify-content-center">
              {areaClickeada.titulo} <br />
            </Row>
          </Col>
        </CardBody>
        <CardFooter>
          <Row className="justify-content-center">
            <Button color="primary" onClick={() => setShowRender(false)}>
              Cerrar
            </Button>
          </Row>
        </CardFooter>
      </Modal>
    </div>
  );
}

export default Amenidades;
