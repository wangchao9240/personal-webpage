# Epic 5: Projects Showcase - UI Design Documentation

**Epic:** Epic 5 - Projects Showcase  
**Status:** Design Complete, Ready for Mockup Generation  
**Designer:** Sally (UX Expert)  
**Date:** 2025-10-29

---

## 📂 Directory Contents

```
docs/ui/epic5/
├── README.md                                  ← You are here
├── QUICKSTART.md                              ← Quick guide to generate mockups
├── projects-showcase-design-spec.md           ← Complete design specification
├── stitch-prompt-projects-showcase.md         ← Copy-paste prompt for Stitch
└── mockups/                                   ← Generated mockups (add after Stitch)
    ├── screen.png                             ← Full page screenshot
    └── code.html                              ← Exported HTML/code (optional)
```

---

## 🎯 What's in This Epic?

Epic 5 delivers the **most important section** of the portfolio - the Projects Showcase:

### Key Features

**ProjectCard Component** (New Interactive Card)
- Project screenshot/image (16:9 aspect ratio)
- Project name and one-sentence description
- Tech stack badges (reused from Epic 4)
- **Hover lift effect** (translateY -8px)
- **Button reveal animation** on hover
- Live Demo and GitHub buttons

**Projects Section Layout**
- 2-column grid on desktop
- 3 project cards total
- Staggered entrance animations
- Professional, scannable design

**Interactive Elements**
- Smooth hover transitions (300ms)
- Cyan border glow on hover
- Enhanced shadow with cyan tint
- Buttons fade in from bottom
- Scale effects on button hover

---

## 📋 Design Deliverables

| Document | Purpose | For Whom |
|----------|---------|----------|
| **projects-showcase-design-spec.md** | Complete UI/UX specification | Developers & Designers |
| **stitch-prompt-projects-showcase.md** | Ready-to-use Stitch prompt | UX Team |
| **QUICKSTART.md** | Fast track mockup generation | Anyone |
| **mockups/** | Visual reference mockups | Developers |

---

## 🚀 Quick Start

**Want to generate the UI mockup right now?**

1. Go to **[QUICKSTART.md](./QUICKSTART.md)**
2. Follow 3 simple steps
3. Have mockup in < 5 minutes

---

## 📖 Design Highlights

### Visual Style: Code Aesthetics - Interactive Cards

**Color Palette:**
- Card background: `#0d1117`
- Card border (default): `#30363d`
- Card border (hover): `#00d9ff` (cyan glow)
- Primary button: `#00d9ff` (Live Demo)
- Secondary button: `#30363d` (GitHub)

**Key Components:**
- **ProjectCard:** Complete card with image, content, and buttons
- **Tech Badges:** Reused from Epic 4, smaller size (12px)
- **Button Overlay:** Gradient background, fade-in on hover
- **Grid Layout:** 2 columns, 24px gap

**Animations:**
- Card lift: `translateY(-8px)` on hover
- Button reveal: fade in + slide up
- Border glow: smooth cyan transition
- Shadow enhancement: cyan-tinted glow

---

## 🎨 Component Specifications

### ProjectCard Component

**Card Structure:**
```
┌─────────────────────────────────┐
│  [Project Image - 16:9 ratio]  │  ← Top section
├─────────────────────────────────┤
│  Project Name                   │  ← 24px, bold
│  One-sentence description...    │  ← 16px, gray
│                                 │
│  [React] [TypeScript] [API]    │  ← Tech badges
│                                 │
│  [Live Demo]  [GitHub]         │  ← Buttons (hover only)
└─────────────────────────────────┘
```

**Dimensions:**
- Width: 100% of grid column (~540px on desktop)
- Height: Auto (determined by content)
- Image aspect ratio: 16:9
- Content padding: 24px
- Border radius: 12px

**Hover Effect:**
```css
/* Default */
transform: translateY(0);
border: 1px solid #30363d;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

/* Hover */
transform: translateY(-8px);
border: 1px solid #00d9ff;
box-shadow: 0 12px 24px rgba(0, 217, 255, 0.2);
```

---

### Button Specifications

**Live Demo Button:**
```css
background: #00d9ff;
color: #0a0e1a;
padding: 10px 20px;
font-size: 14px;
font-weight: 600;
border-radius: 6px;

/* Hover */
background: #00b8d9;
transform: scale(1.05);
```

**GitHub Button:**
```css
background: #30363d;
color: #f3f4f6;
padding: 10px 20px;
font-size: 14px;
font-weight: 600;
border-radius: 6px;

/* Hover */
background: #484f58;
transform: scale(1.05);
```

---

## 📐 Layout Structure

### Grid Configuration

**Desktop (1440px+):**
```
Container: max-w-6xl (1152px)
Grid: 2 columns, 24px gap

┌──────────┐  ┌──────────┐
│ Card 1   │  │ Card 2   │
└──────────┘  └──────────┘

┌──────────┐
│ Card 3   │  (Left column)
└──────────┘
```

**Tailwind:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
```

---

## 👨‍💻 For Developers

### Implementation Checklist

**Phase 1: Data Layer**
- [ ] Create `src/types/project.ts` interface
- [ ] Create `src/data/projects.ts` with 3 projects
- [ ] Define image paths (placeholder first)

