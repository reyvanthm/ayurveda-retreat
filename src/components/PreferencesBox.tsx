import React from 'react';

const PreferencesBox: React.FC = () => {
  return (
    <div className="preferences-box">
      <h2>Share your account preferences</h2>
      <button className="whatsapp-button">Chat via WhatsApp</button>
      <button className="enquire-button">Enquire Now</button>
    </div>
  );
};

export default PreferencesBox;
