import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Codebases from "./components/Codebases.jsx";
import Leadership from "./components/Leadership.jsx";
import Achievements from "./components/Achievements.jsx";
import Interests from "./components/Interests.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Sticky top navbar sits above the flow; each section handles its own padding */}
      <div className="min-h-screen w-full bg-base text-fg">
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <Codebases />
          <Leadership />
          <Achievements />
          <Interests />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
