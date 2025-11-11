# UI Design Documentation

**Project:** Chasen Wang Personal Portfolio Website  
**Design Lead:** Sally (UX Expert)  
**Last Updated:** 2025-10-29

---

## 📁 Documentation Structure

```
docs/ui/
├── README.md                          # This file
├── hero-section-design-spec.md        # Complete Hero Section design specification
└── stitch-prompt-hero-section.md      # Stitch/AI tool prompt for mockup generation
```

---

## 🎨 Available Designs

### ✅ Epic 2: Hero Section (Complete)

**Status:** Design complete, ready for mockup generation  
**Files:**
- **Design Spec:** `hero-section-design-spec.md`
- **Stitch Prompt:** `stitch-prompt-hero-section.md`

**What's Included:**
- Full layout specifications
- Color palette and design tokens
- Typography system
- Component specifications (Terminal, Button, Background)
- Animation guidelines
- Accessibility requirements
- Responsive behavior
- Performance targets

---

## 🚀 Quick Start Guide

### How to Use Stitch Prompt

1. **Open Stitch Prompt File:**
   ```bash
   open docs/ui/stitch-prompt-hero-section.md
   ```

2. **Copy the Prompt:**
   - Find the section "PROMPT START ↓"
   - Copy everything between START and END markers
   - Choose either the detailed or simplified version

3. **Generate Mockup:**
   - Open Stitch (or v0, Lovable, etc.)
   - Paste the prompt
   - Generate the design

4. **Save Mockup:**
   - Export the generated design
   - Save to `docs/ui/mockups/`
   - Recommended formats: PNG (2x), SVG
   - File naming: `hero-section-{date}.png`

### How to Use Design Spec

1. **For Developers:**
   - Reference `hero-section-design-spec.md` during implementation
   - Follow component specifications exactly
   - Use provided design tokens (colors, spacing, etc.)
   - Implement animations as specified

2. **For Designers:**
   - Use as foundation for design system
   - Extract design tokens for consistency
   - Reference for creating additional components

---

## 📊 Design System Overview

### Color Palette

**Primary Colors:**
- Background: `#0a0e1a` (Deep space blue-black)
- Terminal: `#0d1117` (GitHub dark)
- Accent: `#00d9ff` (Cyan)

**Code Syntax:**
- Keywords: `#ff79c6` (Pink)
- Strings: `#f1fa8c` (Yellow)
- Properties: `#50fa7b` (Light green)
- Terminal text: `#00ff41` (Classic green)

### Typography

**Primary Font:**
- Family: Fira Code, Consolas, Monaco
- Sizes: 18px (terminal), 16px (button)
- Weights: 400 (regular), 600 (semi-bold)

### Spacing Scale

- XS: 8px
- SM: 12px
- MD: 24px
- LG: 40px
- XL: 60px

---

## 🎯 Design Principles

1. **Code Aesthetics:** Visual language speaks to developers
2. **Minimalism:** Clean, focused, no clutter
3. **Performance:** Animations must be smooth (60fps)
4. **Accessibility:** WCAG AA compliant, keyboard navigable
5. **Responsive:** Desktop-first, mobile optimized in Epic 6

---

## 📋 Component Status

| Component | Design | Mockup | Implementation |
|-----------|--------|--------|----------------|
| Hero Section | ✅ | ⏳ | ⏳ |
| Geometric Background | ✅ | ⏳ | ⏳ |
| Terminal Window | ✅ | ⏳ | ⏳ |
| Typewriter Text | ✅ | ⏳ | ⏳ |
| Run Button | ✅ | ⏳ | ⏳ |

**Legend:**
- ✅ Complete
- 🔄 In Progress
- ⏳ Not Started
- ❌ Blocked

---

## 🔄 Design Workflow

### Phase 1: Design Specification (Current)
- [x] Research requirements from Epic
- [x] Create design specification
- [x] Define color palette and typography
- [x] Specify component details
- [x] Write accessibility guidelines

### Phase 2: Mockup Generation (Next)
- [ ] Generate mockup using Stitch prompt
- [ ] Review and refine design
- [ ] Create component variations
- [ ] Document design tokens
- [ ] Get stakeholder approval

### Phase 3: Developer Handoff
- [ ] Export final mockups
- [ ] Create detailed component specs
- [ ] Document interactions and animations
- [ ] Provide design assets (icons, images)
- [ ] Support implementation questions

### Phase 4: Quality Assurance
- [ ] Review implemented components
- [ ] Check visual accuracy
- [ ] Test interactions and animations
- [ ] Validate accessibility
- [ ] Approve for production

---

## 📁 File Organization

### Mockups Directory (Create as needed)

```
docs/ui/mockups/
├── hero-section/
│   ├── hero-section-full.png        # Complete section
│   ├── terminal-window.png          # Component isolated
│   ├── button-states.png            # Default + hover
│   └── geometric-background.png     # Background pattern
```

### Assets Directory (Create as needed)

```
docs/ui/assets/
├── icons/
├── fonts/
└── images/
```

---

## 🛠️ Tools & Resources

### Design Tools
- **Stitch:** AI-powered UI generation (Primary)
- **Figma:** Manual design refinement
- **v0.dev:** Alternative AI design tool
- **Lovable:** AI design and code generation

### Fonts
- **Fira Code:** [Download](https://github.com/tonsky/FiraCode)
- **Consolas:** System font (fallback)

### Color References
- **Coolors:** [coolors.co](https://coolors.co)
- **Adobe Color:** [color.adobe.com](https://color.adobe.com)

### Accessibility
- **WebAIM Contrast Checker:** [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
- **WAVE:** [wave.webaim.org](https://wave.webaim.org/)

---

## 📞 Contact & Support

**Design Questions:**
- Reference: `hero-section-design-spec.md`
- Epic Requirements: `../prd/epic-2-hero-section.md`
- Architecture: `../ui-architecture.md`

**Implementation Support:**
- Component specs in design specification
- Code examples in Epic 2 document
- Architecture document for technical standards

---

## 🎓 Design Best Practices

### For This Project

1. **Always start with the spec:** Don't improvise, follow design specification
2. **Measure everything:** Use exact values from design tokens
3. **Test accessibility:** Check keyboard navigation and screen readers
4. **Optimize performance:** Monitor FPS, lazy load heavy components
5. **Mobile-first...eventually:** Desktop is primary for Epic 2, mobile in Epic 6

### Design System Rules

1. **Colors:** Only use defined palette colors
2. **Typography:** Only use specified fonts and sizes
3. **Spacing:** Use the spacing scale (8px increments)
4. **Components:** Reuse, don't recreate
5. **Animations:** Follow timing and easing specifications

---

## ✅ Next Steps

### For User (Next Action)

1. **Open Stitch prompt file:**
   ```
   docs/ui/stitch-prompt-hero-section.md
   ```

2. **Copy the complete prompt** (between START and END markers)

3. **Paste into Stitch** and generate the mockup

4. **Save generated mockup** to:
   ```
   docs/ui/mockups/hero-section-{date}.png
   ```

5. **Review mockup** against design spec

6. **Proceed with Epic 2 implementation** using both mockup and spec

---

**Design System Status:** Foundation established  
**Ready for:** Mockup generation and implementation  
**Next Epic:** Navigation System (Epic 3) - Design after Epic 2 complete

---

*All design documentation follows "Code Aesthetics" philosophy: minimal, purposeful, developer-focused.*

