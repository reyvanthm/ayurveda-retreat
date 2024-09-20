import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/Logo.png" alt="Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/about-us" className="nav-link">ABOUT US</Link>
        <div className="dropdown">
          <Link to="/services" className="nav-link">OUR SERVICES</Link> 
        </div>
        <div className="contact-us-box">
          <span className="contact-us-text">CONTACT US</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
