import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Assets/header.css';
const Header = () => {  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu=()=>{
    setMenuOpen(false);
  }
  return (
    <header className="header">
      <div className="header-title"><span><i className="bi bi-code-slash devlogo"></i>&nbsp;Portfolio</span>
      <i className="bi bi-list menu-toggle" onClick={toggleMenu}></i>
      </div>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <Link  to="home"  smooth={true} duration={500} offset={-100} className="nav-link" tabIndex={0}onClick={closeMenu}activeClass="active"spy={true}>Home</Link>
        <Link to="about" smooth={true} duration={500} offset={-40} className="nav-link"tabIndex={0}
        onClick={closeMenu}activeClass="active"spy={true}>About</Link>
        <Link  to="projects"  smooth={true} duration={500} offset={-50} className="nav-link"tabIndex={0}onClick={closeMenu}activeClass="active"spy={true}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} offset={-40} className="nav-link" tabIndex={0}onClick={closeMenu}activeClass="active"spy={true}>Contact</Link>
      </nav>
    </header>
  );
};
export default Header;
