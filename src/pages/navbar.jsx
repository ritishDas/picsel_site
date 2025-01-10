import {forwardRef} from "react";
import {Link} from "react-router-dom"
import Floatnav from "../components/ui/floatnav.jsx";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const nav = forwardRef((props,ref) => {
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
      name: "Event",
      link: "/event",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
 
return(
<>
<Floatnav navItems={navItems} ref={ref}/>
  <div className="home-navbar">
  <h1>RD Events</h1>
  <div>
<Link to="/">HOME</Link>
<Link to="/event">EVENT</Link>
<Link to="/about">ABOUT</Link>
  </div>
  <button>Admin Login</button>
 </div>
  </>
);
})

export default nav;
