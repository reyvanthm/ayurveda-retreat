import React from 'react';
import Header from './components/Header';
import ImageCardSection from './components/ImageCardSection';
import PreferencesBox from './components/PreferencesBox';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      
      {/* Full-width rectangle image */}
      <div className="full-width-image">
        <img src="path_to_your_image" alt="Ayurveda Retreat" />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h2>Ayurveda Retreat</h2>

        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>What is Ayurveda?</h3>
        <p>Ayurveda is a holistic healing system that ...</p>

        <h3 style={{ textAlign: 'left', fontWeight: 'bold' }}>The Core Principles of Ayurveda:</h3>
        <ul>
          <li>Principle 1</li>
          <li>Principle 2</li>
          <li>Principle 3</li>
        </ul>

        <p>About the company: We are dedicated to ...</p>
      </div>

      {/* Image card section */}
      <ImageCardSection />

      {/* Full-width rectangle box for preferences */}
      <PreferencesBox />

      <Footer />
    </div>
  );
};

export default App;
