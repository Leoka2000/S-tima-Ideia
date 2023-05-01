import React from 'react'
import './hero.css'
import logo from '../../../assets/brand/logo.png'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-wrapper'>
        <img src={logo} />
        <h1>Sou o Cauan, um tatuador localizado em porto Alegre, RS</h1>
        <h2>Aqui, você descobrirá mais acerca de mim e minha arte.</h2>
        <div>
          <button className='colored-hero'>Descubra mais</button>
          <button className='transparent-hero'>Descubra mais</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
