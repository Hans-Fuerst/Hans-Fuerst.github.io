import React from 'react';
import './App.css';
import { Carousel, Image } from 'react-bootstrap'
import { YoutubeEmbed } from './components/YoutubeEmbed';
import hans from './images/hans.jpg'

function App() {
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
      <div className='row'>
        <div className='col-4 portrait align-self-center'>
          <Image roundedCircle={true} src={hans} alt="hans"/>
          <div className='row text'>
            <h4>
              Hans Fuerst
            </h4>
          </div>
        </div>
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
      <div className='row'>
        <p>
          Oh hey, didn't see you there
        </p>
      </div>
    </div>
  );
}

export default App;
