import React from "react";
import { teamMembers } from "../../data";

const TeamSection = () => {
  const members = teamMembers || []; // Fallback to an empty array

  return (
    <section className="py-1 bg-logo-dark-blue">
      <div className="container mx-auto py-32">
        <h2 className="text-4xl font-bold text-center mb-5 text-theme-white">Meet Our Leaders</h2>
        <p className="text-center text-theme-white">We are committed to helping businesses scale with customized e-commerce solutions, digital marketing campaigns, and SEO strategies that deliver real results.</p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-lg group"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;