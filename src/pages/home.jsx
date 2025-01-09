import {Link} from "react-router-dom"
import Floatnav from "../components/ui/floatnav.jsx";

import { Vortex } from "../components/ui/vortex";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export default function(){

  function VortexDemo() {
    return (
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            The hell is this?
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
            burned and you&apos;ll have a scar.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Order now
            </button>
            <button className="px-4 py-2  text-white ">Watch trailer</button>
          </div>
        </Vortex>
      </div>
    );
  }

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
 
return(
<>
<Floatnav navItems={navItems}/>
  <div className="home-navbar">
  <h1>RD Events</h1>
  <div>
<Link to="">HOME</Link>
<Link to="">EVENT</Link>
<Link to="">ABOUT</Link>
  </div>
  <button>Admin Login</button>
 </div>
 <VortexDemo/>
  </>
);
}

