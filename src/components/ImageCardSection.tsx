import React from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg'
];

const ImageCardSection: React.FC = () => {
  return (
    <div className="image-card-section">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image} alt={`Ayurveda Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardSection;
