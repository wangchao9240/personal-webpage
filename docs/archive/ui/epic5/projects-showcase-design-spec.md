# Projects Showcase - UI Design Specification

**Component:** Projects Section & ProjectCard Component (Epic 5)  
**Designer:** Sally (UX Expert)  
**Date:** 2025-10-29  
**Target:** Recruiter-focused project portfolio showcase  
**Design Philosophy:** Code Aesthetics - Visual Cards with Interactive Hover Effects

---

## 🎯 Design Goals

1. **Visual Impact:** Project cards must immediately catch the eye with screenshots
2. **Scannability:** Recruiters should identify tech stacks and links instantly  
3. **Interactivity:** Hover effects make the section feel dynamic and polished
4. **Call-to-Action:** Clear buttons for Live Demo and GitHub repositories
5. **Consistency:** Maintain the dark theme and cyan accent from Epic 2-4

---

## 📐 Overall Layout Structure

### Desktop Layout (Primary - 1440px+)

```
┌─────────────────────────────────────────────────────────┐
│                  Projects Section                       │
│   ┌───────────────────────┐  ┌───────────────────────┐│
│   │  [Project 1 Image]    │  │  [Project 2 Image]    ││
│   │  ChatGPT Timeline     │  │  Collaboration        ││
│   │  Navigator            │  │  Platform             ││
│   │  • React • TS         │  │  • Next.js • WebSocket││
│   │  [GitHub] (hover)     │  │  [Demo] [GitHub]      ││
│   └───────────────────────┘  └───────────────────────┘│
│                                                         │
│   ┌───────────────────────┐                            │
│   │  [Project 3 Image]    │                            │
│   │  MEME Alchemist       │                            │
│   │  • React • Node.js    │                            │
│   │  [Demo] [GitHub]      │                            │
│   └───────────────────────┘                            │
└─────────────────────────────────────────────────────────┘
```

**Grid Configuration:**
- 2 columns on desktop
- Gap: `24px (gap-6)`
- 3rd card in first column (left-aligned)
- Container: `max-w-6xl` (1152px)

---

## 🎨 Color Palette (Extends Epic 2-4)

### Project Card Colors

```css
/* Card Base */
--card-bg: #0d1117;              /* Dark gray background */
--card-border: #30363d;          /* Medium gray border */
--card-border-hover: #00d9ff;    /* Cyan border on hover */

/* Image Overlay */
--image-overlay: rgba(0, 0, 0, 0.2); /* Subtle dark overlay on image */

/* Buttons */
--btn-primary-bg: #00d9ff;       /* Live Demo button (cyan) */
--btn-primary-text: #0a0e1a;     /* Dark text on cyan */
--btn-secondary-bg: #30363d;     /* GitHub button (gray) */
--btn-secondary-text: #f3f4f6;   /* Light text on gray */

/* Button Hover */
--btn-primary-hover: #00b8d9;    /* Darker cyan */
--btn-secondary-hover: #484f58;  /* Lighter gray */
```

---

## 🖼️ ProjectCard Component Specifications

### Overall Card Dimensions

**Default State:**
```css
width: 100%;                    /* Full width of grid column */
aspect-ratio: auto;             /* Height determined by content */
border-radius: 12px;            /* Rounded corners */
border: 1px solid #30363d;      /* Gray border */
background: #0d1117;            /* Dark background */
overflow: hidden;               /* Clip image to rounded corners */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
transition: all 300ms ease;     /* Smooth transitions */
```

**Hover State:**
```css
transform: translateY(-8px);    /* Lift card up */
border-color: #00d9ff;          /* Cyan border glow */
box-shadow: 0 12px 24px rgba(0, 217, 255, 0.2); /* Cyan-tinted shadow */
```

---

### 1. Project Image Section

**Dimensions:**
- Width: 100% of card
- Aspect ratio: `16:9` (preferred) or `2:1`
- Position: Top of card
- Border radius: Inherit from parent (top corners only)

**Styling:**
```css
width: 100%;
aspect-ratio: 16 / 9;
object-fit: cover;              /* Crop to fit */
display: block;                 /* Remove inline spacing */
background: #161b22;            /* Placeholder while loading */
```

