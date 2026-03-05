/**
 * App.tsx — Hugo González Pérez · Portfolio & Developer Blog
 *
 * Stack:  React · Motion (Framer) · Three.js
 * Styles: src/styles/index.css (global) + inline styles per component
 */

import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      {/* 3D decorative background */}
      <ThreeBackground />

      {/* Page structure */}
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
