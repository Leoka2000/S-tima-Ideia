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
        <p>Este site tem a intenção de fazer com que você me conheça melhor. Se você deseja marcar uma tatuagem comigo, leia as informações abaixos.</p>
        <div className='row-wrapper'>
          <div>
            <span><AiFillMessage /></span>
            <p>Envie-me uma mensagem no Instagram junto à uma foto de referência ou utilize o formulário de contato abaixo.</p>
          </div>
          <div>
            <span><BsCashStack /></span>
            <p>Para agendar uma tatuagem comigo será necessário pagar um depósito, e esse valor será destinado para o custo total do trabalho.</p>
          </div>
          <div>
            <span><AiOutlineFieldTime /></span>
            <p>Será necessário 48 horas de antecedência para cancelar ou reagendar uma sessão. Se você não conseguir fazer isso, será realizado outro agendamento e um pagamento de um depósito extra.</p>
          </div>
          <div>
            <span><MdFastfood /></span>
            <p>Para uma excelente e suave sessão, certifique-se de comer, se hidratar e descansar antes de realizer sua tatuagem.</p>
          </div>
          <div>
            <span><BsCapsulePill/></span>
            <p>É importante que você não se embriague no dia anterior ou durante a sessão, o que também inclui os efeitos de outras drogas.</p>
          </div>

        </div>

      </motion.header>
      <Form />
    </section >
  )
}

export default Index
