import React from "react";
import HeroSection from "../../components/heroSection";
import TwoColumns from "../../components/twoColumns"
import CaseStudy from "../../components/caseStudies"
import TimeLine from "../../components/timeLine"
import Edge from "../../components/edge"
import WhyBrands from "../../components/whyBrands"
import Verses from "../../components/verses";
import FaqTemp from "../../components/faqTemp";

const WebDeve = () => {
  return (
    <div className="font-sans">
      <HeroSection heading="Web Development" description="We build fast, scalable, and secure web" />
      <TwoColumns />
      <CaseStudy/>
      <Edge/>
      <WhyBrands/>
      <Verses/>
      <FaqTemp/>
      <TimeLine/>
    </div>
  );
};

export default WebDeve;
