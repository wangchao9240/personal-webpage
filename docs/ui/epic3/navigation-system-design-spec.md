# Navigation System - UI Design Specification

**Component:** Navigation System (Epic 3)  
**Designer:** Sally (UX Expert)  
**Date:** 2025-10-29  
**Target:** Recruiter-focused personal portfolio website  
**Design Philosophy:** Code Aesthetics - Minimal, Always-Accessible, Unobtrusive

---

## 🎯 Design Goals

1. **Discoverability:** Navigation is visible but unobtrusive
2. **Quick Access:** Recruiters can jump to any section instantly
3. **Context Awareness:** Active section is always highlighted
4. **Professional Contact:** Contact information is immediately accessible
5. **Minimal Distraction:** Navigation doesn't compete with content

---

## 📐 Layout Structure

### Full Page Navigation System

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  ✉  in  gh  ←─┐  │
│  │         HEADER                    │  Contact Icons  │
│  └──────────────────────────────────┘                   │
│                                                          │
│                    CONTENT                       ●  Home│
│                    SECTIONS                      ●  About
│                                                  ●  Skills
│                    (Scroll)                      ●  Exp  │
│                                                  ●  Proj │
│                                                  ↑       │
│                                              Floating    │
│                                              Nav Dots    │
│                                           (right, middle)│
└─────────────────────────────────────────────────────────┘
```

### Visual Hierarchy

1. **Header (z-index: 50)** - Fixed top
   - Semi-transparent background
   - Contact icons on the right
   
2. **Floating Navigation (z-index: 50)** - Fixed right, middle
   - 5 navigation dots
   - Hover labels appear on left
   - Active section highlighted

3. **Content (z-index: 1-10)** - Scrollable
   - Hero, About, Skills, Experience, Projects sections

---

## 🎨 Color Palette

### Extending Hero Section Colors

```css
/* Inherit from Epic 2 */
--bg-hero: #0a0e1a;              /* Dark background */
--text-terminal-green: #00ff41;  /* Active elements */
--btn-primary: #00d9ff;          /* Primary accent (cyan) */
--btn-hover: #00b8d9;            /* Hover state */

/* Navigation-Specific Colors */
--nav-dot-inactive: #6b7280;     /* Gray-500 - inactive dots */
--nav-dot-active: #00d9ff;       /* Cyan - active dot */
--nav-dot-hover: #9ca3af;        /* Gray-400 - hover state */
--nav-label-bg: rgba(17, 24, 39, 0.95); /* Gray-900 with opacity */
--nav-label-text: #f9fafb;       /* Gray-50 - label text */

/* Header Colors */
--header-bg: rgba(10, 14, 26, 0.85); /* Semi-transparent hero bg */
--header-border: rgba(48, 54, 61, 0.3); /* Subtle border */
--icon-default: #d1d5db;         /* Gray-300 - default icons */
--icon-hover: #00d9ff;           /* Cyan - hover icons */
```

---

## 🔤 Typography

### Font Stack

```css
/* Inherit from globals */
font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
```

### Navigation Labels

- **Font size:** `14px`
- **Font weight:** `500` (medium)
- **Letter spacing:** `0.02em`
- **Text transform:** `capitalize`
- **Line height:** `1.4`

### Contact Icons

- **Icon size:** `20px × 20px`
- **Spacing between icons:** `20px`

---

## 🖼️ Component Specifications

### 1. Header Component

**Position & Dimensions:**
- Position: `fixed top-0 left-0 right-0`
- Height: `70px`
- Z-index: `50`
- Backdrop filter: `blur(10px)` for glassmorphism effect

**Visual Style:**
```css
background: var(--header-bg);              /* rgba(10, 14, 26, 0.85) */
border-bottom: 1px solid var(--header-border);
backdrop-filter: blur(10px);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
```

**Layout:**
```
┌──────────────────────────────────────────────────┐
│                                    ✉  in  gh     │  ← Contact Icons
│                                    [20px spacing] │
└──────────────────────────────────────────────────┘
     70px height
