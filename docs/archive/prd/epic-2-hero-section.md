# Epic 2: Hero Section with Code Aesthetics

**Epic ID:** EPIC-002  
**Epic Name:** Hero Section with Code Aesthetics  
**Priority:** Critical (First impression, highest visual impact)  
**Estimated Effort:** 12-18 hours  
**Status:** Not Started

---

## Epic Goal

Create a visually striking Hero section with geometric code pattern background animation and terminal-style window displaying tech stack with typewriter effect, establishing the "Code Aesthetics" brand identity and providing the first impression for recruiters.

---

## Epic Description

### Context

The Hero section is the first thing recruiters see when visiting the portfolio. It must immediately communicate the candidate's developer identity through visual aesthetics while being technically impressive. This is identified in the architecture as the **most complex feature** requiring Three.js/WebGL integration.

### What This Epic Delivers

- ✅ Geometric code pattern background with slow rotation/morphing animation (WebGL)
- ✅ Terminal-style window component with authentic aesthetic
- ✅ Typewriter effect displaying tech stack in code format (5-second animation)
- ✅ "Run" button that smoothly scrolls to About section
- ✅ Responsive layout optimized for desktop (mobile in later epic)
- ✅ Performance optimized to maintain 60fps

### Design Vision (from Brainstorming)

**Background:** Geometric code patterns (NOT Matrix rain, NOT editor style) with slow rotation/morphing - modern, artistic  
**Center Element:** Terminal-style window displaying real tech stack in code format  
**Animation:** 5-second typewriter effect  
**Interaction:** "Run" button scrolls to About section  
**Philosophy:** Minimal, no excess elements

---

## User Stories

### Story 2.1: Create Custom Hooks for Hero Section

**As a** developer  
**I want to** implement custom React hooks for typewriter effect and intersection observer  
**So that** reusable logic is separated from components

**Acceptance Criteria:**

- [ ] `useTypewriter` hook created with text, speed, and delay parameters
- [ ] Hook returns `displayedText` and `isComplete` states
- [ ] `useIntersectionObserver` hook created for scroll detection
- [ ] Both hooks follow architecture template with TypeScript interfaces
- [ ] Hooks are properly documented with JSDoc comments
- [ ] Hooks are tested manually with simple components

**Technical Details:**

```typescript
// useTypewriter signature
interface UseTypewriterOptions {
  text: string;
  speed?: number; // ms per character (default: 50)
  delay?: number; // initial delay (default: 0)
}

// Returns
{ displayedText: string, isComplete: boolean }
```

**Files:**

- `src/hooks/useTypewriter.ts`
- `src/hooks/useIntersectionObserver.ts`

---

### Story 2.2: Build Terminal Window Component

**As a** developer  
**I want to** create a terminal-style window component with authentic design  
**So that** the tech stack can be displayed in a visually appealing code format

**Acceptance Criteria:**

- [ ] Terminal window component created with proper styling
- [ ] Window includes terminal header (three dots: red, yellow, green)
- [ ] Code content area uses monospace font (Fira Code or Consolas)
- [ ] Syntax highlighting applied to tech stack object
- [ ] Component accepts `content` prop for displayed code
- [ ] Cursor blink effect implemented for typewriter
- [ ] Component follows architecture component template

**Visual Requirements:**

