import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TejaBot from "./components/TejaBot";
import CustomCursor from "./components/CustomCursor";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* Interactive trailing wine-purple cursor for desktop */}
      <CustomCursor />

      {/* Main Luxury Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* TejaBot Interactive AI Assistant */}
      <TejaBot />

      {/* In-app Resume Quick-View Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
