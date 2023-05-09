import React from 'react'
import Form from './form'
import './form.css'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import { AiFillMessage } from 'react-icons/ai'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsCashStack } from 'react-icons/bs'
import { MdFastfood} from 'react-icons/md'
import {BsCapsulePill} from 'react-icons/bs'

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
        <h1>INFORMAÇÕES IMPORTANTES!</h1>
        <p>Este site tem a intenção de fazer com que você me conheça melhor. Se você deseja marcar uma tatuagem comigo, atente-se às seguintes informações.</p>
        <div className='row-wrapper'>
          <div>
            <span><AiFillMessage /></span>
            <p>Envie-me uma mensagem no Instagram e uma foto de referência ou mencione a identificação de um dos meus trabalhos presentes na seção de portfólio deste site.</p>
          </div>
          <div>
            <span><BsCashStack /></span>
            <p>Para agendar uma tatuagem comigo, você precisará pagar um depósito, e esse valor será destinado para o custo total do trabalho.</p>
          </div>
          <div>
            <span><AiOutlineFieldTime /></span>
            <p>Exijo 48 horas de antecedência para reagendar ou cancelar um compromisso. Se você não conseguir fazer isso, precisará marcar outro compromisso e pagar um depósito extra.</p>
          </div>
          <div>
            <span><MdFastfood /></span>
            <p>Certifique-se de comer, se hidratar e descansar antes de realizer sua tatuagem.</p>
          </div>
          <div>
            <span><MdFastfood /></span>
            <p>Não venha de ressaca ou sob o efeito de drogas.</p>
          </div>

        </div>

      </motion.header>
      <Form />
    </section >
  )
}

export default Index
