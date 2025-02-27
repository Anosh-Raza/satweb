import React from "react";
import PropTypes from "prop-types";
import { versesData as defaultVersesData } from "../data";

const Verses = ({ data }) => {
  const { heading, featureHead, webHead, webTempHead, features, webDesign, webTemp } = data;

  // Calculate the maximum number of rows among the arrays
  const maxRows = Math.max(features.length, webDesign.length, webTemp.length);

  return (
    <div className="bg-gradient-to-b from-logo-light-blue-white to-theme-white">
      <div className="container mx-auto py-20 px-2">
        <h2 className="text-center text-4xl font-extrabold text-light-blue-ver2 my-4 mb-20">
          {heading}
        </h2>
        {/* Wrap the table in a container for horizontal scrolling on mobile */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-2xl font-semibold text-logo-purple">{featureHead}</th>
                <th className="p-4 text-left text-2xl font-semibold text-logo-purple">{webHead}</th>
                <th className="p-4 text-left text-2xl font-semibold text-logo-purple">{webTempHead}</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: maxRows }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-t border-gray-200">
                  <td className="p-4 text-base text-gray-600">
                    {features[rowIndex] && (
                      <>
                        <h3 className="font-bold uppercase">{features[rowIndex].heading}</h3>
                        <p>{features[rowIndex].text}</p>
                      </>
                    )}
                  </td>
                  <td className="p-4 text-base text-gray-600">
                    {webDesign[rowIndex] && (
                      <>
                        <h3 className="font-bold uppercase">{webDesign[rowIndex].heading}</h3>
                        <p>{webDesign[rowIndex].text}</p>
                      </>
                    )}
                  </td>
                  <td className="p-4 text-base text-gray-600">
                    {webTemp[rowIndex] && (
                      <>
                        <h3 className="font-bold uppercase">{webTemp[rowIndex].heading}</h3>
                        <p>{webTemp[rowIndex].text}</p>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Verses.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    featureHead: PropTypes.string.isRequired,
    webHead: PropTypes.string.isRequired,
    webTempHead: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        heading: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    webDesign: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        heading: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    webTemp: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        heading: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

Verses.defaultProps = {
  data: defaultVersesData,
};

export default Verses;
