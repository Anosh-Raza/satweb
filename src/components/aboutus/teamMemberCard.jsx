import React from 'react';

const TeamMemberCard = ({ name, role, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-5">
    <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full" />
    <h3 className="text-xl font-semibold mt-3">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

export default TeamMemberCard;
