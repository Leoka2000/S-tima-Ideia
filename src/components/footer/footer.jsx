import {useEffect} from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import machine from '../../assets/icons/tattoo-machine.png'
import bage from '../../assets/brand/bage.jpg'
import {Link, useLocation} from 'react-router-dom'
const Footer = () => {

    const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


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
                    <a><AiOutlineMail /></a>
                </div>
            </div>
            <div className='footer-middle'>
                <h1>Páginas</h1>
                <Link style={{textDecoration: 'none'}} to='/'>Início</Link>
                <Link style={{textDecoration: 'none'}}  to='/about'>Sobre</Link>
                <Link style={{textDecoration: 'none'}}  to='portfolio'>Portfólio</Link>
            </div>
            <div className='footer-right'><img src={bage} /></div>
        </footer>
    )
}

export default Footer
