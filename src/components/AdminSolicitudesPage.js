import React, { useState, useEffect } from 'react';

import fireDB from '../firebase';
import { loadSolicitudes, loadSolicitudesRevisadas } from '../apiRoutes';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Checkbox from '@material-ui/core/Checkbox';

import NavMenuAdmin from './NavMenuAdmin';

import imgNext from '../assets/Recursos - LITORAL-19.svg'; // with import

function AdminSolicitudesPage() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [refrescar, setRefrescar] = useState(false);
  const [checked, setChecked] = useState(true);
  //Usamos el useEfecct para que solo se ejecute 1 vez el fragmento de codigo
  useEffect(() => {
    //Invocamos el metodo en el load
    fetch(checked == true ? loadSolicitudes : loadSolicitudesRevisadas, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Volvemos el objeto data en un array de elementos
        const solicitudes = data ? Object.entries(data) : [];
        // el formato de las solicitudes quedo asi:
        // array
        // [0] - ID
        // [1] - Objeto
        // - correo: xxxx
        // - nombre: xxxx
        // - telefono: xxxx
        // - mensaje: xxxx
        setSolicitudes(solicitudes);
        setRefrescar(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [, refrescar]);
  const handlerMarcaRevisada = (itemsolicitud) => {
    // COpiamos el reguistro de solicitudes a solicitudes revisadas
    fireDB.database().ref().child('solicitudes-revisadas').push({
      nombre: itemsolicitud[1].nombre,
      telefono: itemsolicitud[1].telefono,
      correo: itemsolicitud[1].correo,
      mensaje: itemsolicitud[1].mensaje,
      propiedad: itemsolicitud[1].propiedad,
      fecha: itemsolicitud[1].fecha,
    });
    //Eliminamos el registro de la rama de solicitudes
    fireDB
      .database()
      .ref()
      .child('solicitudes')
      .child(itemsolicitud[0])
      .remove();
    setRefrescar(true);
  };
  if (!!solicitudes) {
    return (
      <div className="App">
        <div id="menu">
          <NavMenuAdmin />
        </div>
        <div style={{ height: '140px' }} />
        <div className="content">
          <Container>
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Row>
                      <Col className="md-11">
                        {checked == true
                          ? 'Solicitudes de información (nuevas)'
                          : 'Solicitudes de información (archivadas)'}
                      </Col>
                      <Col className="md-1" style={{ maxWidth: '180px' }}>
                        <Checkbox
                          checked={checked}
                          onChange={(e) => {
                            setRefrescar(true);
                            setChecked(!checked);
                          }}
                          style={{
                            color: 'rgb(21,76, 94)',
                            transform: 'scale(0.8)',
                          }}
                        />
                        <span
                          style={{
                            fontSize: '14px',
                            color: 'rgb(21,76, 94)',
                          }}
                        >
                          {checked == true ? 'Ver archivadas' : 'Ver nuevas'}
                        </span>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Prospecto</th>
                          <th>Correo</th>
                          <th>Telefono</th>
                          <th>Mensaje</th>
                          <th>Fecha</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {solicitudes.map((itemsolicitud) => (
                          <tr key={itemsolicitud[0]}>
                            <td>{itemsolicitud[1].nombre}</td>
                            <td>{itemsolicitud[1].correo}</td>
                            <td>{itemsolicitud[1].telefono}</td>
                            <td>{itemsolicitud[1].mensaje}</td>
                            <td>
                              {String(itemsolicitud[1].fecha).substring(0, 10)}
                            </td>
                            <td>
                              Marcar Revisada
                              <img
                                width="24px"
                                src={imgNext}
                                onClick={handlerMarcaRevisada.bind(
                                  this,
                                  itemsolicitud
                                )}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default AdminSolicitudesPage;
