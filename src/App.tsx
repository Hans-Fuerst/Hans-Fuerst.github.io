import React from 'react';
import './App.css';
import { Carousel, Image } from 'react-bootstrap'
import { YoutubeEmbed } from './components/YoutubeEmbed';
import hans from './images/hans.jpg'
import background from './images/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
function App() {
  library.add(fas)
  return (
    <div className="App p-4">
     {/* <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hans Fuerst</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Music">Music</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
      <div className='row top' style={{backgroundImage: `url(${background})`}}>
        <div className='col-4 portrait align-self-center m-3'>
          <Image className='picture pt-4 px-4' src={hans} alt="hans"/>
          <div className='row text'>
            <h4>
              Hans Fuerst
            </h4>
          </div>
        </div>
        <div className="col-6 align-self-center links">
          <h4>
            Facebook
            <FontAwesomeIcon icon={faFacebook} />
          </h4>
        </div>
      </div>
      <div className='row'>
        <p>
          Oh hey, didn't see you there
        </p>
        <div className='col align-self-center car'>
          <Carousel fade>
            <Carousel.Item className='carousel-item' bsPrefix='custom-item'>
              <YoutubeEmbed url='zXRuO4Urvys'/>
            </Carousel.Item>
            <Carousel.Item className='carousel-item' bsPrefix='custom-item'>
              <YoutubeEmbed url='p0YGM-2u2Ac'/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
