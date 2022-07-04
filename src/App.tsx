import React from 'react';
import './App.css';
import { Carousel, Image } from 'react-bootstrap'
import { YoutubeEmbed } from './components/YoutubeEmbed';
import hans from './images/hans.webp'
import background from './images/background.webp'
import sweater_people from './images/sweater_people.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
        <div className='col-4 portrait align-self-center m-md-3 m-sm-3'>
          <Image className='picture pt-4 px-4' src={hans} alt="hans"/>
          <div className='row text'>
            <h4>
              Hans Fuerst
            </h4>
          </div>
        </div>
        <div className="col-6 align-self-center links m-md-3 m-sm-3 m-xs-1 pt-4 px-4">
          <div className="row">
            <h4>
              <a href="https://www.facebook.com/sweaterpeopleec" rel='noopener noreferrer' target='_blank' className='link-primary'>
                <FontAwesomeIcon icon={faFacebook} size='1x'/>
                Sweater People
              </a>
            </h4>
          </div>
          <div className="row">
            <h4>
              <a href="https://www.youtube.com/channel/UCLkwQgM87tNf_qCBw1iF-FA" rel='noopener noreferrer' target='_blank' className='link-danger'>
                <FontAwesomeIcon icon={faYoutube} size='1x'/>
                Hans Fuerst
              </a>
            </h4>
          </div>
          <div className="row">
            <h4>
              <a href="https://www.youtube.com/channel/UC7IsCIeGvPQcyV77CAXk2_w" rel='noopener noreferrer' target='_blank' className='link-danger'>
                <FontAwesomeIcon icon={faYoutube} size='1x'/>
                Sweater People
              </a>
            </h4>
          </div>
        </div>
      </div>
        <h1>
          Bands and things I do
        </h1>
      <div className='row sweater mt-2'>
        <div className="col align-self-center">
          <a href='https://www.youtube.com/channel/UC7IsCIeGvPQcyV77CAXk2_w' rel='noopener noreferrer' target='_blank'>
            <Image src={sweater_people} width={1000}/>
          </a>
          <p>
            Sweater People is a band I started with some of my friends. We play sick beats and we gig around. 
          </p>
        </div>
        <div className='col align-self-center car'>
          <Carousel fade>
            <Carousel.Item className='carousel-item' bsPrefix='custom-item'>
              <YoutubeEmbed url='zXRuO4Urvys'/>
            </Carousel.Item>
            <Carousel.Item className='carousel-item' bsPrefix='custom-item'>
              <YoutubeEmbed url='4Eu7_JNnXs4'/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className='row dlc mt-2'>
        <div className="col align-self-center">
          <h2>
            Down Loadable Collective (DLC)
          </h2>
          <p>
            Down Loadable Collective or DLC is a band I started with some friends where we play music from video games. 
          </p>
        </div>
        <div className='col align-self-center car'>
          <Carousel fade>
            <Carousel.Item className='carousel-item' bsPrefix='custom-item'>
              <YoutubeEmbed url='lzmIebpcAlg'/>
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
