// src/components/CaseStudy.js
import React from "react";
import caseStudies from '../../data';

const CaseStudy = () => {
  return (
<div className="bg-black">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {caseStudies.map(({ id, image, title, description }) => (
        <div
          key={id}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16"
        >
          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-logo-purple">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-700">{description}</p>
          </div>
        </div>
      ))}
    </div>
</div>
  );
};

export default CaseStudy;
