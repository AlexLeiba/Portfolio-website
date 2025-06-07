// context/ThemeContext.js
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  darkMode: true,
  setIsDarkMode: (value: boolean) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setIsDarkMode] = useState(false); //false is white theme

  // FOR INITIAL STATE
  useEffect(() => {
    const stored = localStorage.getItem('theme');

    if (stored === null) {
      setIsDarkMode(true);
      return localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(stored === 'dark');
  }, []);

  // FOR THEME CHANGE IN CLASSNAME
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
