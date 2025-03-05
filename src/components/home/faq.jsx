import React, { useState } from "react";
import { faqData } from "../../data";

const CollapsibleFAQ = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="min-h-screen py-20"
      style={{
        backgroundColor: "hsla(224, 54%, 23%, 1)",
        backgroundImage:
          "radial-gradient(at 73% 49%, hsla(176, 100%, 70%, 0.2) 0px, transparent 50%), radial-gradient(at 17% 45%, hsla(186, 100%, 50%, 0.2) 0px, transparent 50%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          FAQs About Custom Web Development Services
        </h1>

        <div className="space-y-4">
          {faqData.map((section) => (
            <div
              key={section.id}
              className="rounded-lg transition-all"
              // style={{
              //   background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
              //   backdropFilter: "blur(10px)", // Blur effect for glass effect
              //   border: "1px solid rgba(255, 255, 255, 0.2)", // Light border for contrast
              //   borderRadius: "12px", // Rounded corners
              // }}
            >
              {/* Clickable Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-2 text-left flex justify-between items-center transition-colors border-b"
                aria-expanded={openSections[section.id]}
              >
                <h2 className="sm:text-xl text-base font-normal text-theme-white">
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
                className={`overflow-hidden transition-all duration-300 m-3 text-theme-white ${
                  openSections[section.id] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollapsibleFAQ;