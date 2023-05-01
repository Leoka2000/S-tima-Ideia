import React from 'react'
import './index.css'
import img from '../../../assets/images/lookportfolio-img.png'
import silhouete from '../../../assets/icons/about-tattoo-machine.png'
import clown from '../../../assets/icons/clown-min.png'
const LookPortfolio = () => {
  return (
    <section className='look-portfolio-section'>
      <img className='silhouete' src={silhouete}/>
      <img className='clown' src={clown}/>
      <div className='look-portfolio-left'>
        <img src={img} />
      </div>
      <div className='look-portfolio-right'>
        <h1>Take a look at our tattoo portfolio</h1>
        <p>Magna nisl egestas amet netus lectus malesuada diam et ullamcorper et in urna maecenas praesent ut vitae tempus sollicitudin pharetra ipsum molestie urna scelerisque</p>
        <button>Descubra meu portfólio</button>
      </div>

    </section>
  )
}

export default LookPortfolio
