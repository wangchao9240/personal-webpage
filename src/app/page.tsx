import { HeroSection } from '@/components/sections/HeroSection';
import { Header } from '@/components/layout/Header';
import { FloatingNav } from '@/components/layout/FloatingNav';

export default function Home() {
  return (
    <>
      {/* Fixed Header with Contact Icons */}
      <Header />

      {/* Floating Navigation Dots */}
      <FloatingNav />

      {/* Main Content */}
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section - Placeholder for Epic 4 */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-terminal-green">About Me</h2>
            <div className="rounded-xl border border-dashed border-[#30363d] p-8">
              <p className="text-[#8b949e] text-lg leading-relaxed">
                About section coming soon in Epic 4...
                <br />
                <br />
                This placeholder section demonstrates the scroll spy functionality.
                Notice how the navigation dot updates as you scroll through different sections.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section - Placeholder for Epic 4 */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-terminal-green">Skills</h2>
            <div className="rounded-xl border border-dashed border-[#30363d] p-8">
              <p className="text-[#8b949e] text-lg leading-relaxed">
                Skills section coming soon in Epic 4...
                <br />
                <br />
                Technical skills showcase will be displayed here with visual cards
                and animations.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section - Placeholder for Epic 4 */}
        <section
          id="experience"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-terminal-green">Experience</h2>
            <div className="rounded-xl border border-dashed border-[#30363d] p-8">
              <p className="text-[#8b949e] text-lg leading-relaxed">
                Experience section coming soon in Epic 4...
                <br />
                <br />
                Work experience timeline will be displayed here with detailed
                descriptions of roles and achievements.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section - Placeholder for Epic 5 */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-terminal-green">Projects</h2>
            <div className="rounded-xl border border-dashed border-[#30363d] p-8">
              <p className="text-[#8b949e] text-lg leading-relaxed">
                Projects section coming soon in Epic 5...
                <br />
                <br />
                Featured projects with live demos and GitHub links will be showcased here
                with interactive cards and hover effects.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
