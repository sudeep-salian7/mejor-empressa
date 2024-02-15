import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  const [blogHeader, setBlogHeader] = useState(false);
  const location = useLocation().pathname.split("/").includes("articulos");

  useEffect(() => {
    setBlogHeader(location);
  }, [location]);
  return (
    <HeaderContext.Provider value={{ blogHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
