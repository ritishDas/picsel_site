import React, { useState } from "react";

const EventComponent = () => {
  const [participants, setParticipants] = useState([]);
  const [winners, setWinners] = useState([]);
  const [gallery, setGallery] = useState([]);

  const handleAddParticipant = () => {
    const name = prompt("Enter participant's name:");
    if (name) {
      setParticipants([...participants, name]);
    }
  };

  const handleChooseWinners = () => {
    if (participants.length < 3) {
      alert("Not enough participants to choose winners!");
      return;
    }
    const shuffled = [...participants].sort(() => 0.5 - Math.random());
    setWinners(shuffled.slice(0, 3));
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Event Poster */}
        <div className="mb-6">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Event Poster"
            className="w-full rounded-md"
          />
        </div>

        {/* Event Details */}
        <h1 className="text-2xl font-bold text-[#333333] mb-4">Event Name</h1>
        <p className="text-[#737373] mb-2">Description of the event goes here.</p>
        <p className="text-[#737373] mb-2">
          <strong>Rules:</strong> Follow these rules to participate.
        </p>
        <p className="text-[#737373] mb-2">
          <strong>Date & Time:</strong> January 20, 2025, 6:00 PM
        </p>
        <p className="text-[#737373] mb-6">
          <strong>Venue:</strong> Main Auditorium
        </p>

        {/* Participants */}
        <h2 className="text-xl font-semibold text-[#333333] mb-4">
          Participants
        </h2>
        <ul className="list-disc pl-6 mb-6">
          {participants.length > 0 ? (
            participants.map((participant, index) => (
              <li key={index} className="text-[#333333]">
                {participant}
              </li>
            ))
          ) : (
            <p className="text-[#737373]">No participants yet.</p>
          )}
        </ul>

        {/* Winners */}
        <h2 className="text-xl font-semibold text-[#333333] mb-4">Winners</h2>
        {winners.length > 0 ? (
          <ol className="list-decimal pl-6 mb-6">
            <li className="text-[#4CAF50]">1st: {winners[0]}</li>
            <li className="text-[#FFB74D]">2nd: {winners[1]}</li>
            <li className="text-[#FFC107]">3rd: {winners[2]}</li>
          </ol>
        ) : (
          <p className="text-[#737373]">Winners not chosen yet.</p>
        )}

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={handleAddParticipant}
            className="bg-[#0078D4] text-white px-4 py-2 rounded-md hover:bg-[#0056A3] transition"
          >
            Add Participation
          </button>
          <button
            onClick={handleChooseWinners}
            className="bg-[#FFB74D] text-white px-4 py-2 rounded-md hover:bg-[#FFA726] transition"
          >
            Choose Winners
          </button>
        </div>

        {/* Photo Gallery */}
        <h2 className="text-xl font-semibold text-[#333333] mb-4">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {gallery.length > 0 ? (
            gallery.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="w-full h-24 object-cover rounded-md"
              />
            ))
          ) : (
            <p className="col-span-3 text-[#737373]">No photos in the gallery.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
