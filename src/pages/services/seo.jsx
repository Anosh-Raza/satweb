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
import { Helmet } from "react-helmet-async";

const SEOservice = () => {
  return (
    <div>
      <Helmet>
              <title>Top SEO Services | Boost Rankings & Drive Organic Traffic</title>
              <meta
                name="description"
                content="Increase visibility with expert SEO services! We offer on-page, off-page, and technical SEO to improve rankings, drive organic traffic, and maximize conversions. Let’s grow your brand online!"
              />
            </Helmet>
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