**Phase 2: ProjectCard Component**
- [ ] Create `src/components/ui/ProjectCard.tsx`
- [ ] Implement image section (Next.js Image)
- [ ] Add project name and description
- [ ] Integrate TechBadge components
- [ ] Build button overlay with gradient
- [ ] Add hover state management

**Phase 3: Projects Section**
- [ ] Create `src/components/sections/ProjectsSection.tsx`
- [ ] Implement 2-column grid
- [ ] Map over projects data
- [ ] Add staggered entrance animations

**Phase 4: Images**
- [ ] Collect/create project screenshots
- [ ] Optimize images (< 300KB each)
- [ ] Save to `public/images/projects/`
- [ ] Update data file with correct paths

**Phase 5: Links & Buttons**
- [ ] Add working Live Demo links
- [ ] Add working GitHub links
- [ ] Implement `target="_blank"` security
- [ ] Add external link icons
- [ ] Test all links

**Phase 6: Polish**
- [ ] Fine-tune hover animations
- [ ] Test keyboard navigation
- [ ] Verify ARIA labels
- [ ] Check responsive behavior

---

### Design Tokens (Tailwind)

Add to `tailwind.config.ts`:
```ts
extend: {
  colors: {
    'project-card': {
      bg: '#0d1117',
      border: '#30363d',
      'border-hover': '#00d9ff',
    },
    'btn-primary': {
      DEFAULT: '#00d9ff',
      hover: '#00b8d9',
    },
    'btn-secondary': {
      DEFAULT: '#30363d',
      hover: '#484f58',
    },
  },
  boxShadow: {
    'card': '0 4px 12px rgba(0, 0, 0, 0.3)',
    'card-hover': '0 12px 24px rgba(0, 217, 255, 0.2)',
  },
}
```

---

## 🎨 For Designers

### Mockup Generation Workflow

1. **Read** the design spec
2. **Use** the Stitch prompt
3. **Generate** mockup
4. **Review** for accuracy
5. **Export** to mockups folder
6. **Iterate** if needed

### Design Review Checklist

- [ ] 3 project cards visible
- [ ] 2-column grid layout
- [ ] Project images at 16:9 ratio
- [ ] Tech badges with icons
- [ ] Hover state showing lifted card
- [ ] Buttons visible on hover state
- [ ] Cyan border glow on hover
- [ ] Dark theme consistent
- [ ] Typography clear

---

## ♿ Accessibility Considerations

- **Images:** Descriptive alt text for each project
- **Links:** ARIA labels with project name
- **Security:** `rel="noopener noreferrer"` on external links
- **Keyboard:** Tab navigation through all cards and buttons
- **Focus:** Clear cyan outline on focused elements
- **Hover:** Effects also trigger on keyboard focus

---

## 📱 Responsive Design

**Desktop (1440px+):** 2 columns, full hover effects
**Tablet (768px-1439px):** 2 columns, same effects
**Mobile (<768px):** 1 column (Epic 6 scope)

---

## 🔗 Related Documentation

**PRD Documents:**
- [Epic 5 PRD](../../prd/epic-5-projects-showcase.md) - Full requirements
- [Epics Overview](../../prd/epics-overview.md) - Project roadmap

**UI Documentation:**
- [Epic 2 UI](../epic2/) - Hero section
- [Epic 3 UI](../epic3/) - Navigation
- [Epic 4 UI](../epic4/) - Content sections (TechBadge reference)

**Technical Docs:**
- [UI Architecture](../../ui-architecture.md) - Frontend architecture
- [Brainstorming](../../brainstorming-session-results.md) - Original decisions

---

## 🎯 Success Criteria

**Design Quality:**
- ✅ Mockup matches specification 95%+
- ✅ All 3 projects clearly visible
- ✅ Hover effects demonstrated
- ✅ Buttons visible and styled correctly

**Developer Handoff:**
- ✅ All measurements documented
- ✅ Design tokens defined
- ✅ Component breakdown clear
- ✅ Animation timings specified

**User Experience:**
- ✅ Projects are the visual focal point
- ✅ Hover effects feel smooth and professional
- ✅ CTAs (Live Demo, GitHub) are obvious
- ✅ Tech stacks are scannable at a glance

---

## 📞 Questions or Issues?

**For Design Questions:**
- Review the design spec first
- Check Epic 4 for TechBadge reference
- Refer to Epic 2/3 for consistent styling

**For Implementation Questions:**
- See the PRD for functional requirements
- Check reusable components from Epic 4
- Review Next.js Image component docs

**For Mockup Generation:**
- Use the QUICKSTART guide
- Try simplified prompt if needed
- Iterate based on design spec

---

## 🌟 Design Philosophy

**This Epic is Critical:**
> "Projects are the Proof: Among all sections, the Projects showcase is most critical—it's the tangible evidence of capabilities."

The design should:
- **Grab attention** immediately with visuals
- **Communicate value** through clear descriptions
- **Show expertise** via tech stack badges
- **Enable action** with obvious CTAs
- **Feel professional** with smooth interactions

---

**Document Owner:** UX Team (Sally)  
**Last Updated:** 2025-10-29  
**Status:** ✅ Ready for Mockup Generation & Implementation


