import React from 'react';
import { logos } from '../../data'; 

const LogoMarquee = () => {
  return (
    <div className="marquee-container px-4 sm:px-6 md:px-8 lg:px-10 bg-logo-medium-blue-1">
      <div className="marquee">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
