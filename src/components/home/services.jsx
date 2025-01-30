import React from "react";
import { services } from "../../data";

const ServicesLayout = () => {
  return (
    <>
    <div className="container mx-auto flex flex-col lg:flex-row p-6 gap-6 my-6">
      {/* Sticky First Column */}
      
      <div className="lg:w-1/3 sticky top-6 bg-gradient-to-b from-logo-purple to-logo-dark-blue text-white p-6 rounded-xl shadow-lg">
        <h5 className="text-3xl font-bold mb-4">Our Services</h5>
        <h2 className="text-3xl font-bold mb-4">Solutions for the Modern eCommerce Industry</h2>
        <p className="mb-6">
        Every industry demands constant innovation to tackle issues like fierce competition, staying relevant, and platform complexities. Businesses often struggle with scaling, branding, and building customer loyalty. At SAT AMERICANA, we offer specialized services to empower your brand with the tools and strategies it needs to succeed online.
        </p>
        <button className=" bg-logo-dark-blue  px-6 py-3 rounded-md hover:bg-logo-purple transition">
        Connect with <strong>SAT Ecommerce</strong>
        </button>
      </div>

      {/* Scrollable Second Column */}
      <div className="lg:w-2/3 overflow-y-auto space-y-6 h-[calc(100vh-48px)]">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
          >
            <h2 className="text-xl font-bold">{service.heading}</h2>
            <p>{service.content}</p>
            <a
              href={service.url}
              className="mt-auto bg-logo-medium-blue-2 text-theme-white px-4 py-2 rounded-md hover:bg-blue-600 transition self-start"
            >
              {service.buttonText ? "Learn More" : "Contact Us"}
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ServicesLayout;
