import React from "react";
import { heroData } from "../data";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-16 px-6 md:px-20">
      <div className="container sm:flex mx-auto justify-between">
        <div>
          {/* Breadcrumb */}
          <nav className="text-sm mb-4">
            {heroData.breadcrumb.map((item, index) => (
              <span key={index}>
                <a href={item.link} className="text-blue-300 hover:text-white">
                  {item.name}
                </a>
                {index < heroData.breadcrumb.length - 1 && " > "}
              </span>
            ))}
          </nav>

          {/* Title and Description */}
          <h1 className="text-4xl md:text-5xl font-bold">{heroData.title}</h1>
          <p className="mt-4 text-lg max-w-2xl">{heroData.description}</p>

          {/* Features */}
          <ul className="mt-4 space-y-2">
            {heroData.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-teal-300">➤</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Request a Quote Button */}
          <a
            href={heroData.requestQuoteLink}
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            REQUEST A QUOTE
          </a>

          {/* Awards & Reviews */}
          <div className="mt-8 flex flex-wrap gap-6">
            {heroData.awards.map((award, index) => (
              <div key={index} className="flex items-center space-x-3">
                {award.image ? (
                  <img src={award.image} alt={award.title} className="h-10" />
                ) : (
                  <div className="flex items-center space-x-1">
                    {"⭐".repeat(award.stars)}
                  </div>
                )}
                <span>{award.title}</span>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-10 flex items-center space-x-4">
            <a
              href={heroData.video.link}
              className="flex items-center space-x-2 border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-600 transition"
            >
              <FaPlay />
              <span>{heroData.video.text}</span>
            </a>
            <div>
              <p className="text-sm font-semibold">{heroData.video.subText}</p>
              <p className="text-xs">{heroData.video.duration}</p>
            </div>
          </div>
        </div>
        <div>
            <img src={heroData.image} alt="" className="w-full max-w-md lg:max-w-lg rounded-lg"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
