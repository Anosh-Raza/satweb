import React from 'react';
import AboutSection from '../components/aboutus/aboutSection';
import TeamSection from '../components/aboutus/team';
import BlogComponent from '../components/aboutus/aboutBlog';
import AboutFeature from '../components/aboutus/aboutFeature.jsx';
import {aboutData}  from '../data.js';

const About = () => (
  <div>
    <AboutSection
      heading={aboutData.heading}
      subheading={aboutData.subheading}
      content={aboutData.content}
    />
    <TeamSection />
    <AboutFeature />
    <BlogComponent />
  </div>
);

export default About;
