import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    "--bg-color": "#ffffff",
    "--second-bg-color": "#eee",
    "--text-color": "#000000",
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    Object.keys(newTheme).forEach((key) => {
      document.documentElement.style.setProperty(key, newTheme[key]);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
