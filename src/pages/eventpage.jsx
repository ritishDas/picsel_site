import React, { useState, useEffect, useContext } from "react";
import { loadingContext } from "../context/load";
import { useParams } from "react-router-dom";
import Setwin from "../components/setwin";
import Picform from "../components/picform";
import url from "../../config";

const EventComponent = () => {
  const { id } = useParams();
  const [Event, setEvent] = useState({ photos: [], rules: [], winners: [], participants: [] });
  const { setLoading, loged } = useContext(loadingContext);

    async function fetchData() {
      setLoading(true);
      const data = await fetch(`${url}/api/event/fetch/${id}`).then((res) => res.json());
      setEvent(data);
      setLoading(false);
    }
 
  useEffect(() => {
   fetchData();
  }, []);

  const handleAddParticipant = async () => {
    const name = prompt("Enter participant's name:");
    const email = prompt("Enter participant's email:");
    const year = prompt("Enter participant's year:");
    console.log({ name, email, year });

    const res = await fetch(`${url}/api/event/${id}/addp`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, year }),
    }).then((res) => res.json());
    alert(res.message);
    fetchData();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Event Poster */}
        <div className="mb-6 text-center">
          <img
            src={Event.poster}
            alt="Event Poster"
            className="w-full   rounded-md"
          />
        </div>

        {/* Event Details */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{Event.name}</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="font-semibold">Date & Time</h2>
            <p className="text-gray-600">{Event.date}</p>
          </div>
          <div>
            <h2 className="font-semibold">Venue</h2>
            <p className="text-gray-600">{Event.venue}</p>
          </div>
        </div>

        {/* Rules */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Rules</h2>
          {Event.rules.length > 0 ? (
            <ul className="list-disc pl-5">
              {Event.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No rules specified.</p>
          )}
        </div>

        {/* Participants */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Participants</h2>
          {Event.participants.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Year</th>
                </tr>
              </thead>
              <tbody>
                {Event.participants.map((entry, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-4 py-2">{entry._id}</td>
                    <td className="border border-gray-300 px-4 py-2">{entry.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{entry.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No participants have joined yet.</p>
          )}
        </div>

        {/* Winners */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Winners</h2>
          {Event.winners.length > 0 ? (
            <ul className="list-disc pl-5">
              {Event.winners.map((winner, i) => (
                <li key={i}>{winner.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Winners not chosen yet.</p>
          )}
        </div>

        {/* Add Participant and Set Winners */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={handleAddParticipant}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Add Participant
          </button>
          {loged && <Setwin id={id} fun={()=>fetchData()} part={Event.participants} />}
        </div>

        {/* Photo Gallery */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-3 gap-4">
    
    <Picform 
    fun={()=>fetchData()}
    id={id} />
    <div>
            {Event.photos.length > 0 ? (
              Event.photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`Photo ${i + 1}`}
                  className="w-full rounded-md"
                />
              ))
            ) : (
              <p className="col-span-3 text-gray-500">No photos in the gallery.</p>
            )}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
