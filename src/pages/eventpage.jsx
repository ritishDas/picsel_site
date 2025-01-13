import React, { useState,useEffect,useContext} from "react";
import {loadingContext} from "../context/load";
import {useParams} from "react-router-dom";
import url from "../../config";

const EventComponent = () => {
  const {id} = useParams();
  const [Event,setEvent] = useState({rules:[],
  winners:[],participants:[]});
  const {setLoading} = useContext(loadingContext);

  useEffect(()=>{
    async function fetchData(){
      setLoading(true);
      const data = await fetch(`${url}/api/event/fetch/${id}`).then(res=>res.json());
      setEvent(data);
      setLoading(false);
    }
    fetchData();
    console.log(Event);
  },[]);


  const handleAddParticipant = async() => {
    const name = prompt("Enter participant's name:");
    const email = prompt("Enter participant's email:");
    
    const year = prompt("Enter participant's year:");
console.log({name,email,year})

const res = await fetch(`${url}/api/event/${id}/addp`,{
  method:"post",
  headers:{
"Content-Type":"application/json"
  },
  body:JSON.stringify({name,email,year})
}).then(res=>res.json())
    alert(res.message);
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
    src={Event.poster}
    alt="Event Poster"
    className="w-full rounded-md"
    />
    </div>

    {/* Event Details */}
    <h1 className="text-2xl font-bold text-[#333333] mb-4">{Event.name}</h1>
    <p className="text-[#737373] mb-2">
    <strong>Rules:</strong> <ul>
    {
Event.rules.map((entry,i)=><li key={i}>{entry}</li>)
    }
    </ul></p>
    <p className="text-[#737373] mb-2">
    <strong>Date & Time:</strong>{Event.date}</p>
    <p className="text-[#737373] mb-6">
    <strong>Venue:</strong>{Event.venue}</p>

    {/* Participants */}
    <h2 className="text-xl font-semibold text-[#333333] mb-4">
    Participants
    </h2>
    <ol className=" pl-6 mb-6">
    {
Event.participants.map((entry,i)=><li key={i}>{entry}</li>)
    }
    </ol>

    {/* Winners */}
    <h2 className="text-xl font-semibold text-[#333333] mb-4">Winners</h2>

    <p className="text-[#737373]">Winners not chosen yet.</p>

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

    <p className="col-span-3 text-[#737373]">No photos in the gallery.</p>

    </div>
    </div>
    </div>
  );
};

export default EventComponent;
