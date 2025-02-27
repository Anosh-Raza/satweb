import React from 'react'
import HeroSection from "../../components/heroSection";
import TwoColumns from "../../components/twoColumns"
import CaseStudy from "../../components/caseStudies"
import Edge from "../../components/edge"
import WhyBrands from "../../components/whyBrands"
import Verses from "../../components/verses";
import FaqTemp from "../../components/faqTemp";
import Timeline from "../../components/timeLine"
import { ecoHeroData } from "../../data";
import { ecoTwoColumnSectionData } from "../../data";
import { ecoCaseStudiesData } from "../../data";
import { ecoEdgeData } from "../../data";
import { ecoWhyBrandsData } from "../../data";
import { ecoVersesData } from "../../data";
import { ecoFaqsData } from "../../data";
import { ecoTimelineComp } from "../../data";

const ecommerce = () => {
  return (
    <div className="font-sans">
      <HeroSection data={ecoHeroData} />
      <TwoColumns data={ecoTwoColumnSectionData}/>
      <CaseStudy data={ecoCaseStudiesData}/>
      <Edge data={ecoEdgeData}/>
      <WhyBrands data={ecoWhyBrandsData}/>
      <Verses data={ecoVersesData}/>
      <FaqTemp data={ecoFaqsData}/>
         <Timeline
  data={ecoTimelineComp.items} // Ensure this is an array
  heading={ecoTimelineComp.heading}
  text={ecoTimelineComp.text}
/>
    </div>
  )
}

export default ecommerce