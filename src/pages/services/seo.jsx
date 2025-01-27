import React from "react";
import { SEO } from "../../data";

const SEOservice = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-900">{SEO.header.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{SEO.header.subtitle}</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          {SEO.header.button}
        </button>
      </header>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">Providing Local SEO services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {SEO.statistics.map((stat, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-3xl font-bold text-blue-800">{stat.stat}</h3>
              <p className="mt-2 text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800">The Approach We Take to Local SEO</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 px-8">
          {SEO.services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">Packages</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {SEO.packages.map((pkg, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-2xl font-bold text-blue-800">{pkg.name}</h3>
              <p className="mt-2 text-lg text-gray-700 line-through">{pkg.originalPrice}</p>
              <p className="mt-1 text-2xl font-semibold text-blue-600">{pkg.price}</p>
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
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800">FAQ's</h2>
        <div className="mt-8 space-y-6 px-8 max-w-3xl mx-auto">
          {SEO.faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h4 className="text-xl font-semibold text-blue-800">{faq.question}</h4>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {SEO.testimonials.map((testimonial, index) => (
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
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800">Let's Talk</h2>
        <p className="mt-4 text-center text-gray-600">{SEO.contact.message}</p>
        <form className="mt-8 max-w-lg mx-auto grid grid-cols-1 gap-6">
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

export default SEOservice;