import React from "react";
import PropTypes from "prop-types";
import { whyBrandsData as defaultWhyBrandsData } from "../data";

const WhyBrands = ({ data }) => {
  const { subheading, mainHeading, text, buttons, cards } = data;

  return (
    <div className="container mx-auto py-20 px-2">
      <div className="flex flex-col lg:flex-row gap-x-8">
        {/* Left Column */}
        <div>
          <h4 className="text-xl text-neon-blue font-bold">{subheading}</h4>
          <h2 className="text-4xl font-extrabold text-light-blue-ver2 my-4">
            {mainHeading}
          </h2>
          <p className="text-xl">{text}</p>
          <button
            style={{
              borderImage:
                "linear-gradient(to right, #5D41CA, #0D1F71) 1",
            }}
            className="border-2 text-logo-purple px-4 py-2 mt-4 rounded-lg hover:bg-opacity-80 font-bold hover:scale-y-110 transition-all duration-300"
          >
            {buttons[0].text}
          </button>
        </div>

        {/* Right Column */}
        <div>
          {cards.map((card) => (
            <div key={card.id} className="w-full">
              <div className="rounded-lg p-2">
                <div className="flex">
                  <h2 className="text-2xl mb-2 text-light-blue-ver2 uppercase font-[600]">
                    {card.heading}
                  </h2>
                </div>
                <p className="text-base text-gray-600">{card.text1}</p>
                <p className="text-base text-gray-600">{card.text2}</p>
                <p className="text-base text-gray-600">{card.text3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

WhyBrands.propTypes = {
  data: PropTypes.shape({
    subheading: PropTypes.string.isRequired,
    mainHeading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string,
      })
    ).isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        heading: PropTypes.string.isRequired,
        text1: PropTypes.string.isRequired,
        text2: PropTypes.string,
        text3: PropTypes.string,
      })
    ).isRequired,
  }),
};

WhyBrands.defaultProps = {
  data: defaultWhyBrandsData,
};

export default WhyBrands;
