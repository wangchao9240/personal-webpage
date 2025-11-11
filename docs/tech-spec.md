# personal-website - Technical Specification

**Author:** John
**Date:** 2025-11-12
**Project Level:** 0
**Change Type:** Section order swap (projects shown before experience)
**Development Context:** Brownfield Next.js frontend; follow existing Tailwind + SectionWrapper conventions

---

## Context

### Available Documents

- `docs/index.md` (document-project output summarizing architecture, dev guide, component inventory)
- `docs/architecture-main.md` (Next.js frontend architecture)
- `docs/source-tree-analysis.md` (annotated directory tree)
- `docs/development-guide.md`, `docs/project-overview.md`, `docs/component-inventory.md`
- Archived PRD/UI specs retained under `docs/archive/**` for historical reference

### Project Stack

- Next.js 16.0.1 (App Router, static export configured)
- React 19.2.0 with client/server components
- Tailwind CSS 4 for styling; Framer Motion 12.23 for animations
- @react-three/fiber 9.4 + three 0.180 for hero visuals
- Tooling: TypeScript 5, ESLint 9 (Next core web vitals preset), Prettier (semi:true, singleQuote:true, tabWidth:2, printWidth:80)
- npm scripts: `dev`, `build`, `start`, `lint`, `format`, `format:check`

### Existing Codebase Structure

- Single-page layout in `src/app/page.tsx` renders sections sequentially via `SectionWrapper`
- Floating navigation + scroll spy (`src/components/layout/FloatingNav.tsx`, `src/hooks/useScrollSpy.ts`) maintain hard-coded section order and IDs
- Section content driven by `src/data/{projects,experience}.ts`
- Section components live under `src/components/sections/*` and use Tailwind + Framer Motion
- No automated tests or CI yet; manual verification required

---

## The Change

### Problem Statement

Recruiters currently see the Experience timeline before the Featured Projects grid. Marketing feedback wants Projects surfaced first to highlight portfolio work immediately. Layout order, floating navigation, and scroll spy logic all assume the old order, so simply reordering JSX is insufficient without updating supporting utilities.

### Proposed Solution

Reorder the Projects and Experience sections throughout the layout and navigation helpers: render `<ProjectsSection />` before `<ExperienceSection />`, update floating nav `NAV_ITEMS`, and adjust the default `sectionIds` in `useScrollSpy`. This keeps the data models untouched while ensuring scroll-to-section, active-dot tracking, and keyboard navigation all respect the new hierarchy.

### Scope

**In Scope:**

- Modify `src/app/page.tsx` section order
- Update `FloatingNav` configuration (navigation labels/ARIA order)
- Update `useScrollSpy` default `sectionIds` to match the new layout sequence
- Smoke-test scroll/anchor behavior (desktop + mobile)

**Out of Scope:**

- Visual redesign or content updates for Projects/Experience cards
- Changes to other sections (Hero/About/Skills)
- Backend/data changes (projects.ts, experience.ts remain as-is)
- Implementing automated tests or analytics adjustments (manual plan only)

---

## Implementation Details

### Source Tree Changes

1. `src/app/page.tsx` — **MODIFY**
   - Move `<ProjectsSection />` so it renders immediately after `<SkillsSection />` and before `<ExperienceSection />`.
   - Confirm section IDs remain `projects` / `experience` to keep anchor references stable.
2. `src/components/layout/FloatingNav.tsx` — **MODIFY**
   - Reorder `NAV_ITEMS` array to `[hero, about, skills, projects, experience]` so the floating dots match the visual flow.
   - Ensure aria-label text stays accurate (Projects entry describes projects first, Experience second).
3. `src/hooks/useScrollSpy.ts` — **MODIFY**
   - Update the default `sectionIds` order (and the example arrays) to `[hero, about, skills, projects, experience]`.
   - Review doc comments/examples to avoid referencing the old order.
4. (If present elsewhere) run a targeted search for `'experience', 'projects'` ordering to confirm no other manual arrays exist; update if found.

### Technical Approach

- Continue using existing React + Next.js components; no new dependencies required.
- Tailwind-driven layout already handles spacing; swapping component order maintains CSS cascade.
- Floating navigation relies on the `NAV_ITEMS` array and `scrollToSection`; by reordering the configuration we avoid logic rewrites.
- `useScrollSpy` uses the `sectionIds` array to compute active dots; reordering ensures the active state transitions in the same visual order.
- No build or config changes needed; run `npm run lint`/`npm run build` after edits to ensure type safety.

### Existing Patterns to Follow

- Maintain semicolon + single-quote style (Prettier config) and abide by ESLint (Next core web vitals) rules.
- Keep React components functional and typed as in existing sections; no inline styles outside Tailwind utility classes.
- Follow existing comment/documentation style: short descriptive block comments for section purposes.
- Keep navigation IDs lowercase snake-free (existing `SectionId` union ensures allowed values).

### Integration Points

- `FloatingNav` and `useScrollSpy` must stay consistent; they both rely on identical section IDs.
- `scrollToSection` offset (-80) remains correct; verify after reorder to ensure Projects jump aligns under the fixed header.
- No analytics hooks currently present, but manual QA should verify scroll-based animations (Framer Motion) still trigger.

---

## Development Context

### Relevant Existing Code

- `src/components/sections/ProjectsSection.tsx`
- `src/components/sections/ExperienceSection.tsx`
- `src/components/layout/FloatingNav.tsx`
- `src/hooks/useScrollSpy.ts`
- `src/app/page.tsx`

