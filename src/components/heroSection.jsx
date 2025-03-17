import React from "react";
// import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

const HeroSection = ({ data }) => {
  const {
    // breadcrumb = [],
    title = "",
    description = "",
    features = [],
    requestQuoteLink = "#",
    // video = {},
    image = "",
    button = "",
  } = data;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent text-white py-16 px-6 md:px-20 pt-36">
  {/* Gradient Background */}
  <div className="absolute inset-0 z-0 animate-gradientMove"></div>

  {/* Content */}
  <div className="container sm:flex mx-auto justify-between relative z-10">
    <div>
      {/* Title and Description */}
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <p className="mt-4 text-lg max-w-2xl">{description}</p>

      {/* Features */}
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-teal-300">➤</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Request a Quote Button */}
      <a
        href={requestQuoteLink}
        className="heroBtn relative mt-12 inline-block text-theme-white font-semibold transition hover:bg-gray-300 px-4 py-2 bg-gradient-to-tr from-logo-purple to-neon-blue border bottom-2"
      >
        {button}
      </a>
    </div>

    <div>
      <img
        src={image}
        alt="Hero"
        className="w-full max-w-md lg:max-w-lg rounded-lg"
      />
    </div>
  </div>
</section>
  );
};

HeroSection.propTypes = {
  data: PropTypes.shape({
    breadcrumb: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
    title: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    requestQuoteLink: PropTypes.string,
    video: PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
      subText: PropTypes.string,
      duration: PropTypes.string,
    }),
    image: PropTypes.string,
  }),
};

HeroSection.defaultProps = {
  data: {
    breadcrumb: [],
    title: "",
    description: "",
    features: [],
    requestQuoteLink: "#",
    video: {},
    image: "",
  },
};

export default HeroSection;
