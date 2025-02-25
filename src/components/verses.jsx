import React from "react";
import { versesData } from "../data";

const verses = () => {
  return (
    <div className=" bg-gradient-to-b from-logo-light-blue-white to-theme-white">
      <div className="container mx-auto py-20 px-2">
        <h2 className="text-center text-4xl font-extrabold text-light-blue-ver2 my-4 mb-20">
          {versesData.heading}
        </h2>
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="wi_webDesign">
            {versesData.webDesign.map((webs) => {
              return (
                <div key={webs.id}>
                  <h2 className="text-lg text-logo-dark-blue font-bold uppercase">{webs.heading}</h2>
                  <p className="text-base text-gray-600">{webs.text}</p>
                </div>
              );
            })}
          </div>
          <div className="wi_webTemp">
          {versesData.webTemp.map((webs) => {
              return (
                <div key={webs.id}>
                  <h2 className="text-lg text-logo-dark-blue font-bold uppercase">{webs.heading}</h2>
                  <p className="text-base text-gray-600">{webs.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default verses;
