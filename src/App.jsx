import { useRef, useContext } from "react";
import { loadingContext } from "./context/load.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Nav from "./pages/navbar.jsx";
import Event from "./pages/event.jsx";
import About from "./pages/about.jsx";

import './App.css';
import './tw.css';

function App() {
  const { loading, setLoading } = useContext(loadingContext);

  setTimeout(() => setLoading(false), 5000);

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
            <Route path="/" element={<Home ref={ref} />} />
            <Route path="/event" element={<Event />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
