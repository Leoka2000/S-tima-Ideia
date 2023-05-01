import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import machine from '../../assets/icons/tattoo-machine.png'
import bage from '../../assets/brand/bage.jpg'

const Footer = () => {
    return (
        <footer>
            <div className='footer-left'>
                <div className='footer-cauan'>
                    <img src={machine} />
                    <p>Cauan Rossoni</p>
                </div>
                <p>Me siga nas redes sociais</p>
                <div className='footer-icons-wrapper'>
                    <a><BsFacebook /></a>
                    <a>< BsInstagram /></a>
                    <a><AiOutlineMail/></a>
                </div>
            </div>
            <div className='footer-right'><img src={bage}/></div>
        </footer>
    )
}

export default Footer
