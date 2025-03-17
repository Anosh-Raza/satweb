import React from "react";
import HeroSection from "../../components/heroSection";
import TwoColumns from "../../components/twoColumns";
import CaseStudy from "../../components/caseStudies";
import WhatIs from "../../components/whatIs";
import Edge from "../../components/edge";
import WhyBrands from "../../components/whyBrands";
import GlobalCTA from "../../components/globalCTA"
import FaqTemp from "../../components/faqTemp";
import { shopheroData } from "../../data";
import { shoptwoColumnSectionData } from "../../data";
import { shopCaseStudiesData } from "../../data";
import { shopWhat } from "../../data";
import { shopEdgeData } from "../../data";
import { shopWhyBrandsData } from "../../data";
import { shopCTA } from "../../data";
import { shopFaqsData } from "../../data";
import { Helmet } from "react-helmet-async";

function Etsy() {
  return (
    <div>
      <Helmet>
        <title>Best Shopify Development Services | Build & Scale Your Online Store</title>
        <meta
          name="description"
          content="From Shopify theme development to store management, we provide end-to-end Shopify development services that drive sales, enhance user experience, and optimize performance. Get started today!"
        />
      </Helmet>
      <HeroSection data={shopheroData} />
      <TwoColumns data={shoptwoColumnSectionData} />
      <CaseStudy data={shopCaseStudiesData} />
      <WhatIs title={shopWhat.title}
        description={shopWhat.description}
        benefits={shopWhat.benefits}
          />
      <Edge data={shopEdgeData} />
      <WhyBrands data={shopWhyBrandsData} />
      <GlobalCTA title={shopCTA.title}
      description={shopCTA.description}
      cta={shopCTA.cta}
      />
      <FaqTemp data={shopFaqsData} />
    </div>
  );
}

export default Etsy;
