# UI Design Documentation - Navigation System

**Project:** Chasen Wang Personal Portfolio Website  
**Epic:** Epic 3 - Navigation System  
**Design Lead:** Sally (UX Expert)  
**Last Updated:** 2025-10-29

---

## 📁 Documentation Structure

```
docs/ui/epic3/
├── README.md                               # This file
├── navigation-system-design-spec.md        # Complete Navigation System design specification
├── stitch-prompt-navigation-system.md      # Stitch/AI tool prompt for mockup generation
├── QUICKSTART.md                          # Quick guide to generate mockups
└── mockups/                               # Generated mockups (to be created)
    ├── navigation-full-view.png           # Full page with both components
    ├── header-detail.png                  # Header close-up
    └── floating-nav-detail.png            # Floating dots close-up
```

---

## 🎨 What's Being Designed

### Epic 3: Navigation System

**Status:** Design complete, ready for mockup generation  
**Components:** 2 main navigation components

#### 1. Fixed Header with Contact Icons
- **Position:** Fixed to top of page
- **Height:** 70px
- **Style:** Semi-transparent with glassmorphism (backdrop blur)
- **Content:** Email, LinkedIn, GitHub icons (right-aligned)
- **States:** Default, hover
- **Purpose:** Quick access to contact information

#### 2. Floating Navigation Dots
- **Position:** Fixed right side, vertically centered
- **Count:** 5 dots (Hero, About, Skills, Experience, Projects)
- **Style:** Minimal circles with hover labels
- **States:** Inactive, hover, active
- **Purpose:** Quick section navigation with visual indicator of current section

---

## 📖 Documentation Files

### 1. Design Specification (`navigation-system-design-spec.md`)

**For:** Developers and designers  
**Contains:**
- Layout structure and positioning
- Complete color palette
- Typography specifications
- Component specifications (Header, Floating Nav, Dots, Labels)
- All interaction states
- Animation guidelines
- Accessibility requirements
- Responsive behavior
- Performance targets
- Design tokens

**Use this when:**
- Implementing components
- Making design decisions
- Ensuring consistency
- Referencing exact measurements

---

### 2. Stitch Prompt (`stitch-prompt-navigation-system.md`)

**For:** Generating visual mockups  
**Contains:**
- Complete prompt for Stitch/v0/Figma AI
- Simplified version for token-limited tools
- Detailed component descriptions
- State variations to show
- Composition guidelines
- Iteration tips

**Use this when:**
- Generating mockups with AI tools
- Need visual reference for design
- Sharing design with stakeholders

---

### 3. Quick Start Guide (`QUICKSTART.md`)

**For:** Rapid mockup generation  
**Contains:**
- 3-step process to generate mockup
- What to expect in mockup
- Troubleshooting tips
- Next steps after mockup

**Use this when:**
- You need a mockup NOW
- First time using design docs
- Quick reference

---

## 🚀 Getting Started

### Option A: Quick Mockup Generation (2 minutes)

```bash
# 1. Open quick start guide
open docs/ui/epic3/QUICKSTART.md

# 2. Follow 3-step process
# - Copy prompt
# - Paste in Stitch
# - Save mockup

# 3. Start implementing
# Reference: navigation-system-design-spec.md
```

### Option B: Deep Dive (For implementation)

```bash
# 1. Read design specification
open docs/ui/epic3/navigation-system-design-spec.md

# 2. Review Epic requirements
open docs/prd/epic-3-navigation-system.md

# 3. Check architecture
open docs/ui-architecture.md

# 4. Begin development
# Create components following spec
```

---

## 🎨 Design System

### Color Palette (Extends Epic 2)

**Navigation-Specific Colors:**
```css
/* Dots */
--nav-dot-inactive: #6b7280;     /* Gray-500 */
--nav-dot-active: #00d9ff;       /* Cyan (accent) */
--nav-dot-hover: #9ca3af;        /* Gray-400 */

/* Labels */
--nav-label-bg: rgba(17, 24, 39, 0.95);   /* Dark tooltip */
--nav-label-text: #f9fafb;                /* Nearly white */

/* Header */
--header-bg: rgba(10, 14, 26, 0.85);      /* Semi-transparent */
--icon-default: #d1d5db;                  /* Gray-300 */
--icon-hover: #00d9ff;                    /* Cyan (accent) */
```

**Inherited Colors (from Hero Section):**
```css
--bg-hero: #0a0e1a;              /* Page background */
--btn-primary: #00d9ff;          /* Primary accent */
--text-terminal-green: #00ff41;  /* Active elements */
```

---

### Typography

**Font Family:**
```css
font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
```

**Sizes:**
- Navigation labels: 14px
- Contact icons: 20px × 20px

---

### Spacing

**Navigation Dots:**
- Dot spacing: 16px vertical
- Right offset: 32px from edge
- Inactive dot: 10px diameter
- Active dot: 14px diameter

**Header:**
- Height: 70px
- Icon spacing: 20px between icons
- Right padding: 32px

---

### Component Dimensions

| Component | Size | Position | Z-Index |
|-----------|------|----------|---------|
| Header | Full width × 70px | Fixed top | 50 |
| Floating Nav | Auto × Auto | Fixed right, centered | 50 |
| Inactive Dot | 10px × 10px | Stacked, 16px spacing | - |
| Active Dot | 14px × 14px | Same as inactive | - |
| Hover Label | Auto × Auto | Left of dot, 12px offset | - |
| Icon | 20px × 20px | Header right, 20px spacing | - |

---

## 🎯 Component States

### Header Contact Icons

| State | Color | Size | Opacity | Notes |
|-------|-------|------|---------|-------|
| Default | #d1d5db | 20px | 0.9 | Light gray |
| Hover | #00d9ff | 22px (scale 1.1) | 1.0 | Cyan, slight grow |
| Active | #00d9ff | 19px (scale 0.95) | 1.0 | Click feedback |

### Floating Navigation Dots

| State | Size | Color | Opacity | Glow | Notes |
|-------|------|-------|---------|------|-------|
| Inactive | 10px | #6b7280 | 0.6 | No | Gray |
| Inactive Hover | 12px | #9ca3af | 0.9 | No | Lighter gray, label shows |
| Active | 14px | #00d9ff | 1.0 | Yes | Cyan, current section |

---

## 📋 Component Checklist

### Header Component
- [ ] Fixed positioning at top
- [ ] Semi-transparent background with blur
- [ ] Email icon (mailto: link)
- [ ] LinkedIn icon (external link, new tab)
- [ ] GitHub icon (external link, new tab)
- [ ] Hover state for all icons (cyan, scale 1.1)
- [ ] Keyboard focus indicators
- [ ] ARIA labels for accessibility
- [ ] Subtle bottom border
- [ ] Shadow for depth

### Floating Navigation
- [ ] 5 dots (Hero, About, Skills, Experience, Projects)
- [ ] Fixed right, vertically centered
- [ ] Inactive dots (10px, gray)
- [ ] Active dot (14px, cyan, glowing)
- [ ] Hover state (12px, lighter gray)
- [ ] Hover labels (slide in from right)
- [ ] Click to scroll functionality
- [ ] Scroll spy active state tracking
- [ ] Keyboard navigation (Tab, Enter)
- [ ] ARIA labels and current indicator

### Scroll Spy Hook
- [ ] `useScrollSpy` custom hook
- [ ] Passive scroll listener
- [ ] Throttled for performance
- [ ] Accounts for header offset
- [ ] Returns current section ID
- [ ] Updates active dot smoothly

### Scroll Utility
- [ ] `scrollToSection` function
- [ ] Smooth scroll behavior
- [ ] Header offset (-80px)
- [ ] Works for all section IDs
- [ ] Error handling

