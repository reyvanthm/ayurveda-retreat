import React from "react";
import "./ImageCardSection.css";

const ImageCardSection: React.FC = () => {
  return (
    <div className="image-card-section">
       {/* Heading before the grid section */}
       <div className="section-heading">
        WHAT WE OFFER
      </div>

      {/* First Row: 4 Cards */}
      <div className="grid-row first-row">
        <div className="card-container">
          <div className="card-inner">
            <div className="card-image">
            <img src="src/assets/image1.jpg" alt="Card" className="image" />
            </div> 
          </div>
          <div>
            <h3 className="card-text">AYURVEDA MASSAGES</h3>
            </div>
        </div>
        <div className="card-container">
          <div className="card-inner">
            <div className="card-image">
            <img src="src/assets/image2.jpg" alt="Card" className="image" />
            </div>
          </div>
          <div>
            <h3 className="card-text">AYURVEDA PERSONALIZED TREATMENTS</h3>
            </div>
        </div>
        <div className="card-container">
          <div className="card-inner">
            <div className="card-image">
            <img src="src/assets/image3.jpg" alt="Card" className="image" />
            </div>
          </div>
            <div>
            <h3 className="card-text">AYURVEDA BEAUTY AND SKIN REJUVENATION</h3>
            </div>
        </div>
        <div className="card-container">
          <div className="card-inner">
            <div className="card-image">
            <img src="src/assets/image4.jpg"alt="Card" className="image" />
            </div>
          </div>
          <div>
            <h3 className="card-text">AYURVEDA WEIGHT MANAGEMENT</h3>
            </div>
        </div>
      </div>

      {/* Second Row: 3 Cards */}
      <div className="grid-row second-row">
        <div className="card-container">
          <div className="card-inner">
            <div className="card-image">
            <img src="src/assets/image5.jpg" alt="Card" className="image" />
            </div>
          </div>
            <div>
            <h3 className="card-text">AYURVEDIC PRE CONSULTATION</h3>
            </div>
        </div>
        <div className="card-container">
          <div className="card-inner">
            <div className="card-image">
            <img src="src/assets/image6.jpg" alt="Card" className="image" />
            </div>
          </div>
            <div>
            <h3 className="card-text">GYNECOLOGICAL CONSULTATION</h3>
            </div>
        </div>
        <div className="card-container">
          <div className="card-inner">
            <div className="card-image">
            <img src="src/assets/image7.jpg" alt="Card" className="image" />
            </div>
          </div>
            <div>
            <h3 className="card-text">KALARI TREATMENT</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardSection;
