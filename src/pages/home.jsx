import {Link} from "react-router-dom"
import Floatnav from "../components/ui/floatnav.jsx";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function(){

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
  </>
);
}

