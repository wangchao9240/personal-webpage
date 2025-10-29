'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Project } from '@/types/project';
import { TechBadge } from '@/components/ui/TechBadge';
import { skillsWithIcons } from '@/data/skills';

/**
 * Props for the ProjectCard component
 */
export interface ProjectCardProps {
  /** Project data to display */
  project: Project;
  /** Card index for staggered animation */
  index: number;
}

/**
 * ProjectCard Component
 *
 * A card component for displaying project information with interactive hover effects.
 * Features project screenshot, name, description, tech stack badges, and action buttons.
 *
 * Design Specifications (from mockup):
 * - Card lift: translateY(-8px) on hover
 * - Border glow: #30363d → #00d9ff on hover
 * - Shadow: enhanced with cyan tint on hover
 * - Buttons: fade in from bottom on hover
 * - Image: 16:9 aspect ratio at top
 * - Content: 24px padding
 *
 * Hover Interaction:
 * - Default: Buttons hidden (opacity: 0)
 * - Hover: Card lifts, border glows, buttons reveal with gradient overlay
 *
 * @example
 * ```tsx
 * <ProjectCard project={projectData} index={0} />
 * ```
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Get icons for tech stack (fallback to React icon if not found)
  const getTechIcon = (techName: string) => {
    const allSkills = [
      ...skillsWithIcons.frontend,
      ...skillsWithIcons.backend,
      ...skillsWithIcons.tools,
    ];
    const skill = allSkills.find(
      (s) => s.name.toLowerCase() === techName.toLowerCase()
    );
    return skill?.icon;
  };

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-lg bg-[#0d1117] border border-[#30363d] shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#00d9ff] hover:shadow-[0_12px_24px_rgba(0,217,255,0.2)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`${project.name} project card`}
    >
      {/* Project Image */}
      <div className="relative w-full aspect-video bg-[#161b22]">
        <Image
          src={project.imagePath}
          alt={`${project.name} - ${project.description}`}
          fill
          unoptimized // Required for static export
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Project Name */}
        <h3 className="text-[#f3f4f6] text-2xl font-bold leading-normal mb-3">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-[#9ca3af] text-base font-normal leading-[1.6] mb-4">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
          {project.techStack.map((tech) => {
            const icon = getTechIcon(tech);
            return icon ? (
              <TechBadge key={tech} icon={icon} label={tech} className="text-xs px-2.5 py-1.5" />
            ) : (
              <span
                key={tech}
                className="inline-flex items-center rounded bg-[#00d9ff]/10 border border-[#00d9ff]/30 px-2.5 py-1.5 text-xs font-medium text-[#00d9ff]"
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Action Buttons Overlay (Hidden by default, shown on hover) */}
      <motion.div
        className="absolute inset-0 flex items-end bg-gradient-to-t from-[rgba(13,17,23,0.95)] via-[rgba(13,17,23,0.8)] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex w-full flex-wrap gap-3 px-6 py-6 justify-start pointer-events-auto">
          {/* Live Demo Button (only if liveUrl exists) */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[84px] items-center justify-center gap-2 rounded h-auto px-5 py-2.5 bg-[#00d9ff] text-[#0a0e1a] text-sm font-semibold leading-normal tracking-wide transition-all duration-200 hover:bg-[#00b8d9] hover:scale-105"
              aria-label={`View live demo of ${project.name} (opens in new tab)`}
            >
              <FaExternalLinkAlt className="text-base" aria-hidden="true" />
              <span className="truncate">Live Demo</span>
            </a>
          )}

          {/* GitHub Button (always visible) */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] items-center justify-center gap-2 rounded h-auto px-5 py-2.5 bg-[#30363d] text-[#f3f4f6] text-sm font-semibold leading-normal tracking-wide transition-all duration-200 hover:bg-[#484f58] hover:scale-105"
            aria-label={`View ${project.name} on GitHub (opens in new tab)`}
          >
            <FaGithub className="text-base" aria-hidden="true" />
            <span className="truncate">GitHub</span>
          </a>
        </div>
      </motion.div>
    </motion.article>
  );
}