---

## 🔄 Design Workflow Status

### Phase 1: Design Specification ✅
- [x] Research requirements from Epic 3
- [x] Create design specification
- [x] Define navigation-specific colors
- [x] Specify both component details
- [x] Write accessibility guidelines
- [x] Document all interaction states

### Phase 2: Mockup Generation ⏳ (Current Phase)
- [ ] Generate mockup using Stitch prompt
- [ ] Review and refine design
- [ ] Create state variations
- [ ] Document design tokens
- [ ] Get stakeholder approval

### Phase 3: Developer Handoff
- [ ] Export final mockups
- [ ] Create component implementation guide
- [ ] Document interactions and animations
- [ ] Provide icon assets
- [ ] Support implementation questions

### Phase 4: Quality Assurance
- [ ] Review implemented components
- [ ] Check visual accuracy
- [ ] Test hover and active states
- [ ] Validate scroll spy accuracy
- [ ] Test keyboard navigation
- [ ] Approve for production

---

## 🛠️ Tools & Resources

### Design Tools
- **Stitch:** AI-powered UI generation (Primary)
- **Figma:** Manual refinement if needed
- **v0.dev:** Alternative AI tool

### Icons
- **React Icons:** `react-icons` library
  - Email: `HiMail` or `HiEnvelope`
  - LinkedIn: `FaLinkedin`
  - GitHub: `FaGithub`
- **Lucide React:** Alternative icon library

### Accessibility Testing
- **Keyboard Only:** Test Tab navigation
- **WAVE:** Accessibility validation
- **Chrome DevTools:** Lighthouse audit

---

## 📞 Related Documentation

**Epic Requirements:**
- `docs/prd/epic-3-navigation-system.md` - Full user stories and acceptance criteria

**Architecture:**
- `docs/ui-architecture.md` - Frontend architecture and standards

**Previous Epic:**
- `docs/ui/epic2/` - Hero Section design (reference for consistency)

**Brainstorming:**
- `docs/brainstorming-session-results.md` - Original navigation decisions

---

## 🎓 Design Principles for This Epic

1. **Unobtrusive:** Navigation should not compete with content
2. **Always Accessible:** Fixed positioning keeps nav in reach
3. **Visual Feedback:** Clear hover and active states
4. **Context Aware:** Active section is always highlighted
5. **Minimal:** Clean, simple design matching Code Aesthetics
6. **Performant:** Smooth transitions, no jank

---

## ✅ Next Steps

### Immediate (You)

1. **Generate Mockup:**
   - Follow QUICKSTART.md guide
   - Use Stitch prompt
   - Save mockup to `mockups/` folder

2. **Review Mockup:**
   - Check against design spec
   - Verify all states are shown
   - Confirm color accuracy

### After Mockup (Development)

3. **Implement Components:**
   - Start with `useScrollSpy` hook
   - Build Header component
   - Build FloatingNav component
   - Create scroll utility

4. **Integration:**
   - Add to main layout
   - Test scroll spy accuracy
   - Verify all interactions

5. **Polish:**
   - Fine-tune animations
   - Test accessibility
   - Optimize performance

---

## 📊 Component Priority

| Priority | Component | Reason |
|----------|-----------|--------|
| 1 | `useScrollSpy` hook | Foundation for active state |
| 2 | `scrollToSection` utility | Shared by both nav components |
| 3 | Floating Navigation | Core navigation feature |
| 4 | Header | Contact access |
| 5 | Keyboard navigation | Accessibility enhancement |

---

**Design System Status:** Navigation components specified  
**Ready for:** Mockup generation and implementation  
**Epic:** 3 of 6 (Navigation System)  
**Next Epic:** Epic 4 - Content Sections (About, Skills, Experience)

---

*This navigation system maintains the "Code Aesthetics" philosophy: minimal, functional, always-accessible.*


