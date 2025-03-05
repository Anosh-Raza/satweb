import React, { useState } from "react";
import { tabsData } from "../../data";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <section id="verticalTabs" className="bg-logo-dark-blue py-16">
<div className="flex flex-col md:flex-row p-6 gap-6 container mx-auto">
      {/* Vertical Tabs Navigation */}
      <div className="md:w-1/4">
        <ul className="space-y-4">
          {tabsData.map((tab) => (
            <li
              key={tab.id}
              className={`p-3 cursor-pointer text-center md:text-left py-4 text-2xl font-semibold uppercase ${
                activeTab === tab.id
                  ? "text-[#04e4ff] ci_border-atv"
                  : "text-theme-white ci_border-iatv"
              } hover:text-[#04e4ff] transition`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="md:w-3/4 bg-theme-white p-6 rounded-lg shadow-lg">
        {tabsData.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="relative">
                {/* Main Heading */}
                <h1 className="text-4xl font-bold mb-4 text-logo-dark-blue uppercase wi_verticalH">{tab.title}</h1>
                <p className="mb-6 text-logo-dark-blue">{tab.content}</p>
                <p className="mb-6 text-logo-dark-blue">{tab.subcontent}</p>
                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tab.ctas.map((cta, index) => (
                    <div
                      key={index}
                      className="bg-theme-white p-4 rounded-lg shadow-md flex flex-col gap-2"
                    >
                      <h2 className="text-8xl font-extrabold wi_ctaHeading">{cta.heading}</h2>
                      <p className="text-gray-600 capitalize font-semibold">{cta.description}</p>
                      <a
                        href={cta.link}
                        className="mt-auto bg-logo-dark-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition capitalize font-bold -tracking-tighter"
                      >
                        Learn More
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
    </section>
  );
};

export default VerticalTabs;
