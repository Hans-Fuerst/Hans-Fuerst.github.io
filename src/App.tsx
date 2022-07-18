import React from 'react';
import './App.css';
import { Carousel, Image } from 'react-bootstrap'
import { YoutubeEmbed } from './components/YoutubeEmbed';
import hans from './images/hans2.webp'
import sweater_people from './images/Sweater_Logo.webp'
import dlc from './images/DLC_Logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
      <div className='row top'>
        <div className='col-4 portrait align-self-center m-md-3 m-sm-3'>
          <Image className='picture pt-4 px-4' src={hans} alt="Hans Profile Picture"/>
          <div className='row text'>
            <h4>
              Hans Fuerst
            </h4>
          </div>
        </div>
        <div className='col-4 align-self-center portrait links p-5'>
          <p>
          Hi! My name is Hans Fuerst and I am a composer, pianist, educator, and producer in the Eau Claire, Wisconsin area. I am a part of several different projects including ‘Sweater People’, a band/production crew consisting of original music as well as ‘Down Loadable Collective’, a video game music cover band.          </p>
          <br/>
          <p>
          One of my deep passions has always been the medium of video games as an artform and to an extent, the music within it. Video game music along with a hefty input from jazz, rock, funk, soundscape, and classical music have all come together to inform my how I write and perform.
          </p>
          <br/>
          <p>
          I am currently attending UW Eau Claire for a bachelors in music education. I hope to use it to further become a better educator, and communicator within my field.
          </p>
        </div>
        <div className="col-4 align-self-center portrait m-md-3 m-sm-3 m-xs-1 pt-4 px-2">
          <h3>
            Personal Socials
          </h3>
            <h4>
              <a href="https://www.youtube.com/channel/UCLkwQgM87tNf_qCBw1iF-FA" rel='noopener noreferrer' target='_blank' className='link-danger'>
                <FontAwesomeIcon icon={faYoutube} size='1x'/>
                Hans Fuerst
              </a>
            </h4>
            <h4>
              <a href="https://www.instagram.com/hans.fuerst/" rel='noopener noreferrer' target='_blank' className='link-light'>
                <FontAwesomeIcon icon={faInstagram} size='1x'/>
                Hans Fuerst
              </a>
            </h4>
            <br/>
            <h3>
              Sweater People Socials
            </h3>
            <h4>
              <a href="https://www.youtube.com/channel/UC7IsCIeGvPQcyV77CAXk2_w" rel='noopener noreferrer' target='_blank' className='link-danger'>
                <FontAwesomeIcon icon={faYoutube} size='1x'/>
                Sweater People
              </a>
            </h4>
            <h4>
              <a href="https://www.instagram.com/sweaterpeopleec/" rel='noopener noreferrer' target='_blank' className='link-light'>
                <FontAwesomeIcon icon={faInstagram} size='1x'/>
                SweaterPeopleEC
              </a>
            </h4>
            <h4>
              <a href="https://www.facebook.com/sweaterpeopleec" rel='noopener noreferrer' target='_blank' className='link-primary'>
                <FontAwesomeIcon icon={faFacebook} size='1x'/>
                Sweater People
              </a>
            </h4>
            <br/>
            <h3>
              DLC Socials
            </h3> 
            <h4>
              <a href="https://www.instagram.com/dlc_band/" rel='noopener noreferrer' target='_blank' className='link-light'>
                <FontAwesomeIcon icon={faInstagram} size='1x'/>
                DLC Band
              </a>
            </h4>
        </div>
        <div className='col'>

        </div>
      </div>
        <h1 className='text'>
          Projects
        </h1>
      <div className='row sweater mt-2'>
        <div className="col align-self-center">
          <a href='https://open.spotify.com/artist/7kuigsD0TxFy93h03Ystwy?si=uhMb-Q-qSq2RuyMRjuxv-A' rel='noopener noreferrer' target='_blank'>
            <Image className='dlc-pic' src={sweater_people} alt='logo of Sweater People' width={1000}/>
          </a>
          <p>
            Sweater People is an improvisatory musical trio and music production team based in Eau Claire, Wisconsin and comprised of members Hans Fuerst (keys), Will DeBlaey (bass), and North Skager (drums).
          </p>
          <iframe title="Sweater People Spotify" src="https://open.spotify.com/embed/artist/7kuigsD0TxFy93h03Ystwy?utm_source=generator" width="100%" height="250" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

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
          <Image className='dlc-pic' src={dlc} alt='logo for DLC'/>
          <p>
          Down Loadable Collective (DLC) is a video game cover band reimagining music ranging from classic to modern games in a contemporary style influenced by jazz, hiphop, and funk consisting of members Chuck Woehrle (saxophone), Eric Thrane (trombone), Hans Fuerst (keys), Will DeBlaey (bass), and North Skager (drums).          
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
