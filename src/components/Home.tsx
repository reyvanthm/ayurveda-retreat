// src/pages/Home.tsx
import React from 'react';
import './Home.css'; // You can create and style a CSS file for this page

const Home: React.FC = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <header className="header">
        <h1>Ayurveda Retreat</h1>
      </header>

      {/* Full Width Image */}
      <div className="full-width-image">
        <img src="path-to-your-image.jpg" alt="Ayurveda Retreat" />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h2>What is Ayurveda?</h2>
        <p>A brief definition of Ayurveda...</p>

        <h3>The core principles of Ayurveda:</h3>
        <ul>
          <li>Principle 1</li>
          <li>Principle 2</li>
          <li>Principle 3</li>
        </ul>

        <p>Additional text about the company...</p>
      </div>

      {/* Image Card Section */}
      <div className="image-card-section">
        {/* Example of a Card */}
        <div className="image-card">
          <img src="path-to-image1.jpg" alt="Service 1" />
        </div>
        <div className="image-card">
          <img src="path-to-image2.jpg" alt="Service 2" />
        </div>
        <div className="image-card">
          <img src="path-to-image3.jpg" alt="Service 3" />
        </div>
        <div className="image-card">
          <img src="path-to-image4.jpg" alt="Service 4" />
        </div>
      </div>

      {/* Preferences Box */}
      <div className="preferences-box">
        <h3>Share your account preferences</h3>
        <button className="whatsapp-button">Chat via WhatsApp</button>
        <button className="enquire-button">Enquire Now</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Ayurveda Retreat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
