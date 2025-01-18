import React from "react";
import AboutHero from "../components/about/AboutHero";
import TeamSection from "../components/about/TeamSection";
import InchargeInfo from "../components/about/InchargeInfo";
import { PlaceholdersAndVanishInput } from "../components/placeholders-and-vanish-input";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration (in milliseconds)
  once: true, // Whether animation should happen only once while scrolling
});

const About = () => {
  const team1 = [
    {
      name: "Alice Johnson",
      photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    },
    {
      name: "Bob Smith",
      photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    },
    { name: "Charlie Lee", photo: "https://avatar.iran.liara.run/public/girl" },
    { name: "Diana White", photo: "https://avatar.iran.liara.run/public/girl" },
  ];

  const team2 = [
    {
      name: "Ethan Brown",
      photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    },
    { name: "Fiona Green", photo: "https://avatar.iran.liara.run/public/girl" },
    {
      name: "George Black",
      photo: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "Hannah Gray",
      photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    },
    {
      name: "Ethan Brown",
      photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    },
    { name: "Fiona Green", photo: "https://avatar.iran.liara.run/public/girl" },
    {
      name: "George Black",
      photo: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "Hannah Gray",
      photo: "https://avatar.iran.liara.run/public/boy?username=Ash",
    },
  ];

  function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
      "What's the first rule of Fight Club?",
      "Who is Tyler Durden?",
      "Where is Andrew Laeddis Hiding?",
      "Write a Javascript method to reverse a string",
      "How to assemble your own PC?",
    ];
   
    const handleChange = () => {
      console.log(e.target.value);
    };
    const onSubmit = () => {
      e.preventDefault();
      console.log("submitted");
    };
    return (
      <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          Ask Aceternity UI Anything
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }

  return (
    <div>
      <h1 class="text-4xl font-bold  text-center text-primary-500 py-8 font-mono">
        About Us
      </h1>
      <AboutHero />
      <InchargeInfo />
      <TeamSection title="Meet Our Team" members={team1} />
      <TeamSection title="Team Members" members={team2} />
      {/* Website Team */}
      <TeamSection title="Website Team" members={team1} />
      <TeamSection title="Team Members" members={team2} />

      <PlaceholdersAndVanishInputDemo/>
    </div>
    
  );
};

export default About;
