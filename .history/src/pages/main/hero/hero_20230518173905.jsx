import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import logo from '../../../assets/brand/logo.png';
import { Link } from 'react-scroll';
const Hero = () => {
  const text = "Olá, aqui é o artista cauan, bem vindo ao meu website";

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
    <section className="hero-section">
      <div className="hero-wrapper">
        <img src={logo} alt="logo" />
        <motion.h1 variants={parentVariants} initial="initial" animate="animate">
          {text.split("").map((letter, index) => (
            <motion.span key={index} variants={childVariants}>{letter}</motion.span>
          ))}
        </motion.h1>
        <h2>Aqui, você descobrirá mais acerca de mim e minha arte.</h2>
        <div>
          <Link to='about' className="colored-hero" style={{textDecoration: 'none'}} spy={true} smooth={true} offset={100} duration={500}>Descubra mais</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
