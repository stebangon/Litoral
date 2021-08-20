/* eslint-disable prettier/prettier */
import React, { useState, useEffect ,useLayoutEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import ImageMapper from 'react-img-mapper';
import imgPlano from '../assets/Plano Amenidades.jpg'; // with import

function Amenidades() {
  const [MAP, setMAP] = useState({
    name: "amenidades",
    areas: [
      {
        id: "punto1",
        titulo: 'PARKING & MOTOR LOBBY',
        alt: 'PARKING & MOTOR LOBBY',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [1100, 440, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto2",
        titulo: 'GAMES ROOM',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [1230, 780, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto3",
        titulo: 'LOBBY',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [1240, 430, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto4",
        titulo: 'GIMNASIO',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [1440, 760, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto5",
        titulo: 'LOUNGE BAR',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [1440, 580, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto6",
        titulo: 'TERRAZA',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [1640, 580, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto7",
        titulo: 'BEACH LOUNGE',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [1820, 600, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto8",
        titulo: 'PISCINAS',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [2020, 600, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
      },
      {
        id: "punto9",
        titulo: 'PLAYA',
        shape : 'circle',
        strokeColor : 'black',
        coords:  [2420, 600, 25],
        fillColor : 'rgb(21,76, 94)',
        active: true,
        preFillColor: 'rgb(183, 98, 94)',
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

  return (
    <div>
      <ImageMapper
        src={imgPlano}
        map={MAP}
        //stayMultiHighlighted={true}
        // stayHighlighted={true}
        active={true}
        width={size[0]}
        responsive={true}
        parentWidth={size[0]}
        onMouseEnter={(area) => {
          handlerMouseIn(area);
        }}
        onMouseLeave={(area) => {
          handlerMouseOut(area);
        }}
      />
      <div id="myTooltip" style={{zIndex: "1000"}} />
      {/* <div
        id="punto1"
        className="punto1 d-none d-xl-block"
        key="punto1"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto1"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        PARKING & MOTOR LOBBY
      </ReactTooltip> */}
      {/* <div
        id="punto2"
        className="punto2 d-none d-xl-block"
        key="punto2"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto2"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        GAMES ROOM
      </ReactTooltip> */}
      {/* <div
        className="punto3 d-none d-xl-block"
        key="punto3"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto3"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        LOBBY
      </ReactTooltip> */}
      {/* <div
        className="punto4 d-none d-xl-block"
        key="punto4"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto4"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        GIMNASIO
      </ReactTooltip> */}
      {/* <div
        className="punto5 d-none d-xl-block"
        key="punto5"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto5"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        LOUNGE BAR
      </ReactTooltip> */}
      {/* <div
        className="punto6 d-none d-xl-block"
        key="punto6"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto6"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        TERRAZA
      </ReactTooltip> */}
      {/* <div
        className="punto7 d-none d-xl-block"
        key="punto7"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto7"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        BEACH LOUNGE
      </ReactTooltip> */}
      {/* <div
        className="punto8 d-none d-xl-block"
        key="punto8"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto8"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        PISCINAS
      </ReactTooltip> */}
      {/* <div
        className="punto9 d-none d-xl-block"
        key="punto9"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto9"
      /> */}
      {/* <ReactTooltip effect="solid" border={true} type="light">
        PLAYA
      </ReactTooltip> */}
    </div>
  );
}

export default Amenidades;
