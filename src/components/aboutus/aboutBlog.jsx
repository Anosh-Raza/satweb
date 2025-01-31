// BlogComponent.jsx
import React, { useState } from "react";
import { blogData } from "../../data";

const BlogComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= blogData.length ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-gray-100 py-12 bg-gradient-to-t from-logo-purple to-logo-dark-blue">
      <div className="container mx-auto px-4">
        {/* Heading and Navigation Buttons Container */}
        <div className="flex justify-between items-center mb-8">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold w-1/2 text-theme-white">
            Discover the Latest Digital Strategies & Emerging Ideas for Business
            Growth
          </h1>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
            >
              ◀️
            </button>
            <button
              onClick={handleNext}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
            >
              ▶️
            </button>
          </div>
        </div>

        {/* Blog Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)`,
            }}
          >
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full md:w-1/3 flex-shrink-0 p-4" // 1 blog on mobile, 3 on desktop
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                    {/* <p className="text-gray-600 mb-4">{blog.description}</p> */}
                    <span style={{width: "50px", height: "2px", backgroundColor: "green" }}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;