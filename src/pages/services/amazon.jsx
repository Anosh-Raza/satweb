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
import { amzheroData } from "../../data";
import { amztwoColumnSectionData } from "../../data";
import { amzCaseStudiesData } from "../../data";
import { amzWhat } from "../../data";
import { amzEdgeData } from "../../data";
import { amzWhyBrandsData } from "../../data";
import { amzGlobalTimeline } from "../../data";
import { amzCTA } from "../../data";
import { amzFaqsData } from "../../data";

function amazon() {
  return (
    <div>
      <Helmet>
        <title>Best Amazon PPC Services | Maximize Your Sales & ROI</title>
        <meta
          name="description"
          content="Optimize your Amazon ads with expert Amazon PPC services. From campaign management to listing optimization, we help you increase visibility, drive traffic, and boost sales. Get started today!"
        />
      </Helmet>
      <HeroSection data={amzheroData} />
      <TwoColumns data={amztwoColumnSectionData}/>
      <CaseStudy data={amzCaseStudiesData}/>
      <WhatIs title={amzWhat.title}
        description={amzWhat.description}
        benefits={amzWhat.benefits}/>
      <Edge data={amzEdgeData}/>
      <WhyBrands data={amzWhyBrandsData}/>
      <HorizontalTimeline
        timelineData={amzGlobalTimeline}
        title="Our Amazon PPC Marketing Process"
        description="At Sat Americana, we follow a strategic, data-driven approach to Amazon PPC services, ensuring businesses achieve long-term success."
      />
      <GlobalCTA 
      title={amzCTA.title}
      description={amzCTA.description}
      cta={amzCTA.cta}/>
      <FaqTemp data={amzFaqsData}/>
    </div>
  );
}

export default amazon;
