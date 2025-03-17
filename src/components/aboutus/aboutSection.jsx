import React from 'react';
import { aboutData } from '../../data';

const AboutSection = ({ heading, subheading }) => {
  const { abtcta, ctaBtnAbt } = aboutData;

  return (
    <section 
      className="relative py-12 bg-cover bg-center bg-no-repeat pt-24 flex flex-row min-h-screen justify-center items-center" 
      style={{ backgroundImage: "url('https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg')" }} 
    >
      {/* ✅ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-logo-dark-blue/90 to-logo-purple/90"></div>

      {/* ✅ Content Wrapper with Relative Positioning */}
      <div className="relative container mx-auto px-5 text-center text-theme-white py-10">
        <h2 className="text-3xl uppercase">{subheading}</h2>
        <h1 className="text-6xl font-bold mt-2 mb-8">{heading}</h1>

        {abtcta && (
          <div className="flex flex-wrap justify-around gap-2 p-6">
            {abtcta.map((item, index) => (
              <div key={index} className="p-4 rounded-xl text-center">
                <h3 className="text-6xl text-[#00eaff] mb-2 shadowTxt">{item.abtcta1Heading}</h3>
                <p className="text-lg text-theme-white uppercase">{item.abtcta1Description}</p>
              </div>
            ))}
          </div>
        )}

        <button className="bg-theme-white text-primary uppercase text-xl p-4 my-10 hover:bg-logo-medium-blue-2 transition-colors hover:text-theme-white font-semibold">
          {ctaBtnAbt}
        </button>
        <p>Let’s discuss how we can elevate your business.</p>
      </div>
    </section>
  );
};

export default AboutSection;
