import React from 'react'
import './instagram.css'
import img from '../../../assets/images/insta-img.jpg'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

const Instagram = () => {

    const [ref1, inView1] = useInView({
        threshold: 0.3,
        triggerOnce: true,
        delay: 0.9
    });


    return (
        <section className='instagram-section'>
            <motion.div
                ref={ref1}
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }} className='instagram-left'>
                <h1>ME SIGA NO INSTAGRAM</h1>
                <p>O instagram é uma extenção natual do portfólio presente neste website. Lá, posto com frequência as tatuagens que realizo.</p>
                <a target='_blank' href='https://www.instagram.com/setimaideia.ink/'>@setimaideia.ink</a>
            </motion.div>
            <div className='instagram-right'>
            </div>
        </section>
    )
}

export default Instagram
