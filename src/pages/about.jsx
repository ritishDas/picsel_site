/* 
export default function(){
return (
<div>
<h1>About US</h1>
  </div>
);
}
 */

import React from "react";
import AboutHero from "../components/about/AboutHero";
import TeamSection from "../components/about/TeamSection";
import InchargeInfo from "../components/about/InchargeInfo";

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
  ];

  return (
    <div>
      <AboutHero />
      <InchargeInfo />
      <TeamSection title="Meet Our Team" members={team1} />
      <TeamSection title="Team Members" members={team2} />
    </div>
  );
};

export default About;
