import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.scss';

import analysis from '../../../assets/images/analysis.png';
import Mask from '../../../assets/images/Mask.png';
import charts from '../../../assets/images/charts.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const images = [analysis, Mask, charts];

  useEffect(() => {
    // Auto-slide every 2 seconds in mobile view
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 2 seconds
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    // Update isMobile state on resize
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Building Reliable<br /> Software That Powers<br /> Engagement</h2>
        <p>At Kside, we create software solutions that<br /> enhance user interactions and foster lasting connections</p>
        <div className="hero-btn">
          <button>Get Started <FaArrowRight className="custom-arrow" /></button>
          <button>Learn More</button>
        </div>
      </div>

      <div className={`hero-image ${isMobile ? 'mobile-carousel' : 'desktop-layout'}`}>
        {isMobile ? (
          <>
            <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
            <button className="arrow left-arrow" onClick={prevImage}>&lt;</button>
            <button className="arrow right-arrow" onClick={nextImage}>&gt;</button>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </>
        ) : (
          <>
            <img src={analysis} alt="hero" className="hero-img" />
            <img src={Mask} alt="Mask" className="hero-img" />
            <img src={charts} alt="charts" className="hero-img" />
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
