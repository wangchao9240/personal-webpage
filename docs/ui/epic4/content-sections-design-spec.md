# Content Sections - UI Design Specification

**Component:** About, Skills, Experience Sections (Epic 4)  
**Designer:** Sally (UX Expert)  
**Date:** 2025-10-29  
**Target:** Recruiter-focused personal portfolio website  
**Design Philosophy:** Code Aesthetics - Card-based, Scannable, Professional

---

## 🎯 Design Goals

1. **Scannability:** Recruiters should grasp key information in 10 seconds
2. **Hierarchy:** Clear visual structure for About → Skills → Experience flow
3. **Consistency:** Unified card-based design language
4. **Professionalism:** Clean, modern aesthetic that builds credibility
5. **Engagement:** Subtle animations that enhance (not distract from) content

---

## 📐 Overall Layout Structure

### Desktop Layout (Primary - 1440px+)

```
┌─────────────────────────────────────────────────────────┐
│                    [Header - Fixed]                     │
│                 [FloatingNav - Right]                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  [Hero Section]                         │
│              (Full screen - Epic 2)                     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                   Container (max-w-6xl)                 │
│   ┌─────────────────────────────────────────────┐     │
│   │         ABOUT SECTION                       │     │
│   │  ┌────────────────────────────────────┐    │     │
│   │  │  Creative problem solver with      │    │     │
│   │  │  6+ years experience...            │    │     │
│   │  └────────────────────────────────────┘    │     │
│   └─────────────────────────────────────────────┘     │
│                                                         │
│   ┌─────────────────────────────────────────────┐     │
│   │         SKILLS SECTION                      │     │
│   │  Frontend  │  Backend  │  Tools             │     │
│   │  [React]   │  [Node]   │  [Git]             │     │
│   │  [Vue]     │  [Express]│  [Docker]          │     │
│   └─────────────────────────────────────────────┘     │
│                                                         │
│   ┌─────────────────────────────────────────────┐     │
│   │         EXPERIENCE SECTION                  │     │
│   │  Timeline with 4 positions                  │     │
│   │  ●━━ Company 1 (2020-2024)                 │     │
│   │  ●━━ Company 2 (2020)                      │     │
│   │  ●━━ Company 3 (2018-2020)                 │     │
│   │  ●━━ Company 4 (2017-2018)                 │     │
│   └─────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Palette (Extends Epic 2/3)

### Base Colors (Inherited)

```css
/* Background */
--bg-hero: #0a0e1a;              /* Page background */
--bg-card: #0d1117;              /* Card backgrounds */
--bg-card-hover: #161b22;        /* Card hover state */

/* Borders */
--border-card: #30363d;          /* Card borders */
--border-card-hover: #484f58;    /* Card hover borders */

/* Text */
--text-primary: #f3f4f6;         /* Headings (gray-100) */
--text-secondary: #9ca3af;       /* Body text (gray-400) */
--text-muted: #6b7280;           /* Muted text (gray-500) */

/* Accent Colors */
--accent-primary: #00d9ff;       /* Cyan - primary accent */
--accent-secondary: #bd93f9;     /* Purple */
--accent-tertiary: #50fa7b;      /* Green */
```

### Section-Specific Colors

```css
/* Tech Badges */
--badge-bg: rgba(0, 217, 255, 0.1);        /* Cyan tint */
--badge-border: rgba(0, 217, 255, 0.3);    /* Cyan border */
--badge-text: #00d9ff;                      /* Cyan text */
--badge-icon: #00d9ff;                      /* Cyan icons */

/* Timeline */
--timeline-line: #30363d;                   /* Gray line */
--timeline-dot: #00d9ff;                    /* Cyan dots */
--timeline-dot-glow: rgba(0, 217, 255, 0.4); /* Dot glow */
```

---

## 🔤 Typography

### Font Stack

```css
font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
```

### Section Titles

- **Font size:** `32px` (text-3xl)
- **Font weight:** `700` (bold)
- **Color:** `#f3f4f6` (gray-100)
- **Margin bottom:** `24px`
- **Letter spacing:** `0.02em`

### Subsection Titles (Skills Categories)

- **Font size:** `20px` (text-xl)
- **Font weight:** `600` (semi-bold)
- **Color:** `#00d9ff` (cyan)
- **Margin bottom:** `16px`

### Body Text (About)

- **Font size:** `18px` (text-lg)
- **Font weight:** `400` (regular)
- **Color:** `#9ca3af` (gray-400)
- **Line height:** `1.75` (relaxed)
- **Letter spacing:** `0.01em`

