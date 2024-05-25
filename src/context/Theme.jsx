import React, { createContext, useState } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [modal, setModal] = useState(false);
  

  const ChangeMode = () => {
    setTheme((prevMode) => !prevMode);
  };
  const showModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <ModeContext.Provider value={{ theme, ChangeMode, showModal, modal }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
