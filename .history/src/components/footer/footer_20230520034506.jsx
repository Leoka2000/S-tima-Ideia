import {useEffect} from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import machine from '../../assets/icons/tattoo-machine.png'
import bage from '../../assets/brand/bage.jpg'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-scroll'

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
                    <a style={{textDecoration: 'none'}} target='_blank' href='https://www.facebook.com/cauan.r.f'><BsFacebook /></a>
                    <a target='_blank' href='https://www.instagram.com/setimaideia.ink/'>< BsInstagram /></a>
                    <a target='_blank' href='mailto:'><AiOutlineMail /></a>
                </div>
            </div>
            <div className='footer-middle'>
                <h1>Páginas</h1>
                <Link style={{ textDecoration: 'none' }} spy={true} smooth={true} offset={100} duration={500} to='inicio' >Início</Link>
                <Link style={{ textDecoration: 'none' }} spy={true} smooth={true} offset={100} duration={500} to='portfolio' >Portfolio</Link>
                <Link style={{ textDecoration: 'none' }} spy={true} smooth={true} offset={100} duration={500} to='about' >Sobre</Link>
            </div>
            <div className='footer-right'><a target='_blank' href='https://www.instagram.com/_familiabagetattoo_/'><img src={bage} /></a></div>
        </footer>
    )
}

export default Footer
