import {useContext,forwardRef,useEffect} from "react";
import {loadingContext} from "../context/load";
import {Link,useNavigate} from "react-router-dom"
import Floatnav from "./ui/floatnav.jsx";
import url from "../../config";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Nav = forwardRef((props,ref) => {
  const {loged,setLoged} = useContext(loadingContext);

  useEffect(()=>{
    (async()=>{
      const login = await fetch(`${url}/api/admin/auth`,{
	credentials:"include"
	,method:"post"
      }).then(res=>res.json());
      console.log("login is ",login);
      setLoged(login.auth);
    })();
  },[]);

  const navigate = useNavigate();
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
    {loged?
      <Link to="/addevent">ADD</Link>
      :<></>
    }
    </div>
    {loged?<span>Admin</span>:
      <button onClick={
	()=>navigate("/login")
      }>Admin Login</button>
    }
    </div>
    </>
  );
})

export default Nav;
