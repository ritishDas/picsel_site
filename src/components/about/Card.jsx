import React from 'react';

const Card = ({ name, photo }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    </div>
  );
};

export default Card;
