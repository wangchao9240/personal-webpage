'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { TechBadge } from '@/components/ui/TechBadge';
import { skillsWithIcons } from '@/data/skills';

/**
 * Category title styling (consistent across all categories)
 */
const CategoryTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-4 text-xl font-semibold text-[#00d9ff]">
    {children}
  </h3>
);

/**
 * Skills Section Component
 *
 * Displays categorized technical skills with icons in a scannable format.
 * Organized into three categories: Frontend, Backend, and Tools & Others.
 *
 * Design Specifications:
 * - Section title: "Skills" (32px, bold, #f3f4f6)
 * - Category titles: 20px, semi-bold, cyan (#00d9ff)
 * - Tech badges: Icon + text pills with cyan theme
 * - Layout: Flexbox grid with 12px gap, wrapping enabled
 * - Staggered animation: 150ms delay between categories
 *
 * Categories:
 * - Frontend (6 skills): React, Vue, TypeScript, HTML5, CSS3, JavaScript
 * - Backend (2 skills): Node.js, Express
 * - Tools & Others (3 skills): Git, CMS management, SSR
 *
 * @example
 * ```tsx
 * <SkillsSection />
 * ```
 */
export function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="flex flex-col gap-8">
        {/* Frontend Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <CategoryTitle>Frontend</CategoryTitle>
          <div className="flex flex-wrap gap-3">
            {skillsWithIcons.frontend.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <TechBadge icon={skill.icon} label={skill.name} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <CategoryTitle>Backend</CategoryTitle>
          <div className="flex flex-wrap gap-3">
            {skillsWithIcons.backend.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <TechBadge icon={skill.icon} label={skill.name} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Others Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <CategoryTitle>Tools & Others</CategoryTitle>
          <div className="flex flex-wrap gap-3">
            {skillsWithIcons.tools.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <TechBadge icon={skill.icon} label={skill.name} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