### Dependencies

**Framework/Libraries:** Next.js 16.0.1, React 19.2.0, Tailwind 4, Framer Motion 12.23, @react-three/fiber 9.4

**Internal Modules:** `SectionWrapper`, `scrollToSection`, `useScrollSpy`, `ClientLayout`

### Configuration Changes

- None anticipated. Keep `next.config.ts` (static export) untouched.

### Existing Conventions (Brownfield)

- Tailwind utility classes with camelCase component names
- `SectionWrapper` ensures consistent spacing and animation; keep using it
- TypeScript strict mode; imports via `@/` alias resolved in `tsconfig.json`
- No tests in repo; manual QA documented below

### Test Framework & Standards

- No automated framework configured yet. Recommend future Playwright/Jest additions (already noted in `development-guide.md`).

---

## Implementation Stack

- Language: TypeScript (per `tsconfig.json` and ESLint config)
- Framework: Next.js App Router (React 19)
- Styling: Tailwind CSS 4 utilities already embedded in sections
- Animations: Framer Motion (already powering Experience timeline), unaffected by order change
- Utilities: custom `scrollToSection`, `useScrollSpy`

---

## Technical Details

- Ensure DOM order change does not break `aria-labelledby` relationships; `SectionWrapper` auto-sets IDs, so simply moving components is safe.
- After reorder, confirm `SectionId` union type remains `'hero' | 'about' | 'skills' | 'experience' | 'projects'`; order in union is irrelevant but we may reorder declaration for readability.
- `useScrollSpy` uses `window.scrollY + offset`; new order will simply change which ranges correspond to `projects` vs `experience`.
- Because Projects has a larger height than Experience, check that the scroll offset (-90) still positions the top of the section below the fixed header when using floating nav.

---

## Development Setup

Follow `docs/development-guide.md`:

1. `npm install`
2. `npm run dev`
3. Use http://localhost:3000 with responsive dev tools

---

## Implementation Guide

### Setup Steps

1. Pull latest main branch
2. Ensure Node 20+/npm 10+ (per dev guide)
3. Run `npm run dev`

### Implementation Steps

1. **Update Section Order** (`src/app/page.tsx`)
   - Move `<ProjectsSection />` block above `<ExperienceSection />`.
   - Re-run lint to confirm no unused imports.
2. **Update Navigation Config** (`FloatingNav.tsx`)
   - Reorder `NAV_ITEMS` entries.
   - Verify `aria-label` strings remain descriptive.
3. **Update Scroll Spy Defaults** (`useScrollSpy.ts`)
   - Change default `sectionIds` array and documentation examples.
4. **Search for Hard-coded Order**
   - `rg "experience', 'projects" -n` to ensure no other arrays need adjustments.
5. **Manual QA** (see testing section) in desktop + mobile widths.

### Testing Strategy

Manual regression due to lack of automated tests:

- Desktop: Load page, verify Projects renders before Experience; scroll to confirm Framer Motion animations still trigger.
- Floating Nav: Click Projects dot → page scroll positions Projects beneath fixed header; Experience dot still works.
- Scroll Spy: Scroll downward; active dot order transitions Hero → … → Projects → Experience in new order.
- Mobile: Use responsive viewport to ensure nav interactions still accessible; verify `scrollToSection` offset doesn’t hide headers.

### Acceptance Criteria

1. On initial load, the Projects section appears before Experience in the main content flow.
2. Floating navigation dots and their hover labels list Projects before Experience; clicking each dot scrolls to the correct section.
3. Scroll spy highlighting follows the new order (Projects becomes active before Experience when scrolling).
4. No console errors or layout regressions introduced (via `npm run lint` + manual browser console check).

---

## Developer Resources

### File Paths Reference

- `src/app/page.tsx`
- `src/components/layout/FloatingNav.tsx`
- `src/hooks/useScrollSpy.ts`
- Section components for reference: `src/components/sections/{ProjectsSection,ExperienceSection}.tsx`

### Key Code Locations

- Section rendering order within `<main>` in `page.tsx`
- `NAV_ITEMS` constant in `FloatingNav.tsx`
- Default `sectionIds` array and docs in `useScrollSpy.ts`

### Testing Locations

- Manual QA steps documented above; no automated suite yet

### Documentation to Update

- None required; architecture + component docs remain accurate after reorder

---

## UX/UI Considerations

- Visual hierarchy change aligns with recruiter priority: Projects first.
- Ensure focus order (tabbing through floating nav) now encounters Projects before Experience.
- Confirm Framer Motion stagger animations still look natural once Projects card grid loads earlier.
- Accessibility: `aria-label` text already explicit; simply ensure order matches DOM.

---

## Testing Approach

- Manual exploratory testing across desktop (Chrome) and mobile (Chrome dev tools) as detailed in Implementation Guide.
- Optional: capture short Loom/video for stakeholders demonstrating new order + nav behavior to confirm acceptance.
- Track potential future addition of Playwright regression covering section order if more changes planned.

---

## Deployment Strategy

### Deployment Steps

1. `npm run lint` / `npm run build`
2. Merge PR to main once approved
3. Trigger Vercel/hosting deployment (static export already configured)
4. Smoke-test production URL for section order + nav behavior

### Rollback Plan

- Revert merge commit in Git and redeploy (static site makes rollback trivial)

### Monitoring

- No telemetry tied to section order; rely on stakeholder visual confirmation
- Optional: monitor Vercel logs for unexpected errors post-release

