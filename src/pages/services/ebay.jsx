import React from "react";
import HeroSection from "../../components/heroSection";
import { Helmet } from "react-helmet-async";
import TwoColumns from "../../components/twoColumns";
import CaseStudy from "../../components/caseStudies";
import WhatIs from "../../components/whatIs";
import Edge from "../../components/edge"
import WhyBrands from "../../components/whyBrands"
import GlobalCTA from "../../components/globalCTA"
import HorizontalTimeline from "../../components/globalTimeline";
import FaqTemp from "../../components/faqTemp";
import { ebayheroData } from "../../data";
import { ebaytwoColumnSectionData } from "../../data";
import { ebayCaseStudiesData } from "../../data";
import { ebayWhat } from "../../data";
import { ebayEdgeData } from "../../data";
import { ebayWhyBrandsData } from "../../data";
import { ebayGlobalTimeline } from "../../data";
import { ebayCTA } from "../../data";
import { ebayFaqsData } from "../../data";

function amazon() {
  return (
    <div>
      <Helmet>
        <title>Best eBay Marketing Services | Elevate Your Online Sales</title>
        <meta
          name="description"
          content="Meta Description: From eBay store optimization to ad campaign management, our eBay marketing services drive traffic, boost engagement, and increase sales. Get started today!"
        />
      </Helmet>
      <HeroSection data={ebayheroData} />
      <TwoColumns data={ebaytwoColumnSectionData}/>
      <CaseStudy data={ebayCaseStudiesData}/>
      <WhatIs title={ebayWhat.title}
        description={ebayWhat.description}
        benefits={ebayWhat.benefits}/>
      <Edge data={ebayEdgeData}/>
      <WhyBrands data={ebayWhyBrandsData}/>
      <HorizontalTimeline
        timelineData={ebayGlobalTimeline}
        title="Our eBay Marketing Approach"
        description="At Sat Americana, we use a strategic, data-backed approach to eBay marketing services, ensuring sustainable success for sellers."
      />
      <GlobalCTA 
      title={ebayCTA.title}
      description={ebayCTA.description}
      cta={ebayCTA.cta}/>
      <FaqTemp data={ebayFaqsData}/>
    </div>
  );
}

export default amazon;
