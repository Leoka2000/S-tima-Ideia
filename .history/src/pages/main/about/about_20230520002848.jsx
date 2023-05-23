import React, { useState, useEffect } from 'react';
import './about.css';
import img from '../../../assets/images/about-img.jpg';
import img1 from '../../../assets/images/about-img2.jpg';
import tattoogun from '../../../assets/icons/about-tattoo-machine-white.png';
import { BsFillArrowThroughHeartFill } from 'react-icons/bs';
import { motion, useTransform, useScroll, useViewportScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

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

  const [ref1, inView1] = useInView({
    threshold: 0.25,
    triggerOnce: true,
    delay: 1
  });

  return (
    <section className='about-section'>
      <motion.main
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className='about-left'>
        <h1>PORQUE ME ESCOLHER?</h1>
        <h2>com mais de 5 anos de experiência, exploro a linha artistica das tatuagens preto e cinza (black and grey), não limitando somente à este estilo de tatuagem. Realizo pinturas em tela, shapes de skate, ilustrações digitais, desenhos com caneta esferográfica e à lápis, compondo assim um fazer artístico mais amplo.</h2>
        <div>
          <img src={tattoogun} />
          <div>
            <h1>TATUAGENS COSTUMIZADAS</h1>
            <p>Como estamos lidando com tatuagens personalizadas, terei uma reunião com você antes da sessão para discutir ideias de design. Meu trabalho é 100% comprometido com a sua expectativa.</p>
          </div>
        </div>
        <div>
          <span>
            <BsFillArrowThroughHeartFill />
          </span>
          <div>
            <h1>COM AMOR</h1>
            <p>Sendo artista por natureza, meu processo criativo envolve toda a minha relação com a arte, sendo através pinturas, fotografia, pintura, desenhos, documentários, histórias de vida ou exposições artísticas. Fazendo assim com que cada trabalho seja feito única e exclusiva.</p>
          </div>
        </div>
        <Link style={{ textDecoration: 'none' }} onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500} to='about' ><button>Sobre mim</button></Link>
      </motion.main>
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
