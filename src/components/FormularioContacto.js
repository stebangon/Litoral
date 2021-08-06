import React, { useState, useEffect } from 'react';

import fireDB from '../firebase';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import HubspotForm from 'react-hubspot-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imgSol from '../assets/Recursos - LITORAL-07.svg'; // with import
import imgLuna from '../assets/Recursos - LITORAL-08.svg'; // with import
import imgEmail from '../assets/Recursos - LITORAL-01.svg'; // with import
import imgTelefono from '../assets/Recursos - LITORAL-02.svg'; // with import
import imgUbicacion from '../assets/Recursos - LITORAL-03.svg'; // with import
import imgEnviar from '../assets/Recursos - LITORAL-81.svg'; // with import

const FormularioContacto = ({ handleClose, show }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  useEffect(() => {
    setNombre('');
    setTelefono('');
    setCorreo('');
    setMensaje('');
    setAceptoTerminos(false);
  }, [handleClose]);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Body className="px-5">
          <Row>
            <Col className="md-12" style={{ textAlign: 'end' }}>
              <img width="25px" height="25px" src={imgSol} />
              <img width="25px" height="25px" src={imgLuna} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgb(183, 98, 94)',
                    fontFamily: 'Benne-Regular',
                  }}
                >
                  Contacto
                </p>
              </Row>
              <Row>
                <Col style={{ paddingLeft: '0px', maxWidth: '10px' }}>
                  <img width="18px" src={imgUbicacion} />
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'rgb(21,76, 94)',
                    }}
                  >
                    Local 13 Planta Alta, Plaza Moombú en <br />
                    calle 7A1 x 24 y 22 Santa Gertrudis Copó. <br />
                    Mérida, Yucatán.
                  </span>
                </Col>
              </Row>
              <Row>
                <Col style={{ paddingLeft: '0px', maxWidth: '10px' }}>
                  <img width="18px" src={imgTelefono} />
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'rgb(21,76, 94)',
                    }}
                  >
                    (999) 920 21 09
                  </span>
                </Col>
              </Row>
              <Row>
                <Col style={{ paddingLeft: '0px', maxWidth: '10px' }}>
                  <img width="18px" src={imgEmail} />
                </Col>
                <Col>
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'rgb(21,76, 94)',
                    }}
                  >
                    hola@grupogpi.com
                  </span>
                </Col>
              </Row>
              <Row className="pt-4">
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgb(183, 98, 94)',
                    fontFamily: 'Benne-Regular',
                  }}
                >
                  Horario de atención
                </p>
              </Row>
              <Row>
                <span
                  style={{
                    fontSize: '10px',
                    color: 'rgb(21,76, 94)',
                  }}
                >
                  Lunes a viernes <br />
                  de 9:00 a.m. a 6:00 p.m. <br />
                  <br />
                  Sábado <br />
                  de 9:00 a.m. a 14:00 p.m.
                </span>
              </Row>
            </Col>
            <Col>
              <Row>
                <p
                  style={{
                    fontSize: '10px',
                    color: 'rgb(21,76, 94)',
                  }}
                >
                  .
                </p>
              </Row>
              <Row className="px-3">
                <span
                  style={{
                    fontSize: '10px',
                    color: 'rgb(21,76, 94)',
                  }}
                >
                  Si está interesado en conocer LITORAL, póngase en contacto con
                  <br />
                  nosotros a través de este formulario y en la brevedad posible
                  nos
                  <br />
                  pondremos en contacto con usted.
                </span>
              </Row>
              {/* <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.info('Enviado solicitud de información...', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  // Envia correo
                  fetch(
                    'https://us-central1-litoral-df396.cloudfunctions.net/enviarCorreo',
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'text/plain',
                      },
                      body: JSON.stringify({
                        nombre: e.target[0].value,
                        telefono: e.target[1].value,
                        correo: e.target[2].value,
                        mensaje: e.target[3].value,
                        propiedad: 'Departamento Litoral',
                      }),
                    }
                  )
                    .then((res) => res.json())
                    .then((res) => {
                      toast.done('Solicitud enviada...', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                      console.log(res);
                      handleClose();
                    })
                    .catch((error) => {
                      toast.error(
                        'Upss algo salio mal, vuelve a intentarlo...',
                        {
                          position: 'top-right',
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        }
                      );
                      console.log(error);
                      handleClose();
                    });
                  //Guarda en base de datos (firebase)
                  fireDB
                    .database()
                    .ref()
                    .child('solicitudes')
                    .push({
                      nombre: e.target[0].value,
                      telefono: e.target[1].value,
                      correo: e.target[2].value,
                      mensaje: e.target[3].value,
                      propiedad: 'Departamento Litoral',
                      fecha:
                        String(new Date().getDate()) +
                        '/' +
                        String(new Date().getMonth()) +
                        '/' +
                        String(new Date().getFullYear()),
                    });
                }}
              >
                <TextField
                  type="text"
                  id="nombre"
                  label="Nombre"
                  value={nombre}
                  required
                  onChange={(e) => {
                    e.preventDefault();
                    setNombre(e.target.value);
                  }}
                  fullWidth
                  inputProps={{
                    style: { fontSize: 8, color: 'rgb(241, 168, 153)' },
                  }}
                  InputLabelProps={{
                    style: { fontSize: 10, color: 'rgb(241, 168, 153)' },
                  }}
                />
                <TextField
                  type="tel"
                  required
                  id="telefono"
                  label="Telefóno"
                  value={telefono}
                  onChange={(e) => {
                    setTelefono(e.target.value);
                  }}
                  fullWidth
                  inputProps={{
                    pattern: '^\\d{10}',
                    style: { fontSize: 8, color: 'rgb(241, 168, 153)' },
                  }}
                  InputLabelProps={{
                    style: { fontSize: 10, color: 'rgb(241, 168, 153)' },
                  }}
                />
                <TextField
                  type="email"
                  id="correoelectronico"
                  label="Correo electrónico"
                  required
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                  fullWidth
                  inputProps={{
                    style: {
                      fontSize: 8,
                      color: 'rgb(241, 168, 153)',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: 10,
                      color: 'rgb(241, 168, 153)',
                    },
                  }}
                />
                <TextField
                  id="mensaje"
                  label="Mensaje"
                  value={mensaje}
                  onChange={(e) => {
                    setMensaje(e.target.value);
                  }}
                  fullWidth
                  inputProps={{
                    style: { fontSize: 8, color: 'rgb(241, 168, 153)' },
                  }}
                  InputLabelProps={{
                    style: { fontSize: 10, color: 'rgb(241, 168, 153)' },
                  }}
                />
                <Checkbox
                  name="terminos"
                  required
                  checked={aceptoTerminos}
                  onChange={(e) => {
                    console.log(aceptoTerminos);
                    setAceptoTerminos(!aceptoTerminos);
                  }}
                  style={{
                    color: 'rgb(241, 168, 153)',
                    transform: 'scale(0.8)',
                  }}
                />
                <span
                  style={{
                    fontSize: '10px',
                    color: 'rgb(21,76, 94)',
                  }}
                >
                  I agree with the Terms & Conditions & the Privacy Policy
                </span>
                <input
                  type="image"
                  name="submit"
                  width="100px"
                  src={imgEnviar}
                />
              </Form> */}
              <br />
              <HubspotForm
                portalId="20301597"
                formId="2a040f0c-0847-4376-849b-b3befa742638"
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div></div>}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormularioContacto;
