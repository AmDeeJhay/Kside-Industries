import React from 'react';
import './About.scss';
import monitor from '../../../assets/images/monitor.png';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side: Image */}
        <div className="about-image">
          <img
            src={monitor} // Replace with your actual image URL
            alt="About Us"
          />
        </div>

        {/* Right Side: Text */}
        <div className="about-text"> 
          <h1>About Us</h1>
          <p>
            At Kside, we pride ourselves on delivering innovative solutions tailored to meet our clients' needs.
            With expertise in <strong>Cybersecurity</strong>, <strong>Cloud Computing</strong>, and  
            <strong> Programming</strong>, we empower businesses with cutting-edge technologies and a commitment to excellence.
          </p>
          <p>
            Our mission is to create seamless and scalable systems that drive growth while ensuring security
            in the ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
