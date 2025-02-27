import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import { caseStudiesData as defaultCaseStudiesData } from "../data";

const CaseStudiesSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id);
  const contentRef = useRef(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Animate content on active tab change using GSAP
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [activeTab]);

  const activeTabData = data.tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-24 px-5 bg-light-blue-ver2">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <p className="text-xl text-theme-white font-medium">
            {data.subheading}
          </p>
          <h1 className="text-6xl font-bold text-theme-white my-4">
            {data.mainHeading}
          </h1>
          <p className="text-theme-white max-w-2xl mx-auto">
            {data.content}
          </p>
        </div>
        {/* Tabs Navigation */}
        <div className="mb-8 flex justify-center space-x-4">
          {data.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-logo-purple text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-logo-purple hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Case Studies Content */}
        <div ref={contentRef} className="flex justify-center w-full">
          {activeTabData.studies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-200 mb-8"
            >
              {/* Left Column: Featured Image */}
              <div className="md:w-1/2">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right Column: Content & CTA Button */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center text-left">
                <h2 className="text-2xl font-bold text-theme-white mb-4">
                  {study.title}
                </h2>
                <p className="text-theme-white mb-6">{study.content}</p>
                <a
                  href={study.ctaLink}
                  className="inline-block bg-logo-purple text-white px-4 py-2 rounded-lg hover:bg-dark-blue transition-colors duration-300"
                >
                  {study.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CaseStudiesSection.propTypes = {
  data: PropTypes.shape({
    subheading: PropTypes.string.isRequired,
    mainHeading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        studies: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            cta: PropTypes.string.isRequired,
            ctaLink: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }),
};

CaseStudiesSection.defaultProps = {
  data: defaultCaseStudiesData,
};

export default CaseStudiesSection;
