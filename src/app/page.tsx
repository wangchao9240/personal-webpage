import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { Header } from '@/components/layout/Header';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { HeroBackground } from '@/components/hero/HeroBackground';

export default function Home() {
  return (
    <>
      {/* Global Animated Background - Fixed to entire page */}
      <div className="fixed inset-0 w-full h-full -z-10" aria-hidden="true">
        <HeroBackground />
      </div>

      {/* Fixed Header with Contact Icons */}
      <Header />

      {/* Floating Navigation Dots */}
      <FloatingNav />

      {/* Hero Section - Full Screen (Epic 2) */}
      <HeroSection />

      {/* Main Content - Content Sections (Epic 4) */}
      <main className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32">
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
          {/* About Section */}
          <AboutSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Projects Section (Epic 5) */}
          <ProjectsSection />
        </div>
      </main>
    </>
  );
}
