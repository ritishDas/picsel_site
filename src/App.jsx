import { useContext,useEffect,useRef  } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Nav from "./components/navbar.jsx";
import Event from "./pages/event.jsx";
import Login from "./pages/login";
import Footer from "./components/footer";
import {loadingContext} from "./context/load";
import About from "./pages/about.jsx";

import './App.css';
import './tw.css';

function App() {

const {loading} = useContext(loadingContext);

  const getClassName = (base, conditionClass) => {
    return loading ? base : `${base} ${conditionClass}`;
  };

  const ref = useRef(null);

  return (
    <>
      <div className={getClassName("loading", "load-done")}>
        <h1 className="shining-text">RD EVENTS</h1>
      </div>
      <div className="main-frame">
        <div ref={ref} className={getClassName("home-main", "load-home")}>
          <Nav ref={ref} /> {/* Pass ref here */}
          <Routes>
            <Route path="/" element={<Home ref={ref}/>} />
            <Route path="/event" element={<Event />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
    <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
