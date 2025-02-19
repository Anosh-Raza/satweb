import React from "react";
import propTypes from "prop-types";

const AboutFeature = ({ subheading, content1, content2, mainHeading }) => {
  subheading = subheading || "Let’s Build Something Great Together";
  content1 = content1 || "Whether you're looking to launch an e-commerce store, optimize your digital presence, or drive more sales, Sat Americana is here to help.";
  content2 = content2 || "Join Our Team";
  mainHeading = mainHeading || "Get in touch with us today to start your journey toward success!";
  return (
    <section className="aboutFeature bg-[#204abf]">
      <div className="container mx-auto px-5 text-center text-theme-white py-10 h-[70vh] flex flex-col justify-center space-y-16">
        <h3 className="text-neon-blue text-4xl" style={{textShadow: "1px 1px 5px #00e8ff"}}>{subheading}</h3>
        <p className="text-theme-white text-2xl font-bold">{content1}</p>
        <h2 className="text-neon-blue text-7xl font-extrabold" style={{textShadow: "1px 1px 5px #00e8ff"}}>{mainHeading}</h2>
      </div>
    </section>
  );
};

AboutFeature.propTypes = {
  subheading: propTypes.string,
  content1: propTypes.string,
  content2: propTypes.string,
  mainHeading: propTypes.string,
};

export default AboutFeature;
