import React, { useState, useEffect } from 'react';
import './about.css';
import img from '../../../assets/images/about-img.jpg';
import img1 from '../../../assets/images/about-img2.jpg';
import tattoogun from '../../../assets/icons/about-tattoo-machine-white.png';
import { BsFillArrowThroughHeartFill } from 'react-icons/bs';
import { motion, useTransform, useScroll, useViewportScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
const About = () => {
  const { scrollY } = useScroll();
  const parallaxStrength = 0.28;

  const firstImageY = useTransform(
    scrollY,
    [5, window.innerHeight],
    [5, -window.innerHeight * parallaxStrength * 2]
  );
  
  const secondImageY = useTransform(
    scrollY,
    [-20, window.innerHeight],
    [-20, window.innerHeight * parallaxStrength]
  );

  return (
    <section className='about-section'>
      <main className='about-left'>
        <h1>PORQUE ME ESCOLHER?</h1>
        <h2>
          Magna nisl egestas amet netus lectus malesuada diam et ullamcorper et
          in urna maecenas praesent ut vitae tempus sollicitudin pharetra ipsum
          molestie urna scelerisque
        </h2>
        <div>
          <img src={tattoogun} />
          <div>
            <h1>TATUAGENS COSTUMIZADAS</h1>
            <p>
              Magna nisl egestas amet netus lectus Malesuada diamrper et in
              lorem ist.
            </p>
          </div>
        </div>
        <div>
          <span>
            <BsFillArrowThroughHeartFill />
          </span>
          <div>
            <h1>COM AMOR</h1>
            <p>
              Grande parte do design de minhas tatuagens surgem a partir de
              minhas pinturas
            </p>
          </div>
        </div>
        <Link to="/about"><button>Sobre mim</button></Link>
      </main>
      <div className='about-right'>
     
      <motion.div
        className="thumbnail-about parallax-layer parallax-layer-1"
        style={{ y: secondImageY }}
      ></motion.div>
        <motion.div
        className="thumbnail-about parallax-layer parallax-layer-2"
        style={{ y: firstImageY }}
      ></motion.div>
      </div>
    </section>
  );
};

export default About;
