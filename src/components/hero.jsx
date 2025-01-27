import React, { useState, useEffect } from "react";
import slides from "../data";



const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="flex ">
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-screen relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">{slide.description}</p>
                <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-purple-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
