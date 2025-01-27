import React from "react";
import Feature from "./heading";
import { trustComp } from "../../data";

const trust = () => {
  return (
    <>
      <div className="bg-logo-purple relative py-12">
        <Feature
          title={trustComp.title}
          heading={trustComp.heading}
          description={trustComp.description}
          bgClass=""
          textColor="text-white"
        />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col justify-around gap-5 sm:flex-col lg:flex-row">
            {trustComp.insights.map((insight) => (
                <div
                    key={insight.id}
                    className="flex flex-col p-6 bg-white shadow-lg shadow-theme-white rounded-3xl hover:shadow-xl transition-shadow duration-300 my-5
                    "
                >
                    <img src={insight.image} alt={insight.title} className=" w-24 h-24 mb-8" />

                    <h3 className="font-semibold text-gray-800 text-xl mb-5">
                    {insight.title}
                    </h3>

                    <p className=" text-gray-600 text-sm">{insight.description}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default trust;
