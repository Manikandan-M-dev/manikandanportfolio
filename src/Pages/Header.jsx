import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../Assets/header.css';
// import photo1 from "../Images/Photograph.jpg";

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
        <Link  to="home" activclassname="hai"  smooth={true} duration={500} offset={-100} className="nav-link" tabIndex={0}onClick={closeMenu}>Home</Link>
        <Link to="about" activclassname="hai" smooth={true} duration={500} offset={-80} className="nav-link"tabIndex={0}
        onClick={closeMenu}>About</Link>
        <Link  to="projects" activclassname="hai"  smooth={true} duration={500} offset={-80} className="nav-link"tabIndex={0}onClick={closeMenu}>Projects</Link>
        <Link to="contact" activclassname="hai" smooth={true} duration={500} offset={-80} className="nav-link" tabIndex={0}onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
};
export default Header;
