import React from "react";
import HeroSection from "../../components/heroSection"
import TwoColumns from "../../components/twoColumns"
import CaseStudy from "../../components/caseStudies"
import Edge from "../../components/edge"
import WhyBrands from "../../components/whyBrands"
import Verses from "../../components/verses";
import FaqTemp from "../../components/faqTemp";
import { digiheroData } from "../../data";
import { digitwoColumnSectionData } from "../../data";
import { digiCaseStudiesData } from "../../data";
import { digiEdgeData } from "../../data";
import { digiWhyBrandsData } from "../../data";
import { digiVersesData } from "../../data";
import { digiFaqsData } from "../../data";
import { Helmet } from "react-helmet-async";

const SEOservice = () => {
  return (
    <div>
      <Helmet>
              <title>Best Digital Marketing Services | Grow Your Brand Online</title>
              <meta
                name="description"
                content="From PPC and social media to content marketing and email campaigns, we provide full-service digital marketing solutions that drive engagement, leads, and sales. Elevate your brand today!"
              />
            </Helmet>
      <HeroSection data={digiheroData} />   
      <TwoColumns data={digitwoColumnSectionData}/>   
      <CaseStudy data={digiCaseStudiesData}/>
      <Edge data={digiEdgeData}/>
      <WhyBrands data={digiWhyBrandsData}/>
      <Verses data={digiVersesData}/>
      <FaqTemp data={digiFaqsData}/>
    </div>
  );
};

export default SEOservice;
