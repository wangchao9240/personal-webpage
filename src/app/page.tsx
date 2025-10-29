import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* About section placeholder for scroll target */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-terminal-muted max-w-2xl">
            About section coming soon in Epic 4...
          </p>
        </div>
      </section>
    </main>
  );
}
