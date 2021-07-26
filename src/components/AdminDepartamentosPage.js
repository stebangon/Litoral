import React, { useState, useEffect } from 'react';

import fireDB from '../firebase';
import { getBrochure, loadDepartamentos } from '../apiRoutes';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import NavMenuAdmin from './NavMenuAdmin';

import imgPDF from '../assets/pdf.png'; // with import
import imgUpload from '../assets/file-upload.png'; // with import
import imgDisponible from '../assets/Recursos - LITORAL-85.svg'; // with import
import imgVendido from '../assets/Recursos - LITORAL-86.svg'; // with import
import imgApartado from '../assets/Recursos - LITORAL-87.svg'; // with import

function AdminDepartamentosPage() {
  const [departamentos, setDepartamentos] = useState([]);
  const [refrescar, setRefrescar] = useState(false);
  //Usamos el useEfecct para que solo se ejecute 1 vez el fragmento de codigo
  useEffect(() => {
    //Invocamos el metodo en el load
    fetch(loadDepartamentos, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Volvemos el objeto data en un array de elementos
        const departamentos = data ? Object.entries(data) : [];
        // el formato de las solicitudes quedo asi:
        // array
        // [0] - ID
        // [1] - Objeto
        // - departamento: xxxx
        // - tipo: xxxx
        // - m2: xxxx
        // - estatus: xxxx
        setDepartamentos(departamentos);
        setRefrescar(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [, refrescar]);
  const handlerCambiaEstatus = (id, estatus) => {
    //Eliminamos el registro de la rama de solicitudes
    var siguienteEstatus = estatus;
    switch (estatus) {
      case 'disponible':
        siguienteEstatus = 'vendido';
        break;
      case 'vendido':
        siguienteEstatus = 'apartado';
        break;
      case 'apartado':
        siguienteEstatus = 'disponible';
        break;
      default:
        siguienteEstatus = estatus;
    }
    console.log(id);
    console.log(estatus);
    console.log(siguienteEstatus);
    fireDB
      .database()
      .ref()
      .child('departamentos')
      .child(id)
      .update({ estatus: siguienteEstatus });
    setRefrescar(true);
  };
  function getImage(estatus) {
    switch (estatus) {
      case 'disponible':
        return imgDisponible;
      case 'vendido':
        return imgVendido;
      case 'apartado':
        return imgApartado;
      default:
        return imgDisponible;
    }
  }
  const handlerOnUpload = (e) => {
    try {
      if (e.target.files[0]) {
        const file = e.target.files[0];
        console.log(file.name);
        const tarea = fireDB.storage().ref('brochure.pdf').put(file);
        tarea.on(
          'state_changed',
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            fireDB
              .storage()
              .ref('brochure.pdf')
              .getDownloadURL()
              .then((url) => {
                console.log(url);
              });
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const handleShowPDF = () => {
  //   try {
  //     fireDB
  //       .storage()
  //       .ref('brochure.pdf')
  //       .getDownloadURL()
  //       .then((url) => {
  //         return getBrochure;
  //       });
  //   } catch (error) {
  //     console.log('');
  //     return '';
  //   }
  // };
  return (
    <div className="App">
      <div id="menu">
        <NavMenuAdmin />
      </div>
      <div className="content">
        <Container>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>Listado de departamentos</Card.Header>
                <Row>
                  <div className="image-upload pt-4">
                    <label htmlFor="file-input">
                      <span className="pl-5">
                        <b>Subir brochure:</b>
                      </span>
                      <img
                        className="ml-2"
                        src={imgUpload}
                        width="25px"
                        style={{
                          cursor: 'pointer',
                        }}
                      />
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      onChange={handlerOnUpload.bind(this)}
                      style={{
                        display: 'none',
                      }}
                    />
                    <a href={getBrochure} target="_blank" download>
                      <img
                        className="ml-3"
                        src={imgPDF}
                        width="25px"
                        // style={{
                        //   display: handleShowPDF() === '' ? 'none' : '',
                        // }}
                      />
                    </a>
                  </div>
                </Row>
                <Card.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Departamento</th>
                        <th>Tipo</th>
                        <th>M2</th>
                        <th>Estatus</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departamentos.map((itemdepartamento) => (
                        <tr key={itemdepartamento[0]}>
                          <td>{itemdepartamento[1].departamento}</td>
                          <td>{itemdepartamento[1].tipo}</td>
                          <td>{itemdepartamento[1].m2}</td>
                          <td>{itemdepartamento[1].estatus}</td>
                          <td>
                            <img
                              width="24px"
                              src={getImage(itemdepartamento[1].estatus)}
                              onClick={handlerCambiaEstatus.bind(
                                this,
                                itemdepartamento[0],
                                itemdepartamento[1].estatus
                              )}
                              style={{
                                cursor: 'pointer',
                              }}
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

export default AdminDepartamentosPage;
