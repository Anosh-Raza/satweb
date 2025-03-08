import React from 'react';
import HomeBanner from '../components/home/home-banner';
import About from '../components/home/about';
import Feature from '../components/home/feature';
import Tabs from '../components/home/tabs';
import Testimonial from '../components/home/testimonial.jsx';
import CTAForm from '../components/home/cta.jsx';
import Amazon from '../components/home/amazon.jsx';
import Trust from '../components/home/trust.jsx';
import { projectsData, contactInfo, socialMediaLinks } from '../data.js';
import Services from '../components/home/services.jsx';
import TabsData from '../components/home/verticalTabs.jsx';
import Timeline from '../components/home/timeline.jsx';
import FAQ from '../components/home/faq.jsx';
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { categories, projects } = projectsData;
  
  
  return (
    <>
    <Helmet>
        <title>Leading Digital Marketing Agency in USA</title>
        <meta
          name="description"
          content="The leading digital marketing agency in the United States. We offer experienced SEO, social media marketing, PPC, web development, and other services to help your business succeed."
        />
      </Helmet>
      <HomeBanner/>
      {/* <LogoMarquee/> */}
      <About/>
      <Amazon/>
      {/* <Cards/> */}
      <Feature/>
      <Tabs categories={categories} projects={projects} />
      <Services/>
      <Trust/>
      <TabsData/>
      {/* <LogoCarousel/> */}
      {/* <CaseStudy/> */}
      <FAQ/>
      <Testimonial/>
      <Timeline/>
       <CTAForm contactInfo={contactInfo} socialMediaLinks={socialMediaLinks} />  
    </>
  );
}

export default Home;
