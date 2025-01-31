import React from 'react';
import AboutSection from '../components/aboutus/aboutSection';
import TeamSection from '../components/aboutus/team';
import BlogComponent from '../components/aboutus/aboutBlog';
import {aboutData}  from '../data.js';

const About = () => (
  <div>
    <AboutSection
      heading={aboutData.heading}
      subheading={aboutData.subheading}
      content={aboutData.content}
    />
    <TeamSection />
    <BlogComponent />
  </div>
);

export default About;
