import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <div className="logo-details">
            <img src='src/assets/footerlogo.svg' alt="Footer Logo" />
          </div>
        </div>
        <div className="col">
          <h3>About Wellness</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
          </ul>
        </div>

        
        

        <div className="col">
          <h3>Mobile App</h3>
          <ul>
            <li><a href="#">Android App Consumers</a></li>
          </ul>
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
          
        </div>
        
      </div>
      <div className="credit">copyright@ 2024 All right reserved</div>
      
    </footer>
  );
};

export default Footer;
