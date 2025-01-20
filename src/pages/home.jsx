
import { HeroParallax } from "../components/ui/hero";
import { Timeline } from "../components/ui/timeline";
import Member from "../components/memslider"
import { PlaceholdersAndVanishInput } from "../components/placeholders-and-vanish-input";


import React,{forwardRef} from "react";

const Home = forwardRef((p,r)=>{


function HeroParallaxDemo() {
const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

  return <HeroParallax products={products} ref={r}/>;
}

  function TimelineDemo() {
    const data = [
      {
	title: "Changelog",
	content: (
	  <div>
	  <p
	  className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
	  Deployed 5 new components on Aceternity today
	  </p>
	  <div className="mb-8">
	  <div
	  className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
	  ✅ Card grid component
	  </div>
	  <div
	  className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
	  ✅ Startup template Aceternity
	  </div>
	  <div
	  className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
	  ✅ Random file upload lol
	  </div>
	  <div
	  className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
	  ✅ Himesh Reshammiya Music CD
	  </div>
	  <div
	  className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
	  ✅ Salman Bhai Fan Club registrations open
	  </div>
	  </div>
	  <div className="grid grid-cols-2 gap-4">
	  <img
	  src="https://assets.aceternity.com/pro/hero-sections.png"
	  alt="hero template"
	  width={500}
	  height={500}
	  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
	  <img
	  src="https://assets.aceternity.com/features-section.png"
	  alt="feature template"
	  width={500}
	  height={500}
	  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
	  <img
	  src="https://assets.aceternity.com/pro/bento-grids.png"
	  alt="bento template"
	  width={500}
	  height={500}
	  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
	  <img
	  src="https://assets.aceternity.com/cards.png"
	  alt="cards template"
	  width={500}
	  height={500}
	  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
	  </div>
	  </div>
	),
      },
    ];
    return (
      (<div className="w-full">
	<Timeline data={data} />
	</div>)
    );
  }
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
          Ask Us Anything
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
    <>
    <HeroParallaxDemo/>
    <TimelineDemo/>  
    <Member/>
    <PlaceholdersAndVanishInputDemo/>
    </>
  );
});

export default Home;
