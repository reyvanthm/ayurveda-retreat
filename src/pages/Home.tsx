// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCardSection from '../components/ImageCardSection';
import PreferencesBox from '../components/PreferencesBox';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <Header />

      {/* Full Width Image */}
      <div className="full-width-image">
        <img src="src/assets/ayurvedaretreat1.jpg" alt="Ayurveda Retreat" />
      </div>

      {/* Text Section */}
      <div className="section-heading">
        AYURVEDA RETREAT
      </div>
      
      <div className="text-section">
        
        <h2>What is Ayurveda?</h2>
        <p>Ayurveda, the ancient science of life, is a holistic approach to wellness that originated in India over 5,000 years ago. 
          The term "Ayurveda" is derived from the Sanskrit words "ayur" meaning "life" and "veda" meaning "science" or "knowledge." 
          It is a comprehensive system of natural healthcare that aims to balance the body, mind, and spirit to promote overall health and well-being. 
          Ayurveda is based on the understanding that each individual is unique, with their own distinct constitution (known as "dosha") and life force 
          (known as "prana"). It offers a personalized approach to health, using a combination of diet, lifestyle, herbal remedies, yoga, and meditation 
          to restore balance and harmony</p>

        <h3>The core principles of Ayurveda include:</h3>
        <ul>
          <li>The interconnectedness of all living things</li>
          <li>The importance of living in harmony with nature</li>
          <li>The concept of the three doshas (Vata, Pitta, and Kapha) and their role in maintaining health and balance</li>
          <li>The use of natural remedies and therapies to promote wellness</li>
          <li>The emphasis on prevention and self-care</li>
        </ul>
        
        <div className="definition">
        <p>By embracing the wisdom of Ayurveda, you can embark on a journey of self-discovery and transformation, cultivating a deeper connection with your 
          body, mind, and spirit. By partnering with the best in the industry, we're able to offer our guests a truly exceptional Ayurveda retreat experience. 
          Join us and discover the transformative power of Ayurveda.</p>
        </div>
      </div>


      {/* Image Card Section */}
      <ImageCardSection />

      {/* Preferences Box */}
      <PreferencesBox />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
