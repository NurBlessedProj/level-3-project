"use client";
import React, { createContext, useState } from "react";

export const appContext = createContext();
function Context({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <appContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </appContext.Provider>
  );
}

export default Context;
