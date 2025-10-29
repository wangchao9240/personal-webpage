'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

/**
 * Projects Section Component
 *
 * Displays all projects in a 2-column grid layout with interactive cards.
 * Each card shows project screenshot, description, tech stack, and action buttons.
 *
 * Design Specifications (from mockup):
 * - Section title: "Featured Work" (32px, bold, #f3f4f6)
 * - Grid: 2 columns on desktop, 24px gap
 * - 3 project cards total (3rd card in left column)
 * - Staggered entrance animations (150ms delay between cards)
 * - Cards have hover lift effect with button reveal
 *
 * Layout:
 * ```
 * ┌─────────┐  ┌─────────┐
 * │ Card 1  │  │ Card 2  │
 * └─────────┘  └─────────┘
 * 
 * ┌─────────┐
 * │ Card 3  │  (Left column only)
 * └─────────┘
 * ```
 *
 * @example
 * ```tsx
 * <ProjectsSection />
 * ```
 */
export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Featured Work">
      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

