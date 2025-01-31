import { useState } from "react";
import { testimonialNew } from "../../data"; // Ensure correct path

const VerticalTestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderOffset, setSliderOffset] = useState(0);

  // Handle missing or empty data
  if (!testimonialNew || testimonialNew.length === 0) {
    return (
      <div className="flex justify-center items-center bg-[#0A0F24] text-white p-6 rounded-lg shadow-lg">
        <p className="text-red-500">⚠️ No Testimonials Available!</p>
      </div>
    );
  }

  // Navigation handlers for testimonial content
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialNew.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialNew.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Slider navigation handlers
  const handleSliderPrev = () => {
    setSliderOffset((prevOffset) => Math.max(prevOffset - 1, 0));
  };

  const handleSliderNext = () => {
    // Calculate the maximum possible offset
    const maxOffset = testimonialNew.length - 5;
    setSliderOffset((prevOffset) => Math.min(prevOffset + 1, maxOffset));
  };

  return (
    <div className="bg-[#0A0F24]">
      <div className="flex flex-col md:flex-row text-white py-12 rounded-lg shadow-lg container mx-auto">
        {/* Vertical Selector (Left) */}
        <div className="md:w-1/3 flex flex-col items-center space-y-4 relative">
          <div className="overflow-hidden h-[300px] w-full">
            <div
              className="transition-transform duration-300"
              style={{ transform: `translateY(-${sliderOffset * 80}px)` }}
            >
              {testimonialNew.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`w-full p-3 text-left rounded-lg transition ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <p className="text-lg uppercase">{testimonial.name}</p>
                  <p className="text-sm italic font-bold">"{testimonial.corp}"</p>
                  <p className="text-xs">{testimonial.position}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Buttons (Center) */}
        {testimonialNew.length > 5 && (
          <div className="flex flex-col justify-center items-center space-y-4 mx-4">
            <button
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
              onClick={handleSliderPrev}
              disabled={sliderOffset === 0}
            >
              ▲
            </button>
            <button
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
              onClick={handleSliderNext}
              disabled={sliderOffset === testimonialNew.length - 5}
            >
              ▼
            </button>
          </div>
        )}

        {/* Testimonial Content (Right) */}
        <div className="md:w-2/3 flex flex-col justify-center p-6 min-h-[200px]">
          <h3 className="text-xl font-semibold text-blue-400 uppercase">
            What Our Clients Love About Our Work
          </h3>

          <p className="text-white text-lg italic my-4 visible opacity-100">
            {testimonialNew[activeIndex]?.testimonial ||
              "No testimonial available"}
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="bg-yellow-500 text-black px-3 py-1 rounded-md font-bold">
              ⭐ {testimonialNew[activeIndex]?.rating || "N/A"}
            </div>
            <p>
              {testimonialNew[activeIndex]?.reviews || 0} Reviews on DesignRush
            </p>
            
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
              onClick={handlePrev}
            >
              ▲
            </button>
            <button
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
              onClick={handleNext}
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTestimonialSlider;