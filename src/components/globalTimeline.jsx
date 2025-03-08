import React, { useState, useEffect, useRef, useCallback } from "react";

const GlobalTimeline = ({ timelineData, title, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const isTimelineVisible = useRef(false);

  // Memoize handleScroll with useCallback
  const handleScroll = useCallback(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const middleOfScreen = window.innerWidth / 2;

    timelineData.forEach((item, index) => {
      const node = document.getElementById(`node-${item.id}`);
      if (node) {
        const nodeRect = node.getBoundingClientRect();
        const nodeCenter = nodeRect.left + nodeRect.width / 2;

        if (
          nodeCenter >= middleOfScreen - 50 &&
          nodeCenter <= middleOfScreen + 50
        ) {
          setActiveIndex(index);
        }
      }
    });
  }, [timelineData]); // Add dependencies here

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isTimelineVisible.current) return;

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
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [timelineData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isTimelineVisible.current = entry.isIntersecting;
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
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
  }, [handleScroll]); // Add handleScroll to the dependency array

  return (
    <section className="wi_timeline" aria-label="Website Design Process Timeline">
      <div className="px-4 pt-12 container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-theme-white">
          {title}
        </h1>
        <p className="text-theme-white text-center px-4 md:px-28 text-xl">
          {description}
        </p>
        <div
          ref={timelineRef}
          className="overflow-x-auto scroll-smooth flex pt-8 space-x-8"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          role="region"
          aria-label="Timeline"
        >
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
                minWidth: "350px",
                scrollSnapAlign: "center",
                justifyContent: "space-between",
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

export default GlobalTimeline;