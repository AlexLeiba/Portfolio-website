// context/ThemeContext.js
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  setIsDarkMode: (value: boolean) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    setIsDarkMode(stored === 'dark');
  }, []);

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