**Image Quality:**
- Format: PNG or JPEG
- Max width: 1200px
- File size: < 300KB
- Optimization: Use Next.js Image component with `unoptimized` flag

**Example:**
```tsx
<Image
  src="/images/projects/chatgpt-timeline.png"
  alt="ChatGPT Timeline Navigator screenshot"
  width={600}
  height={338}  // 16:9 ratio
  unoptimized
  className="w-full h-auto object-cover"
/>
```

---

### 2. Content Section

**Padding:** `24px (p-6)`  
**Background:** `#0d1117` (same as card)

**Layout Structure:**
```
Content Section (24px padding)
├── Project Name (h3)
├── Description (p)
├── Tech Stack (flex badges)
└── Action Buttons (overlay, hidden by default)
```

---

#### 2.1 Project Name

**Typography:**
- Font size: `24px (text-2xl)`
- Font weight: `700 (bold)`
- Color: `#f3f4f6` (light gray)
- Line height: `1.2`
- Margin bottom: `12px (mb-3)`

**Example:**
```html
<h3 className="text-2xl font-bold text-[#f3f4f6] mb-3">
  ChatGPT Timeline Navigator
</h3>
```

---

#### 2.2 Project Description

**Typography:**
- Font size: `16px (text-base)`
- Font weight: `400 (regular)`
- Color: `#9ca3af` (gray-400)
- Line height: `1.6 (leading-relaxed)`
- Margin bottom: `16px (mb-4)`
- Max lines: 2-3 sentences

**Content Guidelines:**
- One clear sentence describing the project
- Focus on what it does, not how
- Keep under 100 characters if possible

**Example:**
```html
<p className="text-base text-[#9ca3af] leading-relaxed mb-4">
  Browser extension for navigating ChatGPT conversation history 
  with timeline visualization.
</p>
```

---

#### 2.3 Tech Stack Badges

**Layout:**
- Display: Flexbox with wrapping
- Gap: `8px (gap-2)`
- Margin bottom: `16px (mb-4)`

**Badge Component:**
- **Reuse TechBadge from Epic 4**
- Same styling: cyan theme, icon + text
- Smaller size for projects: `text-xs` instead of `text-sm`

**Tech Stack Badge Customization:**
```css
/* Slightly smaller for project cards */
font-size: 12px;                /* text-xs */
padding: 6px 10px;              /* Tighter padding */
```

**Example:**
```tsx
<div className="flex flex-wrap gap-2 mb-4">
  <TechBadge icon={FaReact} label="React" />
  <TechBadge icon={SiTypescript} label="TypeScript" />
  <TechBadge icon={SiChrome} label="Chrome Extension API" />
</div>
```

---

### 3. Action Buttons Overlay

**Position:**
- Absolute positioning at bottom of card
- Full width
- Background gradient overlay for readability

**Default State (Hidden):**
```css
opacity: 0;
transform: translateY(10px);    /* Slide up slightly */
pointer-events: none;           /* No interaction when hidden */
transition: all 300ms ease;
```

**Hover State (Visible):**
```css
opacity: 1;
transform: translateY(0);
pointer-events: auto;
```

**Gradient Overlay Background:**
```css
background: linear-gradient(
  to top,
  rgba(13, 17, 23, 0.95) 0%,
  rgba(13, 17, 23, 0.8) 50%,
  transparent 100%
);
padding: 24px;                  /* Same as content padding */
```

---

#### 3.1 Button Styling

**Live Demo Button (Primary):**
```css
background: #00d9ff;            /* Cyan */
color: #0a0e1a;                 /* Dark text */
padding: 10px 20px;             /* py-2.5 px-5 */
border-radius: 6px;             /* rounded-md */
font-size: 14px;                /* text-sm */
font-weight: 600;               /* font-semibold */
transition: all 200ms ease;
display: inline-flex;
align-items: center;
gap: 8px;                       /* Space for icon */
```

**Live Demo Hover:**
```css
background: #00b8d9;            /* Darker cyan */
transform: scale(1.05);         /* Slight grow */
```

