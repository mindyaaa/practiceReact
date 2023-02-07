import { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkmode] = useState(false);
  const makeDarkMode = () => {
    setDarkmode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(()=>{
    
    const isDark = localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && 
    window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDarkmode(isDark);
    updateDarkMode(isDark);

  },[]);
  
  return (
    <DarkModeContext.Provider value={{darkMode, makeDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
};

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
  document.documentElement.classList.remove('dark');
  localStorage.theme = 'light';
  }
};