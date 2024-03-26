import { createContext, useLayoutEffect, useState } from "react";
import "./App.css";
import Router from "./routers/Router";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import ConfirmChoices from "./components/upInfo/ConfirmChoicesSyrianMothers/ConfirmChoicesSyrianMothers";

export const ThemeContext = createContext(null);
function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const day = new Date();
  const hour = day.getHours();
  const [theme, setTheme] = useState(() => {
    if (hour >= 19 || hour < 5) return "dark";
    else return "light";
  });

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const icon = theme === "light" ? <CgSun size={40} /> : <HiMoon size={40} />;
  return (
    <ThemeContext.Provider value={theme}>
      {" "}
      <div className="App" id={theme}>
        <Router />
        {/* <ConfirmChoices/> */}
        <div className="theme-toggle ">
          <button onClick={toggleTheme} id="bt-theme">
            {icon}
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