**GitHub Button (Secondary):**
```css
background: #30363d;            /* Gray */
color: #f3f4f6;                 /* Light text */
padding: 10px 20px;
border-radius: 6px;
font-size: 14px;
font-weight: 600;
transition: all 200ms ease;
display: inline-flex;
align-items: center;
gap: 8px;
```

**GitHub Hover:**
```css
background: #484f58;            /* Lighter gray */
transform: scale(1.05);
```

**Button Layout:**
```tsx
<div className="flex gap-3">
  {project.liveUrl && (
    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
       className="btn-primary">
      <ExternalLinkIcon /> Live Demo
    </a>
  )}
  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
     className="btn-secondary">
    <GithubIcon /> GitHub
  </a>
</div>
```

---

## 📋 Projects Section Layout

### Section Wrapper

**Using Epic 4's SectionWrapper:**
```tsx
<SectionWrapper id="projects" title="Projects">
  {/* Grid content */}
</SectionWrapper>
```

**Section Title:**
- Text: "Projects" or "Featured Work"
- Size: `32px (text-3xl)`
- Weight: `bold`
- Color: `#f3f4f6`
- Margin bottom: `24px (mb-6)`

---

### Grid Configuration

**Desktop (1440px+):**
```css
display: grid;
grid-template-columns: repeat(2, 1fr);  /* 2 equal columns */
gap: 24px;                              /* gap-6 */
max-width: 1152px;                      /* max-w-6xl */
margin: 0 auto;                         /* Center */
padding: 0 32px;                        /* px-8 */
```

**Card Distribution:**
- Card 1: Column 1, Row 1
- Card 2: Column 2, Row 1
- Card 3: Column 1, Row 2 (3rd card only in left column)

**Tailwind Classes:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {projects.map((project, index) => (
    <ProjectCard key={project.id} project={project} index={index} />
  ))}
</div>
```

---

## 🎬 Animation Specifications

### Card Entrance Animation

**Staggered Fade-In:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.15 }}
  viewport={{ once: true, margin: '-50px' }}
>
```

**Stagger Delay:**
- Card 1: 0ms
- Card 2: 150ms
- Card 3: 300ms

---

### Hover Lift Animation

**Entire Card:**
```css
transition: transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;

/* On hover */
transform: translateY(-8px);
box-shadow: 0 12px 24px rgba(0, 217, 255, 0.2);
border-color: #00d9ff;
```

---

### Button Reveal Animation

**Buttons Container:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
  transition={{ duration: 0.3 }}
>
```

**Individual Button Hover:**
```css
transition: transform 200ms ease, background-color 200ms ease;

/* On hover */
transform: scale(1.05);
```

---

## ♿ Accessibility

### Semantic HTML

```html
<article className="project-card">
  <img src="..." alt="Project screenshot showing...">
  <h3>Project Name</h3>
  <p>Project description</p>
  <div role="list" aria-label="Technologies used">
    <span role="listitem">React</span>
  </div>
  <div className="actions">
    <a href="..." target="_blank" rel="noopener noreferrer"
       aria-label="View live demo of Project Name (opens in new tab)">
      Live Demo
    </a>
  </div>
</article>
```

### ARIA Labels

**Links:**
```tsx
<a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`View live demo of ${project.name} (opens in new tab)`}
>
```

**Image Alt Text:**
```tsx
<Image
  src={project.imagePath}
  alt={`${project.name} - ${project.description}`}
