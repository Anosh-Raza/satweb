import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedComponent = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate the text element
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" } // Final state
    );

    // Animate the button element
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.5 }
    );
  }, []);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-center">
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl font-bold text-white mb-6"
      >
        Animate with GSAP!
      </h1>
      <button
        ref={buttonRef}
        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default AnimatedComponent;
