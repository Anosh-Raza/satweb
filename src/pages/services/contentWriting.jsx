import React from "react";
import { contentData } from "../../data";

const ContentWritingPage = () => {
  const { hero, services, faqs, testimonials } = contentData;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700">{hero.title}</h1>
        <p className="mt-4 text-gray-700">{hero.subtitle}</p>
        <button className="mt-6 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
          {hero.button}
        </button>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <h2 className="text-center text-2xl font-bold mb-8">
          Our Impactful Content Writing Services
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-2xl font-bold mb-8">FAQ's</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white mb-4 p-4 rounded shadow-lg"
            >
              <summary className="font-bold text-blue-700 cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <h2 className="text-center text-2xl font-bold mb-8">Testimonials</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 shadow-lg rounded-lg text-center"
            >
              <p className="italic text-gray-600">"{testimonial.review}"</p>
              <h4 className="mt-4 font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-800 text-white text-center">
        <p>&copy; 2024 SAT Americana. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContentWritingPage;
