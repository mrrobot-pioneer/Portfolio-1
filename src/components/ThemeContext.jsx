// global context to control Dark/Light mode and Themes

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [mode, setMode] = useState("dark-mode");

  useEffect(() => {
    document.documentElement.className = `${theme} ${mode}`;
  }, [theme, mode]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const toggleMode = () => {
    setMode((prevMode) =>
      prevMode === "dark-mode" ? "light-mode" : "dark-mode"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, changeTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
