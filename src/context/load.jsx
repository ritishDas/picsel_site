import { useState, createContext } from "react";

const loadingContext = createContext();

function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [loged, setLoged] = useState(true);

  return (
    <loadingContext.Provider value={{ loading, setLoading,loged, setLoged }}>
      {children}
    </loadingContext.Provider>
  );
}

export { Provider, loadingContext };