```

**Responsive:**
- Desktop: Full width, icons on right with `32px` padding
- Tablet: Same behavior
- Mobile (Epic 6): Icons remain visible, smaller padding

---

### 2. Contact Icons (Header Right)

**Structure:**
```html
Header > Right Section
├── Email Icon (mailto:)
├── LinkedIn Icon (external link)
└── GitHub Icon (external link)
```

**Individual Icon Specifications:**

**Dimensions:**
- Icon size: `20px × 20px`
- Clickable area: `40px × 40px` (for better touch targets)
- Spacing between icons: `20px`
- Distance from right edge: `32px`

**States:**

**Default:**
```css
color: var(--icon-default);      /* Gray-300 */
opacity: 0.9;
transition: all 200ms ease;
```

**Hover:**
```css
color: var(--icon-hover);        /* Cyan */
opacity: 1;
transform: scale(1.1);           /* Slight grow */
```

**Active (Click):**
```css
transform: scale(0.95);
```

**Icon Set:**
- **Email:** Envelope icon (mailto:chasenwang1026@outlook.com)
- **LinkedIn:** LinkedIn logo (opens in new tab)
- **GitHub:** GitHub logo (opens in new tab)

**Accessibility:**
- Each icon has `aria-label` (e.g., "Email me", "LinkedIn profile", "GitHub profile")
- Links include `rel="noopener noreferrer"` for external links
- Focus indicator: `2px solid outline` in cyan

---

### 3. Floating Navigation Dots

**Position:**
- Position: `fixed right-8 top-1/2 -translate-y-1/2`
- Right offset: `32px` (2rem / 8 Tailwind units)
- Vertically centered via `top: 50%; transform: translateY(-50%)`
- Z-index: `50`

**Structure:**
```
Floating Nav Container
├── Dot 1: Hero    (id: hero)
├── Dot 2: About   (id: about)
├── Dot 3: Skills  (id: skills)
├── Dot 4: Experience (id: experience)
└── Dot 5: Projects (id: projects)
```

**Layout:**
```
        [Label appears on hover] ←
                               ●  ← Dot
                               ●
                               ●  ← Active (larger, cyan)
                               ●
                               ●

Spacing: 16px between dots
```

---

### 4. Individual Navigation Dot

**Dimensions:**

**Inactive Dot:**
- Width/Height: `10px`
- Border radius: `50%` (perfect circle)
- Scale: `1.0`

**Active Dot:**
- Width/Height: `14px` (or scale 1.4)
- Border radius: `50%`
- Scale: `1.4`

**States:**

**Inactive (Default):**
```css
width: 10px;
height: 10px;
background: var(--nav-dot-inactive);  /* Gray-500 */
border: none;
opacity: 0.6;
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
```

**Inactive (Hover):**
```css
background: var(--nav-dot-hover);     /* Gray-400 */
opacity: 0.9;
transform: scale(1.2);
```

**Active (Current Section):**
```css
width: 14px;
height: 14px;
background: var(--nav-dot-active);    /* Cyan */
opacity: 1;
transform: scale(1);
box-shadow: 0 0 8px rgba(0, 217, 255, 0.5); /* Subtle glow */
```

**Active + Hover:**
```css
/* Same as active, no additional hover effect on active dot */
transform: scale(1);
```

---

### 5. Navigation Dot Label (Hover Tooltip)

**Position:**
- Appears to the **left** of the dot
- Offset: `12px` from dot
- Vertically aligned with dot center

**Dimensions:**
- Padding: `6px 12px`
- Border radius: `6px`
- Min width: `80px` (for alignment)
- White-space: `nowrap`

**Visual Style:**
```css
background: var(--nav-label-bg);      /* rgba(17, 24, 39, 0.95) */
color: var(--nav-label-text);         /* Gray-50 */
font-size: 14px;
font-weight: 500;
letter-spacing: 0.02em;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Animation:**
```css
/* Entrance */
@keyframes labelSlideIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

animation: labelSlideIn 200ms ease;
```

