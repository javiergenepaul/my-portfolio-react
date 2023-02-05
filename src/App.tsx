import { Home } from "./screens";
import BackgroundParticles from "./components/particles/BackgroundParticles";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>();

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  
  const toggleDarkMode = () => {
    setIsDarkMode((data) => {
      return !data;
    });
  };

  return (
    <>
      <BackgroundParticles />
      <div className={`${isDarkMode && "dark"}`}>
        <div className="App min-h-screen dark:bg-black dark:text-white font-inter">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
