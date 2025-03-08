import React from "react";

const ContentSection = ({ title, description, benefits }) => {
  return (
    <section className="py-12 bg-gray-100"
    style={{
      background: "linear-gradient(180deg, rgb(65 181 255 / 37%) 0%, rgba(65, 181, 255, 0) 68.46%), #FFF",
    }}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-center px-4 md:px-28 text-xl mb-8">
          {description}
        </p>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;