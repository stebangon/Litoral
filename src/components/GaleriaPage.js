import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Gallery from 'react-photo-gallery';
import { Modal, ModalGateway } from 'react-images';

import imgDepartamentos from '../assets/Recursos - LITORAL-80.svg'; // with import
import imgAvancesObra from '../assets/Recursos - LITORAL-91.svg'; // with import
import imgPrev from '../assets/Recursos - LITORAL-20.svg'; // with import
import imgNext from '../assets/Recursos - LITORAL-19.svg'; // with import

import Footer from './Footer';
import NavMenu from './NavMenu';
import Lightbox from './Lightbox';

function GaleriaPage() {
  const [pagina, setPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const photos = [
    {
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 1,
      height: 1,
    },
    {
      src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
      title: 'FACHADA PRINCIPAL',
      subtitle: 'subtitulo',
      width: 4,
      height: 3,
    },
  ];
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
