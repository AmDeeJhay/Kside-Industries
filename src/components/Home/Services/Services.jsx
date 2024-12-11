import React from 'react';
import './Services.scss';
import monitor from '../../../assets/images/monitor.png';
// import programmingIcon from '../../../assets/icons/integrated_programming.gif';
// import cloudComputingIcon from '../../../assets/icons/cloud_computing.gif';

const servicesData = [
  {
    id: 1,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with state-of-the-art security measures designed to safeguard against cyber threats.',
    icon: monitor,
  },
  {
    id: 2,
    title: 'Integrated Programming',
    description:
      'Leverage seamless programming solutions tailored to integrate and optimize your business operations.',
    icon: monitor,
  },
  {
    id: 3,
    title: 'Cloud Computing',
    description:
      'Harness the power of cloud technology to scale your business with agility and reliability.',
    icon: monitor,
  },
];

const Services = () => {
  return (
    <section className="services-page">
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

