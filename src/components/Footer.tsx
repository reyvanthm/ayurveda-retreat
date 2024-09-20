import React from 'react';
import './Footer.css';
import { FaAngleRight } from "react-icons/fa";

const Footer: React.FC = () => {
  return (

    <div className="footer-outer">
        <footer>
      <div className="top-bar">
        <div className="logo-div">
          <img src='src/assets/footerlogo.svg' alt="Footer Logo" />
        </div>
        <div className="container">
          <div className="col">
            <h3>About Wellness</h3>
            <div className="col-points">
              <p><a href="#"><FaAngleRight />Help Center</a></p>
              <p><a href="#"><FaAngleRight />About Us</a></p>
              <p><a href="#"><FaAngleRight />Our Services</a></p>
            </div>
          </div>
          <div className="col">
            <h3>Mobile App</h3>
            <div className="col-points">
              <p><a href="#"><FaAngleRight />Android Users</a></p>
            </div>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://wa.me/your-link" target="_blank" rel="noopener noreferrer">
                <img src='src/assets/whatsapp.svg' alt="WhatsApp" />
              </a>
              <a href="https://twitter.com/your-link" target="_blank" rel="noopener noreferrer">
                <img src='src/assets/twitter.svg' alt="Twitter" />
              </a>
              <a href="https://instagram.com/your-link" target="_blank" rel="noopener noreferrer">
                <img src='src/assets/instagram.svg' alt="Instagram" />
              </a>
              <a href="https://facebook.com/your-link" target="_blank" rel="noopener noreferrer">
                <img src='src/assets/facebook.svg' alt="Facebook" />
              </a>
              <a href="https://linkedin.com/your-link" target="_blank" rel="noopener noreferrer">
                <img src='src/assets/linkedin.svg' alt="LinkedIn" />
              </a>
            </div>
            <div className="email">heiwawellness@outlook.com</div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>copyright@ 2024 All rights reserved</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
