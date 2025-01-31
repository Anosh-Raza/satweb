import React from 'react';
import { aboutData } from '../../data';

const AboutSection = ({ heading, subheading }) => {
  const { abtcta, ctaBtnAbt } = aboutData;

  return (
    <section 
      className="relative py-12 bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg')" }} 
    >
      {/* ✅ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-logo-dark-blue/90 to-logo-purple/90"></div>

      {/* ✅ Content Wrapper with Relative Positioning */}
      <div className="relative container mx-auto px-5 text-center text-theme-white py-10">
        <h2 className="text-xl">{subheading}</h2>
        <h1 className="text-6xl font-bold my-8">{heading}</h1>

        {abtcta && (
          <div className="flex flex-wrap justify-around gap-6 p-6">
            {abtcta.map((item, index) => (
              <div key={index} className="p-4 rounded-xl text-center">
                <h3 className="text-4xl text-[#00eaff] mb-2">{item.abtcta1Heading}</h3>
                <p className="text-lg text-theme-white uppercase">{item.abtcta1Description}</p>
              </div>
            ))}
          </div>
        )}

        <button className="bg-theme-white text-logo-purple py-2 px-4 mt-10 hover:bg-logo-medium-blue-2 transition-colors hover:text-theme-white shadow-md shadow-theme-white">
          {ctaBtnAbt}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
