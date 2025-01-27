import React from 'react';
import AboutSection from '../components/aboutus/aboutSection';
import TeamSection from '../components/aboutus/teamSection';
import {aboutData}  from '../data.js';

const About = () => (
  <div>
    <AboutSection
      heading={aboutData.heading}
      subheading={aboutData.subheading}
      content={aboutData.content}
    />
    <TeamSection teamMembers={aboutData.teamMembers} />
    <div className="py-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h3 className="text-2xl font-semibold mb-4">{aboutData.contactCTA}</h3>
      <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200">
        Contact Us
      </button>
    </div>
  </div>
);

export default About;
