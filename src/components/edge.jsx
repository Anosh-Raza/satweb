import React from 'react';
import PropTypes from 'prop-types';
import { edgeData as defaultEdgeData } from '../data';

const Edge = ({ data }) => {
  const { mainHeading, cards } = data;

  return (
    <div className="container mx-auto py-20 px-2">
      <div className="text-4xl font-bold mb-8 w-full lg:w-1/2 md:w-1/2">
        <h1>{mainHeading}</h1>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card) => (
          <div key={card.id} className="w-full">
            <div className="rounded-lg p-4">
              <div className="flex">
                <h2 className="text-2xl mr-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-logo-purple to-logo-dark-blue">
                  {card.id}
                </h2>
                <h2 className="text-2xl font-bold mb-2">{card.heading}</h2>
              </div>
              <p className="text-base text-gray-600">{card.content}</p>
              <br />
              <p className="text-base text-gray-600">{card.content2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Edge.propTypes = {
  data: PropTypes.shape({
    mainHeading: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        heading: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        content2: PropTypes.string,
      })
    ).isRequired,
  }),
};

Edge.defaultProps = {
  data: defaultEdgeData,
};

export default Edge;
