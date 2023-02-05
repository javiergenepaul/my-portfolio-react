import { Home } from "./screens";
import BackgroundParticles from "./components/particles/BackgroundParticles";

function App() {
  return (
    <div className="App min-h-screen bg-black text-white font-inter">
      <Home />
      <BackgroundParticles/>
    </div>
  );
}

export default App;
