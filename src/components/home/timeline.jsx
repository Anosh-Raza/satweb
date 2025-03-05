import React, { useState, useEffect, useRef } from "react";
import { timelineData } from "../../data"; // Ensure this data exists or create sample data

const HorizontalTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const isTimelineVisible = useRef(false); // Flag to check if timeline is visible

  // Handle scroll event to determine the active node
  const handleScroll = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const middleOfScreen = window.innerWidth / 2;

    timelineData.forEach((item, index) => {
      const node = document.getElementById(`node-${item.id}`);
      if (node) {
        const nodeRect = node.getBoundingClientRect();
        const nodeCenter = nodeRect.left + nodeRect.width / 2;

        // Check if the node is in the middle of the screen
        if (
          nodeCenter >= middleOfScreen - 50 &&
          nodeCenter <= middleOfScreen + 50
        ) {
          setActiveIndex(index);
        }
      }
    });
  };

  // Auto-scroll functionality when timeline is visible
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isTimelineVisible.current) return; // Do not auto-scroll if timeline is not in view

      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % timelineData.length;
        const nextNode = document.getElementById(`node-${timelineData[nextIndex].id}`);
        if (nextNode) {
          nextNode.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
        return nextIndex;
      });
    }, 3000); // Adjust this interval as needed

    return () => clearInterval(autoScroll); // Cleanup interval on component unmount
  }, []);

  // Set up Intersection Observer to detect visibility of the timeline section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isTimelineVisible.current = entry.isIntersecting; // Flag if the timeline is in the viewport
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.5, // Trigger when at least 50% of the timeline is visible
      }
    );

    const timelineElement = timelineRef.current;
    if (timelineElement) {
      observer.observe(timelineElement);
    }

    return () => {
      if (timelineElement) {
        observer.unobserve(timelineElement);
      }
    };
  }, []);

  // Scroll event listener
  useEffect(() => {
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (timeline) {
        timeline.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="wi_timeline" aria-label="Website Design Process Timeline">
      <div className="px-4 pt-12 container mx-auto">  
        <h1 className="text-3xl font-bold text-center mb-8 text-theme-white">
          Website Design Process
        </h1>
        <p className="text-theme-white text-center px-4 md:px-28 text-xl">
          Take a peek behind the curtain and explore the custom web design process our team follows.
          We build custom sites for brands of all sizes that deliver measurable results.
        </p>
        {/* Horizontal Timeline Container */}
        <div
          ref={timelineRef}
          className="overflow-x-auto scroll-smooth flex pt-8 space-x-8"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
          role="region"
          aria-label="Timeline"
        >
          {/* Timeline Nodes */}
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              id={`node-${item.id}`}
              className={`inline-flex flex-col p-4 rounded-lg transition-all duration-300 ${
                index === activeIndex
                  ? "text-white scale-110 shadow-lg wi_time-atv"
                  : "text-theme-white"
              }`}
              style={{
                minWidth: "350px", // Adjusted for better mobile responsiveness
                scrollSnapAlign: "center", // Ensures smooth snapping to center
                justifyContent: "space-between"
              }}
              role="article"
              aria-label={`Step ${index + 1}: ${item.heading}`}
            >
              <span className="text-2xl mb-2" role="img" aria-label="Icon">
                {item.icon}
              </span>
              <span className="wi_timelineHR"></span>
              <span className="wi_dot"></span>
              <p className="text-xl text-left capitalize text-neon-blue my-5">{item.heading}</p>
              <p className="text-base">{item.content}</p>
              <ul className="list-disc pl-5 my-3">
                {item.bullet.map((bullet) => (
                  <li key={bullet.id} className="text-sm space-y-4">
                    {bullet.point}
                  </li>
                ))}
              </ul>
                <p className="text-9xl font-bold wi_processNo text-transparent">{item.processNo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalTimeline;