# Personal Portfolio Website Frontend Architecture Document

**Version:** 1.0  
**Last Updated:** October 29, 2025  
**Author:** Winston (Architect)

---

## Change Log

| Date       | Version | Description                            | Author              |
| ---------- | ------- | -------------------------------------- | ------------------- |
| 2025-10-29 | 1.0     | Initial frontend architecture document | Winston (Architect) |

---

## Template and Framework Selection

### Framework Selection Decision

**Selected Framework: Next.js 14+**

Based on the brainstorming session results, this project will use **Next.js** as the primary framework for the following reasons:

1. **Modern React Framework** - Built on top of React, providing the best developer experience
2. **Static Site Generation (SSG)** - Perfect for portfolio websites with mostly static content
3. **Performance Optimized** - Automatic code splitting, image optimization, and performance features out of the box
4. **SEO Friendly** - Built-in SEO optimization crucial for portfolio discoverability
5. **Simple Deployment** - Easy deployment to Vercel, Netlify, or GitHub Pages
6. **No Backend Required** - Can be deployed as a static site, aligning with the "no backend" requirement

### Starter Template Recommendation

```bash
npx create-next-app@latest personal-website --typescript --tailwind --app
```

This will set up:

- ✅ Next.js 14+ with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality

**No custom UI kit or admin template needed** - We'll build custom components to match the unique "Code Aesthetics" design vision.

---

## Frontend Tech Stack

Based on the brainstorming session requirements (geometric animations, typewriter effects, scroll animations, terminal aesthetics), here's the finalized tech stack:

### Technology Stack Table

