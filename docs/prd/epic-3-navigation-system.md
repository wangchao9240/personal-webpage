# Epic 3: Navigation System

**Epic ID:** EPIC-003  
**Epic Name:** Navigation System  
**Priority:** High (Core UX feature)  
**Estimated Effort:** 3-5 hours  
**Status:** Not Started

---

## Epic Goal

Implement an intuitive navigation system with right-side floating dot navigation and top header contact icons, enabling recruiters to quickly access different sections of the portfolio and contact information.

---

## Epic Description

### Context

Based on brainstorming decisions, the navigation system consists of:
1. **Floating Navigation Dots** (right side, middle) - for section jumping
2. **Header Contact Icons** (top right, fixed) - Email, LinkedIn, GitHub

This provides always-accessible navigation without cluttering the minimalist design.

### What This Epic Delivers

- ✅ Right-side floating dot navigation with hover labels
- ✅ Active section highlighting based on scroll position
- ✅ Top header with contact icons (Email, LinkedIn, GitHub)
- ✅ Smooth scroll to sections on navigation click
- ✅ Scroll spy to track active section
- ✅ Keyboard navigation support (accessibility)

---

## User Stories

### Story 3.1: Create Scroll Spy Hook
**As a** developer  
**I want to** implement a scroll spy hook that tracks the active section  
**So that** navigation can highlight the current section

**Acceptance Criteria:**
- [ ] `useScrollSpy` hook created following architecture template
- [ ] Hook tracks section IDs: hero, about, skills, experience, projects
- [ ] Returns current active section ID
- [ ] Updates smoothly as user scrolls
- [ ] Uses passive scroll listener for performance
- [ ] Accounts for header offset (100px)
- [ ] Properly cleans up event listeners

**Files:**
- `src/hooks/useScrollSpy.ts`

---

### Story 3.2: Build Floating Navigation Component
**As a** recruiter  
**I want to** see a floating dot navigation on the right side  
**So that** I can quickly jump to different sections

**Acceptance Criteria:**
- [ ] FloatingNav component created
- [ ] Positioned fixed on right side, vertically centered
- [ ] 5 navigation dots (Home, About, Skills, Experience, Projects)
- [ ] Active section dot is larger and highlighted (blue)
- [ ] Inactive dots are gray with hover effect
- [ ] Labels appear on hover (right of dots)
- [ ] Clicking dot scrolls to section smoothly
- [ ] Uses useScrollSpy hook for active state

