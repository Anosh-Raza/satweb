import React from "react";
import { mobileData } from "../../data";

const MobileApp = () => {
  return (
    <div>
      <section className="bg-blue-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{mobileData.header.title}</h1>
        <p className="text-gray-600 mt-4">{mobileData.header.description}</p>
        <button className="bg-blue-600 text-white px-6 py-2 mt-6 rounded hover:bg-blue-700">
          {mobileData.header.buttonText}
        </button>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{mobileData.introSection.title}</h2>
            <p className="mt-4 text-gray-600">{mobileData.introSection.description}</p>
          </div>
          <div>
            <img src={mobileData.introSection.image} alt="Mobile App Development" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{mobileData.technologies.title}</h2>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          {mobileData.technologies.icons.map((tech, index) => (
            <div key={index} className="text-center">
              <img src={tech.image} alt={tech.name} className="mx-auto w-16 h-16" />
              <p className="mt-2 text-gray-600">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">{mobileData.features.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {mobileData.features.points.map((feature, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {mobileData.packages.map((pkg, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-gray-800">{pkg.title}</h3>
              <p className="line-through text-gray-400">{pkg.oldPrice}</p>
              <p className="text-2xl font-bold text-blue-600">{pkg.newPrice}</p>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
