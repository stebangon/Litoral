import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState, useEffect, useCallback } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Gallery from 'react-photo-gallery';
import { Modal, ModalGateway } from 'react-images';
import { loadGalerias } from '../apiRoutes';

import imgAvancesObra from '../assets/Recursos - LITORAL-91.svg'; // with import
import imgPrev from '../assets/Recursos - LITORAL-20.svg'; // with import
import imgNext from '../assets/Recursos - LITORAL-19.svg'; // with import

import Footer from './Footer';
import NavMenu from './NavMenu';
import Lightbox from './Lightbox';

function GaleriaPage() {
  const [pagina, setPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [refrescar, setRefrescar] = useState(false);
  // const photos = [
  //   {
  //     src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 1,
  //     height: 1,
  //   },
  //   {
  //     src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 3,
  //     height: 4,
  //   },
  //   {
  //     src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 3,
  //     height: 4,
  //   },
  //   {
  //     src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 3,
  //     height: 4,
  //   },
  //   {
  //     src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 3,
  //     height: 4,
  //   },
  //   {
  //     src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
  //     title: 'FACHADA PRINCIPAL',
  //     subtitle: 'subtitulo',
  //     width: 4,
  //     height: 3,
  //   },
  // ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
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
        var tempPhotos = [];
        // el formato de la galeria quedo asi:
        // array
        // [0] - ID
        // [1] - Objeto
        // - img: xxxx
        // - titulo: xxxx
        // - subtitulo: xxxx
        console.log('Total de registros ', galeria.length);
        setTotalPaginas(Math.ceil(galeria.length / 10) - 1);
        console.log('Total de paginas ', Math.ceil(galeria.length / 10) - 1);
        // const i = totalPaginas * 10 - 10;
        const limite = (pagina + 1) * 10 - 10 + 9;
        console.log('Inicia en: ', (pagina + 1) * 10 - 10);
        console.log('Termina en ', limite);
        console.log(galeria);
        for (let i = (pagina + 1) * 10 - 10; i <= limite; i++) {
          if (galeria[i] !== undefined) {
            tempPhotos.push({
              src: galeria[i][1].img,
              title: galeria[i][1].titulo,
              subtitle: galeria[i][1].subtitulo,
              width: Math.floor(Math.random() * 4) + 3,
              height: 3,
            });
            console.log(tempPhotos);
          }
        }
        setPhotos(tempPhotos);
        setRefrescar(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [, refrescar, pagina]);
  return (
    <div className="App">
      <div id="menu">
        <NavMenu />
      </div>
      <div id="cuerpo">
        <Container>
          <div>
            <Row>
              <Col className="pr-3 pb-5" style={{ textAlign: 'end' }}>
                <a
                  href="/departamentos"
                  style={{
                    fontSize: '22px',
                    textDecoration: 'none',
                    color: 'rgb(21,76, 94)',
                  }}
                >
                  <img width="146px" className="btnVerDepartamentos" />
                </a>
                &nbsp;
                <img width="158px" src={imgAvancesObra} />
              </Col>
            </Row>
          </div>
          <Gallery photos={photos} onClick={openLightbox} />
          <Row className="p-5 justify-content-center">
            <Col
              md="8"
              style={{
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'grey',
              }}
            >
              <Pagination
                className="pt-3"
                listClassName="justify-content-center"
              >
                <PaginationItem disabled={pagina === 0}>
                  <PaginationLink
                    style={{ borderColor: 'white' }}
                    first
                    onClick={setPagina.bind(this, 0)}
                  />
                </PaginationItem>
                <PaginationItem disabled={pagina === 0}>
                  <PaginationLink
                    style={{
                      borderColor: 'white',
                      fontFamily: 'OpenSans-Light',
                      fontSize: '14px',
                    }}
                    previous
                    onClick={setPagina.bind(
                      this,
                      pagina === 0 ? 0 : pagina - 1
                    )}
                  >
                    <img width="16px" src={imgPrev} />
                    &nbsp;&nbsp;&nbsp;P R E V
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="px-5">
                  <PaginationLink
                    style={{ borderColor: 'white', color: 'rgb(183,98,94)' }}
                  >
                    {pagina + 1}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={pagina === totalPaginas}>
                  <PaginationLink
                    style={{
                      borderColor: 'white',
                      fontFamily: 'OpenSans-Light',
                      fontSize: '14px',
                    }}
                    next
                    onClick={setPagina.bind(
                      this,
                      pagina === totalPaginas ? totalPaginas : pagina + 1
                    )}
                  >
                    N E X T&nbsp;&nbsp;&nbsp;
                    <img width="16px" src={imgNext} />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={pagina === totalPaginas}>
                  <PaginationLink
                    style={{ borderColor: 'white' }}
                    last
                    onClick={setPagina.bind(this, totalPaginas)}
                  />
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Row>
                <Lightbox startIndex={currentImage} images={photos}></Lightbox>
              </Row>
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default GaleriaPage;
