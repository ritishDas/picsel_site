import { useState, createContext } from "react";

const loadingContext = createContext();

function Provider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <loadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </loadingContext.Provider>
  );
}

export { Provider, loadingContext };
