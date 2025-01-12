import React from 'react';

const CircularCard = ({ name, photo }) => {
  return (
    <div
      className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 p-1 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="bg-white rounded-full p-4 flex flex-col items-center">
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
        />
        <h3 className="text-lg font-semibold text-gray-800 mt-4">{name}</h3>
      </div>
    </div>
  );
};

export default CircularCard;