**Label Text:**
- Hero: "Home"
- About: "About"
- Skills: "Skills"
- Experience: "Experience"
- Projects: "Projects"

---

## 🎬 Animations & Interactions

### Scroll Spy Behavior

**Active Section Detection:**
1. Calculate which section is currently in viewport
2. Section is "active" when its top is within `100px` of viewport top
3. Update active dot immediately (no delay)
4. Smooth transition between active states (300ms)

**Scroll Spy Logic:**
```typescript
const sections = ['hero', 'about', 'skills', 'experience', 'projects'];
const activeSection = sections.find(section => {
  const element = document.getElementById(section);
  const rect = element.getBoundingClientRect();
  return rect.top >= -100 && rect.top < window.innerHeight / 2;
});
```

---

### Navigation Dot Click

**On Click:**
1. Smooth scroll to target section
2. Offset: `-80px` to account for fixed header
3. Duration: `800ms`
4. Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Scroll Function:**
```javascript
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};
```

---

### Contact Icon Interaction

**Hover:**
- Color change: Gray → Cyan (200ms)
- Scale: 1.0 → 1.1 (200ms)
- Smooth transition

**Click:**
- Email: Opens mailto: link
- LinkedIn: Opens in new tab
- GitHub: Opens in new tab

**Focus (Keyboard):**
- Tab order: Left to right (Email → LinkedIn → GitHub)
- Focus indicator: `2px solid cyan outline`
- Enter key triggers link

---

### Header Scroll Behavior

**Option 1 - Always Visible (Recommended for MVP):**
- Header remains fixed at top
- No hide/show on scroll

**Option 2 - Future Enhancement:**
- Hide header on scroll down
- Show header on scroll up
- Transition: `transform 300ms ease`

**MVP Decision:** Use Option 1 (always visible)

---

## ♿ Accessibility

### Keyboard Navigation

**Header Icons:**
- Tab order: Email → LinkedIn → GitHub
- Focus indicator: Visible 2px cyan outline
- Enter/Space activates link

**Floating Dots:**
- Tab order: Top to bottom (Hero → About → Skills → Experience → Projects)
- Focus indicator: `2px solid cyan outline + scale(1.3)`
- Enter/Space scrolls to section
- Arrow keys: Up/Down to navigate between dots (optional)

**ARIA Labels:**
```html
<!-- Header Icons -->
<a href="mailto:..." aria-label="Send me an email">
  <MailIcon />
</a>
<a href="..." aria-label="View my LinkedIn profile" target="_blank" rel="noopener noreferrer">
  <LinkedInIcon />
</a>
<a href="..." aria-label="View my GitHub profile" target="_blank" rel="noopener noreferrer">
  <GitHubIcon />
</a>

<!-- Floating Dots -->
<nav aria-label="Section navigation">
  <button aria-label="Navigate to Home section" aria-current="page">
    <!-- Dot -->
  </button>
  <!-- More dots -->
</nav>
```

---

### Screen Readers

**Header:**
```html
<header role="banner" aria-label="Site header with contact information">
  <div aria-label="Contact links">
    <!-- Icons -->
  </div>
</header>
```

**Floating Navigation:**
```html
<nav role="navigation" aria-label="Page section navigation">
  <!-- Dots with aria-current="page" for active section -->
</nav>
```

---

### Motion Preferences

**Respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable label slide animations */
  /* Use instant scroll instead of smooth scroll */
  /* Disable scale/transform effects */
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 Responsive Behavior

### Desktop (1440px+) - Primary Design
- Header height: `70px`
- Floating dots: Right offset `32px`, fully visible
- Contact icons: `20px` size, `20px` spacing

### Tablet (768px - 1439px)
- Header height: `70px`
- Floating dots: Right offset `24px`
- Contact icons: `18px` size, `16px` spacing

### Mobile (< 768px) - Epic 6
- Header height: `60px`
- Floating dots: Hidden or simplified (bottom nav?)
- Contact icons: `16px` size, `12px` spacing, hamburger menu

---

## 🚀 Performance Targets

