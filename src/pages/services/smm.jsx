import React from "react";
import { socialMediaData } from "../../data";

const SocialMediaPage = () => {
  const { heroSection, services, networks, packages } = socialMediaData;

  return (
    <div className="social-media-page">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h1 className="text-4xl font-bold">{heroSection.title}</h1>
        <p className="mt-4">{heroSection.description}</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          {heroSection.buttonText}
        </button>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Networks */}
      <section className="py-12 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">
          Major Social Media Networks
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {networks.map((network, index) => (
            <div key={index} className="w-64 text-center">
              <h3 className="text-xl font-semibold">{network.name}</h3>
              <p className="mt-4 text-gray-600">{network.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="text-gray-500 line-through">{pkg.oldPrice}</p>
              <p className="text-3xl font-bold text-blue-500">{pkg.price}</p>
              <ul className="mt-4 text-left text-gray-600">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="mt-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;
