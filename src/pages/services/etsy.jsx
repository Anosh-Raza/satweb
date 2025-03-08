import React from "react";
import HeroSection from "../../components/heroSection";
import TwoColumns from "../../components/twoColumns";
import CaseStudy from "../../components/caseStudies";
import WhatIs from "../../components/whatIs";
import Edge from "../../components/edge";
import WhyBrands from "../../components/whyBrands";
import GlobalCTA from "../../components/globalCTA"
import FaqTemp from "../../components/faqTemp";
import { etsyheroData } from "../../data";
import { etsytwoColumnSectionData } from "../../data";
import { etsyCaseStudiesData } from "../../data";
import { etsyWhat } from "../../data";
import { etsyEdgeData } from "../../data";
import { etsyWhyBrandsData } from "../../data";
import { etsyCTA } from "../../data";
import { etsyFaqsData } from "../../data";
import { Helmet } from "react-helmet-async";

function Etsy() {
  return (
    <div>
      <Helmet>
        <title>Best Etsy Marketing Services | Scale Your Online Business</title>
        <meta
          name="description"
          content="From Etsy shop optimization services to ad management, we provide comprehensive Etsy marketing services that drive traffic, enhance user engagement, and boost sales. Get started today!"
        />
      </Helmet>
      <HeroSection data={etsyheroData} />
      <TwoColumns data={etsytwoColumnSectionData} />
      <CaseStudy data={etsyCaseStudiesData} />
      <WhatIs title={etsyWhat.title}
        description={etsyWhat.description}
        benefits={etsyWhat.benefits}/>
      <Edge data={etsyEdgeData} />
      <WhyBrands data={etsyWhyBrandsData} />
      <GlobalCTA 
      title={etsyCTA.title}
      description={etsyCTA.description}
      cta={etsyCTA.cta}/>
      <FaqTemp data={etsyFaqsData} />
    </div>
  );
}

export default Etsy;
