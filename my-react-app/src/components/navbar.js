import React from 'react';
import './navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
        <h2>
            <span>
                Rex Yong
            </span>
        </h2>
        <ul>
            <li><Link to="home" spy={true} smooth={true} offset={-window.innerHeight * 0.1} duration={500}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-window.innerHeight * 0.1} duration={500}>About</Link></li>
            <li><Link to="mySkills" spy={true} smooth={true} offset={-window.innerHeight * 0.1} duration={500}>My Skills</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-window.innerHeight * 0.1} duration={500}>Contact</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
