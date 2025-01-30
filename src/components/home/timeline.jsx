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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Website Design Process
      </h1>

      {/* Horizontal Timeline Container */}
      <div
        ref={timelineRef}
        className="overflow-x-auto scroll-smooth whitespace-nowrap flex items-center py-4 space-x-8"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {/* Timeline Nodes */}
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            id={`node-${item.id}`}
            className={`inline-flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 ${
              index === activeIndex
                ? "bg-blue-500 text-white scale-110 shadow-lg"
                : "bg-gray-100 text-gray-700"
            }`}
            style={{
              minWidth: "200px",
              scrollSnapAlign: "center", // Ensures smooth snapping to center
            }}
          >
            {/* Icon */}
            <span className="text-2xl mb-2">{item.icon}</span>
            {/* Heading */}
            <p className="text-sm uppercase">{item.heading}</p>
            {/* Year */}
            <p className="text-lg font-bold">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
