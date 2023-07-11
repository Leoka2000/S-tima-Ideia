import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import machine from '../../assets/icons/tattoo-machine.png';
import './navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const navbarScroll = () => {
    if (window.scrollY >= 20) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener('scroll', navbarScroll);

  return (
    <div className='nav-parent'>
      <nav className={navbar ? 'navbar' : 'activated'}>
        <div className='responsive-div' ref={navRef}>
          <ul className='original-size-ul'>
            <li>
            <LinkScroll style={{ textDecoration: 'none' }} onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500} to='inicio' >
                Início
              </LinkScroll>
            </li>    
            
            <li>
            <LinkScroll style={{ textDecoration: 'none' }} onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500} to='portfolio' >
                Portfólio
              </LinkScroll>
            </li>
            <li>
            <LinkScroll style={{ textDecoration: 'none' }} onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500} to='about' >
                Sobre
              </LinkScroll>
            </li>
            <button className='nav-close-btn' onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
          <span className='logo-wrapper'>
            <img src={machine} alt='logo' />
            <p> Cauan Rossoni </p>
          </span>
          <div>
          <div className='bagé'>
            <a className='familia' style={{ textDecoration: 'none', color: '#fff' }} target='_blank' href='https://www.facebook.com/familiabagetattoo/?locale=pt_BR' onClick={showNavbar}>Família Bagé</a>
            {location.pathname === '/' && (
              <button className='nav-contact-btn'>
                <LinkScroll style={{ textDecoration: 'none' }} onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500} to='form' >
                  Contato
                </LinkScroll>
              </button>
            )}
          </div>

        </div>
  
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
