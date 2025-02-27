import React, { useState } from "react";
import PropTypes from "prop-types";
import { twoColumnSectionData } from "../data";

const CollapsibleItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-3 font-bold text-xl text-theme-white hover:bg-gradient-to-r hover:from-logo-purple hover:to-dark-blue hover:text-white transition-colors duration-300"
      >
        {title}
      </button>
      {isOpen && <p className="p-3 text-light-blue text-base">{description}</p>}
    </div>
  );
};

CollapsibleItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const FormField = ({ label, placeholder, type }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    {type === "textarea" ? (
      <textarea
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
      ></textarea>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
      />
    )}
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const TwoColumnSection = ({ data }) => {
  const { leftColumn, rightColumn } = data;
  return (
    <section className="bg-dark-blue py-24 px-6 md:px-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {/* Left Column */}
        <div>
          <p className="text-xl font-medium mb-2 text-logo-purple">
            {leftColumn.subHeading}
          </p>
          <h2 className="text-6xl font-bold mb-4 text-theme-white">
            {leftColumn.mainHeading}
          </h2>
          <p className="text-gray-50 mb-6">{leftColumn.content}</p>
          <div className="cu_collapsibles">
            {leftColumn.collapsibles.map((item, index) => (
              <CollapsibleItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold mb-2 text-dark-blue">
            {rightColumn.mainHeading}
          </h2>
          <p className="text-gray-700 mb-4">{rightColumn.content}</p>
          <form>
            {rightColumn.formFields.map((field, index) => (
              <FormField key={index} {...field} />
            ))}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

TwoColumnSection.propTypes = {
  data: PropTypes.shape({
    leftColumn: PropTypes.shape({
      subHeading: PropTypes.string.isRequired,
      mainHeading: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      collapsibles: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    rightColumn: PropTypes.shape({
      mainHeading: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      formFields: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          placeholder: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }),
};

TwoColumnSection.defaultProps = {
  data: twoColumnSectionData,
};

export default TwoColumnSection;
