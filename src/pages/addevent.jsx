import React, { useState } from "react";

const UploadPicturesForm = () => {
  const [rules, setRules] = useState([""]);

  const addRule = () => {
    setRules([...rules, ""]);
  };

  const updateRule = (index, value) => {
    const newRules = [...rules];
    newRules[index] = value;
    setRules(newRules);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("http://localhost:8000/api/event/addevent", {
        method: "POST",
	credentials:"include",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert("Form submitted successfully!");
        console.log("Response:", result);
      } else {
        console.error("Failed to submit form:", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Submit Your Details
        </h1>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Venue:</label>
          <input
            type="text"
            name="venue"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Date and Time:
          </label>
          <input
            type="datetime-local"
            name="date"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Poster:</label>
          <input
            type="file"
            name="poster"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-1">Rules:</label>
          <div className="space-y-2">
            {rules.map((rule, index) => (
              <input
                key={index}
                type="text"
                name="rules[]"
                value={rule}
                onChange={(e) => updateRule(index, e.target.value)}
                placeholder="Enter a rule"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            ))}
          </div>
          <button
            type="button"
            onClick={addRule}
            className="mt-2 w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
          >
            Add Rule
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white rounded-lg p-2 hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPicturesForm;
