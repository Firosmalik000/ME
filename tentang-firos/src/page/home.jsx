import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from '../Fragment/navbar';
import Jumbotron from '../Fragment/jumbotron';
import About from '../layout/about';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../Fragment/contact';
import UpButton from '../component/upButton';
import Header from '../Fragment/navbar';

const Home = () => {
  const jumbotronRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500, offset: 100 });
  }, []);

  const scrollToSection = (section) => {
    switch (section) {
      case 'jumbotron':
        jumbotronRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth', duration: 3000 });
        break;
      default:
        break;
    }
  };

  return (
    <Parallax pages={3}>
      {/* <Header /> */}
      <div>
        <ParallaxLayer offset={0} speed={0.25}>
          <div id="jumbotron" ref={jumbotronRef}>
            <Jumbotron />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div id="about" ref={aboutRef}>
            <About />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <div id="contact" ref={contactRef}>
            <Contact />
          </div>
        </ParallaxLayer>
        <div className="right-20 flex items-end absolute bottom-20" onClick={() => scrollToSection('jumbotron')}>
          <UpButton />
        </div>
      </div>
    </Parallax>
  );
};

export default Home;