**Visual Design:**
- Position: `fixed right-8 top-1/2 -translate-y-1/2`
- Dots: 3x3 rounded circles
- Active: Blue (#3b82f6), scale 1.25
- Inactive: Gray (#a0a0a0), scale 1.0
- Hover label: Dark background with white text

**Files:**
- `src/components/layout/FloatingNav.tsx`

---

### Story 3.3: Build Header with Contact Icons
**As a** recruiter  
**I want to** see contact icons at the top of the page  
**So that** I can quickly reach out via email, LinkedIn, or GitHub

**Acceptance Criteria:**
- [ ] Header component created
- [ ] Fixed to top of page with subtle background
- [ ] Contains 3 social/contact icons on the right
- [ ] Icons: Email (mailto:), LinkedIn (external link), GitHub (external link)
- [ ] Icons have hover effects (scale or color change)
- [ ] Links open in new tab (except email)
- [ ] Header has subtle shadow or border for separation
- [ ] Z-index ensures header stays above content

**Contact Information:**
- Email: chasenwang1026@outlook.com
- LinkedIn: (to be provided)
- GitHub: (to be provided)

**Visual Design:**
- Background: Semi-transparent dark (`bg-gray-900/80`)
- Height: ~60-80px
- Icons: White with hover effect
- Position: Fixed top, full width

**Files:**
- `src/components/layout/Header.tsx`

---

### Story 3.4: Implement Smooth Scroll Utility
**As a** developer  
**I want to** create a utility function for smooth scrolling  
**So that** navigation interactions are smooth and consistent

**Acceptance Criteria:**
- [ ] `scrollToSection` function created in utils
- [ ] Accepts section ID as parameter
- [ ] Scrolls smoothly with JavaScript `window.scrollTo`
- [ ] Accounts for fixed header offset (-80px)
- [ ] Function exported and reusable
- [ ] Used by both FloatingNav and any other navigation

**Function Signature:**
```typescript
export const scrollToSection = (sectionId: string): void => {
  // Implementation
};
```

**Files:**
- `src/lib/utils.ts`

---

### Story 3.5: Add Keyboard Navigation Support
**As a** keyboard user  
**I want to** navigate the site using Tab and Enter keys  
**So that** the site is accessible without a mouse

**Acceptance Criteria:**
- [ ] All navigation dots are keyboard accessible (Tab key)
- [ ] Enter key on focused dot navigates to section
- [ ] Focus visible indicator on navigation dots
- [ ] Skip-to-content link added for screen readers
- [ ] All icons have aria-labels
- [ ] Navigation follows accessibility best practices

**Accessibility Requirements:**
- Tab order: logical top-to-bottom
- Focus indicators: clear visible outline
- ARIA labels: descriptive (e.g., "Navigate to About section")
- Keyboard shortcuts: Enter to activate

**Files:**
- Enhanced `src/components/layout/FloatingNav.tsx`
- Enhanced `src/components/layout/Header.tsx`

---

## Definition of Done

### Epic-Level Acceptance Criteria

- [ ] All 5 stories completed with acceptance criteria met
- [ ] Floating navigation visible and functional
- [ ] Header with contact icons visible and functional
- [ ] Active section highlighting works correctly
- [ ] Smooth scroll animations work on all navigation
- [ ] Keyboard navigation fully functional
- [ ] No console errors or warnings
- [ ] Code follows architecture standards

### UX Validation

- [ ] Navigation is intuitive and discoverable
- [ ] Floating dots don't obstruct content
- [ ] Active section highlighting is accurate
- [ ] Scroll animations are smooth (not jarring)
- [ ] Contact icons are easily recognizable

### Accessibility Validation

- [ ] Keyboard navigation works for all elements
- [ ] Screen reader announces navigation elements
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] ARIA labels are descriptive

---

## Dependencies

**Requires:**
- Epic 1: Project Foundation (hooks, utils)
- Epic 2: Hero Section (section IDs for navigation)

**Blocks:**
- None (but enhances UX for all sections)

**Technical Dependencies:**
- `useScrollSpy` custom hook
- Section IDs must match: hero, about, skills, experience, projects
- React Icons library

---

## Risk Assessment

### Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scroll spy lag or inaccuracy | Low | Medium | Use passive listeners, optimize calculation |
| Mobile navigation clutter | Medium | Low | Out of scope for MVP, will address in Epic 6 |
| Accessibility oversights | Medium | Medium | Follow WCAG guidelines, test with keyboard |

### Risk Mitigation Plan

1. **Performance:** Use passive scroll listeners and debounce if needed
2. **Accuracy:** Test scroll spy with various screen sizes and scroll speeds
3. **Accessibility:** Follow architecture accessibility standards, test with keyboard only

---

## Technical Notes

### Navigation Structure

```
Navigation System
├── Header (top, fixed)
│   └── Contact Icons (Email, LinkedIn, GitHub)
└── FloatingNav (right side, fixed)
    └── 5 Navigation Dots with Labels
```

### Section IDs (Must Match)

- `hero`
- `about`
- `skills`
- `experience`
- `projects`

### Z-Index Management

- Header: `z-50`
- FloatingNav: `z-50`
- Content: `z-0` to `z-10`
- Background: `z--1`

---

## Success Metrics

- ✅ Navigation used by 80%+ of visitors (analytics if added)
- ✅ Zero navigation-related bug reports
- ✅ Keyboard navigation works for 100% of elements
- ✅ Active section highlighting is 95%+ accurate

---

## Out of Scope

- ❌ Mobile hamburger menu (Epic 6)
- ❌ Navigation customization
- ❌ Animated navigation transitions
- ❌ Multi-level navigation

---

**Epic Owner:** Development Team  
**Created:** 2025-10-29  
**Previous Epic:** Epic 2 - Hero Section  
**Next Epic:** Epic 4 - Content Sections

