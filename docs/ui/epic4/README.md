# Epic 4: Content Sections - UI Design Documentation

**Epic:** Epic 4 - About, Skills, Experience Sections  
**Status:** Design Complete, Ready for Implementation  
**Designer:** Sally (UX Expert)  
**Date:** 2025-10-29

---

## 📂 Directory Contents

```
docs/ui/epic4/
├── README.md                                    ← You are here
├── QUICKSTART.md                                ← Quick guide to generate mockups
├── content-sections-design-spec.md              ← Complete design specification
├── stitch-prompt-content-sections.md            ← Copy-paste prompt for Stitch
└── mockups/                                     ← Generated mockups (add after Stitch)
    ├── screen.png                               ← Full page screenshot
    └── code.html                                ← Exported HTML/code (optional)
```

---

## 🎯 What's in This Epic?

Epic 4 delivers three core content sections for the portfolio:

### 1. **About Section**
- Single card with 3-4 sentence value proposition
- Clean, readable typography
- Fade-in scroll animation
- Professional introduction for recruiters

### 2. **Skills Section**
- Three categories: Frontend, Backend, Tools
- Tech badges with icons and text
- Cyan accent color for visual interest
- Scannable grid layout

### 3. **Experience Timeline**
- Vertical timeline with 4 work positions
- Timeline dots and connecting line
- Card-based experience entries
- Newest-first chronological order

---

## 📋 Design Deliverables