| Category              | Technology                | Version  | Purpose                                   | Rationale                                                                                                    |
| --------------------- | ------------------------- | -------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Framework**         | Next.js                   | 14+      | React framework with SSG/SSR capabilities | Best-in-class React framework with built-in optimization, SEO, and static export for GitHub Pages deployment |
| **Language**          | TypeScript                | 5.x      | Type-safe JavaScript                      | Prevents bugs, improves IDE support, better maintainability for portfolio code quality                       |
| **UI Library**        | React                     | 18.x     | Component-based UI library                | Industry standard, rich ecosystem, excellent for interactive UIs                                             |
| **Styling**           | Tailwind CSS              | 3.x      | Utility-first CSS framework               | Rapid development, consistent design system, small bundle size with purging                                  |
| **Animation**         | Framer Motion             | 10.x     | Production-ready animation library        | Smooth scroll animations, entrance effects, hover interactions, Spring physics for natural motion            |
| **3D/Canvas**         | React Three Fiber         | 8.x      | React renderer for Three.js               | Geometric code background animation in hero section, WebGL performance                                       |
| **Typewriter Effect** | Custom Hook               | N/A      | Terminal typewriter animation             | Lightweight custom implementation, full control over timing and behavior                                     |
| **Routing**           | Next.js App Router        | Built-in | Single-page routing with anchors          | Native Next.js routing with hash navigation (#about, #projects)                                              |
| **Icons**             | React Icons               | 5.x      | Icon library                              | Comprehensive icon set for tech stack logos (React, Vue, etc.), social media icons                           |
| **Code Formatting**   | Prettier                  | 3.x      | Code formatter                            | Consistent code style across project                                                                         |
| **Linting**           | ESLint                    | 8.x      | Code quality tool                         | Catch errors early, enforce best practices                                                                   |
| **Scroll Detection**  | Intersection Observer API | Native   | Scroll-triggered animations               | Native browser API for entrance animations, no dependencies, excellent performance                           |

**Note:** No contact form or form library needed - contact information will be displayed as static icons (Email, LinkedIn, GitHub) in the header.

---

## Project Structure

Based on Next.js 14+ App Router conventions and the project requirements, here's the recommended directory structure:

```plaintext
personal-website/
├── public/                          # Static assets
│   ├── images/                      # Project screenshots, concept diagrams
│   │   ├── projects/               # Project-specific images
│   │   │   ├── chatgpt-timeline.png
│   │   │   ├── collaboration-platform.png
│   │   │   └── meme-alchemist.png
│   │   └── icons/                  # Tech stack icons, favicons
│   └── resume/
│       └── Chasen_Wang_Resume.pdf  # Downloadable resume (optional)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx             # Root layout with header/footer
│   │   ├── page.tsx               # Main single-page application
│   │   ├── globals.css            # Global styles, Tailwind imports
│   │   └── favicon.ico            # Site favicon
│   │
│   ├── components/                 # React components
│   │   ├── layout/                # Layout components
│   │   │   ├── Header.tsx        # Top navigation with contact icons
│   │   │   ├── FloatingNav.tsx   # Right-side floating dot navigation
│   │   │   └── Footer.tsx        # Footer (if needed)
│   │   │
│   │   ├── sections/              # Main page sections
│   │   │   ├── HeroSection.tsx   # Hero with geometric bg + terminal
│   │   │   ├── AboutSection.tsx  # About me card
│   │   │   ├── SkillsSection.tsx # Skills grid
│   │   │   ├── ExperienceSection.tsx  # Timeline
│   │   │   └── ProjectsSection.tsx    # Projects 2-column grid
│   │   │
│   │   ├── hero/                  # Hero-specific components
│   │   │   ├── GeometricBackground.tsx  # Three.js geometric animation
│   │   │   ├── TerminalWindow.tsx       # Terminal component
│   │   │   └── TypewriterText.tsx       # Typewriter effect
│   │   │
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Card.tsx          # Base card component
│   │   │   ├── Button.tsx        # Button component
│   │   │   ├── TechBadge.tsx     # Technology badge with icon
│   │   │   └── SectionWrapper.tsx # Wrapper with entrance animation
│   │   │
│   │   └── animations/            # Animation wrappers
│   │       ├── ScrollReveal.tsx  # Scroll-triggered entrance
│   │       └── HoverLift.tsx     # Hover lift effect for cards
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useTypewriter.ts      # Typewriter effect logic
│   │   ├── useScrollSpy.ts       # Track active section
│   │   └── useIntersectionObserver.ts  # Scroll detection
│   │
│   ├── data/                      # Static data
│   │   ├── skills.ts             # Skills list with categories
│   │   ├── experience.ts         # Work experience data
│   │   └── projects.ts           # Projects data
│   │
│   ├── types/                     # TypeScript types
│   │   ├── index.ts              # Shared types
│   │   ├── project.ts            # Project type definitions
│   │   └── experience.ts         # Experience type definitions
│   │
│   └── lib/                       # Utility functions
│       ├── constants.ts          # App constants (colors, timing, etc.)
│       └── utils.ts              # Helper functions
│
├── docs/                          # Documentation
│   ├── brainstorming-session-results.md
│   └── ui-architecture.md        # This document
│
├── .eslintrc.json                # ESLint configuration
├── .prettierrc                   # Prettier configuration
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
└── README.md                     # Project README
```

### File Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`, `Card.tsx`)
- **Hooks**: camelCase with `use` prefix (`useTypewriter.ts`, `useScrollSpy.ts`)
- **Utils/Data**: camelCase (`constants.ts`, `skills.ts`)
- **Types**: PascalCase for interfaces/types (`Project`, `Experience`)

---

## Component Standards

### Component Template

Standard template for creating new components:

````typescript
'use client'; // Only if client-side interactivity needed (animations, state, etc.)

import React from 'react';
import { motion } from 'framer-motion';

interface ComponentNameProps {
  /**
   * Brief description of the prop
   */
  title: string;
  /**
   * Optional description
   */
  description?: string;
  /**
   * Callback function example
   */
  onClick?: () => void;
  /**
   * Children components
   */
  children?: React.ReactNode;
}

/**
 * ComponentName - Brief description of what this component does
 *
 * @example
 * ```tsx
 * <ComponentName
 *   title="Example Title"
 *   description="Optional description"
 * />
 * ```
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description,
  onClick,
  children,
}) => {
  return (
    <div className="component-wrapper">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
      {children}
    </div>
  );
};

// For default exports (sections), use:
export default ComponentName;
````

### Naming Conventions

**Components:**

- **Page Sections**: `HeroSection.tsx`, `AboutSection.tsx`, `ProjectsSection.tsx`
  - Use `Section` suffix for main page sections
  - Default export for sections
- **UI Components**: `Card.tsx`, `Button.tsx`, `TechBadge.tsx`
  - Named exports for reusable components
  - PascalCase, descriptive names
- **Layout Components**: `Header.tsx`, `FloatingNav.tsx`, `Footer.tsx`
  - Named exports
- **Specialized Components**: `TerminalWindow.tsx`, `GeometricBackground.tsx`
  - Named exports, grouped in feature folders

**Hooks:**

- Pattern: `use[Feature].ts`
- Examples: `useTypewriter.ts`, `useScrollSpy.ts`, `useIntersectionObserver.ts`
- Named exports: `export const useTypewriter = () => { ... }`

**Data Files:**

- Pattern: `[feature].ts`
- Examples: `skills.ts`, `projects.ts`, `experience.ts`
- Named exports for data objects

**Types:**

- Pattern: `[feature].ts` in `types/` folder
- Example: `project.ts`, `experience.ts`
- Export individual types: `export interface Project { ... }`

**CSS/Styling:**

- Tailwind utility classes preferred
- Custom CSS only when necessary
- BEM naming for custom classes: `hero__terminal`, `card--elevated`

### Component Organization Rules

1. **"use client" Directive**:
   - Add `'use client'` at top of file if component uses:
     - React hooks (useState, useEffect, etc.)
     - Browser APIs (window, document)
     - Event handlers (onClick, onScroll, etc.)
     - Animation libraries (Framer Motion)
   - Omit for pure presentational components

2. **Import Order**:

   ```typescript
   // 1. React imports
   import React from 'react';

   // 2. Third-party libraries
   import { motion } from 'framer-motion';
   import { FaReact, FaVuejs } from 'react-icons/fa';

   // 3. Internal components
   import { Card } from '@/components/ui/Card';
   import { TechBadge } from '@/components/ui/TechBadge';

   // 4. Hooks
   import { useTypewriter } from '@/hooks/useTypewriter';

   // 5. Types
   import type { Project } from '@/types/project';

   // 6. Data
   import { projects } from '@/data/projects';

   // 7. Utils/Constants
   import { ANIMATION_DURATION } from '@/lib/constants';
   ```

3. **Props Interface**:
   - Always define props interface above component
   - Use descriptive JSDoc comments
   - Mark optional props with `?`
   - Use specific types over `any`

4. **Component Documentation**:
   - Add JSDoc comment above component
   - Include brief description and usage example

### Best Practices

- **Single Responsibility**: Each component should do one thing well
- **Composition Over Complexity**: Break large components into smaller ones
- **Props Over State**: Pass data down via props when possible
- **Type Everything**: No implicit `any` types
- **Descriptive Names**: `isLoading` not `flag`, `handleSubmit` not `doIt`
- **Early Returns**: Handle edge cases early to reduce nesting
- **Avoid Inline Functions**: Extract handlers for better performance
- **Memoization**: Use `React.memo` for expensive components

---

## State Management

### State Management Strategy

**No Global State Management Library Needed**

For this portfolio website, we will NOT use Redux, Zustand, or MobX because:

- ✅ No backend data synchronization needed
- ✅ No complex user flows or multi-step processes
- ✅ Minimal shared state across components
- ✅ Performance is not state-bound

**State Types in This Application:**

1. **Local Component State** (`useState`) - Terminal typewriter animation state, hover states, temporary UI states
2. **Navigation State** (Scroll Spy) - Track which section is currently in view, update floating navigation dots
3. **No Global State** - All data is static (skills, projects, experience)

### Store Structure

```plaintext
State Organization:
├── Local Component State (useState)
│   ├── HeroSection: typewriter progress, terminal state
│   ├── ProjectsSection: hover states
│   └── FloatingNav: menu open/closed (if hamburger on mobile)
│
└── Custom Hooks (Shared Logic)
    ├── useScrollSpy: tracks active section
    ├── useTypewriter: manages typewriter animation
    └── useIntersectionObserver: detects scroll position
```

### State Management Templates

**1. Scroll Spy Hook (for Navigation)**

```typescript
// src/hooks/useScrollSpy.ts
'use client';

import { useState, useEffect } from 'react';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

/**
 * useScrollSpy - Tracks which section is currently in viewport
 * Updates the active section for floating navigation highlighting
 */
export const useScrollSpy = (): SectionId => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};
```

**2. Typewriter Hook (for Terminal)**

```typescript
// src/hooks/useTypewriter.ts
'use client';