### Experience Details

- **Company/Position:** `18px`, `600` weight, `#f3f4f6`
- **Duration/Location:** `14px`, `400` weight, `#6b7280`
- **Highlights:** `16px`, `400` weight, `#9ca3af`

---

## 🖼️ Component Specifications

### 1. Card Component (Base)

**Purpose:** Reusable container for all content sections

**Dimensions:**
- Width: Full width of container
- Padding: `24px` (p-6)
- Border radius: `12px` (rounded-xl)
- Border: `1px solid #30363d`

**Visual Style:**
```css
background: #0d1117;
border: 1px solid #30363d;
border-radius: 12px;
padding: 24px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
transition: all 300ms ease;
```

**Hover State:**
```css
border-color: #484f58;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
transform: translateY(-2px);
```

**Accessibility:**
- Focus indicator: 2px solid cyan outline
- Keyboard navigable if interactive

---

### 2. Tech Badge Component

**Purpose:** Display individual technology with icon + text

**Dimensions:**
- Height: `36px`
- Padding: `8px 12px` (horizontal)
- Border radius: `6px`
- Gap between icon and text: `8px`

**Visual Style:**
```css
background: rgba(0, 217, 255, 0.1);      /* Cyan tint */
border: 1px solid rgba(0, 217, 255, 0.3);
border-radius: 6px;
padding: 8px 12px;
display: inline-flex;
align-items: center;
gap: 8px;
```

**Icon:**
- Size: `20px × 20px`
- Color: `#00d9ff` (cyan)
- From React Icons library

**Text:**
- Font size: `14px`
- Font weight: `500` (medium)
- Color: `#00d9ff` (cyan)

**Hover State:**
```css
background: rgba(0, 217, 255, 0.15);
border-color: rgba(0, 217, 255, 0.5);
transform: scale(1.05);
```

**Example Tech Badges:**
```
[⚛️ React]  [📘 TypeScript]  [🟢 Node.js]  [🔧 Git]
```

---

### 3. Section Wrapper Component

**Purpose:** Provide consistent spacing and animation wrapper

**Spacing:**
- Margin bottom: `64px` (gap-16 between sections)
- Max width: `1152px` (max-w-6xl)
- Horizontal padding: `32px` (px-8)

**Animation (Scroll Reveal):**
```typescript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: 'easeOut' }
viewport: { once: true, margin: '-100px' }
```

---

## 📋 Section Designs

### Section 1: About Section

**Layout:**
```
┌──────────────────────────────────────────┐
│  About                             ← Title
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  Creative problem solver with      │ │
│  │  6+ years of front-end development │ │
│  │  experience. I specialize in       │ │
│  │  transforming complex requirements │ │
│  │  into elegant, user-friendly web   │ │
│  │  applications...                   │ │
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

**Content:**
```
Creative problem solver with 6+ years of front-end development experience.
I specialize in transforming complex requirements into elegant, user-friendly
web applications. Proficient in React, Vue, and modern JavaScript ecosystem,
with a strong focus on performance optimization and clean code.
```

**Styling Details:**
- Single Card component
- Text: 18px, line-height 1.75, color #9ca3af
- Max width: 800px (to prevent overly long lines)
- Center-aligned within section

**Animation:**
- Fade in + slide up (30px) on scroll
- Duration: 600ms
- Triggers once

---

### Section 2: Skills Section

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│  Skills                                        ← Title
│                                                      │
│  Frontend                                ← Category  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐      │
│  │⚛️ React│ │🎭 Vue  │ │📘 TS   │ │🌐 HTML5│      │
│  └────────┘ └────────┘ └────────┘ └────────┘      │
│  ┌────────┐ ┌────────┐                             │
│  │🎨 CSS3 │ │📜 JS   │                             │
│  └────────┘ └────────┘                             │
│                                                      │
│  Backend                                             │
│  ┌────────┐ ┌────────┐                             │
│  │🟢 Node │ │⚡Express│                             │
│  └────────┘ └────────┘                             │
│                                                      │
│  Tools & Others                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐                 │
│  │🔧 Git  │ │📦 CMS  │ │🚀 SSR  │                 │
│  └────────┘ └────────┘ └────────┘                 │
└──────────────────────────────────────────────────────┘
```

**Skills Data:**

**Frontend (6 skills):**
- React (⚛️ FaReact)
- Vue (🎭 FaVuejs)
- TypeScript (📘 SiTypescript)
- HTML5 (🌐 FaHtml5)
- CSS3 (🎨 FaCss3Alt)
- JavaScript (📜 IoLogoJavascript)

