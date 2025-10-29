import { HeroSection } from '@/components/sections/HeroSection';
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

      {/* Main Content - Other Sections */}
      <main className="container mx-auto px-8 py-32">
        <div className="flex flex-col gap-16">
          {/* About Section - Placeholder for Epic 4 */}
          <section id="about" className="min-h-screen">
            <div className="rounded-xl border border-dashed border-[#4b5563] p-8">
              <h2 className="text-4xl font-bold text-[#f3f4f6]">Section: About</h2>
              <p className="mt-4 text-[#9ca3af]">
                Content placeholder for the "About" section. Notice how the fixed UI elements 
                overlay the scrolling content area without being obtrusive, maintaining a clean 
                and modern aesthetic.
              </p>
            </div>
          </section>

          {/* Skills Section - Placeholder for Epic 4 */}
          <section id="skills" className="min-h-screen">
            <div className="rounded-xl border border-dashed border-[#00d9ff]/50 p-8 ring-4 ring-[#00d9ff]/20">
              <h2 className="text-4xl font-bold text-[#00d9ff]">Section: Skills (Active)</h2>
              <p className="mt-4 text-[#9ca3af]">
                This section is currently marked as 'active' by the navigation dot on the right, 
                which is larger, brighter, and has a subtle glow. This provides clear visual 
                feedback to the user about their location on the page.
              </p>
            </div>
          </section>

          {/* Experience Section - Placeholder for Epic 4 */}
          <section id="experience" className="min-h-screen">
            <div className="rounded-xl border border-dashed border-[#4b5563] p-8">
              <h2 className="text-4xl font-bold text-[#f3f4f6]">Section: Experience</h2>
              <p className="mt-4 text-[#9ca3af]">
                Content placeholder for the "Experience" section. Hovering over the inactive 
                dots reveals a tooltip with the section name, improving usability and context.
              </p>
            </div>
          </section>

          {/* Projects Section - Placeholder for Epic 5 */}
          <section id="projects" className="min-h-screen">
            <div className="rounded-xl border border-dashed border-[#4b5563] p-8">
              <h2 className="text-4xl font-bold text-[#f3f4f6]">Section: Projects</h2>
              <p className="mt-4 text-[#9ca3af]">
                Content placeholder for the "Projects" section. The combination of the fixed 
                header and floating navigation provides a comprehensive yet minimal way to 
                navigate the portfolio.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
