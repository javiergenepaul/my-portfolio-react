import { Contact, Home } from "./screens";
import BackgroundParticles from "./components/particles/BackgroundParticles";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { JaviLogo } from "./assets";
import { Route, Routes } from "react-router-dom";
import { About, Projects } from "./components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDarkMode(event.matches);
      });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((data) => {
      return !data;
    });
  };

  return (
    <>
      <Helmet>
        <title>Javi Portfolio</title>
      </Helmet>
      <BackgroundParticles isDarkMode={isDarkMode} />
      <div className={`${isDarkMode && "dark"}`}>
        <div className="App min-h-screen dark:bg-black dark:text-white font-inter">
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="contact" element={ <Contact />} />
              <Route path="about" element={ <About />} />
              <Route path="project" element={ <Projects />} />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
