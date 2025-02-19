import React from 'react';
import { servicesData } from '../data';

const Services = () => {
  return (
    <>
    {/* <Banner /> */}
    <div className="bg-theme-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-logo-dark-blue text-4xl font-bold mb-8">
          Our Services
        </h2>
        <p className="text-logo-medium-blue-1 mb-12">
          We offer a wide range of digital solutions tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-logo p-8 rounded-lg shadow-md text-white transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <i className={`bi ${service.icon} text-5xl text-theme-white`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
