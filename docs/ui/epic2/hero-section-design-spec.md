# Hero Section - UI Design Specification

**Component:** Hero Section (Epic 2)  
**Designer:** Sally (UX Expert)  
**Date:** 2025-10-29  
**Target:** Recruiter-focused personal portfolio website  
**Design Philosophy:** Code Aesthetics - Modern, Minimal, Developer-centric

---

## 🎯 Design Goals

1. **Immediate Impact:** Capture attention within 2 seconds
2. **Professional Identity:** Communicate developer expertise through visual language
3. **Technical Showcase:** Demonstrate coding skills through the design itself
4. **Performance:** Maintain 60fps animations while being visually impressive

---

## 📐 Layout Structure

### Desktop Layout (Primary - 1440px+)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              GEOMETRIC CODE BACKGROUND                  │
│              (Animated, subtle motion)                  │
│                                                         │
│         ┌──────────────────────────────┐               │
│         │  ●  ●  ●    Terminal         │               │
│         ├──────────────────────────────┤               │
│         │                              │               │
│         │  const skills = {            │               │
│         │    frontend: ['React'...     │  ← Typewriter │
│         │    backend: ['Node.js'...    │     Effect    │
│         │    tools: ['Git'...          │   (5 seconds) │
│         │  }█                          │               │
│         │                              │               │
│         └──────────────────────────────┘               │
│                                                         │
│              ┌─────────────┐                           │
│              │  ▶ Run Code │  ← Scroll to About        │
│              └─────────────┘                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
         Full viewport height (100vh)
```

### Visual Hierarchy

1. **Background Layer (z-index: -1)**
   - Geometric code pattern animation
   - Subtle, non-distracting motion
   - Dark theme with accent colors

2. **Foreground Content (z-index: 1)**
   - Terminal window (center-focused)
   - Run button (below terminal)
   - All content vertically and horizontally centered

---

## 🎨 Color Palette

### Base Colors

```css
/* Background & Terminal */
--bg-hero: #0a0e1a;              /* Deep space blue-black */
--bg-terminal: #0d1117;          /* GitHub dark terminal bg */
--border-terminal: #30363d;      /* Subtle border */

/* Terminal Text */
--text-terminal: #00ff41;        /* Classic terminal green */
--text-secondary: #8b949e;       /* Muted gray for punctuation */
--text-keyword: #ff79c6;         /* Pink for keywords (const) */
--text-string: #f1fa8c;          /* Yellow for strings */
--text-property: #50fa7b;        /* Light green for properties */

/* Geometric Background */
--geo-primary: #00d9ff;          /* Cyan accent */
--geo-secondary: #bd93f9;        /* Purple accent */
--geo-tertiary: #50fa7b;         /* Green accent */
--geo-glow: rgba(0, 217, 255, 0.3); /* Glow effect */

/* UI Elements */
--btn-primary: #00d9ff;          /* Run button */
--btn-hover: #00b8d9;            /* Button hover */
--cursor-color: #00ff41;         /* Blinking cursor */

/* Terminal Header Dots */
--dot-red: #ff5f56;
--dot-yellow: #ffbd2e;
--dot-green: #27c93f;
```

---

## 🔤 Typography

### Terminal Font Stack

```css
font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
```

**Terminal Code:**
- Font size: `18px` (desktop)
- Line height: `1.6`
- Letter spacing: `0.02em`
- Font weight: `400` (regular)

**Run Button:**
- Font size: `16px`
- Font weight: `600` (semi-bold)
- Letter spacing: `0.05em`
- Text transform: `uppercase`

---

## 🖼️ Component Specifications

### 1. Geometric Code Background

**Visual Style:**
- Abstract geometric shapes formed from code syntax characters
- Floating particles: `{ } [ ] ( ) < > ; , .`
- Subtle rotation and position shift animation
- Low opacity to not overpower foreground content

**Animation:**
- Duration: `60s` continuous loop
- Movement: Slow drift (2-3px/s)
- Rotation: ±5° maximum
- Opacity pulse: 0.15 to 0.25

**Colors:**
- Primary shapes: `--geo-primary` (cyan)
- Secondary shapes: `--geo-secondary` (purple)
- Tertiary shapes: `--geo-tertiary` (green)
- Glow effects: `--geo-glow`

**Performance:**
- Particle count: 30-50 max
- Use `will-change: transform` sparingly
- Lazy load Three.js components

---

### 2. Terminal Window

**Dimensions:**
- Width: `700px` (desktop)
- Height: Auto (content-based, ~400px)
- Padding: `24px` (content area)
- Border radius: `12px`
- Box shadow: `0 20px 60px rgba(0, 0, 0, 0.5)`

**Structure:**

```html
Terminal Window
├── Header Bar (height: 40px)
│   ├── Traffic Light Dots (left)
│   │   ├── Red dot (12px diameter)
│   │   ├── Yellow dot (12px diameter)
│   │   └── Green dot (12px diameter)
│   └── Title: "Terminal" (center, muted)
│
└── Code Area (padding: 24px)
    └── TypewriterText Component
```

**Header Bar:**
- Background: `--bg-terminal` (slightly lighter)
- Height: `40px`
- Border bottom: `1px solid --border-terminal`

**Traffic Light Dots:**
- Position: `12px` from left
- Spacing: `8px` between dots
- Size: `12px` diameter
- Colors: `--dot-red`, `--dot-yellow`, `--dot-green`

**Code Display:**
- Background: `--bg-terminal`
- Text color: `--text-terminal`
- Syntax highlighted (see code format below)

---

### 3. Typewriter Text with Syntax Highlighting

**Code to Display:**

```javascript
const skills = {
  frontend: ['React', 'Vue', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express'],
  tools: ['Git', 'CMS management', 'SSR']
}
```

**Syntax Color Mapping:**

- `const` → `--text-keyword` (pink)
- `skills` → `--text-terminal` (green)
- `=` → `--text-secondary` (gray)
- `{` `}` `[` `]` → `--text-secondary` (gray)
- `:` `,` → `--text-secondary` (gray)
- Property names (`frontend`, `backend`, `tools`) → `--text-property` (light green)
- Strings (`'React'`, etc.) → `--text-string` (yellow)

**Cursor:**
- Character: `█` (block) or `_` (underscore)
- Color: `--cursor-color`
- Animation: Blink every 530ms
- Position: End of typed text

**Animation Timing:**
- Total duration: ~5 seconds
- Speed: 50ms per character
- Smooth, consistent typing rhythm

---

### 4. Run Button

**Dimensions:**
- Width: `180px`
- Height: `50px`
- Border radius: `8px`
- Position: Centered, 40px below terminal

**Visual Style:**
- Background: `transparent`
- Border: `2px solid --btn-primary`
- Text color: `--btn-primary`
- Font size: `16px`
- Font weight: `600`

**States:**

**Default:**
```css
background: transparent;
border: 2px solid var(--btn-primary);
color: var(--btn-primary);
```

**Hover:**
```css
background: var(--btn-primary);
color: var(--bg-hero);
transform: translateY(-2px);
box-shadow: 0 8px 20px rgba(0, 217, 255, 0.3);
```

**Active (Click):**
```css
transform: translateY(0);
box-shadow: 0 4px 10px rgba(0, 217, 255, 0.2);
```

**Transition:**
- Duration: `200ms`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Icon:**
- Play triangle `▶` before "Run Code"
- Size: `14px`
- Margin right: `8px`

---

## 🎬 Animations & Interactions

### Terminal Window Entrance

**On Page Load:**
```css
@keyframes terminalEntrance {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

animation: terminalEntrance 800ms cubic-bezier(0.16, 1, 0.3, 1);
```

### Typewriter Effect

**Behavior:**
1. Terminal appears (800ms entrance)
2. Wait 300ms
3. Start typing (50ms per character)
4. Complete in ~5 seconds
5. Cursor continues blinking

**Cursor Blink:**
```css
@keyframes cursorBlink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

animation: cursorBlink 530ms steps(1) infinite;
```

### Button Interaction

**Hover:**
- Background fill animation (200ms)
- Lift effect (2px translateY)
- Glow shadow appears

**Click:**
- Smooth scroll to `#about` section
- Duration: 800ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## ♿ Accessibility

### Keyboard Navigation

- Run button focusable via Tab
- Focus indicator: 2px solid outline `--btn-primary`
- Enter/Space triggers scroll action

### Screen Readers

```html
<section id="hero" aria-label="Hero section - Developer introduction">
  <div class="terminal" role="region" aria-label="Skills showcase">
    <!-- Typewriter text -->
  </div>
  <button aria-label="Scroll to About section">
    ▶ Run Code
  </button>
</section>
```

### Motion Preferences

**Respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable geometric background animation */
  /* Show full text immediately (no typewriter) */
  /* Disable button lift effects */
  /* Use instant scroll instead of smooth scroll */
}
```

---

## 📱 Responsive Behavior

### Desktop (1440px+) - Primary Design
- Terminal width: `700px`
- Full geometric animation
- Large button: `180px × 50px`

### Tablet (768px - 1439px)
- Terminal width: `600px`
- Font size: `16px`
- Button: `160px × 48px`

### Mobile (< 768px) - Epic 6
- Terminal width: `90vw` (max `400px`)
- Font size: `14px`
- Simplified/disabled geometric background
- Button: `140px × 44px`

---

## 🚀 Performance Targets

- **First Paint:** < 1 second
- **Animation FPS:** 60fps (minimum 50fps)
- **Time to Interactive:** < 2 seconds
- **Lighthouse Performance:** > 90

**Optimization Strategies:**
- Lazy load Three.js components
- Use `will-change` sparingly
- Debounce/throttle animation updates
- Code splitting for geometric background

---

## 🎯 User Flow

1. **User lands on page** → Background animation starts, terminal fades in
2. **Terminal appears** → Typewriter effect begins immediately
3. **Text completes** → Cursor continues blinking, inviting interaction
4. **User hovers button** → Button highlights with glow effect
5. **User clicks button** → Smooth scroll to About section

---

## 🔍 Design Tokens Summary

```css
:root {
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 60px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  /* Shadows */
  --shadow-terminal: 0 20px 60px rgba(0, 0, 0, 0.5);
  --shadow-button: 0 8px 20px rgba(0, 217, 255, 0.3);

  /* Transitions */
  --transition-fast: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 800ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 📋 Component Checklist

- [ ] Geometric code background implemented
- [ ] Terminal window with header dots
- [ ] Syntax-highlighted typewriter text
- [ ] Blinking cursor animation
- [ ] Run button with hover states
- [ ] Smooth scroll to About section
- [ ] Keyboard accessibility
- [ ] Screen reader support
- [ ] Reduced motion support
- [ ] Performance optimization (lazy loading)

---

**Design Status:** Ready for Implementation  
**Next Steps:** Generate Stitch prompt for visual mockup

