import React, { useState, useEffect } from 'react';

import fireDB from '../firebase';
import { cargarImagenes, loadGalerias } from '../apiRoutes';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Input } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import NavMenuAdmin from './NavMenuAdmin';

import imgdelete from '../assets/delete.png';
import imgAddImagen from '../assets/AgregarBanner.png';

function AdminGaleriaPage() {
  const [picture, setPicture] = useState();
  const [galeria, setGaleria] = useState([]);
  const [refrescar, setRefrescar] = useState(false);
  const [itemSelected, setItemSelected] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenEdit = (itemGaleria) => {
    setPicture();
    setOpenEdit(true);
    setItemSelected(itemGaleria);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleClickOpenDelete = (itemGaleria) => {
    setOpenDelete(true);
    setItemSelected(itemGaleria);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  useEffect(() => {
    fetch(loadGalerias, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Volvemos el objeto data en un array de elementos
        const galeria = data ? Object.entries(data) : [];
        // el formato de la galeria quedo asi:
        // array
        // [0] - ID
        // [1] - Objeto
        // - img: xxxx
        // - titulo: xxxx
        // - subtitulo: xxxx
        console.log(galeria);
        setGaleria(galeria);
        setRefrescar(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [, refrescar]);
  //Manejador de eliminar
  const handlerDeleteItemGaleria = () => {
    // e.preventDefault();
    //Eliminamos el registro de la rama de solicitudes
    fireDB.database().ref().child('galeria').child(itemSelected[0]).remove();
    setRefrescar(true);
    handleCloseDelete();
  };
  //Manejador de guardar
  const handlerSaveItemGaleria = (e) => {
    e.preventDefault();
    // Guardamos la foto
    if (picture) {
      var formdata = new FormData();
      formdata.append('file', picture.photoFile, Date.now());
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };
      fetch(cargarImagenes, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          // Recuperamos la url de la foto
          console.log(data);
          console.log(data.secure_url);
          //almacenamos local el dato de la url
          setItemSelected([
            itemSelected[0],
            {
              img: data.secure_url,
              titulo:
                itemSelected[1] === undefined ? '' : itemSelected[1].titulo,
              subtitulo:
                itemSelected[1] === undefined ? '' : itemSelected[1].subtitulo,
            },
          ]);
          // url
          if (itemSelected[0] === undefined) {
            // Guardamos el registro de galeria (firebase)
            fireDB
              .database()
              .ref()
              .child('galeria')
              .push({
                img: picture === undefined ? '' : data.secure_url,
                titulo: itemSelected[1].titulo,
                subtitulo: itemSelected[1].subtitulo,
              });
            setRefrescar(true);
          } else {
            // Actualizamos el registro de galeria (firebase)
            fireDB
              .database()
              .ref()
              .child('galeria')
              .child(itemSelected[0])
              .update({
                img: data.secure_url,
                titulo: itemSelected[1].titulo,
                subtitulo: itemSelected[1].subtitulo,
              });
            setRefrescar(true);
          }
        })
        .catch((error) => console.log('error', error));
    } else {
      // Actualizamos el registro de galeria (firebase)
      fireDB.database().ref().child('galeria').child(itemSelected[0]).update({
        img: itemSelected[1].img,
        titulo: itemSelected[1].titulo,
        subtitulo: itemSelected[1].subtitulo,
      });
      setRefrescar(true);
    }
    handleCloseEdit();
  };
  const onDrop = (e) => {
    setPicture(e.target.files[0]);
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPicture({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };
  return (
    <div className="App">
      <div id="menu">
        <NavMenuAdmin />
      </div>
      <div style={{ height: '140px' }} />
      <Container>
        <Row>
          <Col md="4">
            <div className="thumbex">
              <div
                className="thumbnail"
                onClick={handleClickOpenEdit.bind(this, 0)}
              >
                <img src={imgAddImagen} />
              </div>
            </div>
          </Col>
          {galeria.map((itemGaleria) => (
            <Col md="4" key={itemGaleria[0]}>
              <div className="thumbex">
                <div
                  className="thumbnail"
                  onClick={handleClickOpenEdit.bind(this, itemGaleria)}
                >
                  <img src={itemGaleria[1].img} />
                </div>
                <img
                  id="delete"
                  src={imgdelete}
                  onClick={handleClickOpenDelete.bind(this, itemGaleria)}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        fullWidth={true}
        maxWidth={'sm'}
        PaperProps={{
          style: {
            padding: '5px 10px 5px 10px',
            boxShadow: 'none',
          },
        }}
      >
        <DialogTitle id="form-dialog-title">Galeria</DialogTitle>
        <DialogContent>
          <Card>
            <CardActionArea style={{ textAlign: 'center' }}>
              <label htmlFor="myInput">
                <CardMedia
                  component="img"
                  alt={
                    picture === undefined
                      ? ''
                      : itemSelected[1] === undefined
                      ? ''
                      : itemSelected[1].titulo
                  }
                  height="200"
                  image={
                    picture !== undefined
                      ? picture.photoUrl
                      : itemSelected[1] === undefined
                      ? imgAddImagen
                      : itemSelected[1].img
                  }
                  title={
                    picture === undefined
                      ? ''
                      : itemSelected[1] === undefined
                      ? ''
                      : itemSelected[1].titulo
                  }
                />
              </label>
              <input
                style={{ display: 'none' }}
                type="file"
                id="myInput"
                onChange={onDrop}
              />
              <CardContent>
                <Form style={{ textAlign: 'left' }}>
                  <FormGroup>
                    <label className="letragris">Titulo</label>
                    <Input
                      autoFocus
                      margin="dense"
                      id="banner"
                      value={
                        itemSelected[1] === undefined
                          ? ''
                          : itemSelected[1].titulo
                      }
                      fullWidth
                      variant="outlined"
                      onChange={(e) =>
                        setItemSelected([
                          itemSelected[0],
                          {
                            img:
                              itemSelected[1] === undefined
                                ? ''
                                : itemSelected[1].img,
                            titulo: e.target.value,
                            subtitulo:
                              itemSelected[1] === undefined
                                ? ''
                                : itemSelected[1].subtitulo,
                          },
                        ])
                      }
                      autoComplete="off"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="letragris">Subtitulo</label>
                    <Input
                      margin="dense"
                      id="banner"
                      value={
                        itemSelected[1] === undefined
                          ? ''
                          : itemSelected[1].subtitulo
                      }
                      fullWidth
                      variant="outlined"
                      onChange={(e) =>
                        setItemSelected([
                          itemSelected[0],
                          {
                            img:
                              itemSelected[1] === undefined
                                ? ''
                                : itemSelected[1].img,
                            titulo:
                              itemSelected[1] === undefined
                                ? ''
                                : itemSelected[1].titulo,
                            subtitulo: e.target.value,
                          },
                        ])
                      }
                      autoComplete="off"
                    />
                  </FormGroup>
                </Form>
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={handlerSaveItemGaleria}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Galeria'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas a punto de eliminar una imagen del carrete, ¿estas seguro de
            esto?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Cancelar
          </Button>
          <Button
            color="primary"
            autoFocus
            outline
            onClick={handlerDeleteItemGaleria}
          >
            Si por favor
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminGaleriaPage;