| Document | Purpose | For Whom |
|----------|---------|----------|
| **content-sections-design-spec.md** | Complete UI/UX specification with all design details | Developers & Designers |
| **stitch-prompt-content-sections.md** | Ready-to-use prompt for AI mockup generation | UX Team |
| **QUICKSTART.md** | Fast track guide to generate mockups | Anyone |
| **mockups/** | Visual reference mockups from Stitch/Figma | Developers |

---

## 🚀 Quick Start

**Want to generate the UI mockup right now?**

1. Go to **[QUICKSTART.md](./QUICKSTART.md)**
2. Follow 3 simple steps
3. Have mockup in < 5 minutes

---

## 📖 Design Highlights

### Visual Style: Code Aesthetics - Card-Based

**Color Palette:**
- Dark background: `#0a0e1a`
- Card containers: `#0d1117`
- Cyan accents: `#00d9ff`
- Text hierarchy: `#f3f4f6` → `#9ca3af` → `#6b7280`

**Key Components:**
- **Card:** Reusable container with shadow, border, padding
- **TechBadge:** Icon + text pill for skills
- **Timeline:** Vertical line with dots and cards
- **SectionWrapper:** Scroll animation container

**Animations:**
- Fade in + slide up on scroll
- Staggered reveal for multiple items
- Subtle hover effects on interactive elements

---

## 🎨 Component Specifications

### Card Component
```css
background: #0d1117
border: 1px solid #30363d
border-radius: 12px
padding: 24px
shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
```

### Tech Badge
```css
background: rgba(0, 217, 255, 0.1)
border: 1px solid rgba(0, 217, 255, 0.3)
border-radius: 6px
padding: 8px 12px
color: #00d9ff
```

### Timeline
```css
line: 2px solid #30363d
dots: 12px diameter, #00d9ff with glow
cards: standard Card component
```

---

## 📐 Layout Structure

```
┌──────────────────────────────────────┐
│  About Section                       │
│  ┌────────────────────────────────┐ │
│  │  Value proposition text...     │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  Skills Section                      │
│  Frontend | Backend | Tools          │
│  [React] [Vue] [TS]  [Node] [Git]    │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  Experience Section                  │
│  ●━━ Company 1 (2020-2024)          │
│  ●━━ Company 2 (2020)               │
│  ●━━ Company 3 (2018-2020)          │
│  ●━━ Company 4 (2017-2018)          │
└──────────────────────────────────────┘
```

---

## 👨‍💻 For Developers

### Implementation Checklist

**Phase 1: Reusable Components**
- [ ] Create `Card.tsx` component
- [ ] Create `TechBadge.tsx` component
- [ ] Create `SectionWrapper.tsx` component
- [ ] Define TypeScript interfaces

**Phase 2: Data Layer**
- [ ] Create `src/data/skills.ts`
- [ ] Create `src/data/experience.ts`
- [ ] Define data types

**Phase 3: Section Components**
- [ ] Build `AboutSection.tsx`
- [ ] Build `SkillsSection.tsx`
- [ ] Build `ExperienceSection.tsx`

**Phase 4: Animations**
- [ ] Implement scroll reveal animations
- [ ] Add hover effects
- [ ] Respect `prefers-reduced-motion`

**Phase 5: Integration**
- [ ] Add sections to main page
- [ ] Verify navigation IDs work
- [ ] Test scroll spy activation

### Design Tokens (Tailwind)

Add to `globals.css`:
```css
:root {
  /* Cards */
  --card-bg: #0d1117;
  --card-border: #30363d;
  --card-border-hover: #484f58;
  
  /* Badges */
  --badge-bg: rgba(0, 217, 255, 0.1);
  --badge-border: rgba(0, 217, 255, 0.3);
  --badge-text: #00d9ff;
  
  /* Timeline */
  --timeline-line: #30363d;
  --timeline-dot: #00d9ff;
}
```

Add to `tailwind.config.ts`:
```ts
extend: {
  colors: {
    'card': {
      DEFAULT: 'var(--card-bg)',
      border: 'var(--card-border)',
    },
    'badge': {
      bg: 'var(--badge-bg)',
      border: 'var(--badge-border)',
      text: 'var(--badge-text)',
    },
  }
}
```

---

## 🎨 For Designers

### Mockup Generation Workflow

1. **Read** the design spec: `content-sections-design-spec.md`
2. **Use** the Stitch prompt: `stitch-prompt-content-sections.md`
3. **Generate** mockup in Stitch/Figma/v0
4. **Export** assets to `mockups/` folder
5. **Review** with team for feedback
6. **Iterate** if needed

### Design Review Checklist

- [ ] All three sections visible
- [ ] Card styling consistent
- [ ] Tech badges have icons + text
- [ ] Timeline is clear and aligned
- [ ] Typography hierarchy correct
- [ ] Colors match specification
- [ ] Spacing feels balanced
- [ ] Dark theme maintained

---

## ♿ Accessibility Considerations

- **Keyboard Navigation:** All interactive elements (badges) are keyboard accessible
- **ARIA Labels:** Proper semantic HTML and ARIA labels for sections
- **Focus Indicators:** Clear cyan outline on focus
- **Motion Preferences:** Animations respect `prefers-reduced-motion`
- **Color Contrast:** All text meets WCAG AA standards
- **Screen Readers:** Logical reading order, proper heading hierarchy

---

## 📱 Responsive Design

**Desktop (1440px+):** Primary design target
- Full card layout
- Multi-column skill badges
- Complete timeline visualization

**Tablet (768px-1439px):** Optimized layout
- Slightly tighter spacing
- Badges wrap to multiple rows
- Timeline maintained

**Mobile (<768px):** Epic 6 scope
- Stack everything vertically
- Full-width cards
- Simplified timeline (if needed)

---

## 🔗 Related Documentation

**PRD Documents:**
- [Epic 4 PRD](../../prd/epic-4-content-sections.md) - Full requirements
- [Epics Overview](../../prd/epics-overview.md) - Project roadmap

**UI Documentation:**
- [Epic 2 UI](../epic2/) - Hero section design (reference)
- [Epic 3 UI](../epic3/) - Navigation design (reference)

**Technical Docs:**
- [UI Architecture](../../ui-architecture.md) - Overall frontend architecture
- [Brainstorming](../../brainstorming-session-results.md) - Original design decisions

---

## 🎯 Success Criteria

**Design Quality:**
- ✅ Mockup matches specification 95%+
- ✅ All components clearly visible
- ✅ Typography readable and professional
- ✅ Color palette consistent with theme

**Developer Handoff:**
- ✅ All measurements and specs documented
- ✅ Design tokens defined
- ✅ Component breakdown clear
- ✅ Assets exported in usable format

**User Experience:**
- ✅ Information hierarchy is clear
- ✅ Content is scannable in 10 seconds
- ✅ Professional appearance builds credibility
- ✅ Animations enhance (not distract)

---

## 📞 Questions or Issues?

**For Design Questions:**
- Review the design spec first
- Check similar sections in Epic 2/3 for consistency
- Refer to overall UI architecture

**For Implementation Questions:**
- See the PRD for functional requirements
- Check component architecture standards
- Review existing codebase patterns

**For Mockup Generation:**
- Use the QUICKSTART guide
- Try the simplified Stitch prompt if needed
- Iterate based on design spec

---

**Document Owner:** UX Team (Sally)  
**Last Updated:** 2025-10-29  
**Status:** ✅ Ready for Mockup Generation & Implementation


