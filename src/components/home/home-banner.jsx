import React from "react";
import { useEffect, useRef } from "react";
import Button from "../button";
import Words from './wordRotator'
import { gsap } from "gsap";

const HomeBanner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the text element
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <div className="relative bg-home-gradient bg-cover bg-center text-center">
  {/* Background image with overlay */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: '-1', // Ensure it stays behind the content
    }}
  ></div>

  {/* Content Section */}
  <div className="banner-inner container lg:mx-auto px-5 h-fit flex items-center justify-center text-center py-12">
    <div>
      <h5 
      className="text-2xl sm:text-4xl md:text-5xl lg:text-2xl text-theme-white">
        Turning Ambitions Into Achievements with Smart Digital Marketing
      </h5>
        <h3>THIS IS TEST</h3>
      <h1 
      ref={textRef}
      className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-theme-white my-8">
        Struggling to Grow? Let the Best Digital Marketing Agency Help!
      </h1>
      <span className="text-3xl text-theme-white uppercase font-bold my-10">
        Creativity
      </span>
      <br />
      <br />
      <span className="text-xl text-theme-white">With SAT Americana You Can Have</span>
      <Words />
      <br />
      <p className=" text-theme-white text-xl">With full-service digital solutions and innovative strategies, we at USA connect brands with their audiences in a dynamic and rapidly evolving field.</p>
      <Button
        placeholder="LEARN MORE"
        url="/"
        bgColor="bg-logo-dark-blue"
        borderRadius="rounded-lg"
        extraClasses="hover:bg-gray-300 px-8 py-2 m-5 buttonHover"
        borderBtn="border-2"
        textColor="text-white"
        textColorHover="text-black"
        fontWeight="font-bold"
      ></Button>
      <Button
        placeholder="CONTACT US"
        url="/"
        bgColor="bg-logo-purple"
        borderRadius="rounded-lg"
        extraClasses="hover:bg-gray-300 px-8 py-2 m-5 buttonHover"
        borderBtn="border-2"
        textColor="text-white"
        textColorHover="text-black"
        fontWeight="font-bold"
      ></Button>
    </div>
  </div>
</div>

    </>
  );
};

export default HomeBanner;
