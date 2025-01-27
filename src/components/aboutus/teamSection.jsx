import React from 'react';
import TeamMemberCard from './teamMemberCard';

const TeamSection = ({ teamMembers }) => (
  <section className="py-12">
    <div className="container mx-auto px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
