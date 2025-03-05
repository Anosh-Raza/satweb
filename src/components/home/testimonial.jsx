import { useState } from "react";
import { testimonialNew } from "../../data"; // Ensure correct path

const VerticalTestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderOffset, setSliderOffset] = useState(0);

  if (!testimonialNew || testimonialNew.length === 0) {
    return (
      <div className="flex justify-center items-center bg-[#0A0F24] text-white p-6 shadow-lg">
        <p className="text-red-500">⚠️ No Testimonials Available!</p>
      </div>
    );
  }

  const handleSliderPrev = () => {
    setSliderOffset((prevOffset) => Math.max(prevOffset - 1, 0));
  };

  const handleSliderNext = () => {
    const maxOffset = Math.max(testimonialNew.length - 5, 0);
    setSliderOffset((prevOffset) => Math.min(prevOffset + 1, maxOffset));
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    const offset = Math.floor(index / 5) * 5;
    setSliderOffset(offset);
  };

  return (
    <div className="bg-[#0A0F24] w-full">
      <div className="flex flex-col md:flex-row text-white py-12 shadow-lg container mx-auto px-4 md:px-0 md:h-[500px]">
        
        {/* Left: Testimonials List */}
        <div className="md:w-1/3 w-full flex flex-col items-center space-y-4 relative">
          <div className="overflow-y-auto h-[300px] md:h-[500px] w-full testimonial">
            <div
              className="transition-transform duration-300"
              style={{ transform: `translateY(-${sliderOffset * 80}px)` }}
            >
              {testimonialNew.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`w-full p-3 text-left transition my-2 relative ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-6"
                      : "text-theme-white"
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  <p className="text-lg uppercase">{testimonial.name}</p>
                  <p className="text-sm italic font-bold">"{testimonial.corp}"</p>
                  <p className="text-xs">{testimonial.position}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Navigation Buttons */}
        {testimonialNew.length > 5 && (
          <div className="hidden md:flex flex-col justify-center items-center space-y-4 mx-4">
            <button
              className="px-4 py-2 hover:bg-gray-600 disabled:opacity-50"
              onClick={handleSliderPrev}
              disabled={sliderOffset === 0}
              style={{ color: "#00e8ff" }}
            >
              ▲
            </button>
            <button
              className="px-4 py-2 hover:bg-gray-600 disabled:opacity-50"
              onClick={handleSliderNext}
              disabled={sliderOffset === testimonialNew.length - 5}
              style={{ color: "#00e8ff" }}
            >
              ▼
            </button>
          </div>
        )}

        {/* Right: Testimonial Content */}
        <div className="md:w-2/3 w-full flex flex-col justify-center p-4 md:p-6">
          <h3 className="text-lg md:text-xl text-neon-blue uppercase text-center md:text-left">
            What Our Clients Love About Our Work
          </h3>

          <p className="text-white text-lg md:text-xl italic my-4 text-center md:text-left">
            {testimonialNew[activeIndex]?.testimonial || "No testimonial available"}
          </p>

          {/* Ratings & Reviews */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-0 md:space-x-4 mt-4">
            <div className="text-theme-white font-bold text-lg">
              ⭐ {testimonialNew[activeIndex]?.rating || "N/A"}
            </div>
            <p className="text-sm">
              {testimonialNew[activeIndex]?.reviews || 0} Reviews on DesignRush
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTestimonialSlider;
