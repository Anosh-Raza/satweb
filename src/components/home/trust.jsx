import React from "react";
import Feature from "./heading";
import { trustComp } from "../../data";

const Trust = () => {
  return (
    <>
      <div className="relative py-12" style={{
  background: "linear-gradient(180deg, rgb(65 181 255 / 37%) 0%, rgba(65, 181, 255, 0) 68.46%), #FFF",
}}>
        <Feature
          title={trustComp.title}
          heading={trustComp.heading}
          description={trustComp.description}
          bgClass=""
          textColor="text-logo-dark-blue"
        />

        {/* Horizontal Scrollable Container */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide">
            {trustComp.insights.map((insight) => (
              <div
                key={insight.id}
                className="flex-shrink-0 w-72 p-6 bg-white shadow-lg shadow-theme-white rounded-3xl hover:shadow-xl transition-shadow duration-300 my-5"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-24 h-24 mb-8"
                />

                <h3 className="font-semibold text-gray-800 text-xl mb-5">
                  {insight.title}
                </h3>

                <p className="text-gray-600 text-sm">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trust;