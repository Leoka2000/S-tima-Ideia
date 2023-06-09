import React from 'react'
import "./about.css"
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import cauan from '../../../assets/images/cauan.jpg'
import {Link} from 'react-scroll'

const Sobre = () => {
  return (
    <section id='about' className='sobre-section'>
      <main>
        <div className='sobre-left'>
          <h2>Tatuador na equipe Família Bagé.</h2>
          <h1>Cauan Rossoni Feversani</h1>
          <p>Olá! Sou um artista de tatuagem sediado em Porto Alegre, Brasil, apaixonado por explorar o magnífico mundo das tintas em preto e cinza. Com dedicação e habilidade, mergulho na arte de transformar histórias e emoções em obras de arte permanentes na pele dos meus clientes. Cada traço, cada sombra e cada detalhe minuciosamente trabalhado são cuidadosamente concebidos para criar uma experiência visual única e memorável. </p>
          <div className='sobre-icons-wrapper'>
            <a target='_blank' href='https://www.instagram.com/setimaideia.ink'>
              <BsInstagram />
            </a>
            <a href='mailto:contato.cauanrf@gmail.com'>
              <AiOutlineMail />
            </a>
          </div>
          <div className='sobre-button-wrapper'>
          <Link style={{ textDecoration: 'none' }} spy={true} smooth={true} offset={100} duration={500} to='form' ><button className='solid'>Contato</button></Link>
            <a target='_blank' href='https://www.instagram.com/setimaideia.ink'><button className='transparent'>Veja o portfólio</button></a>
          </div>
        </div>
        <div className='sobre-right'>
          <img alt='cauan' src={cauan}/>
        </div>
      </main>
    </section>
  )
}

export default Sobre
