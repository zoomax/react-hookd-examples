import React, { useState, useContext, createContext } from "react";
const ThemeContext = createContext();
const ThemeContextUpdater = createContext();
const useThemeContext = function () {
  return useContext(ThemeContext);
};
const useThemeContextUpdater = function () {
  return useContext(ThemeContextUpdater);
};

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = function () {
    setDark((theme) => !theme);
  };
  return (
    <ThemeContext.Provider value={dark}>
      <ThemeContextUpdater.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdater.Provider>
    </ThemeContext.Provider>
  );
}

export {
//   ThemeContextUpdater,
//   ThemeContext,
  useThemeContext,
  useThemeContextUpdater,
  ThemeProvider
};
