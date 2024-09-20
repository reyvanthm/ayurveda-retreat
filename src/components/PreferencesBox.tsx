
import React from 'react';
import './PreferencesBox.css'; 

const PreferencesBox: React.FC = () => {
  return (
    <div className="preferences-box">
      <div className="inner-box">
        <h2>Take the first step towards serenity. Share your retreat preferences</h2>
        <div className="actions">
          <a href="https://wa.me/your-link" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/ChatViaWhatsapp.png" alt="Chat via WhatsApp" className="chat-via-whatsapp" />
          </a>
          <a href="/enquire">
            <img src="src/assets/EnquireNow.png" alt="Enquire Now" className="enquire-now" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreferencesBox;
