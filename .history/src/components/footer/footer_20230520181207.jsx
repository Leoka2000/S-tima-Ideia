import { useEffect } from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import machine from '../../assets/icons/tattoo-machine.png'
import bage from '../../assets/brand/bage.jpg'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'

const Footer = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <footer>
            <main>
                <div className='footer-left'>
                    <div className='footer-cauan'>
                        <img src={machine} />
                        <p>Cauan Rossoni</p>
                    </div>
                 
                    <div className='footer-icons-wrapper'>
                    <p>Me siga nas redes sociais</p>
                        <a target='_blank' href='https://www.instagram.com/setimaideia.ink/'>< BsInstagram /></a>
                        <a target='_blank' href='mailto:contato.cauanrf@gmail.com'><AiOutlineMail /></a>
                    </div>
                </div>
                <div className='footer-middle'>
                    <h1>Páginas</h1>
                    <Link style={{ textDecoration: 'none' }} spy={true} smooth={true} offset={100} duration={500} to='inicio' >Início</Link>
                    <Link style={{ textDecoration: 'none' }} spy={true} smooth={true} offset={100} duration={500} to='portfolio' >Portfolio</Link>
                    <Link style={{ textDecoration: 'none' }} spy={true} smooth={true} offset={100} duration={500} to='about' >Sobre</Link>
                </div>
                <div className='footer-right'><a target='_blank' href='https://www.instagram.com/_familiabagetattoo_/'><img src={bage} /></a></div>
            </main>
            <div className='leo-tag'>
                <p>Desenvolvido por <a style={{textDecoration: 'none', borderBottom:'none'}} href='https://www.linkedin.com/in/leoreus/'>Leo Reus Oliveira</a></p>
                
            </div>
        </footer>
    )
}

export default Footer
