import React, { useState } from "react";
import { tabsData } from "../../data";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Vertical Tabs Navigation */}
      <div className="md:w-1/4">
        <ul className="space-y-4">
          {tabsData.map((tab) => (
            <li
              key={tab.id}
              className={`p-3 rounded-lg cursor-pointer text-center md:text-left ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-400 hover:text-white transition`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="md:w-3/4 bg-gray-100 p-6 rounded-lg shadow-lg">
        {tabsData.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                {/* Main Heading */}
                <h1 className="text-2xl font-bold mb-4">{tab.title}</h1>
                <p className="mb-6">{tab.content}</p>
                <p className="mb-6">{tab.subcontent}</p>
                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tab.ctas.map((cta, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2"
                    >
                      <h2 className="text-xl font-semibold">{cta.heading}</h2>
                      <p className="text-gray-600">{cta.description}</p>
                      <a
                        href={cta.link}
                        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
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
  );
};

export default VerticalTabs;