import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number; // ms per character
  delay?: number; // initial delay before starting
}

/**
 * useTypewriter - Animates text appearing character by character
 * Used for terminal window typewriter effect in hero section
 */
export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
}: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      let currentIndex = 0;

      const type = () => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };

      timeout = setTimeout(type, delay);
    };

    startTyping();

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};
```

**3. Intersection Observer Hook (for Scroll Animations)**

```typescript
// src/hooks/useIntersectionObserver.ts
'use client';

import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * useIntersectionObserver - Detects when element enters viewport
 * Used for triggering entrance animations on scroll
 */
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isIntersecting };
};
```

### Best Practices

1. **Keep State Close to Where It's Used** - Don't lift state unnecessarily
2. **Use Custom Hooks for Shared Logic** - Encapsulate reusable stateful logic
3. **Static Data in Files** - Skills, projects, experience stay in `data/` folder, import directly where needed
4. **Performance Considerations** - Use `useCallback` for event handlers, `useMemo` for expensive computations, scroll listeners use `{ passive: true }`

---

## Routing

### Routing Approach

**Single Page + Anchor Links (Hash Navigation)**

This portfolio uses:

- Single route: `/` (root)
- Anchor links: `/#about`, `/#skills`, `/#experience`, `/#projects`

**Benefits:**

