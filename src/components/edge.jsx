import React from "react";
import { edgeData } from "../data";

const Edge = () => {
  return (
    <div className="container mx-auto py-20 px-2">
      <div className="text-4xl font-bold mb-8 w-full lg:w-1/2 md:w-1/2">
        <h1>{edgeData.mainHeading}</h1>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
        {edgeData.cards.map((card) => (
          <div key={card.id} className="w-full">
            <div className="rounded-lg p-4 ">
              <div className="flex">
                <h2 className="text-2xl mr-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-logo-purple to-logo-dark-blue">
                  {card.id}
                </h2>

                <h2 className="text-2xl font-bold mb-2">{card.heading}</h2>
              </div>
              <p className="text-base text-gray-600">{card.content}</p>
              <br />
              <p className="text-base text-gray-600">{card.content2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edge;
