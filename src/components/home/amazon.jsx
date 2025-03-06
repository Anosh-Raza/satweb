import React from "react";
import { amazonComp } from "../../data";

const AmazonComponent = () => {
  return (
    <section
      className="bg-light-theme py-24 relative"
      style={{
        background: "linear-gradient(180deg, rgb(65 181 255 / 37%) 0%, rgba(65, 181, 255, 0) 68.46%), #FFF",
      }}
    >
      {/* Background Heading */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <h1
          className="font-bold text-[40px] uppercase sm:text-[100px] md:text-[200px] lg:text-[200px] xl:text-[200px] 2xl:text-[100px] text-gray-100"
          style={{ pointerEvents: "none", color: "white", textShadow: "0 0 50px rgba(0,0,0,0.01)" }}
        >
          AMAZON
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            {amazonComp.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{amazonComp.subheading}</p>
        </div>

        {/* Description Section */}
        <div className="mt-10">
          <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed">
            {amazonComp.description}
          </p>
        </div>

        {/* Insights Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amazonComp.insights.map((insight) => (
            <div
              key={insight.id}
              className="flex items-center justify-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-center font-semibold text-gray-800 text-xl">
                {insight.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazonComponent;
