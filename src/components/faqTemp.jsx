import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";
import { faqsData as defaultFaqsData } from "../data";

const FAQs = ({ data, heading }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-purple-700 to-purple-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          FAQ</h3>
        {data.map((faq, index) => (
          <div
            key={faq.id}
            className="border-b border-white/30 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-lg font-bold text-cyan-400 mr-3">
                  {faq.id}
                </span>
                <h3 className="text-white text-lg font-medium">
                  {faq.question}
                </h3>
              </div>
              <FaChevronDown
                size={24}
                className={`transition-transform duration-200 text-white ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <p className="text-gray-200 mt-3 text-base leading-relaxed pl-9">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

FAQs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};

FAQs.defaultProps = {
  data: defaultFaqsData,
};

export default FAQs;
