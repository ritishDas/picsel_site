import React from "react";
import CircularCard from "./CircularCard";

const TeamSection = ({ title, members }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          // className="text-3xl font-bold text-gray-800 mb-8"
          className="text-3xl font-bold  text-center text-primary-600 py-8 font-mono"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <CircularCard key={index} name={member.name} photo={member.photo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