- ✅ Smooth scrolling experience (no page reloads)
- ✅ Shareable section links
- ✅ Browser back/forward button support
- ✅ Simple implementation

### Route Configuration

```typescript
// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>
    </main>
  );
}
```

### Smooth Scroll Implementation (JavaScript-based)

```typescript
// src/lib/utils.ts
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80; // Header height offset
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

// Usage in FloatingNav.tsx or Header.tsx
<button onClick={() => scrollToSection('about')}>About</button>
```

### Navigation Component Example

```typescript
// src/components/layout/FloatingNav.tsx
'use client';

import React from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
] as const;

export const FloatingNav: React.FC = () => {
  const activeSection = useScrollSpy();

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-4">
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id} className="group relative">
            <a
              href={`#${id}`}
              className={`block w-3 h-3 rounded-full transition-all ${
                activeSection === id
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Navigate to ${label}`}
            />
            {/* Label on hover */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2
                           px-2 py-1 bg-gray-900 text-white text-sm rounded
                           opacity-0 group-hover:opacity-100 transition-opacity
                           whitespace-nowrap pointer-events-none">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

### Hash Navigation Handling

```typescript
// src/hooks/useHashNavigation.ts
'use client';

import { useEffect } from 'react';

/**
 * useHashNavigation - Handles scrolling to section on page load
 * if URL contains hash (e.g., yoursite.com/#projects)
 */
export const useHashNavigation = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
};
```

### Next.js Configuration for Static Export

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export (GitHub Pages, Netlify, etc.)
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

### Best Practices

1. **Use Semantic IDs**: Section IDs match content (`#about`, `#projects`)
2. **Offset for Fixed Headers**: Account for header height when scrolling
3. **Accessibility**: Anchor links have descriptive `aria-label` attributes
4. **Deep Linking**: Users can share direct links to sections

---

## Environment Configuration

### Environment Variables

**Required Environment Variables: NONE**

This is a pure frontend static site with no backend, APIs, or external services.

**Build Configuration:**

```json
// package.json
{
  "name": "personal-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "framer-motion": "^10.16.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "three": "^0.158.0",
    "react-icons": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.2.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/node": "^20.0.0",
    "@types/three": "^0.158.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.50.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0"
  }
}
```

### Deployment: Vercel (Recommended)

**Setup:**

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Auto-detects Next.js configuration
4. Automatic deployments on push to main branch

**Zero configuration needed** - Vercel automatically:

- Builds with `next build`
- Optimizes static assets
- Provides HTTPS and global CDN
- Enables preview deployments for PRs

### Development Setup

```bash
# 1. Initialize Project
npx create-next-app@latest personal-website --typescript --tailwind --app
cd personal-website

# 2. Install Additional Dependencies
npm install framer-motion @react-three/fiber @react-three/drei three react-icons
npm install -D @types/three

# 3. Configure next.config.js for static export
# 4. Start Development
npm run dev
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Frontend Developer Standards

### Critical Coding Rules

**1. Client vs Server Components**

- ❌ Don't use `'use client'` on every component by default
- ✅ Only add `'use client'` when using hooks, event handlers, or browser APIs
- ✅ Keep sections and layout components as Server Components when possible

**2. Import Paths**

- ❌ Don't use relative imports: `../../components/Card`
- ✅ Always use path aliases: `@/components/Card`
- Configured in `tsconfig.json` with `"@/*": ["./src/*"]`

**3. TypeScript Strictness**

- ❌ Don't use `any` type
- ❌ Don't use `// @ts-ignore`
- ✅ Define proper interfaces for all props
- ✅ Use `unknown` if type is truly unknown, then narrow with type guards

**4. Performance**

- ❌ Don't define functions inside JSX: `onClick={() => handleClick()}`
- ✅ Extract handlers: `onClick={handleClick}`
- ❌ Don't create objects/arrays in render: `style={{ margin: 10 }}`
- ✅ Define outside component or use `useMemo`

**5. Accessibility**

- ✅ All interactive elements must have accessible labels
- ✅ Use semantic HTML (`<nav>`, `<section>`, `<article>`)
- ✅ Ensure keyboard navigation works (Tab, Enter, Space)
- ✅ Add `aria-label` to icon-only buttons

**6. Images**

- ❌ Don't use `<img>` tag
- ✅ Use Next.js `<Image>` component for optimization
- ⚠️ For static export, set `unoptimized: true` in `next.config.js`

**7. Animations**

- ✅ Use Framer Motion for complex animations
- ✅ Respect `prefers-reduced-motion` media query
- ❌ Don't animate on every render (causes performance issues)
- ✅ Trigger animations once on mount or scroll into view

**8. State Management**

- ❌ Don't create global state unless absolutely necessary
- ✅ Keep state close to where it's used
- ✅ Use custom hooks to share stateful logic
- ❌ Don't put static data (projects, skills) in state

**9. Data Files**

- ✅ Store all content in `src/data/` folder
- ✅ Export as TypeScript objects with proper types
- ❌ Don't hardcode content in components
- ✅ Makes updates easier and content centralized

**10. Error Handling**

- ✅ Add null checks before accessing DOM elements
- ✅ Wrap Three.js/WebGL code in try-catch
- ✅ Provide fallbacks for failed animations
- ❌ Don't let one animation failure break entire page

### Quick Reference

**Common Commands:**

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Build
npm run build            # Production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Auto-fix linting issues

# Formatting
npx prettier --write .   # Format all files
```

**Key Import Patterns:**

```typescript
// Components
import { Card } from '@/components/ui/Card';
import HeroSection from '@/components/sections/HeroSection';

// Hooks
import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrollSpy } from '@/hooks/useScrollSpy';

