import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
import monitor from '../../../assets/images/monitor.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const image = document.querySelector('.about-image img');
    
    // Preload image before animating
    const preloadImage = new Promise((resolve) => {
      if (image.complete) resolve();
      else image.onload = resolve;
    });

    preloadImage.then(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 85%', // Adjust start position
          end: 'bottom 15%', // Adjust end position
          toggleActions: 'play none none reverse',
        },
      });

      timeline
        .from(
          '.about-image img',
          {
            x: -150,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            force3D: true,
          }
        )
        .from(
          '.about-text h1',
          {
            y: -30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.6' // Overlap animations
        )
        .from(
          '.about-text p',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2, // Stagger animations
            ease: 'power2.out',
          },
          '-=0.4'
        );
    });
  }, []);

  return (
    <section id="About.jsx" className="about-section">
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
            <strong> Programming</strong>, we empower businesses with cutting-edge technologies and a commitment
            to excellence.
          </p>
          <p>
            Our mission is to create seamless and scalable systems that drive growth while ensuring security in
            the ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
