import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Herostats from "./components/Herostats";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Herostats />
      <Expertise/>
    </div>
  );
}
