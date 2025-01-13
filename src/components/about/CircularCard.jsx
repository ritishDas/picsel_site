import React from "react";

const CircularCard = ({ name, photo }) => {
  return (
    <div
      className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 p-1 rounded-full flex-1 hover:scale-105 transition-transform duration-300 shadow-lg"
      // className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 p-1 rounded-full shadow-lg
      //   hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="bg-white rounded-full p-4 flex flex-col items-center">
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
        />
        <h3 className="text-lg font-mono font-semibold text-gray-800 mt-4">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CircularCard;
