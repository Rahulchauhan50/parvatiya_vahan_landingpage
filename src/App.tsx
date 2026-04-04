import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppTeaser from "./components/AppTeaser";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Services from "./components/Services";
import Welfare from "./components/Welfare";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <AppTeaser />
        <About />
        <VisionMission />
        <Services />
        <Welfare />
      </main>
      <Footer />
    </div>
  );
}
