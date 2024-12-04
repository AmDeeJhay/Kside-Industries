import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Kside</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <span className=" close-icon">X</span>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )} 
      </div>
    </nav>
  );
};

export default Navbar;
