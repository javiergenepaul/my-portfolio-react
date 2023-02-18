import {
  ContactPage,
  HomePage,
  AboutPage,
  ProjectPage,
  SplashScreen,
  SkillsPage,
} from "./screens";
import BackgroundParticles from "./components/particles/BackgroundParticles";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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

  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>Javi Portfolio</title>
      </Helmet>
      <BackgroundParticles isDarkMode={isDarkMode} />
      <div className={`${isDarkMode && "dark"}`}>
        <div className="App min-h-screen dark:bg-black dark:text-white font-inter">
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="projects" element={<ProjectPage />} />
              <Route path="splash" element={<SplashScreen />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
