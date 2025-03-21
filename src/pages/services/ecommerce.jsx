import React from 'react'
import HeroSection from "../../components/heroSection";
import TwoColumns from "../../components/twoColumns"
import CaseStudy from "../../components/caseStudies"
import Edge from "../../components/edge"
import WhyBrands from "../../components/whyBrands"
import Verses from "../../components/verses";
import FaqTemp from "../../components/faqTemp";
import HorizontalTimeline from "../../components/globalTimeline"
import { ecoHeroData } from "../../data";
import { ecoTwoColumnSectionData } from "../../data";
import { ecoCaseStudiesData } from "../../data";
import { ecoEdgeData } from "../../data";
import { ecoWhyBrandsData } from "../../data";
import { ecoVersesData } from "../../data";
import { ecoFaqsData } from "../../data";
import { ecoTimelineComp } from "../../data";
import { Helmet } from "react-helmet-async";

const ecommerce = () => {
  return (
    <div>
<Helmet>
        <title>Ecommerce Solutions | Sell on Amazon, eBay, Etsy & Shopify</title>
        <meta
          name="description"
          content="Expand your online store with expert eCommerce solutions for Amazon, Etsy, eBay, and Shopify. We optimize product listings, improve conversions, and scale your sales. Start selling smarter!"
        />
      </Helmet>
      <HeroSection data={ecoHeroData} />
      <TwoColumns data={ecoTwoColumnSectionData}/>
      <CaseStudy data={ecoCaseStudiesData}/>
      <Edge data={ecoEdgeData}/>
      <WhyBrands data={ecoWhyBrandsData}/>
      <Verses data={ecoVersesData}/>
      <FaqTemp data={ecoFaqsData}/>
      <HorizontalTimeline
        timelineData={ecoTimelineComp}
        title="Our eCommerce Development Process"
        description="At Sat Americana, we offer custom eCommerce development services that help businesses create high-performing online stores tailored for growth."
      />
    </div>
  )
}

export default ecommerce