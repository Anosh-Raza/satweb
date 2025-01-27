import React from "react";
import { ppcData } from "../../data";

const PayPerClickPage = () => {
  const { hero, about, services, adFormats, packages, faqs, testimonials, contact } = ppcData;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">{hero.title}</h1>
        <p className="text-lg mb-6">{hero.subtitle}</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">{hero.button}</button>
      </section>

      {/* About Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">{about.title}</h2>
        <p className="text-center max-w-3xl mx-auto">{about.description}</p>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-2xl font-bold mb-8">Our PPC Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg max-w-sm">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Formats */}
      <section className="py-16">
        <h2 className="text-center text-2xl font-bold mb-8">Ad Formats</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {adFormats.map((format, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded shadow max-w-md">
              <h3 className="text-xl font-semibold">{format.title}</h3>
              <p className="my-4">{format.description}</p>
              <ul>
                {format.points.map((point, i) => (
                  <li key={i} className="list-disc list-inside">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-blue-100">
        <h2 className="text-center text-2xl font-bold mb-8">Packages</h2>
        <div className="flex justify-center gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="line-through text-gray-400">{pkg.oldPrice}</p>
              <p className="text-2xl font-bold">{pkg.newPrice}</p>
              <ul className="my-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="list-disc list-inside">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <h2 className="text-center text-2xl font-bold mb-8">FAQ's</h2>
        {faqs.map((faq, index) => (
          <details key={index} className="mb-4">
            <summary className="cursor-pointer font-semibold">{faq.question}</summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-2xl font-bold mb-8">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <p>{testimonial.review}</p>
              <p className="text-gray-500">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="py-12 bg-blue-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">{contact.message}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </footer>
    </div>
  );
};

export default PayPerClickPage;
