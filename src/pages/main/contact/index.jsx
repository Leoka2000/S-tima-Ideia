import React from 'react'
import Form from './form'
import './form.css'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'


const Index = () => {

  const [ref1, inView1] = useInView({
    threshold: 0.7,
    triggerOnce: true,
    delay: 0.9
});

  return (
    <section className='form-section-parent'>
        <motion.header
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className='form-header'>
            <h1>Get in touch today</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
        </motion.header>
      <Form/>
    </section>
  )
}

export default Index
