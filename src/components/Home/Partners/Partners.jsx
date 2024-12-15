// Partners Page JSX
import React from 'react';
import './Partners.scss';
import monitor from '../../../assets/images/monitor.png';


const partnersLogos = [
  '/images/monitor.png',
  '/images/monitor.png',
  '/images/monitor.png',
  '/images/monitor.png',
  '/images/monitor.png',
];

const Partners = () => {
  return (
    <div className="partners-page">
      <div className="partners-header">
        <h1>Our Trusted Partners</h1>
        <p>We are proud to collaborate with these amazing companies.</p>
      </div>

      <div className="marquee-container">
        <div className="marquee">
          {partnersLogos.map((logo, index) => (
            <div className="partner-logo" key={index}>
              <img src={monitor} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
