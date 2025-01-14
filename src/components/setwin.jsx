import React, { useState } from 'react';
import url from "../../config";

const WinnerSelection = (props) => {
  const participants = props.part;
    const [winners, setWinners] = useState({
        first: "",
        second: "",
        third: "",
    });

    const handleSelection = (position, id) => {
        setWinners((prev) => ({ ...prev, [position]: id }));
    };

    const handleSubmit = async() => {
        if (!winners.first || !winners.second || !winners.third) {
            alert('Please select a winner for all three positions.');
            return;
        }
        console.log('Winners:', winners);
      const res = await await fetch(`${url}/api/event/${props.id}/winner`,{
	method:"post",
	headers:{
"Content-Type":"application/json"
	},
	credentials:"include",
	body:JSON.stringify([winners.first,winners.second,winners.third])
      }).then(res=>res.json())
        alert(res.message);
      props.fun();
        // Replace the console.log with an API call to submit the winners
    };

    return (
        <div>
            <h1>Select Winners</h1>
            <div>
                <h2>1st Place</h2>
                <select
                    value={winners.first || ''}
                    onChange={(e) => handleSelection('first', e.target.value)}
                >
                    <option >Select 1st place</option>
                    {participants.map((p) => (
                        <option key={p._id} value={p._id}>
                            {p.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h2>2nd Place</h2>
                <select
                    value={winners.second || ''}
                    onChange={(e) => handleSelection('second', e.target.value)}
                >
                    <option>Select 2nd place</option>
                    {participants.map((p) => (
                        <option key={p._id} value={p._id}>
                            {p.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h2>3rd Place</h2>
                <select
                    value={winners.third || ''}
                    onChange={(e) => handleSelection('third', e.target.value)}
                >
                    <option >Select 3rd place</option>
                    {participants.map((p) => (
                        <option key={p._id} value={p._id}>
                            {p.name}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSubmit}>Submit Winners</button>
        </div>
    );
};

export default WinnerSelection;
