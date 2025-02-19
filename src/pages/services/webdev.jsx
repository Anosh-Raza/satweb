import React from "react";
import { WebDev } from "../../data";
import HeroSection from "../../components/heroSection";
import TwoColumns from "../../components/twoColumns"
import CaseStudy from "../../components/caseStudies"
import TimeLine from "../../components/timeLine"

const WebDeve = () => {
  return (
    <div className="font-sans">
      <HeroSection heading="Web Development" description="We build fast, scalable, and secure web" />
      <TwoColumns />
      <CaseStudy/>
      <TimeLine/>
      {/* Header Section */}
      <header className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-900">{WebDev.header.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{WebDev.header.subtitle}</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          {WebDev.header.button}
        </button>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">Comprehensive Web Development Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {WebDev.services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800">Packages</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {WebDev.packages.map((pkg, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-2xl font-bold text-blue-800">{pkg.name}</h3>
              <p className="mt-4 text-xl font-semibold text-gray-700">{pkg.price}</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">FAQ's</h2>
        <div className="mt-8 space-y-6 px-8 max-w-3xl mx-auto">
          {WebDev.faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h4 className="text-xl font-semibold text-blue-800">{faq.question}</h4>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800">Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {WebDev.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <p className="italic text-gray-700">"{testimonial.feedback}"</p>
              <p className="mt-4 font-bold text-blue-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">Let's Talk</h2>
        <p className="mt-4 text-center text-gray-600">{WebDev.contact.message}</p>
        <form
          className="mt-8 max-w-lg mx-auto grid grid-cols-1 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            placeholder="Message"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default WebDeve;
