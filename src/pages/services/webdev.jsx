import React from "react";
import HeroSection from "../../components/heroSection";
import TwoColumns from "../../components/twoColumns"
import CaseStudy from "../../components/caseStudies"
import Edge from "../../components/edge"
import WhyBrands from "../../components/whyBrands"
import Verses from "../../components/verses";
import FaqTemp from "../../components/faqTemp";
import TimeLine from "../../components/timeLine"
import { heroData } from "../../data";
import { twoColumnSectionData } from "../../data";
import { caseStudiesData } from "../../data";
import { edgeData } from "../../data";
import { whyBrandsData } from "../../data";
import { versesData } from "../../data";
import { faqsData } from "../../data";
import { Helmet } from "react-helmet-async";

const WebDeve = () => {
  return (
    <div>
      <Helmet>
              <title>Custom Web Development Services | Scalable & SEO-Friendly Websites</title>
              <meta
                name="description"
                content="Boost your online presence with custom web development services. Our expert team builds scalable, SEO-friendly websites tailored to your business needs. Get a high-performance website today!"
              />
            </Helmet>
      <HeroSection data={heroData} />
      <TwoColumns data={twoColumnSectionData}/>
      <CaseStudy data={caseStudiesData}/>
      <Edge data={edgeData}/>
      <WhyBrands data={whyBrandsData}/>
      <Verses data={versesData}/>
      <FaqTemp data={faqsData}/>
      <TimeLine/>
    </div>
  );
};

export default WebDeve;
