import { useState,useContext } from 'react';
import {loadingContext} from './context/load.jsx';
import {Routes,Route} from "react-router-dom";

import Home from "./pages/home.jsx";
import './App.css'
import './tw.css'
function App() {

  const {loading,setLoading} = useContext(loadingContext);
  const loadingload = loading? "":"loading load-done";
  const homeload = loading? "":"home-main load-home";
setLoading(false);
  return(<>
    <div className={`loading ${loadingload}`}>
    <h1 className="shining-text">RD EVENTS</h1>
    </div>
    <div className="main-frame"><div className={`home-main ${homeload}`}>
<Routes>
<Route path="/" element={<Home/>}/>

</Routes>
    </div></div>
    </>
  )
}

export default App
