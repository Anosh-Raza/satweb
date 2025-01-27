import React, { useState, useEffect } from "react";
import { wordData } from "../../data";

const WordRotator = () => {
  const { words } = wordData; // Load words from data.js
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current word index

  useEffect(() => {
    // Set an interval to update the index every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop back to the start
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="text-center py-6">
  <h1
    className="text-6xl font-bold uppercase tracking-wider"
    style={{
      textShadow: 'white 1px 1px 50px',
      WebkitTextStroke: '1px white', 
      color: 'transparent', 
    }}
  >
    {words[currentIndex]} {/* Show the current word */}
  </h1>
</div>


  );
};

export default WordRotator;
