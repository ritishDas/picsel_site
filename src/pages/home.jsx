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
  <div>
Computer vision is a rapidly growing field, partly as a result of both cheaper and more 
capable cameras, partly because of affordable processing power, and partly because vi-
sion algorithms are starting to mature. OpenCV itself has played a role in the growth of 
computer vision by enabling thousands of people to do more productive work in vision. 
With its focus on real-time vision, OpenCV helps students and professionals efficiently 
implement projects and jump-start research by providing them with a computer vision 
and machine learning infrastructure that was previously available only in a few mature 
research labs. The purpose of this text is to
  </div>
  </>
);
}

