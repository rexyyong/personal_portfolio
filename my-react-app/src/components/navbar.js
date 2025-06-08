import React, { useState } from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Handler to close menu
  const handleCloseMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Rex Yong</div>
      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links${open ? " open" : ""}`}>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-window.innerHeight * 0.1}
            duration={500}
            onClick={handleCloseMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-window.innerHeight * 0.1}
            duration={500}
            onClick={handleCloseMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="mySkills"
            spy={true}
            smooth={true}
            offset={-window.innerHeight * 0.1}
            duration={500}
            onClick={handleCloseMenu}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-window.innerHeight * 0.1}
            duration={500}
            onClick={handleCloseMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
