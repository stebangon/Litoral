import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';

import img01 from '../assets/01.jpg'; // with import
import img02 from '../assets/02.jpg'; // with import
import img03 from '../assets/03.jpg'; // with import
import img04 from '../assets/04.jpg'; // with import
import img05 from '../assets/05.jpg'; // with import

// Note: section under the <Timeline></Timeline>
// but inside the pinContainer must be at least 100%
// of the window height due to the nature that we are
// pinning the pin container to the top so the content underneath
// the scene must be fill the extra space in this example it is the
// normalsection under the <Timeline></Timeline> You can mess
// with the tween percentages image widths to get your desired effect
// in this case there are six image so the slideContainer is set to 200%
// and the tween percentage is set to 50%

const SlidersGaleria = () => {
  const [state] = useState({
    images: [
      { id: 1, src: img01 },
      { id: 2, src: img02 },
      { id: 3, src: img03 },
      { id: 4, src: img04 },
      { id: 5, src: img05 },
    ],
  });
  let history = useHistory();
  function handleRedirectGaleria() {
    history.push('/galeria/');
  }
  return (
    <div>
      <Controller>
        <Scene triggerHook="onLeave" duration={2000} pin>
          {(progress) => (
            <div className="pin-container" style={styles.pinContainer}>
              <Timeline totalProgress={progress} paused>
                <Tween from={{ x: '0%' }} to={{ x: '-50%' }}>
                  <div
                    className="slide-container"
                    style={{
                      ...styles.slideContainer,
                    }}
                  >
                    {state.images.map((image) => (
                      <div
                        className="panel"
                        style={styles.panel}
                        key={image.id}
                      >
                        <img
                          src={image.src}
                          style={styles.img}
                          alt="galeria"
                          width="800px"
                          height="350px"
                        />
                      </div>
                    ))}
                  </div>
                </Tween>
              </Timeline>
              <div>
                <Row>
                  <Col className="md-12">
                    <Row className="justify-content-center">
                      <p
                        style={{
                          textAlign: 'center',
                          maxWidth: '550px',
                        }}
                        className="text-break"
                      >
                        Las personas que se centran en los detalles son más
                        inteligentes, más maduras emocionalmente, tienen
                        historias más emocionantes que contar y están condenadas
                        al éxito.
                      </p>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="md-12">
                    <Row className="justify-content-center">
                      <a
                        href="/galeria/#menu"
                        style={{
                          fontSize: '22px',
                          textDecoration: 'none',
                          color: 'rgb(21,76, 94)',
                        }}
                      >
                        <img
                          width="140px"
                          height="40px"
                          // src={imgVerGaleria}
                          className="btnVerGaleria"
                        />
                      </a>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

const styles = {
  normalSection: {
    background: '#282c34',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinContainer: {
    width: '100%',
    margin: 'o auto',
    overflow: 'hidden',
  },
  slideContainer: {
    padding: '40px 0',
    display: 'flex',
    width: '240%',
  },
  panel: {
    flex: 1,
    padding: '10px',
  },
  img: {
    width: '100%',
  },
};

export default SlidersGaleria;