// Data
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

// Types
import type { Project } from '@/types/project';

// Utils
import { scrollToSection } from '@/lib/utils';
import { ANIMATION_DURATION } from '@/lib/constants';
```

**File Naming Quick Guide:**

- Components: `PascalCase.tsx` → `HeroSection.tsx`
- Hooks: `camelCase.ts` → `useTypewriter.ts`
- Data: `camelCase.ts` → `projects.ts`
- Types: `camelCase.ts` → `project.ts`
- Utils: `camelCase.ts` → `utils.ts`

**Common Tailwind Patterns:**

```tsx
// Card with hover effect
<div className="bg-bg-card border border-gray-800 rounded-lg p-6
                shadow-card hover:shadow-card-hover
                transition-all duration-normal">

// Section wrapper
<section className="py-section px-8 max-w-6xl mx-auto">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Flex center
<div className="flex items-center justify-center">

// Fixed positioning
<nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
```

**Framer Motion Common Patterns:**

```tsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>

// Slide up on scroll
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

// Hover lift effect
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
```

**Project-Specific Patterns:**

```typescript
// Section IDs (must match)
const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects'];

// Smooth scroll to section
scrollToSection('about');

// Typewriter effect
const { displayedText, isComplete } = useTypewriter({
  text: 'const skills = {...}',
  speed: 50,
  delay: 500,
});

// Active section tracking
const activeSection = useScrollSpy();
```

### Code Review Checklist

Before committing code, verify:

- [ ] All imports use `@/` path alias
- [ ] No `any` types used
- [ ] Components have proper TypeScript interfaces
- [ ] `'use client'` only where necessary
- [ ] No console.log statements left in code
- [ ] Accessibility labels on interactive elements
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No hardcoded content (use data files)
- [ ] ESLint passes with no warnings
- [ ] Code formatted with Prettier

---

## Summary

This frontend architecture document provides a complete blueprint for building the personal portfolio website with Next.js 14+.

**Key Architectural Decisions:**

- ✅ Next.js 14+ with App Router and TypeScript
- ✅ Single-page architecture with smooth scroll and hash navigation
- ✅ Minimal state management (no Redux/Zustand needed)
- ✅ React Three Fiber for geometric code background
- ✅ Framer Motion for scroll animations
- ✅ Tailwind CSS for styling
- ✅ Static export for Vercel deployment
- ✅ No backend, APIs, or testing in MVP

**Next Steps:**

1. Initialize Next.js project with recommended dependencies
2. Set up project structure following the defined directory layout
3. Implement custom hooks (useTypewriter, useScrollSpy, useIntersectionObserver)
4. Build Hero Section with geometric background (most complex feature)
5. Implement remaining sections (About, Skills, Experience, Projects)
6. Add navigation and polish animations
7. Deploy to Vercel

**Reference this document** when implementing components, hooks, and features to ensure consistency with architectural decisions.

---

_Architecture document created by Winston (Architect) on October 29, 2025_
_Based on brainstorming session results from Mary (Business Analyst)_
