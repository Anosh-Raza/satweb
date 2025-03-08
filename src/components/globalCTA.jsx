import React from "react";

const CallToActionSection = ({ title, description, cta }) => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">{title}</h1>

        {/* Description */}
        <p className="text-xl mb-8">{description}</p>

        {/* Call-to-Action Button */}
        <a
          href={cta.link}
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          {cta.text}
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;