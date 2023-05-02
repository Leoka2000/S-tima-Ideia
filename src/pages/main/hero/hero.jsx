import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import logo from '../../../assets/brand/logo.png';

const Hero = () => {
  const text = "Sou o Cauan, um tatuador localizado em porto Alegre, RS";

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
          <button className="colored-hero">Descubra mais</button>
          <button className="transparent-hero">Descubra mais</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
