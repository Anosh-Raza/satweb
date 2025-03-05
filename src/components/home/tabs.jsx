import React, { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ categories, projects }) => {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.name || ""
  );

  const filteredProjects = projects.filter(
    (project) =>
      project.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div className="bg-[#00042a]">
      <div className="pb-12 container mx-auto">
        {/* Tabs */}
        <div className="flex space-x-4 border-b justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`p-2 ${
                activeCategory === category.name
                  ? "border-b-2 border-theme-white font-bold text-theme-white"
                  : "text-theme-white hover:text-gray-400"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 container px-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 11px 4px"}}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  categories: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
};

export default Tabs;
