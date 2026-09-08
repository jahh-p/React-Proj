import { React, useState } from "react";

import {createContext,  useEffect} from "react"
import ThemeSwitcher from "./ThemeSwitcher.js"
import Home from "./Home.js"
import "./styles.css";


export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("barbie");

  function toggleTheme() {
    setTheme(function (prevTheme) {
      return prevTheme === "barbie" ? "oppenheimer" : "barbie";
    });
  }

  return (
 <div> 

      <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <Home />
      <ThemeSwitcher />
      </ThemeContext.Provider>
 </div>

  );
}
