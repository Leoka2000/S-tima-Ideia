import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import logo from '../../../assets/brand/logoCorrected.png';
import { Link } from 'react-scroll';

const Hero = () => {
  const text = "Olá, aqui é o Cauan, bem-vindo ao meu website!";

  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id='inicio' className="hero-section">
      <div className="hero-wrapper">
        <img src={logo} alt="logo" />
        <motion.h1 variants={parentVariants} initial="initial" animate="animate">
          {text.split("").map((letter, index) => (
            <motion.span key={index} variants={childVariants}>{letter}</motion.span>
          ))}
        </motion.h1>
        <h2>Clique no botão abaixo para saber mais.</h2>
        <div>
          <Link to='sobre' className="colored-hero" style={{textDecoration: 'none'}} spy={true} smooth={true} offset={100} duration={500}>Saiba mais</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
