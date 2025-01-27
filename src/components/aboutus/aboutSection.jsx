import React from 'react';

const AboutSection = ({ heading, subheading, content }) => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-5 text-center">
      <h1 className="text-4xl font-bold mb-5">{heading}</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">{subheading}</h2>
      {content.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-700 mb-4">{paragraph}</p>
      ))}
    </div>
  </section>
);

export default AboutSection;
