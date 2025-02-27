import React from "react";
import HeroSection from "../../components/heroSection"
import TwoColumns from "../../components/twoColumns"
import CaseStudy from "../../components/caseStudies"
import Edge from "../../components/edge"
import WhyBrands from "../../components/whyBrands"
import Verses from "../../components/verses";
import FaqTemp from "../../components/faqTemp";
import { seoheroData } from "../../data";
import { seotwoColumnSectionData } from "../../data";
import { seoCaseStudiesData } from "../../data";
import { seoEdgeData } from "../../data";
import { seoWhyBrandsData } from "../../data";
import { seoVersesData } from "../../data";
import { seoFaqsData } from "../../data";

const SEOservice = () => {
  return (
    <div>
      <HeroSection data={seoheroData} />   
      <TwoColumns data={seotwoColumnSectionData}/>   
      <CaseStudy data={seoCaseStudiesData}/>
      <Edge data={seoEdgeData}/>
      <WhyBrands data={seoWhyBrandsData}/>
      <Verses data={seoVersesData}/>
      <FaqTemp data={seoFaqsData}/>
    </div>
  );
};

export default SEOservice;
