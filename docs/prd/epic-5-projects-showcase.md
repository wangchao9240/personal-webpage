# Epic 5: Projects Showcase

**Epic ID:** EPIC-005  
**Epic Name:** Projects Showcase  
**Priority:** Critical (Core portfolio value)  
**Estimated Effort:** 5-7 hours  
**Status:** Not Started

---

## Epic Goal

Create a visually compelling 2-column projects showcase displaying 3 completed projects with screenshots/concept diagrams, descriptions, tech stacks, and links to live demos and GitHub repositories.

---

## Epic Description

### Context

The Projects section is the **most important part of the portfolio** - it's the tangible proof of the candidate's capabilities. From brainstorming: "Projects are the Proof: Among all sections, the Projects showcase is most critical—it's the tangible evidence of capabilities."

### What This Epic Delivers

- ✅ 2-column card grid layout for projects (desktop)
- ✅ 3 project cards with screenshots/concept images
- ✅ Project name, one-sentence description, and tech stack per card
- ✅ Tech stack badges with icons (reusing TechBadge component)
- ✅ Hover lift effect revealing Live Demo and GitHub buttons
- ✅ Links open in new tabs with proper security attributes
- ✅ Data-driven architecture (projects in separate file)

### Three Projects to Showcase

1. **ChatGPT Timeline Navigator**
   - Browser extension/tool
   - GitHub only (no live demo)
   - Concept diagram needed

2. **Real-time Collaboration Platform**
   - Whiteboard + document collaboration
   - Live Demo + GitHub
   - Interface screenshots available

3. **MEME Alchemist**
   - MEME fetching + facts → image generation
   - Live Demo + GitHub
   - Interface screenshots available

---

## User Stories

### Story 5.1: Create Projects Data File

**As a** developer  
**I want to** define project data in a structured TypeScript file  
**So that** project information is centralized and easily updatable

**Acceptance Criteria:**

- [ ] Project type interface defined with all required fields
- [ ] Projects data file created with 3 projects
- [ ] Each project includes: name, description, tech stack, links, image path
- [ ] TypeScript types enforce data structure
- [ ] Data exported as named export
- [ ] Placeholder image paths defined (actual images in Story 5.3)

**Project Interface:**

```typescript
export interface Project {
  id: string;
  name: string;
  description: string; // One sentence
  techStack: string[]; // Array of technology names
  imagePath: string; // Path to screenshot/concept image
  liveUrl?: string; // Optional live demo URL
  githubUrl: string; // GitHub repository URL
}
```

**Files:**

- `src/types/project.ts`
- `src/data/projects.ts`

---

### Story 5.2: Create Project Card Component

**As a** recruiter  
**I want to** see project information in visually appealing cards  
**So that** I can quickly understand each project's scope and technology

**Acceptance Criteria:**

- [ ] ProjectCard component created accepting Project type
- [ ] Card displays project image at top
- [ ] Project name displayed as heading
- [ ] One-sentence description displayed
- [ ] Tech stack shown as TechBadge components
- [ ] Hover effect lifts card and reveals action buttons
- [ ] Live Demo and GitHub buttons visible on hover
- [ ] Component follows architecture template

**Card Layout:**

```
ProjectCard
├── Image (top, aspect ratio 16:9 or 2:1)
├── Content Area
│   ├── Project Name (h3)
│   ├── Description (p)
│   └── Tech Stack
│       └── TechBadge[] (flex wrap)
└── Action Buttons (reveal on hover)
    ├── Live Demo button (if liveUrl exists)
    └── GitHub button
```

**Hover Effect:**

- Transform: translateY(-8px)
- Shadow: enhanced shadow
- Buttons: fade in from opacity 0 to 1
- Transition: 300ms ease

**Files:**

- `src/components/ui/ProjectCard.tsx`

---

### Story 5.3: Prepare Project Images

**As a** recruiter  
**I want to** see visual representations of each project  
**So that** I can quickly grasp what each project looks like

**Acceptance Criteria:**

