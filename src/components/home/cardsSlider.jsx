import React, { useState, useEffect } from "react";
import { sliderData } from "../../data";
import Feature from "./heading";

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4); // Default to 4 slides
  const [isMobileView, setIsMobileView] = useState(false); // Detect mobile view

  // Adjust view type and visibleSlides based on screen width
  useEffect(() => {
    const updateViewType = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIsMobileView(true); // Switch to box view
        setVisibleSlides(1); // Only relevant for slider view
      } else {
        setIsMobileView(false); // Use slider for larger screens
        setVisibleSlides(width < 768 ? 2 : width < 1024 ? 3 : 4); // Adjust visible slides
      }
    };

    updateViewType();
    window.addEventListener("resize", updateViewType);
    return () => window.removeEventListener("resize", updateViewType);
  }, []);

  // Automatically move to the next set of slides every 5 seconds (only for slider view)
  useEffect(() => {
    if (!isMobileView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const isLastSlide = prevIndex >= sliderData.length - visibleSlides;
          return isLastSlide ? 0 : prevIndex + 1;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [visibleSlides, isMobileView]);

  const goToPrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? sliderData.length - visibleSlides : currentIndex - 1);
  };

  const goToNextSlide = () => {
    const isLastSlide = currentIndex >= sliderData.length - visibleSlides;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Feature
        title="Our services"
        heading="Additional We Are Providing"
        description="Innovative solutions of Digital Marketing in the USA with our range of specialized assistance."
        highlightedText=""
        bgClass="bg-gradient-logo"
        textColor="text-white"
      />

      <div className="relative container mx-auto p-4">
        {/* Box View for Mobile */}
        {isMobileView ? (
          <div className="flex flex-col gap-4">
            {sliderData.map((slide, index) => (
              <div key={slide.id} className="bg-gray-200 rounded-lg overflow-hidden p-4">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className=" object-scale-down w-full h-48 rounded-md"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-bold text-logo-purple">{slide.heading}</h2>
                  <p className="text-sm">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Slider View for Larger Screens */
          <>
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-all duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
              >
                {sliderData.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="p-2 flex-shrink-0"
                    style={{ flex: `0 0 ${100 / visibleSlides}%` }}
                  >
                    <div className="bg-gray-200 h-44 sm:h-60 lg:h-96 rounded-lg overflow-hidden flex flex-col justify-center items-center">
                      <img
                        src={slide.image}
                        alt={slide.heading}
                        className=" object-scale-down h-auto max-h-28 sm:max-h-36 lg:max-h-48 p-4"
                      />
                      <div className="p-4 text-center">
                        <h2 className="text-sm sm:text-base lg:text-lg font-bold text-logo-purple">
                          {slide.heading}
                        </h2>
                        <p className="text-xs sm:text-sm">{slide.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full text-sm sm:text-base"
            >
              ❮
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full text-sm sm:text-base"
            >
              ❯
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4">
              {sliderData.slice(0, Math.ceil(sliderData.length / visibleSlides)).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * visibleSlides)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 mx-1 rounded-full ${
                    currentIndex >= index * visibleSlides && currentIndex < (index + 1) * visibleSlides
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SliderComponent;
