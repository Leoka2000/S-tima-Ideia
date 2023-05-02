import React from 'react'
import './index.css'
import img from '../../../assets/images/lookportfolio-img.png'
import silhouete from '../../../assets/icons/about-tattoo-machine.png'
import clown from '../../../assets/icons/rose.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

const LookPortfolio = () => {

  const [ref1, inView1] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    delay: 0.7
  });

  const [ref2, inView2] = useInView({
    threshold: 0.6,
    triggerOnce: true,
    delay: 0.9
  });

  return (
    <section className='look-portfolio-section'>
      <img className='silhouete' src={silhouete} />
      <img className='clown' src={clown} />
      <motion.div
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className='look-portfolio-left'>
        <img src={img} />
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0 }}
        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className='look-portfolio-right'>
        <h1>Take a look at our tattoo portfolio</h1>
        <p>Magna nisl egestas amet netus lectus malesuada diam et ullamcorper et in urna maecenas praesent ut vitae tempus sollicitudin pharetra ipsum molestie urna scelerisque</p>
        <button>Descubra meu portfólio</button>
      </motion.div>

    </section>
  )
}

export default LookPortfolio
