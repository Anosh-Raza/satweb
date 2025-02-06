// CollapsibleFAQ.jsx
import React, { useState } from "react";
import { faqData } from "../../data";

const CollapsibleFAQ = () => {
  // State to track which sections are open
  const [openSections, setOpenSections] = useState({});

  // Toggle function to open/close a section
  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the state for the clicked section
    }));
  };

  return (
    <section className="bg-logo-purple">
      <div className="max-w-4xl mx-auto px-4 py-8 container">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Frequently Asked Questions (FAQs) for SAT Americana
        </h1>

        <div className="space-y-4">
          {faqData.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-sm transition-all"
            >
              {/* Clickable Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex justify-between items-center bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                aria-expanded={openSections[section.id]}
              >
                <h2 className="sm:text-xl text-base font-semibold text-blue-600">
                  {section.title}
                </h2>
                <span
                  className={`transform transition-transform duration-300 ${
                    openSections[section.id] ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Collapsible Content */}
              <div
                className={`overflow-hidden transition-all duration-300 m-3 ${
                  openSections[section.id] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                {section.content}
                {/* {section.items.length > 0 && (
                <div className="p-6 space-y-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-lg group-hover:text-blue-600 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollapsibleFAQ;
