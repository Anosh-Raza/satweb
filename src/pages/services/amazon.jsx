import React from "react";
import { amazonData } from "../../data";

const AmazonServicePage = () => {
  const { title, description, sections, contactForm } = amazonData;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{description}</p>
      </header>

      {/* Section 1: Proprietary AI Technology */}
      <section className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4">{sections[0].heading}</h2>
        <p className="mb-4">{sections[0].content}</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
            {sections[0].button1}
          </button>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg">
            {sections[0].button2}
          </button>
        </div>
      </section>

      {/* Section 2: Services */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">{sections[1].heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections[1].services.map((srv, index) => (
            <div key={index} className="bg-blue-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold">{srv.title}</h3>
              <p>{srv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Steps to Success */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">{sections[2].heading}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {sections[2].steps.map((step, index) => (
            <div
              key={index}
              className="bg-purple-100 px-4 py-2 rounded-md shadow-md"
            >
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">{sections[3].heading}</h2>
        <div className="space-y-4">
          {sections[3].faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <h3 className="font-bold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">{contactForm.title}</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-4 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 border rounded-md"
          />
          <textarea
            placeholder="Message"
            className="p-4 border rounded-md col-span-2"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md col-span-2"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default AmazonServicePage;
  