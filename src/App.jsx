import { useState,useContext } from 'react';
import {loadingContext} from './context/load.jsx';
import {Routes,Route} from "react-router-dom";

import './App.css'

function App() {

  const {loading,setLoading} = useContext(loadingContext);
  const loadingload = loading? "":"loading load-done";
  const homeload = loading? "":"home-main load-home";
setLoading(false);
  return(<>
    <div className={`loading ${loadingload}`}>
    <h1 class="shining-text">RD EVENTS</h1>
    </div>
    <div className="main-frame"><div className={`home-main ${homeload}`}>
<Routes>
<Route path="/" element={<>home</>}/>

</Routes>
    </div></div>
    </>
  )
}

export default App
