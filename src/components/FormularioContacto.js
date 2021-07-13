import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import imgSol from '../assets/Recursos - LITORAL-07.svg'; // with import
import imgLuna from '../assets/Recursos - LITORAL-08.svg'; // with import
import imgEmail from '../assets/Recursos - LITORAL-01.svg'; // with import
import imgTelefono from '../assets/Recursos - LITORAL-02.svg'; // with import
import imgUbicacion from '../assets/Recursos - LITORAL-03.svg'; // with import
import imgEnviar from '../assets/Recursos - LITORAL-81.svg'; // with import

const FormularioContacto = ({ handleClose, show }) => {
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgb(241, 168, 153)',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgb(241, 168, 153)',
      },
    },
  })(TextField);

  return (
    <div>
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
              <Form>
                <CssTextField
                  id="nombre"
                  label="Nombre"
                  fullWidth
                  inputProps={{
                    style: { fontSize: 8, color: 'rgb(241, 168, 153)' },
                  }}
                  InputLabelProps={{
                    style: { fontSize: 10, color: 'rgb(241, 168, 153)' },
                  }}
                />
                <CssTextField
                  id="telefono"
                  label="Telefóno"
                  fullWidth
                  inputProps={{
                    style: { fontSize: 8, color: 'rgb(241, 168, 153)' },
                  }}
                  InputLabelProps={{
                    style: { fontSize: 10, color: 'rgb(241, 168, 153)' },
                  }}
                />
                <CssTextField
                  id="correoelectronico"
                  label="Correo electrónico"
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
                <CssTextField
                  id="mensaje"
                  label="Mensaje"
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
                  style={{
                    color: 'rgb(241, 168, 153)',
                    transform: 'scale(0.8)',
                  }}
                ></Checkbox>
                <span
                  style={{
                    fontSize: '10px',
                    color: 'rgb(21,76, 94)',
                  }}
                >
                  I agree with the Terms & Conditions & the Privacy Policy
                </span>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <img width="100px" src={imgEnviar} onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormularioContacto;
