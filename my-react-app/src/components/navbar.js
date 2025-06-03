import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
        <h2>
            <span>
                Rex Yong
            </span>
        </h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">My Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