- [ ] Screenshots captured for Collaboration Platform
- [ ] Screenshots captured for MEME Alchemist
- [ ] Concept diagram created for ChatGPT Timeline Navigator
- [ ] Images optimized for web (reasonable file size)
- [ ] Images saved to `public/images/projects/` directory
- [ ] Image paths updated in projects data file
- [ ] Images have consistent aspect ratio (16:9 recommended)

**Image Requirements:**

- Format: PNG or JPEG
- Size: Max 1200px width
- File size: < 500KB each
- Naming: kebab-case (e.g., `chatgpt-timeline.png`)

**Image Locations:**

```
public/images/projects/
├── chatgpt-timeline.png      # Concept diagram
├── collaboration-platform.png # Screenshot
└── meme-alchemist.png         # Screenshot
```

**Files:**

- Image files in `public/images/projects/`
- Updated `src/data/projects.ts` with correct paths

---

### Story 5.4: Build Projects Section Component

**As a** recruiter  
**I want to** see all 3 projects in a clean grid layout  
**So that** I can easily compare and explore the candidate's work

**Acceptance Criteria:**

- [ ] ProjectsSection component created
- [ ] Section has ID "projects" for navigation
- [ ] 2-column grid on desktop (grid-cols-2)
- [ ] Imports projects data from data file
- [ ] Maps over projects array to render ProjectCard components
- [ ] Section title "Projects" or "Featured Work"
- [ ] Scroll entrance animation for entire section
- [ ] Cards have staggered entrance animations

**Grid Layout:**

- Desktop: 2 columns
- Gap: 6 (1.5rem)
- Max width: 6xl, centered
- 3rd card spans first column (odd number)

**Animation:**

- Section fades in
- Cards stagger in with 150ms delay between each
- Smooth fade + slide up

**Files:**

- `src/components/sections/ProjectsSection.tsx`

---

### Story 5.5: Implement Project Links and Buttons

**As a** recruiter  
**I want to** click buttons to view live demos and GitHub repositories  
**So that** I can explore projects in detail

**Acceptance Criteria:**

- [ ] Live Demo button links to project URL (if available)
- [ ] GitHub button links to repository URL
- [ ] Links open in new tab (`target="_blank"`)
- [ ] Links include security attributes (`rel="noopener noreferrer"`)
- [ ] Buttons have consistent styling
- [ ] Hover states for buttons
- [ ] GitHub button shows for all projects
- [ ] Live Demo button only shows if liveUrl exists

**Button Styling:**

- Live Demo: Primary color (blue)
- GitHub: Secondary color (gray)
- Size: Small, compact
- Icons: External link icon or arrow
- Hover: Slight scale or color change

**Security:**

```tsx
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View live demo"
>
```

**Files:**

- Enhanced `src/components/ui/ProjectCard.tsx`

---

### Story 5.6: Optimize Project Images for Performance

**As a** developer  
**I want to** optimize project images for fast loading  
**So that** the projects section loads quickly without lag

**Acceptance Criteria:**

- [ ] Images compressed to reasonable file sizes (< 300KB each)
- [ ] Next.js Image component used (with unoptimized flag for static export)
- [ ] Images have proper alt text for accessibility
- [ ] Images load with proper aspect ratio (no layout shift)
- [ ] Lazy loading implemented for images
- [ ] Placeholder or blur effect while loading

**Image Optimization:**

```tsx
<Image
  src={project.imagePath}
  alt={`${project.name} screenshot`}
  width={600}
  height={400}
  unoptimized // Required for static export
  className="rounded-t-lg"
/>
```

**Files:**

- Enhanced `src/components/ui/ProjectCard.tsx` with Image component

---

## Definition of Done

### Epic-Level Acceptance Criteria

- [ ] All 6 stories completed with acceptance criteria met
- [ ] 3 projects displayed in 2-column grid
- [ ] All project images present and optimized
- [ ] Live Demo and GitHub links functional
- [ ] Hover effects smooth and appealing
- [ ] Tech stack badges display with icons
- [ ] Scroll animations working correctly
- [ ] Code follows architecture standards
- [ ] No console errors or warnings

