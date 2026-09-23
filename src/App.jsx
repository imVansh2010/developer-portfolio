import { useState } from "react";
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
import PasscodeGate from "./components/PasscodeGate.jsx";

/* TEMPORARY gate: the portfolio stays behind a passcode until the site is done.
   Set GATE_ENABLED to false (or delete this block + PasscodeGate.jsx) to launch.
   Currently DISABLED — the gate is kept in the codebase, just not shown. */
const GATE_ENABLED = false;

export default function App() {
  const [unlocked, setUnlocked] = useState(!GATE_ENABLED);

  if (!unlocked) return <PasscodeGate onUnlock={() => setUnlocked(true)} />;

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