- **Scroll Event:** Throttled to 60fps (16ms)
- **Scroll Spy Update:** Debounced by 50ms
- **Smooth Scroll:** 800ms duration, no jank
- **Icon Load:** Inline SVG (no network requests)

**Optimization Strategies:**
- Use passive scroll listeners: `{ passive: true }`
- Throttle scroll spy calculations
- Use CSS transforms for animations (GPU-accelerated)
- Memoize section calculations

---

## 🎯 User Flow

### First-Time Visitor

1. **Page loads** → Header fades in, floating dots appear
2. **User scrolls down** → Active dot updates to match section
3. **User notices dots** → Hovers to see labels
4. **User clicks dot** → Smooth scroll to target section
5. **User sees contact icons** → Clicks to reach out

### Recruiter Flow

1. **Lands on Hero** → Sees contact icons immediately in header
2. **Wants to skip ahead** → Uses floating dots to jump to Projects
3. **Returns to About** → Clicks "About" dot
4. **Ready to contact** → Clicks email/LinkedIn icon in header

---

## 🔍 Design Tokens Summary

```css
:root {
  /* Navigation Dots */
  --dot-size-inactive: 10px;
  --dot-size-active: 14px;
  --dot-spacing: 16px;
  --dot-right-offset: 32px;
  
  /* Navigation Colors */
  --nav-dot-inactive: #6b7280;
  --nav-dot-active: #00d9ff;
  --nav-dot-hover: #9ca3af;
  --nav-label-bg: rgba(17, 24, 39, 0.95);
  --nav-label-text: #f9fafb;
  
  /* Header */
  --header-height: 70px;
  --header-bg: rgba(10, 14, 26, 0.85);
  --header-border: rgba(48, 54, 61, 0.3);
  --icon-size: 20px;
  --icon-default: #d1d5db;
  --icon-hover: #00d9ff;
  
  /* Transitions */
  --transition-nav: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-icon: 200ms ease;
  
  /* Z-Index */
  --z-header: 50;
  --z-floating-nav: 50;
}
```

---

## 📋 Component Checklist

### Header Component
- [ ] Fixed header with semi-transparent background
- [ ] Backdrop blur effect (glassmorphism)
- [ ] Email icon with mailto: link
- [ ] LinkedIn icon with external link
- [ ] GitHub icon with external link
- [ ] Hover effects on all icons
- [ ] Keyboard focus indicators
- [ ] ARIA labels for accessibility

### Floating Navigation Component
- [ ] 5 navigation dots (Hero, About, Skills, Experience, Projects)
- [ ] Positioned fixed right, vertically centered
- [ ] Active section highlighting (larger, cyan, glow)
- [ ] Hover labels with slide-in animation
- [ ] Click to scroll to section
- [ ] Scroll spy integration
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] ARIA labels and current page indication

### Scroll Spy Hook
- [ ] `useScrollSpy` custom hook
- [ ] Tracks active section based on scroll position
- [ ] Passive scroll listener
- [ ] Throttled/debounced for performance
- [ ] Accounts for header offset
- [ ] Returns current section ID

### Utilities
- [ ] `scrollToSection` function
- [ ] Smooth scroll with offset
- [ ] Handles edge cases (section not found)
- [ ] Works across all browsers

---

## 🎨 Design Decisions & Rationale

### Why Right-Side Floating Dots?

1. **Unobtrusive:** Doesn't interfere with content reading flow
2. **Always visible:** No need to scroll to top for navigation
3. **Intuitive:** Common pattern in modern web design
4. **Mobile-friendly:** Can be adapted to bottom nav on mobile

### Why Top Header for Contact?

1. **Immediate access:** Recruiters can contact without scrolling
2. **Professional:** Standard placement for contact information
3. **Persistent:** Always available regardless of scroll position

### Why Minimal Label Design?

1. **Clean aesthetics:** Matches Code Aesthetics theme
2. **Performance:** No heavy UI frameworks needed
3. **Focus:** Doesn't distract from portfolio content

---

**Design Status:** Ready for Implementation  
**Next Steps:** Generate Stitch prompt for visual mockup


