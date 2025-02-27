import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const TimelineSection = ({ data, duration, repeatDelay, className, heading, text }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current || !Array.isArray(data) || data.length === 0) return;

    const el = timelineRef.current;
    const totalWidth = el.scrollWidth;
    gsap.to(el, {
      x: -totalWidth,
      ease: "linear",
      duration: duration,
      repeat: -1,
      repeatDelay: repeatDelay,
      modifiers: {
        x: (x) => {
          const mod = totalWidth;
          return (parseFloat(x) % mod) + "px";
        },
      },
    });
  }, [data, duration, repeatDelay]);

  // Fallback to default data if data is not an array
  const timelineData = Array.isArray(data) ? data : [];

  console.log("Timeline Data:", timelineData); // Debugging

  return (
    <section className={`py-24 overflow-hidden relative ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-theme-white my-4">{heading}</h2>
        <p className="text-center text-theme-white">{text}</p>
        {/* Timeline container arranged horizontally */}
        <div ref={timelineRef} className="flex space-x-12 mt-20">
          {timelineData.map((event, index) => (
            <div key={event.id} className="flex flex-col items-center relative">
              {/* Icon Above Node */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md mb-2">
                {event.icon ? (
                  <img src={event.icon} alt={event.heading} className="w-8 h-8" />
                ) : (
                  <span className="text-sm font-bold">N/A</span>
                )}
              </div>
              {/* Horizontal connecting line (except for last item) */}
              {index !== timelineData.length - 1 && (
                <div className="h-1 w-24 bg-gradient-to-r from-light-blue to-red-500"></div>
              )}
              {/* Heading & Content Below Node */}
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-5">
                  {event.heading}
                </h3>
                <p className="text-white text-xl">{event.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TimelineSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.string,
      heading: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  duration: PropTypes.number,
  repeatDelay: PropTypes.number,
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

TimelineSection.defaultProps = {
  data: [], // Default to an empty array
  duration: 5,
  repeatDelay: 2,
  className: "bg-gradient-to-tr from-logo-purple to-light-blue bg-gray-50",
  heading: "",
  text: "",
};

export default TimelineSection;