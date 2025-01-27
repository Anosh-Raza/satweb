import React, { useState } from "react";
import { portfolioData } from "../data";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  const filteredProjects = portfolioData.find(
    (category) => category.category === activeTab
  ).projects;

  return (
    <div className="bg-theme-white py-12">
      <div className="container mx-auto">
        <h2 className="text-logo-dark-blue text-4xl font-bold text-center mb-8">
          Our Portfolio
        </h2>
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          {portfolioData.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-white font-semibold mx-2 ${
                activeTab === category.category
                  ? "bg-logo-purple"
                  : "bg-logo-dark-blue hover:bg-logo-medium-blue-1"
              }`}
              onClick={() => setActiveTab(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[400px] bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-logo-dark-blue text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-logo-medium-blue-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Slider Controls */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-logo-dark-blue text-white p-2 rounded-full"
            onClick={() =>
              document.querySelector(".flex").scrollBy({ left: -300, behavior: "smooth" })
            }
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-logo-dark-blue text-white p-2 rounded-full"
            onClick={() =>
              document.querySelector(".flex").scrollBy({ left: 300, behavior: "smooth" })
            }
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
