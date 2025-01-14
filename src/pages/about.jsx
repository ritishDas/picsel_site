import React from "react";
import AboutHero from "../components/about/AboutHero";
import TeamSection from "../components/about/TeamSection";
import InchargeInfo from "../components/about/InchargeInfo";
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
    </div>
  );
};

export default About;
