import { lazy, Suspense } from 'react';
import { Navbar }      from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';

const AboutSection    = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const SkillsSection   = lazy(() => import('@/components/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ContactSection  = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <Suspense>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
}
