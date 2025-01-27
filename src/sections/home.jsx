import React from 'react';
import HomeBanner from '../components/home/home-banner';
// import LogoMarquee from '../components/home/marquee';
import About from '../components/home/about';
import Feature from '../components/home/feature';
import Tabs from '../components/home/tabs';
// import LogoCarousel from '../components/home/logo_carousel';
// import CaseStudy from '../components/home/caseStudy.jsx';
import Testimonial from '../components/home/testimonial.jsx';
import CTAForm from '../components/home/cta.jsx';
import Amazon from '../components/home/amazon.jsx';
import Cards from '../components/home/cardsSlider.jsx';
import Trust from '../components/home/trust.jsx';
import { projectsData, contactInfo, socialMediaLinks } from '../data.js';
import Services from '../components/home/services.jsx';


const Home = () => {
  const { categories, projects } = projectsData;
  
  
  return (
    <>
      <HomeBanner/>
      {/* <LogoMarquee/> */}
      <About/>
      <Amazon/>
      <Cards/>
      <Feature/>
      <Tabs categories={categories} projects={projects} />
      <Services/>
      <Trust/>
      {/* <LogoCarousel/> */}
      {/* <CaseStudy/> */}
      <Testimonial/>
       <CTAForm contactInfo={contactInfo} socialMediaLinks={socialMediaLinks} />  
    </>
  );
}

export default Home;
