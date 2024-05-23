import React, { createContext, useState } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  

  const ChangeMode = () => {
    setTheme((prevMode) => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ theme, ChangeMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
