import React from "react";
import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

const HeroSection = ({ data }) => {
  const {
    breadcrumb = [],
    title = "",
    description = "",
    features = [],
    requestQuoteLink = "#",
    video = {},
    image = "",
    button = "",
  } = data;

  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-16 px-6 md:px-20 pt-36">
      <div className="container sm:flex mx-auto justify-between">
        <div>
          {/* Breadcrumb */}
          <nav className="text-sm mb-4">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                <a href={item.link} className="text-blue-300 hover:text-white">
                  {item.name}
                </a>
                {index < breadcrumb.length - 1 && " > "}
              </span>
            ))}
          </nav>

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
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            {button}
          </a>

          {/* Video Section */}
          <div className="mt-10 flex items-center space-x-4">
            <a
              href={video.link}
              className="flex items-center space-x-2 border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-600 transition"
            >
              <FaPlay />
              <span>{video.text}</span>
            </a>
            <div>
              <p className="text-sm font-semibold">{video.subText}</p>
              <p className="text-xs">{video.duration}</p>
            </div>
          </div>
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
