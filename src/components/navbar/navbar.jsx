import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
              <NavLink exact to='/' onClick={showNavbar} activeClassName='active'>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={showNavbar} activeClassName='active'>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to='/portfolio' onClick={showNavbar} activeClassName='active'>
                Portfólio
              </NavLink>
            </li>
            <button className='nav-close-btn' onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
          <span className='logo-wrapper'>
            <img src={machine} alt='logo' />
            <p> Cauan Rossoni </p>
          </span>
         
            <div className='bagé'>
              <button className='familia'>
                <a onClick={showNavbar}>Familia Bagé</a>
              </button>
              {location.pathname === '/' && (
              <button className='nav-contact-btn'>
                <Link onClick={showNavbar} to='/contact' spy={true} smooth={true} offset={100} duration={500}>
                  Contato
                </Link>
              </button>
               )}
            </div>
         
        </div>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
