'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { experiences, WorkExperience } from '@/data/experience';

/**
 * Timeline Item Component
 *
 * Displays a single work experience entry in the timeline format
 */
interface TimelineItemProps {
  experience: WorkExperience;
  index: number;
  isLast: boolean;
}

function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Timeline Line & Dot */}
      <div className="relative flex flex-col items-center">
        {/* Timeline Dot */}
        <div
          className="relative z-10 h-3 w-3 rounded-full border-2 
            border-[#0EA5E9] bg-white dark:border-[#00d9ff] dark:bg-[#0a0e1a]"
          style={{
            boxShadow: '0 0 8px rgba(14, 165, 233, 0.2)',
          }}
          aria-hidden="true"
        />
        
        {/* Vertical Line (only if not last item) */}
        {!isLast && (
          <div 
            className="absolute top-3 h-full w-0.5 
              bg-[#E2E8F0] dark:bg-[#30363d]"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Experience Card */}
      <div className="flex-1 pb-6">
        <Card hover={false}>
          {/* Company Name */}
          <h3 className="text-lg font-bold 
            text-[#0F172A] dark:text-[#f3f4f6]">
            {experience.company}
          </h3>
          
          {/* Position */}
          <h4 className="mt-1 text-base font-semibold 
            text-[#475569] dark:text-[#9ca3af]">
            {experience.position}
          </h4>
          
          {/* Duration & Location */}
          <p className="mt-1 text-sm 
            text-[#64748B] dark:text-[#6b7280]">
            {experience.duration} · {experience.location}
          </p>
          
          {/* Highlights */}
          <ul className="mt-4 space-y-2" role="list">
            {experience.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex gap-2 text-base 
                  text-[#475569] dark:text-[#9ca3af]"
              >
                <span className="text-[#0EA5E9] dark:text-[#00d9ff]" aria-hidden="true">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </motion.div>
  );
}

/**
 * Experience Section Component
 *
 * Displays work experience in a vertical timeline format.
 * Shows 4 positions in reverse chronological order (newest first).
 *
 * Design Specifications:
 * - Section title: "Experience" (32px, bold, #f3f4f6)
 * - Timeline line: 2px wide, #30363d (gray)
 * - Timeline dots: 12px diameter, hollow, #00d9ff with glow
 * - Cards: Standard Card component styling
 * - Content hierarchy:
 *   - Company: 18px, bold, #f3f4f6
 *   - Position: 16px, semi-bold, #9ca3af
 *   - Duration/Location: 14px, regular, #6b7280
 *   - Highlights: 16px, regular, #9ca3af with cyan bullets
 * - Animation: Staggered reveal, 150ms delay between items
 *
 * Timeline Structure:
 * ```
 * ●━━━━━━━━━━━━━━━┐
 * │               │  Card (Company 1)
 * │               └──────────────────
 * ●━━━━━━━━━━━━━━━┐
 * │               │  Card (Company 2)
 * │               └──────────────────
 * ...
 * ```
 *
 * @example
 * ```tsx
 * <ExperienceSection />
 * ```
 */
export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={`${exp.company}-${exp.duration}`}
            experience={exp}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

