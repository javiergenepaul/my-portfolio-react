import { Home } from "./screens";
import BackgroundParticles from "./components/particles/BackgroundParticles";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches);

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
      <BackgroundParticles isDarkMode={isDarkMode} />
      <div className={`${isDarkMode && "dark"}`}>
        <div className="App min-h-screen dark:bg-black dark:text-white font-inter">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
