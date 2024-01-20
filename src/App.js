import React, { useState } from "react";
import GlobalStyle from "../src/components/Global.js";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Skills from "./pages/Skills.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contacts.js";
import Navbar from "./components/Navbar/Navbar.js";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  background: "#f9f9f9",
  backgroundImage: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%);",
  aboutBackground: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%);",
  color: "#f09819",
  height: "100vh",
};

const darkTheme = {
  background: "#070E27",
  backgroundImage:
    "linear-gradient(90deg, rgba(147,53,192,1) 19%, rgba(202,98,240,1) 93%)",
  aboutBackground: "#070E27",
  color: "#642764",
  height: "65vh",
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <HomePage currentTheme={currentTheme} />
        <About />
        <Skills />
        <Projects />
        <Contact currentTheme={currentTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
