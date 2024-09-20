import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="navbar">
      <div className='logo-container'>
        <img src="src/assets/Logo.png" alt="Logo" />
      </div>

      <div className='navbar-contents'>
        <NavLink to='/' className="navbar-link">
          <span className='navbar-content'>HOME</span>
        </NavLink>

        <NavLink to='/about-us' className="navbar-link">
          <span className='navbar-content'>ABOUT US</span>
        </NavLink>

        <NavLink to='/services' className="navbar-link">
          <span className='navbar-content'>OUR SERVICES</span>
        </NavLink>

        <button className='navbar-contact'>
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Header;