**Backend (2 skills):**
- Node.js (🟢 FaNode)
- Express (⚡ SiExpress)

**Tools (3 skills):**
- Git (🔧 FaGit)
- CMS management (📦 icon TBD)
- SSR (🚀 icon TBD)

**Layout Details:**
- 3 categories, each in separate subsection
- Category title: 20px, cyan (#00d9ff), semi-bold
- Badges: Flexbox grid with gap-3 (12px)
- Responsive: Wraps to multiple rows on smaller screens

**Animation:**
- Each category fades in with 100ms stagger delay
- Badges have subtle hover scale effect (1.05)

---

### Section 3: Experience Timeline

**Layout:**
```
┌────────────────────────────────────────────────┐
│  Experience                              ← Title
│                                                │
│  ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┐          │
│  │                                │          │
│  │  Shanghai Jiufang Cloud        │          │
│  │  Frontend Developer            │          │
│  │  Nov 2020 - Apr 2024 · Shanghai│          │
│  │                                │          │
│  │  • Led development of...       │          │
│  │  • Optimized performance...    │          │
│  └────────────────────────────────┘          │
│  │                                            │
│  ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┐          │
│  │                                │          │
│  │  YouBiHui Training School      │          │
│  │  Frontend Teacher              │          │
│  │  Aug 2020 - Oct 2020 · Shanghai│          │
│  └────────────────────────────────┘          │
│  │                                            │
│  ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┐          │
│  │  (2 more positions...)         │          │
│  └────────────────────────────────┘          │
│                                                │
└────────────────────────────────────────────────┘
```

**Timeline Visual Design:**

**Vertical Line:**
- Position: Left side, 16px from edge
- Width: 2px
- Color: #30363d (gray)
- Height: Spans all items

**Timeline Dots:**
- Size: 12px diameter
- Color: #00d9ff (cyan)
- Border: 2px solid #00d9ff
- Background: #0a0e1a (hollow circle)
- Glow: 0 0 8px rgba(0, 217, 255, 0.4)
- Position: Centered on vertical line

**Experience Cards:**
- Position: Right of timeline (32px gap from line)
- Card style: Same as base Card component
- Padding: 20px
- Margin bottom: 24px between items

**Card Content Structure:**
```
┌─────────────────────────────────────┐
│  Company Name                       │ ← 18px, bold, #f3f4f6
│  Position Title                     │ ← 16px, semi-bold, #9ca3af
│  Duration · Location                │ ← 14px, regular, #6b7280
│                                     │
│  • Highlight 1                      │ ← 16px, regular, #9ca3af
│  • Highlight 2                      │
└─────────────────────────────────────┘
```

**Experience Data (4 positions):**

1. **Shanghai Jiufang Cloud**
   - Position: Frontend Developer
   - Duration: Nov 2020 - Apr 2024
   - Location: Shanghai
   - Highlights:
     - Led development of multiple web applications using React and Vue
     - Optimized application performance resulting in 40% faster load times

2. **Shanghai YouBiHui Training School**
   - Position: Frontend Teacher
   - Duration: Aug 2020 - Oct 2020
   - Location: Shanghai
   - Highlights:
     - Taught HTML, CSS, JavaScript fundamentals to 50+ students
     - Developed curriculum focusing on practical web development skills

3. **Huizhong Business Consulting**
   - Position: Frontend Developer
   - Duration: May 2018 - Jun 2020
   - Location: Shanghai
   - Highlights:
     - Built responsive websites for 10+ enterprise clients
     - Implemented CMS solutions for content management

4. **Qingdao Jiaoyin Information Technology**
   - Position: Web Developer
   - Duration: Oct 2017 - Aug 2018
   - Location: Qingdao
   - Highlights:
     - Developed company website and internal management systems
     - Collaborated with design team on UI/UX improvements

**Animation:**
- Each timeline item fades in + slides up (30px)
- Stagger delay: 150ms between items
- Top-to-bottom reveal effect

---

## 🎬 Animation Specifications

### Scroll Reveal Animation (Standard)

**Default Animation:**
```typescript
{
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
}
```

**Staggered Animation (Skills, Experience):**
```typescript
{
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6,
    delay: index * 0.15, // 150ms stagger
    ease: 'easeOut'
  },
  viewport: { once: true }
}
```

**Hover Animations:**

Tech Badges:
```css
transition: all 200ms ease;
hover: transform: scale(1.05);
```

Cards:
```css
transition: all 300ms ease;
hover: {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  border-color: #484f58;
}
```

---

## ♿ Accessibility

### Keyboard Navigation

**Focus Indicators:**
- All interactive elements: 2px solid cyan outline
- Focus offset: 2px
- Clear visual distinction from hover

**Tab Order:**
- Logical top-to-bottom flow
- Tech badges: Tab through all, Enter to focus
- Timeline items: Tab through cards

### ARIA Labels

```html
<!-- About Section -->
<section id="about" aria-labelledby="about-title">
  <h2 id="about-title">About</h2>
  ...
</section>

<!-- Skills Section -->
<section id="skills" aria-labelledby="skills-title">
  <h2 id="skills-title">Skills</h2>
  <div role="list" aria-label="Frontend skills">
    <span role="listitem" aria-label="React framework">
      React
    </span>
  </div>
</section>

<!-- Experience Timeline -->
<section id="experience" aria-labelledby="experience-title">
  <h2 id="experience-title">Experience</h2>
  <ol aria-label="Work experience timeline">
    <li>
      <h3>Company Name</h3>
      <p>Position, Duration, Location</p>
    </li>
  </ol>
</section>
```

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Show content immediately, no scroll reveal */
  section {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 📱 Responsive Behavior

### Desktop (1440px+) - Primary Design
- Container: max-w-6xl (1152px)
- Cards: Full width
- Skills: Multi-row flex grid, gap-3
- Timeline: Full layout with line + dots

### Tablet (768px - 1439px)
- Container: max-w-4xl (896px)
- Cards: Full width
- Skills: Badges wrap to multiple rows
- Timeline: Same design, slightly tighter spacing

### Mobile (< 768px) - Epic 6
- Container: max-w-full, px-4
- Cards: Full width, reduced padding (p-4)
- Skills: Badges stack, full width
- Timeline: Simplified or left-aligned

---

## 🚀 Performance Targets

- **First Paint:** < 1.5 seconds
- **Animation FPS:** 60fps (all scroll animations)
- **Time to Interactive:** < 2.5 seconds
- **Lighthouse Performance:** > 90

**Optimization Strategies:**
- Lazy load Framer Motion
- Use CSS transforms for animations (GPU)
- Optimize icon imports (tree-shaking)
- Memoize heavy components

---

## 🔍 Design Tokens Summary

```css
:root {
  /* Cards */
  --card-bg: #0d1117;
  --card-border: #30363d;
  --card-border-hover: #484f58;
  --card-padding: 24px;
  --card-radius: 12px;
  --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  --card-shadow-hover: 0 8px 20px rgba(0, 0, 0, 0.4);
  
  /* Tech Badges */
  --badge-bg: rgba(0, 217, 255, 0.1);
  --badge-border: rgba(0, 217, 255, 0.3);
  --badge-text: #00d9ff;
  --badge-padding: 8px 12px;
  --badge-radius: 6px;
  
  /* Timeline */
  --timeline-line-width: 2px;
  --timeline-line-color: #30363d;
  --timeline-dot-size: 12px;
  --timeline-dot-color: #00d9ff;
  --timeline-dot-glow: 0 0 8px rgba(0, 217, 255, 0.4);
  
  /* Typography */
  --font-title: 32px;
  --font-subtitle: 20px;
  --font-body: 18px;
  --font-small: 14px;
  
  /* Spacing */
  --section-gap: 64px;
  --card-gap: 24px;
  --badge-gap: 12px;
  
  /* Transitions */
  --transition-fast: 200ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 600ms ease-out;
}
```

---

## 📋 Component Checklist

### UI Components
- [ ] Card component with hover states
- [ ] TechBadge component with icons
- [ ] SectionWrapper with scroll reveal
- [ ] Timeline component with dots and line
- [ ] All components TypeScript typed

### About Section
- [ ] Section title styling
- [ ] Card with proper padding
- [ ] Body text with correct typography
- [ ] Scroll animation implemented
- [ ] Content matches approved copy

### Skills Section
- [ ] Three category subsections
- [ ] Category titles (cyan, semi-bold)
- [ ] Tech badges with React Icons
- [ ] Flexbox grid layout
- [ ] Hover effects on badges
- [ ] Staggered animation

### Experience Section
- [ ] Timeline visual (line + dots)
- [ ] 4 experience cards
- [ ] Proper content hierarchy
- [ ] Highlight bullets formatted
- [ ] Staggered scroll animation
- [ ] Company/position/duration/location display

### Accessibility
- [ ] All sections have proper IDs
- [ ] ARIA labels on all sections
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Reduced motion support

---

**Design Status:** Ready for Implementation  
**Next Steps:** Generate Stitch prompt for visual mockup


