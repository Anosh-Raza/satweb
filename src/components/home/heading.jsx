import React from "react";
import PropTypes from "prop-types";

const Feature = ({
  bgClass = "bg-gradient-logo",
  title = "OUR WORK",
  heading = "Featured Website Design Projects",
  description = "Custom B2C, B2B and eCommerce solutions",
  highlightedText = "optimized for traffic, engagement and conversion",
  textColor = "text-theme-white",
}) => {
  return (
    <div className={`feature ${bgClass} bg-cover py-8 px-4 sm:px-0 z-10`}>
      <div className={`text-center ${textColor}`}>
        <span className="text-xl sm:text-2xl md:text-2xl font-bold">
          {title}
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold my-4">
          {heading}
        </h2>
        <p className="text-base sm:text-lg md:text-xl pt-3">
          {description}
          <br />
          <span className="font-extrabold">{highlightedText}</span>
        </p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  bgClass: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  highlightedText: PropTypes.string,
  textColor: PropTypes.string,
};

export default Feature;
