import Hero from "./components/Hero";
import Social from "./components/Social";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import ConnectCard from "./components/ConnectCard";
import LeetCodeCard from "./components/LeetCodeCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-6xl mx-auto space-y-6">

        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="flex flex-col gap-6">
            <Social />
            
            <Education />
            <Skills />
            <ConnectCard />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <Experience />
            <Projects />
            <LeetCodeCard />
            <Achievements />

          </div>

        </div>

      </div>
    </div>
  );
}