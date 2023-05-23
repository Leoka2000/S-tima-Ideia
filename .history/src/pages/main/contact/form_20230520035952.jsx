
import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './form.css'
import emailjs from '@emailjs/browser';
import Logo from '../../../assets/brand/logo.png'
import Swal from 'sweetalert2';
import img from '../../../assets/images/contato.jpg'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'



const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ref1, inView1] = useInView({
        threshold: 0.6,
        triggerOnce: true,
        delay: 0.6
    });

     const sendEmail = (data) => {
         emailjs.send('service_cccr2pm', 'template_5qhui9d', data, 'Wz8QOl_kyPBr6ZQT1')
             .then((response) => {
                 console.log('SUCCESS!', response.status, response.text);
             }, (error) => {
                 console.log('FAILED...', error);
             });
     }

    const onSubmit = (data) => {

        // sendEmail(data);
        console.log(data)
        Swal.fire({
            icon: 'success',
            title: 'Sua mensagem foi enviada com sucesso :)',
            text: 'Esteja atento à mim em sua caixa de email.'
        }).then(() => {
        });
    }

    return (
        <section id='form' className='form-section'>
            <div className='cauan-img'> </div>
            <motion.form
                ref={ref1}
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit(onSubmit)} action="/submit-form">
                <header>
                    <h1>Tem alguma dúvida? Escreva-me!</h1>
                    <img src={Logo} />
                </header>
                <div className='flex-div'>
                    <fieldset className='form-row'>
                        <label htmlFor="first-name" className="form-label">Nome</label>
                        <input type="text" id="first-name" className={`${errors.firstName ? 'input-error' : 'form-input'}`} {...register('firstName', { required: true })} />
                        {errors.firstName && <span className="error-message">Insira o seu nome</span>}
                    </fieldset>
                    <fieldset className='form-row'>
                        <label htmlFor="last-name" className="form-label">Sobrenome</label>
                        <input type="text" id="last-name" className={`${errors.lastName ? 'input-error' : 'form-input'}`} {...register('lastName', { required: true })} />
                        {errors.lastName && <span className="error-message">Insira o seu sobrenome</span>}
                    </fieldset>
                </div>
                <fieldset id='checkbox-wrapper' className='form-row'>
                    <label htmlFor="checkbox" className="form-label">EU CONFIRMO QUE TENHO MAIS DE 18 ANOS</label>
                    <input type="checkbox" id="checkbox" className={`${errors.checkbox ? 'input-error' : 'form-input'}`} {...register('checkbox', { required: true })} />
                    {errors.checkbox && <span className="error-message">Selecione a caixa acima</span>}
                </fieldset>
                <div className='flex-div'>
                    <fieldset className='form-row'>
                        <label htmlFor="phone" className="form-label">Telefone</label>
                        <input placeholder='ex: 51 99957 2295' type="tel" id="phone" className={`${errors.phone ? 'input-error' : 'form-input'}`} {...register('phone', { required: true, pattern: /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/ })} />
                        {errors.phone && <span className="error-message">Insira um telefone válido</span>}
                    </fieldset>
                    <fieldset className='form-row'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className={`${errors.email ? 'input-error' : 'form-input'}`} {...register('email', { required: true, pattern: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                        {errors.email && <span className="error-message">Insira um email válido</span>}
                    </fieldset>
                </div>
                <fieldset className='form-row'>
                    <label htmlFor="message" className="form-label">Escreva uma mensagem</label>
                    <textarea id="message" className={`${errors.message ? 'input-error' : 'form-input'}`} {...register('message', { required: true })}></textarea>
                    {errors.message && <span className="error-message">A mensagem não pode estar vazia</span>}
                </fieldset>
                <button className="form-button">ENVIAR</button>
            </motion.form>
        </section>
    )
}

export default Form
