
import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './form.css'
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

    /* const sendEmail = (data) => {
         emailjs.send('service_mykfjno', 'template_83sjaz8', data, 'Wz8QOl_kyPBr6ZQT1')
             .then((response) => {
                 console.log('SUCCESS!', response.status, response.text);
             }, (error) => {
                 console.log('FAILED...', error);
             });
     }*/

    const onSubmit = (data) => {

        // sendEmail(data);
        console.log(data)
        Swal.fire({
            icon: 'success',
            title: 'Your request has been successfully sent!',
            text: 'Keep an eye out for me in your email box. Press the button below to continue.'
        }).then(() => {
        });
    }

    return (
        <section className='form-section'>
            <div className='cauan-img'> </div>
            <motion.form
                ref={ref1}
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit(onSubmit)} action="/submit-form">
                <header>
                    <h1>Get in touch!</h1>
                    <img src={Logo} />
                </header>
                <div className='flex-div'>
                    <fieldset className='form-row'>
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" id="first-name" className={`${errors.firstName ? 'input-error' : 'form-input'}`} {...register('firstName', { required: true })} />
                        {errors.firstName && <span className="error-message">Please enter your first name</span>}
                    </fieldset>
                    <fieldset className='form-row'>
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" id="last-name" className={`${errors.lastName ? 'input-error' : 'form-input'}`} {...register('lastName', { required: true })} />
                        {errors.lastName && <span className="error-message">Please enter your last name</span>}
                    </fieldset>
                </div>
                <fieldset id='checkbox-wrapper' className='form-row'>
                    <label htmlFor="checkbox" className="form-label">I CONFIRM THAT I AM AT LEAST 18yrs OF AGE</label>
                    <input type="checkbox" id="checkbox" className={`${errors.checkbox ? 'input-error' : 'form-input'}`} {...register('checkbox', { required: true })} />
                    {errors.checkbox && <span className="error-message">Please check the box</span>}
                </fieldset>
                <div className='flex-div'>
                    <fieldset className='form-row'>
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input placeholder='eg: +1 123-456-7890 / (123) 456-7890' type="tel" id="phone" className={`${errors.phone ? 'input-error' : 'form-input'}`} {...register('phone', { required: true, pattern: /^(?:\+1)?[ -]?\(?([2-9][0-9]{2})\)?[ -]?([2-9][0-9]{2})[ -]?([0-9]{4})$/ })} />
                        {errors.phone && <span className="error-message">Please enter a valid phone number</span>}
                    </fieldset>
                    <fieldset className='form-row'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className={`${errors.email ? 'input-error' : 'form-input'}`} {...register('email', { required: true, pattern: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                        {errors.email && <span className="error-message">Please enter your email</span>}
                    </fieldset>
                </div>
                <fieldset className='form-row'>
                    <label htmlFor="message" className="form-label">Brief description of what you are looking to have tattooed.</label>
                    <textarea id="message" className={`${errors.message ? 'input-error' : 'form-input'}`} {...register('message', { required: true })}></textarea>
                    {errors.message && <span className="error-message">Please enter message</span>}
                </fieldset>
                <button className="form-button">SUBMIT</button>


            </motion.form>
        </section>
    )
}

export default Form
