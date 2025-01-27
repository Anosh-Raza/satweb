import React from "react";
import { logoBranding } from "../../data";

const LogoBrandingPage = () => {
  const { heroSection, servicesInfo, whyChoose, packages, testimonials, contactInfo } = logoBranding;

  return (
    <div className="logo-branding-page">
      {/* Hero Section */}
      <section className="hero bg-blue-100 text-center py-16">
        <h1 className="text-4xl font-bold">{heroSection.title}</h1>
        <p className="mt-4">{heroSection.subtitle}</p>
        <button className="mt-6 px-8 py-3 bg-purple-600 text-white rounded">
          {heroSection.ctaText}
        </button>
      </section>

      {/* Services Info Section */}
      <section className="services-info text-center py-16 bg-white">
        <h2 className="text-3xl font-bold">{servicesInfo.title}</h2>
        <p className="mt-4 max-w-3xl mx-auto">{servicesInfo.description}</p>
        <img src={servicesInfo.image} alt="" />
      </section>

      {/* Why Choose Section */}
      <section className="why-choose bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-bold">Why Choose SAT Americana</h2>
        <div className="flex justify-center space-x-8 mt-8">
          {whyChoose.map((item, index) => (
            <div key={index} className="text-center max-w-sm">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages py-16 bg-white">
        <h2 className="text-center text-3xl font-bold">Packages</h2>
        <div className="flex justify-center space-x-8 mt-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="text-gray-600 line-through">{pkg.oldPrice}</p>
              <p className="text-2xl font-bold text-purple-600">{pkg.price}</p>
              <ul className="mt-4 list-disc list-inside">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-bold">Testimonials</h2>
        <div className="flex justify-center space-x-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-lg font-bold">{testimonial.name}</p>
              <p className="mt-2 text-gray-600">{testimonial.review}</p>
              <p className="mt-2 text-yellow-500">{"★".repeat(testimonial.rating)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact bg-blue-100 py-16">
        <h2 className="text-center text-3xl font-bold">Let's Talk</h2>
        <p className="text-center mt-4">Call Us At: {contactInfo.phone}</p>
        <p className="text-center">{contactInfo.email}</p>
      </section>
    </div>
  );
};

export default LogoBrandingPage;
