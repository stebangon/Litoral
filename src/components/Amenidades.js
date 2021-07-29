import React from 'react';
import ReactTooltip from 'react-tooltip';

import imgPlano from '../assets/Plano Amenidades.jpg'; // with import

function Amenidades() {
  return (
    <div>
      <img
        src={imgPlano}
        fluid
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div
        id="punto1"
        className="punto1 d-none d-xl-block"
        key="punto1"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto1"
      />
      <ReactTooltip id="punto1" effect="solid" border={true} type="light">
        PARKING & MOTOR LOBBY
      </ReactTooltip>
      <div
        id="punto2"
        className="punto2 d-none d-xl-block"
        key="punto2"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto2"
      />
      <ReactTooltip id="punto2" effect="solid" border={true} type="light">
        GAMES ROOM
      </ReactTooltip>
      <div
        className="punto3 d-none d-xl-block"
        key="punto3"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto3"
      />
      <ReactTooltip id="punto3" effect="solid" border={true} type="light">
        LOBBY
      </ReactTooltip>
      <div
        className="punto4 d-none d-xl-block"
        key="punto4"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto4"
      />
      <ReactTooltip id="punto4" effect="solid" border={true} type="light">
        GIMNASIO
      </ReactTooltip>
      <div
        className="punto5 d-none d-xl-block"
        key="punto5"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto5"
      />
      <ReactTooltip id="punto5" effect="solid" border={true} type="light">
        LOUNGE BAR
      </ReactTooltip>
      <div
        className="punto6 d-none d-xl-block"
        key="punto6"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto6"
      />
      <ReactTooltip id="punto6" effect="solid" border={true} type="light">
        TERRAZA
      </ReactTooltip>
      <div
        className="punto7 d-none d-xl-block"
        key="punto7"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto7"
      />
      <ReactTooltip id="punto7" effect="solid" border={true} type="light">
        BEACH LOUNGE
      </ReactTooltip>
      <div
        className="punto8 d-none d-xl-block"
        key="punto8"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto8"
      />
      <ReactTooltip id="punto8" effect="solid" border={true} type="light">
        PISCINAS
      </ReactTooltip>
      <div
        className="punto9 d-none d-xl-block"
        key="punto9"
        style={{
          backgroundColor: 'rgb(183, 98, 94)',
        }}
        data-tip
        data-for="punto9"
      />
      <ReactTooltip id="punto9" effect="solid" border={true} type="light">
        PLAYA
      </ReactTooltip>
    </div>
  );
}

export default Amenidades;
