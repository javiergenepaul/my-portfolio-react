import { ContactPage, HomePage, AboutPage, ProjectPage } from "./screens";
import BackgroundParticles from "./components/particles/BackgroundParticles";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";

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
              <Route path="/" element={ <HomePage />} />
              <Route path="contact" element={ <ContactPage />} />
              <Route path="about" element={ <AboutPage />} />
              <Route path="project" element={ <ProjectPage/> } />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
