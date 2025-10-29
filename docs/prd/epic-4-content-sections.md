# Epic 4: Content Sections (About, Skills, Experience)

**Epic ID:** EPIC-004  
**Epic Name:** Content Sections - About, Skills, Experience  
**Priority:** High (Core content delivery)  
**Estimated Effort:** 6-8 hours  
**Status:** Not Started

---

## Epic Goal

Implement the About, Skills, and Experience sections that communicate the candidate's background, technical capabilities, and professional history to recruiters in a clear, scannable format.

---

## Epic Description

### Context

These three sections provide the foundation of the candidate's professional profile:
- **About:** 2-3 sentence value proposition
- **Skills:** Categorized technical skills (Frontend, Backend, Tools)
- **Experience:** Timeline of 4 work positions with highlights

All sections follow the card-based design aesthetic with scroll entrance animations.

### What This Epic Delivers

- ✅ About section with value-driven content in card layout
- ✅ Skills section with categorized tech stack display (icons + text)
- ✅ Experience section with timeline visualization
- ✅ Scroll entrance animations for all sections
- ✅ Data-driven architecture (content in separate files)
- ✅ Reusable UI components (Card, TechBadge, SectionWrapper)

---

## User Stories

### Story 4.1: Create Reusable UI Components
**As a** developer  
**I want to** build reusable UI components for cards and badges  
**So that** all sections have consistent styling

**Acceptance Criteria:**
- [ ] Card component created with consistent styling
- [ ] TechBadge component created for technology display
- [ ] SectionWrapper component created for scroll animations
- [ ] All components follow architecture template
- [ ] Components accept necessary props (children, className, etc.)
- [ ] TypeScript interfaces defined for all props

**Components to Create:**
```
src/components/ui/
├── Card.tsx           # Base card with shadow, border, padding
├── TechBadge.tsx      # Tech badge with icon + text
└── SectionWrapper.tsx # Wrapper with scroll reveal animation
```

**Card Styling:**
- Background: `bg-bg-card`
- Border: `border border-gray-800`
- Padding: `p-6` or `p-card`
- Shadow: `shadow-card hover:shadow-card-hover`
- Border radius: `rounded-lg`

**Files:**
- `src/components/ui/Card.tsx`
- `src/components/ui/TechBadge.tsx`
- `src/components/ui/SectionWrapper.tsx`

---

### Story 4.2: Create Data Files for Content
**As a** developer  
**I want to** store all content in separate TypeScript files  
**So that** content updates are easy and don't require component changes

**Acceptance Criteria:**
- [ ] Skills data file created with Frontend, Backend, Tools categories
- [ ] Experience data file created with 4 work positions
- [ ] TypeScript types defined for Skills and Experience
- [ ] Data follows architecture standards (named exports)
- [ ] All content from resume accurately transcribed

**Data Structure:**
```typescript
// skills.ts
export const skills = {
  frontend: ["React", "Vue", "TypeScript", "HTML5", "CSS3", "JavaScript"],
  backend: ["Node.js", "Express"],
  tools: ["Git", "CMS management", "SSR"]
};

// experience.ts
export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  highlights: string[]; // 1-2 key highlights
}

export const experiences: WorkExperience[] = [
  // 4 positions from resume
];
```

**Files:**
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/types/experience.ts`

---

### Story 4.3: Build About Section
**As a** recruiter  
**I want to** read a concise summary of the candidate's value proposition  
**So that** I quickly understand their expertise and focus

**Acceptance Criteria:**
- [ ] AboutSection component created
- [ ] Section has ID "about" for navigation
- [ ] Uses Card component for content container
- [ ] Contains approved value-driven text (from brainstorming):
  - "Creative problem solver with 6+ years of front-end development experience..."
- [ ] Scroll entrance animation implemented (fade + slide up)
- [ ] Typography is clear and readable
- [ ] Section wrapper max-width: 6xl, centered

**Content:**
```
Creative problem solver with 6+ years of front-end development experience. 
I specialize in transforming complex requirements into elegant, user-friendly 
web applications. Proficient in React, Vue, and modern JavaScript ecosystem, 
with a strong focus on performance optimization and clean code.
```

**Animation:**
- Fade in + slide up (30px) on scroll into view
- Duration: 600ms
- Trigger once

**Files:**
- `src/components/sections/AboutSection.tsx`

---

### Story 4.4: Build Skills Section
**As a** recruiter  
**I want to** see a categorized list of technical skills  
**So that** I can quickly assess the candidate's tech stack proficiency

**Acceptance Criteria:**
- [ ] SkillsSection component created
- [ ] Section has ID "skills" for navigation
- [ ] Skills organized into 3 categories: Frontend, Backend, Tools
- [ ] Each category displayed as a subsection
- [ ] Technologies shown as TechBadge components (icon + text)
- [ ] Tech stack icons from React Icons library
- [ ] Card grid layout for visual organization
- [ ] Scroll entrance animation for skill cards

**Layout:**
```
Skills Section
├── Frontend Category
│   ├── React badge
│   ├── Vue badge
│   ├── TypeScript badge
│   └── ... (6 skills)
├── Backend Category
│   └── ... (2 skills)
└── Tools & Others Category
    └── ... (3 skills)
