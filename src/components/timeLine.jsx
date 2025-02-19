import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { timelineComp } from "../data";

const TimelineSection = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    const totalWidth = el.scrollWidth;
    // Animate the timeline horizontally, looping infinitely
    gsap.to(el, {
      x: -totalWidth,
      ease: "linear",
      duration: 5,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const mod = totalWidth;
          return (parseFloat(x) % mod) + "px";
        },
      },
    });
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative bg-gradient-to-tr from-logo-purple to-light-blue">
      <div className="container mx-auto relative">
        {/* Timeline container arranged horizontally */}
        <div ref={timelineRef} className="flex space-x-12">
          {timelineComp.map((event, index) => (
            <div key={event.id} className="flex flex-col items-center relative">
              {/* Icon Above Node */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md mb-2">
                <img src={event.icon} alt={event.heading} className="w-8 h-8" />
              </div>
              {/* Horizontal connecting line (except for last item) */}
              {index !== timelineComp.length - 1 && (
                <div className="h-1 w-24 bg-gradient-to-r from-light-blue to-red-500"></div>
              )}
              {/* Heading & Content Below Node */}
              <div className="mt-4 text-center">
                {" "}
                <h3 className="text-2xl font-bold text-theme-white mb-5">
                  {event.heading}
                </h3>
                <p className="text-theme-white text-xl">{event.content}</p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