/>
```

### Keyboard Navigation

- All buttons and links: `Tab` navigable
- Focus indicators: 2px solid cyan outline with 2px offset
- Hover effects also trigger on keyboard focus

---

## 📱 Responsive Behavior

### Desktop (1440px+)
- 2-column grid
- Full hover effects
- Cards: ~540px width each

### Tablet (768px - 1439px)
- 2-column grid (slightly narrower)
- Same hover effects
- Cards: ~360px width each

### Mobile (<768px) - Epic 6 Scope
- 1-column stack
- Reduced hover effects (or tap-based)
- Full-width cards

---

## 🎨 Design Tokens

```css
:root {
  /* Project Cards */
  --project-card-bg: #0d1117;
  --project-card-border: #30363d;
  --project-card-border-hover: #00d9ff;
  --project-card-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  --project-card-shadow-hover: 0 12px 24px rgba(0, 217, 255, 0.2);
  
  /* Buttons */
  --btn-primary-bg: #00d9ff;
  --btn-primary-text: #0a0e1a;
  --btn-primary-hover: #00b8d9;
  --btn-secondary-bg: #30363d;
  --btn-secondary-text: #f3f4f6;
  --btn-secondary-hover: #484f58;
  
  /* Image */
  --project-image-bg: #161b22;
  --project-image-aspect: 16 / 9;
  
  /* Overlay */
  --overlay-gradient: linear-gradient(
    to top,
    rgba(13, 17, 23, 0.95) 0%,
    rgba(13, 17, 23, 0.8) 50%,
    transparent 100%
  );
}
```

---

## 📋 Component Checklist

### ProjectCard Component
- [ ] Card container with rounded corners
- [ ] Project image at top (16:9 aspect ratio)
- [ ] Project name (h3, bold, 24px)
- [ ] Description (16px, 2-3 lines)
- [ ] Tech stack badges (reused from Epic 4)
- [ ] Action buttons overlay (hidden by default)
- [ ] Live Demo button (if liveUrl exists)
- [ ] GitHub button (always visible)
- [ ] Hover lift effect (translateY -8px)
- [ ] Button reveal animation on hover
- [ ] Cyan border glow on hover
- [ ] Enhanced shadow on hover
- [ ] Keyboard accessible
- [ ] Proper ARIA labels

### Projects Section
- [ ] Section wrapper with title
- [ ] 2-column grid layout
- [ ] 3 project cards
- [ ] Staggered entrance animation
- [ ] Scroll reveal on viewport enter
- [ ] Responsive grid (Epic 6)

### Image Optimization
- [ ] Next.js Image component
- [ ] Proper alt text
- [ ] Optimized file sizes (< 300KB)
- [ ] Correct aspect ratios
- [ ] Lazy loading

### Links & Security
- [ ] `target="_blank"` for external links
- [ ] `rel="noopener noreferrer"` for security
- [ ] Working Live Demo links
- [ ] Working GitHub links
- [ ] External link icons

---

## 🚀 Performance Targets

- **Image Load Time:** < 1.5s per image
- **Animation FPS:** 60fps (all hover effects)
- **Total Section Load:** < 2s
- **Lighthouse Performance:** > 90

---

## 🔍 Design Principles

1. **Visual Hierarchy:**
   - Image grabs attention first
   - Name second
   - Description and tech stack third
   - Buttons revealed on interaction

2. **Consistency:**
   - Maintain dark theme from Epic 2-4
   - Reuse TechBadge component
   - Cyan accent color for CTAs
   - Same animation timings

3. **Interactivity:**
   - Clear hover feedback
   - Smooth transitions
   - Responsive button states
   - Professional lift effect

4. **Simplicity:**
   - No clutter
   - Essential info only
   - One-sentence descriptions
   - Maximum 4-5 tech badges per project

---

## 📝 Content Guidelines

### Project Descriptions

**Good:**
- ✅ "Browser extension for navigating ChatGPT conversation history with timeline visualization"
- ✅ "Real-time whiteboard and document collaboration platform with WebSocket sync"
- ✅ "AI-powered meme generator combining trending memes with factual information"

**Bad:**
- ❌ "This is a project I built using React" (too vague)
- ❌ Long paragraphs explaining implementation details
- ❌ Marketing jargon or buzzwords

### Tech Stack Selection

**Include:**
- ✅ Primary framework (React, Next.js)
- ✅ Key libraries (WebSocket, Canvas API)
- ✅ Notable tech (TypeScript, OpenAI API)

**Limit:**
- ⚠️ Maximum 5 badges per project
- ⚠️ Skip obvious/basic tech (HTML, CSS)
- ⚠️ Focus on most impressive/relevant tech

---

**Design Status:** Ready for Mockup Generation  
**Next Steps:** Generate Stitch prompt, create mockups, implement components


