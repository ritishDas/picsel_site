import React from "react";
import members from "../member.js";

const MembersSlider = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersSlider;
