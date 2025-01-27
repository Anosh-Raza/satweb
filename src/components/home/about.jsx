import React from "react";
import AboutImage from "../../assets/images/homepg-aboutus.webp";

const About = () => {
  return (
    <div className="bg-logo-medium-blue-1 py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
        {/* Content Section */}
        <div className="lg:w-1/2 lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-theme-white font-bold leading-tight">
          Are You Struggling to Keep Up with Digital Marketing Challenges?
          </h2>
          <ul className="space-y-4 list-disc pl-6 text-lg text-theme-white my-5">
            <li className="transition duration-300 ease-in-out transform hover:scale-105 text-lg flex items-start">
              <svg
                className="h-6 w-6 text-logo-purple mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Tailored strategies that align with your unique business goals for maximum results.
            </li>
            <li className="transition duration-300 ease-in-out transform hover:scale-105 text-lg flex items-start">
              <svg
                className="h-6 w-6 text-logo-purple mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Specialized knowledge in digital marketing, and other key eCommerce platforms.
            </li>
            <li className="transition duration-300 ease-in-out transform hover:scale-105 text-lg flex items-start">
              <svg
                className="h-6 w-6 text-logo-purple mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              As a leading digital marketing agency in the USA, we deliver measurable growth and success.
            </li>
          </ul>
          <p className="text-lg text-theme-white leading-relaxed">
          Does your business lack visibility in the crowded online space? Are you struggling to generate quality leads or maximize ROI from your campaigns? At SAT AMERICANA, we understand the complexities of digital marketing, from managing multiple platforms to staying updated with industry trends. Our comprehensive services include SEO, paid advertising, social media management, and marketplace optimization for platforms like Amazon, Etsy, shopify, and eBay. As a top digital marketing company, we’re here to solve these challenges with innovative strategies, precise execution, and a commitment to delivering results that truly matter.

          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={AboutImage}
            alt="Solutions"
            className="w-full max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