- Terminal background: Dark (#0d1117 or similar)
- Terminal text: Light green (#00ff41 for terminal aesthetic)
- Header dots: macOS-style traffic lights
- Font: Monospace (Fira Code preferred)
- Card-style shadow and border

**Code Format to Display:**

```javascript
const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  backend: ['Node.js', 'Express', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'AWS'],
};
```

**Files:**

- `src/components/hero/TerminalWindow.tsx`
- `src/components/hero/TypewriterText.tsx`

---

### Story 2.3: Implement Typewriter Effect in Terminal

**As a** recruiter  
**I want to** see the tech stack appear character-by-character in a typewriter animation  
**So that** the portfolio feels dynamic and engaging

**Acceptance Criteria:**

- [ ] TypewriterText component integrates useTypewriter hook
- [ ] Animation completes in approximately 5 seconds
- [ ] Cursor blinks at the end of typed text
- [ ] Text displays in code format as specified in architecture
- [ ] Animation starts automatically on component mount
- [ ] No performance issues (smooth 60fps)

**Technical Requirements:**

- Speed: ~50ms per character
- Total time: ~5 seconds for full tech stack
- Cursor: Blinking green block or underscore
- Font: Monospace with syntax highlighting

**Files:**

- `src/components/hero/TypewriterText.tsx` (enhanced with animation)

---

### Story 2.4: Create Geometric Code Background with Three.js

**As a** recruiter  
**I want to** see a mesmerizing geometric code pattern background  
**So that** the portfolio stands out with unique visual identity

**Acceptance Criteria:**

- [ ] React Three Fiber canvas component created
- [ ] Geometric shapes formed from code characters displayed
- [ ] Slow rotation/morphing animation implemented
- [ ] Background is behind terminal window (z-index management)
- [ ] Performance maintains 60fps on average desktop
- [ ] Graceful fallback if WebGL not supported
- [ ] Respects `prefers-reduced-motion` accessibility setting

**Technical Requirements:**

- Library: React Three Fiber + @react-three/drei
- Animation: Subtle rotation (not overwhelming)
- Code characters: Use geometric arrangement
- Colors: Match terminal aesthetic (greens, blues, purples)
- Performance: Code splitting to lazy-load Three.js
- Fallback: Static gradient background if WebGL fails

**Performance Considerations:**

- Lazy load Three.js components
- Optimize particle count for performance
- Monitor frame rate and adjust complexity
- Wrap in try-catch for error handling

**Files:**

- `src/components/hero/GeometricBackground.tsx`

---

### Story 2.5: Assemble Hero Section Component

**As a** recruiter  
**I want to** see a cohesive Hero section when I land on the portfolio  
**So that** I get an immediate sense of the candidate's skills and aesthetic

**Acceptance Criteria:**

- [ ] HeroSection component created following architecture template
- [ ] GeometricBackground rendered as background layer
- [ ] TerminalWindow rendered centered in viewport
- [ ] TypewriterText integrated inside TerminalWindow
- [ ] "Run" button displayed below terminal window
- [ ] Button click scrolls smoothly to About section (#about anchor)
- [ ] Section has ID "hero" for navigation
- [ ] Layout is responsive (desktop-first per MVP requirements)

**Layout Structure:**

```
HeroSection
├── GeometricBackground (absolute, z-index: -1)
├── Content Container (centered, z-index: 1)
│   ├── TerminalWindow
│   │   └── TypewriterText
│   └── Run Button
```

**Interaction:**

- Run button uses `scrollToSection('about')` utility
- Smooth scroll with offset for fixed header if applicable
- Button has hover effect (scale or glow)

**Files:**

- `src/components/sections/HeroSection.tsx`
- `src/lib/utils.ts` (scrollToSection function)

---

### Story 2.6: Optimize Hero Section Performance

**As a** developer  
**I want to** ensure the Hero section performs smoothly  
**So that** the first impression is not marred by lag or jank

**Acceptance Criteria:**

- [ ] Three.js components lazy-loaded with dynamic import
- [ ] Frame rate monitored and stays above 50fps average
- [ ] Initial load time for Hero section < 2 seconds
- [ ] Bundle size for Three.js code-split separately
- [ ] Error boundaries added for Three.js failure handling
- [ ] Static fallback background displays if 3D fails
- [ ] `prefers-reduced-motion` media query respected

**Performance Targets:**

- Frame rate: 60fps target, 50fps minimum
- Initial load: < 2 seconds
- Bundle size: Three.js isolated in separate chunk
- Lighthouse performance score: > 90

**Technical Implementation:**

```typescript
// Lazy load Three.js component
const GeometricBackground = dynamic(
  () => import('@/components/hero/GeometricBackground'),
  {
    ssr: false,
    loading: () => <StaticGradientBackground />
  }
);
```

**Files:**

- Enhanced `src/components/sections/HeroSection.tsx` with lazy loading
- `src/components/hero/StaticGradientBackground.tsx` (fallback)

---

## Definition of Done

### Epic-Level Acceptance Criteria

- [ ] All 6 stories completed with acceptance criteria met
- [ ] Hero section visually matches design vision from brainstorming
- [ ] Typewriter effect completes in 5 seconds smoothly
- [ ] Geometric background animation runs at 60fps
- [ ] "Run" button scrolls to About section
- [ ] Performance targets met (60fps, <2s load)
- [ ] Accessibility requirements met (reduced motion, keyboard nav)
- [ ] No console errors or warnings
- [ ] Code follows architecture standards (TypeScript, imports, etc.)

### Visual Quality Checklist

- [ ] Terminal window looks authentic and polished
- [ ] Code syntax highlighting is clear and readable
- [ ] Geometric background is mesmerizing but not distracting
- [ ] Overall aesthetic matches "Code Aesthetics" vision
- [ ] Colors are consistent with design theme

### Technical Validation

- [ ] TypeScript compiles without errors
- [ ] All components use proper TypeScript interfaces
- [ ] Custom hooks are reusable and well-documented
- [ ] Three.js properly code-split and lazy-loaded
- [ ] Error handling prevents entire page crash
- [ ] Respects accessibility preferences

---

## Dependencies

**Requires:**

- Epic 1: Project Foundation & Setup (MUST be completed first)

**Blocks:**

- Epic 3: Navigation System (needs Hero section ID for scroll target)
- Epic 4: Content Sections (Run button target)

**Dependencies:**

- `framer-motion` (for subtle animations)
- `@react-three/fiber`, `@react-three/drei`, `three` (for 3D background)
- Custom hooks: useTypewriter, useIntersectionObserver

---

## Risk Assessment

### Risks

| Risk                              | Probability | Impact | Mitigation                                                 |
| --------------------------------- | ----------- | ------ | ---------------------------------------------------------- |
| Three.js performance issues       | Medium      | High   | Code splitting, performance monitoring, static fallback    |
| WebGL compatibility               | Low         | Medium | Feature detection, graceful fallback to static background  |
| Complexity causing delays         | Medium      | Medium | Break into small stories, time-box Three.js implementation |
| Animation causing motion sickness | Low         | Low    | Respect prefers-reduced-motion, keep animations subtle     |

### Risk Mitigation Plan

1. **Performance Issues:**
   - Monitor FPS during development
   - Reduce particle count or complexity if needed
   - Provide static gradient fallback
   - Lazy load Three.js to minimize initial bundle

2. **Browser Compatibility:**
   - Test on Chrome, Firefox, Safari
   - Implement WebGL feature detection
   - Ensure fallback background looks professional

3. **Development Complexity:**
   - Time-box Three.js work to 8-12 hours
   - If exceeding time, simplify to CSS gradient animation
   - Seek help from Three.js documentation/examples

---

## Technical Notes

### Key Technical Decisions

1. **React Three Fiber vs. Pure Three.js:** Using R3F for React integration and declarative API
2. **Typewriter Implementation:** Custom hook vs. library - chose custom for full control
3. **Animation Timing:** 5 seconds chosen to be engaging but not too slow
4. **Code Splitting:** Essential to prevent massive initial bundle from Three.js

### Reference Materials

- Three.js Examples: https://threejs.org/examples/
- React Three Fiber Docs: https://docs.pmnd.rs/react-three-fiber
- Framer Motion Docs: https://www.framer.com/motion/
- Architecture Document: Section "Hero Section" details

### Code Examples

Terminal Window Color Scheme:

```css
--color-bg-terminal: #0d1117;
--color-terminal-green: #00ff41;
--color-terminal-cursor: #00ff41;
```

---

## Success Metrics

- ✅ Hero section is most commented/praised feature (qualitative)
- ✅ Frame rate stays above 50fps on target hardware
- ✅ Initial load time under 2 seconds
- ✅ Zero crashes or errors in production
- ✅ 100% of recruiters see animation (no fallback needed)

---

## Out of Scope (for this Epic)

- ❌ Mobile responsiveness (handled in Epic 6: Polish)
- ❌ Dark mode toggle (not in MVP)
- ❌ Multiple background themes
- ❌ Customizable typewriter speed
- ❌ Audio effects

---

**Epic Owner:** Development Team  
**Created:** 2025-10-29  
**Last Updated:** 2025-10-29  
**Previous Epic:** Epic 1 - Project Foundation  
**Next Epic:** Epic 3 - Navigation System
