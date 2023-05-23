import React from 'react'
import "./about.css"
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import cauan from '../../../assets/images/cauan.jpg'
import {Link} from 'react-router-dom'

const Sobre = () => {
  return (
    <section className='sobre-section'>
      <main>
        <div className='sobre-left'>
          <h2>Tatuador na equipe Família Bagé.</h2>
          <h1>Cauan Rossoni Feversani</h1>
          <p>Magna nisl egestas amet netus lectus malesuada diam et ullamcorper et in urna maecenas praesent ut vitae tempus sollicitudin pharetra ipsum molestie urna scelerisque.</p>
          <div className='sobre-icons-wrapper'>
            <a>
              <BsFacebook />
            </a>
            <a>
              <BsInstagram />
            </a>
            <a>
              <AiOutlineMail />
            </a>
          </div>
          <div className='sobre-button-wrapper'>
            <Link ><button className='solid'>Contato</button></Link>
            <Link><button className='transparent'>Veja o portfólio</button></Link>
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