```

**Tech Icons Mapping:**
- React → FaReact
- Vue → FaVuejs
- TypeScript → SiTypescript
- Node.js → FaNode
- Git → FaGit
- (etc., from React Icons)

**Files:**
- `src/components/sections/SkillsSection.tsx`

---

### Story 4.5: Build Experience Timeline Section
**As a** recruiter  
**I want to** see a timeline of work experience  
**So that** I can understand the candidate's career progression

**Acceptance Criteria:**
- [ ] ExperienceSection component created
- [ ] Section has ID "experience" for navigation
- [ ] Timeline visualization implemented (left line, right content)
- [ ] 4 work experiences displayed newest-first (2024 → 2017)
- [ ] Each position shows: company, position, duration, 1-2 highlights
- [ ] Timeline dots/markers for each position
- [ ] Responsive card layout for each experience
- [ ] Scroll entrance animation (staggered for each item)

**Timeline Design:**
- Vertical line on left side
- Dots at each position
- Cards on right with company/position info
- Subtle connecting lines

**Experience Data (from Resume):**
1. Shanghai Jiufang Cloud (Nov 2020 - Apr 2024)
2. Shanghai YouBiHui Training School (Aug 2020 - Oct 2020)
3. Huizhong Business Consulting (May 2018 - Jun 2020)
4. Qingdao Jiaoyin Information Technology (Oct 2017 - Aug 2018)

**Animation:**
- Each timeline item fades and slides in
- Stagger delay: 100ms between items
- Smooth reveal from top to bottom

**Files:**
- `src/components/sections/ExperienceSection.tsx`

---

### Story 4.6: Implement Scroll Animations for Sections
**As a** recruiter  
**I want to** see sections smoothly animate into view  
**So that** the portfolio feels polished and engaging

**Acceptance Criteria:**
- [ ] All sections use SectionWrapper with entrance animation
- [ ] Framer Motion used for smooth animations
- [ ] Animation triggers when section enters viewport
- [ ] Animation triggers only once (not on scroll up)
- [ ] Animations respect `prefers-reduced-motion` setting
- [ ] No performance impact (60fps maintained)

**Animation Specifications:**
```tsx
// Standard scroll reveal
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

**Files:**
- Enhanced all section components with animations

---

## Definition of Done

### Epic-Level Acceptance Criteria

- [ ] All 6 stories completed with acceptance criteria met
- [ ] About, Skills, and Experience sections fully functional
- [ ] All content accurate from resume
- [ ] Scroll animations smooth and performant
- [ ] Data architecture followed (content in data files)
- [ ] Reusable components created and used
- [ ] Code follows architecture standards
- [ ] No TypeScript errors or console warnings

### Content Validation

- [ ] About text matches approved value proposition
- [ ] All 11 skills from resume included
- [ ] All 4 work experiences accurately represented
- [ ] Company names, dates, and locations correct
- [ ] 1-2 highlights per job selected appropriately

### Visual Quality

- [ ] Card styling consistent across all sections
- [ ] Tech badges visually appealing with icons
- [ ] Timeline is clear and easy to follow
- [ ] Typography is readable and professional
- [ ] Spacing and layout are balanced

---

## Dependencies

**Requires:**
- Epic 1: Project Foundation
- Epic 3: Navigation System (for section IDs)

**Blocks:**
- None

**Technical Dependencies:**
- Framer Motion (for animations)
- React Icons (for tech stack icons)
- Resume data (Chasen_Wang_Resume.md)

---

## Risk Assessment

### Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content accuracy errors | Low | Low | Cross-reference with resume |
| Animation performance issues | Low | Medium | Use lightweight animations, test on target hardware |
| Icon library size | Low | Low | React Icons is tree-shakeable |

### Risk Mitigation Plan

1. **Content Accuracy:** Carefully transcribe from resume, have user review
2. **Performance:** Keep animations simple, use Intersection Observer efficiently
3. **Bundle Size:** Import only needed icons, not entire library

---

## Technical Notes

### Section IDs
- About: `id="about"`
- Skills: `id="skills"`
- Experience: `id="experience"`

### Data Architecture
All content stored in `src/data/` folder:
- Skills: `skills.ts`
- Experience: `experience.ts`

### Component Hierarchy
```
Sections
├── AboutSection
│   └── Card
├── SkillsSection
│   ├── Category Headers
│   └── TechBadge[] (per category)
└── ExperienceSection
    └── Timeline Items[]
        └── Card (per job)
```

---

## Success Metrics

- ✅ All content accurate (100% match with resume)
- ✅ Animations trigger correctly (100% of time)
- ✅ Performance maintained (60fps)
- ✅ Zero content-related questions from recruiters

---

## Out of Scope

- ❌ Downloadable PDF resume (may add later)
- ❌ Detailed job descriptions (only 1-2 highlights)
- ❌ Skills proficiency levels (no progress bars)
- ❌ Endorsements or recommendations

---

**Epic Owner:** Development Team  
**Created:** 2025-10-29  
**Previous Epic:** Epic 3 - Navigation System  
**Next Epic:** Epic 5 - Projects Showcase

