import React from 'react';
import './Services.scss';
import cloud from '../../../assets/images/cloud-computing.gif';
import programmer from '../../../assets/images/programmer.gif';
import cybersecurity from '../../../assets/images/cyber-security.gif';

const servicesData = [
  {
    id: 1,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with state-of-the-art security measures designed to safeguard against cyber threats.',
    icon: cybersecurity,
  },
  {
    id: 2,
    title: 'Integrated Programming',
    description:
      'Leverage seamless programming solutions tailored to integrate and optimize your business operations.',
    icon: programmer,
  },
  {
    id: 3,
    title: 'Cloud Computing',
    description:
      'Harness the power of cloud technology to scale your business with agility and reliability.',
    icon: cloud,
  },
];

const Services = () => {
  return (
    <section id="services.jsx" className="services-page">
      <header className="services-header">
        <h1>Our Core Services</h1>
        <p>Explore the services we offer to help you achieve success in the digital age.</p>
      </header>
      <div className="services-list">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
