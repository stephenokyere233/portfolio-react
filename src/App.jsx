// import React,{useEffect} from 'react'
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Dark from "./components/Dark";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [dark, setDark] = useState(false);
  let html = document.querySelector("html");

  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "false");
  }
  const check = () => {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === "true") {
      html.classList.add("dark");
      // setDark(true);
    } else {
      html.classList.remove("dark");
      // setDark(false);
    }
  };
  // window.addEventListener('load',check)
  check();
  function toggle() {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === "true") {
      setDark(false);
      localStorage.setItem("theme", "false");
      html.classList.remove("dark");
    } else {
      setDark(true);
      localStorage.setItem("theme", "true");
      html.classList.add("dark");
    }
  }

  return (
    <div
      className={`box-border relative scroll-smooth select-none dark:bg-[#222] dark:text-white bg-white text-black'}`}
    >
      <Header />
      <Hero />
      <Dark onToggle={toggle} dark={dark} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