### Content Validation

- [ ] Project names accurate
- [ ] Descriptions are concise (one sentence each)
- [ ] Tech stacks correctly list technologies used
- [ ] All links point to correct URLs
- [ ] Images accurately represent each project

### Visual Quality

- [ ] Cards are visually consistent
- [ ] Images have good quality and appropriate size
- [ ] Hover effects are smooth and professional
- [ ] Layout is balanced and scannable
- [ ] Typography is clear and readable

---

## Dependencies

**Requires:**

- Epic 1: Project Foundation
- Epic 3: Navigation System (for section ID)
- Epic 4: Content Sections (for reusable TechBadge component)

**Blocks:**

- None

**Technical Dependencies:**

- Projects data (user must provide links and image URLs/files)
- React Icons (for tech stack icons)
- Framer Motion (for animations)
- Next.js Image component

---

## Risk Assessment

### Risks

| Risk                                          | Probability | Impact | Mitigation                                   |
| --------------------------------------------- | ----------- | ------ | -------------------------------------------- |
| Missing project links/URLs                    | Medium      | Medium | Request from user before implementation      |
| Image quality issues                          | Low         | Low    | Review images before committing              |
| Large image file sizes                        | Medium      | Medium | Compress images, use Next.js Image component |
| Concept diagram creation for ChatGPT Timeline | Medium      | Low    | Can use placeholder or simple diagram        |

### Risk Mitigation Plan

1. **Missing Links:** Request all project URLs from user at start of epic
2. **Image Quality:** Review and approve all images before final deployment
3. **File Size:** Use image compression tools (TinyPNG, ImageOptim)
4. **Concept Diagram:** Create simple, clean diagram in Figma or use screenshot if available

---

## Technical Notes

### Project Data Example

```typescript
export const projects: Project[] = [
  {
    id: 'chatgpt-timeline',
    name: 'ChatGPT Timeline Navigator',
    description:
      'Browser extension for navigating ChatGPT conversation history with timeline visualization',
    techStack: ['React', 'TypeScript', 'Chrome Extension API'],
    imagePath: '/images/projects/chatgpt-timeline.png',
    githubUrl: 'https://github.com/...',
  },
  {
    id: 'collaboration-platform',
    name: 'Real-time Collaboration Platform',
    description:
      'Web application featuring real-time whiteboard and document collaboration',
    techStack: ['Next.js', 'WebSocket', 'Canvas API', 'TypeScript'],
    imagePath: '/images/projects/collaboration-platform.png',
    liveUrl: 'https://...',
    githubUrl: 'https://github.com/...',
  },
  {
    id: 'meme-alchemist',
    name: 'MEME Alchemist',
    description:
      'AI-powered meme generator combining trending memes with factual information',
    techStack: ['React', 'Node.js', 'OpenAI API', 'Image Processing'],
    imagePath: '/images/projects/meme-alchemist.png',
    liveUrl: 'https://...',
    githubUrl: 'https://github.com/...',
  },
];
```

---

## Success Metrics

- ✅ All 3 projects displayed correctly
- ✅ 100% of project links functional
- ✅ Images load in < 2 seconds
- ✅ Zero broken links or images
- ✅ Hover effects work on all cards

---

## Out of Scope

- ❌ Project filtering or search
- ❌ Project detail pages (separate routes)
- ❌ Video demos
- ❌ Live project previews (iframes)
- ❌ Project tags or categories beyond tech stack

---

## User Action Items

**Before starting this epic, the user must provide:**

1. ✅ Live demo URLs for:
   - Real-time Collaboration Platform
   - MEME Alchemist

2. ✅ GitHub repository URLs for all 3 projects

3. ✅ Screenshots for:
   - Real-time Collaboration Platform
   - MEME Alchemist

4. ✅ Concept diagram or screenshot for:
   - ChatGPT Timeline Navigator

---

**Epic Owner:** Development Team  
**Created:** 2025-10-29  
**Previous Epic:** Epic 4 - Content Sections  
**Next Epic:** Epic 6 - Polish & Deployment
