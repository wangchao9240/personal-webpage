# Epic 1: Project Foundation & Setup

**Epic ID:** EPIC-001  
**Epic Name:** Project Foundation & Setup  
**Priority:** Critical (Must complete first)  
**Estimated Effort:** 2-4 hours  
**Status:** Not Started

---

## Epic Goal

Establish the technical foundation for the personal portfolio website by initializing the Next.js project with all required dependencies, configurations, and base project structure, enabling the development team to begin building features immediately.

---

## Epic Description

### Context

This is a greenfield project to create a personal portfolio website for Chasen Wang targeting recruiters in the Australian job market. The website will showcase 3 projects, work experience, and technical skills using a modern "Code Aesthetics" design theme.

### What This Epic Delivers

- ✅ Initialized Next.js 14+ project with TypeScript and Tailwind CSS
- ✅ All required dependencies installed and configured
- ✅ Base project structure following architectural standards
- ✅ Development environment ready for feature development
- ✅ Configuration files properly set up for static export to Vercel

### Technology Stack (from Architecture)

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 3.x
- **Animation:** Framer Motion 10.x
- **3D/Canvas:** React Three Fiber 8.x + Three.js
- **Icons:** React Icons 5.x
- **Code Quality:** ESLint, Prettier

---

## User Stories

### Story 1.1: Initialize Next.js Project
**As a** developer  
**I want to** initialize a Next.js 14+ project with TypeScript and Tailwind CSS  
**So that** I have the base framework configured correctly

**Acceptance Criteria:**
- [ ] Project created using `npx create-next-app@latest` with TypeScript, Tailwind, and App Router
- [ ] Project runs successfully with `npm run dev` on localhost:3000
- [ ] Default Next.js pages load without errors
- [ ] Git repository initialized with initial commit

**Tasks:**
- Run: `npx create-next-app@latest personal-website --typescript --tailwind --app`
- Verify development server starts successfully
- Initialize Git repository
- Create `.gitignore` if not already present

---

### Story 1.2: Install Required Dependencies
**As a** developer  
**I want to** install all required npm packages for animations, 3D graphics, and icons  
**So that** all necessary libraries are available for feature development

**Acceptance Criteria:**
- [ ] Framer Motion installed (`framer-motion@^10.16.0`)
- [ ] React Three Fiber ecosystem installed (`@react-three/fiber`, `@react-three/drei`, `three`)
- [ ] React Icons installed (`react-icons@^5.0.0`)
- [ ] TypeScript types for Three.js installed (`@types/three`)
- [ ] All dependencies resolve without conflicts
- [ ] `package.json` includes all required dependencies from architecture document

**Tasks:**
- Run: `npm install framer-motion @react-three/fiber @react-three/drei three react-icons`
- Run: `npm install -D @types/three`
- Verify no dependency conflicts
- Test that imports work correctly

---

### Story 1.3: Configure Project Structure
**As a** developer  
**I want to** set up the project directory structure according to architectural standards  
**So that** code is organized consistently and maintainably

**Acceptance Criteria:**
- [ ] `src/` directory structure created per architecture document
- [ ] Subdirectories created: `components/`, `hooks/`, `data/`, `types/`, `lib/`
- [ ] Component subdirectories created: `layout/`, `sections/`, `hero/`, `ui/`, `animations/`
- [ ] TypeScript path alias `@/*` configured and working
- [ ] Sample import using `@/` alias verified

**Directory Structure:**
```
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── hero/
│   ├── ui/
│   └── animations/
├── hooks/
├── data/
├── types/
└── lib/
```

**Tasks:**
- Create all required directories
- Update `tsconfig.json` with path alias configuration
- Create placeholder `.gitkeep` files in empty directories
- Test path alias with sample import

---

### Story 1.4: Configure Next.js for Static Export
**As a** developer  
**I want to** configure Next.js for static site generation  
**So that** the site can be deployed to Vercel as a static site

**Acceptance Criteria:**
- [ ] `next.config.js` configured with `output: 'export'`
- [ ] Image optimization set to `unoptimized: true` for static export
- [ ] Trailing slash option enabled
- [ ] Build command produces static files in `/out` directory
- [ ] Build completes without errors

**Configuration:**
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

**Tasks:**
- Create/update `next.config.js`
- Run `npm run build` to verify static export works
- Verify `/out` directory is created
- Test that static files are properly generated

---

### Story 1.5: Set Up Code Quality Tools
**As a** developer  
**I want to** configure ESLint and Prettier  
**So that** code quality and formatting are consistent

**Acceptance Criteria:**
- [ ] ESLint configured with Next.js recommended rules
- [ ] Prettier configured with project preferences
- [ ] ESLint and Prettier configs don't conflict
- [ ] `npm run lint` executes successfully
- [ ] Sample file formatted correctly with Prettier

**Prettier Configuration:**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

**Tasks:**
- Create `.prettierrc` file
- Update `.eslintrc.json` if needed
- Add lint scripts to `package.json`
- Run linter to verify configuration

---

## Definition of Done

### Epic-Level Acceptance Criteria

- [ ] All 5 stories completed with acceptance criteria met
- [ ] Project builds successfully (`npm run build`)
- [ ] Development server runs without errors (`npm run dev`)
- [ ] All dependencies installed and verified
- [ ] Project structure follows architectural standards
- [ ] ESLint passes with no errors
- [ ] Code is formatted with Prettier
- [ ] Initial commit pushed to Git repository

### Technical Validation

- [ ] TypeScript compiles without errors
- [ ] Path aliases (`@/*`) working correctly
- [ ] Static export generates files successfully
- [ ] All configuration files properly created
- [ ] No security vulnerabilities in dependencies (`npm audit`)

### Documentation

- [ ] README.md updated with:
  - [ ] Project setup instructions
  - [ ] Available npm scripts
  - [ ] Development workflow
  - [ ] Link to architecture document

---

## Dependencies

**Blockers:**
- None (This is the first epic)

**Blocked By:**
- None

**Blocks:**
- Epic 2: Hero Section (requires project foundation)
- Epic 3: Navigation System (requires project foundation)
- Epic 4: Content Sections (requires project foundation)
- Epic 5: Projects Showcase (requires project foundation)

---

## Risk Assessment

### Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Dependency conflicts | Low | Medium | Use exact versions from architecture doc |
| Next.js version incompatibility | Low | High | Use Next.js 14+ as specified |
| Static export configuration issues | Medium | Medium | Follow Next.js static export documentation |

### Risk Mitigation Plan

1. **Dependency Conflicts:** Follow architecture document's exact version specifications
2. **Version Issues:** Verify Next.js 14+ is installed before proceeding
3. **Export Issues:** Test static export immediately after configuration

---

## Technical Notes

### Key Configuration Details

1. **TypeScript Strict Mode:** Enabled per architecture standards
2. **Path Alias:** `@/*` maps to `./src/*` in tsconfig.json
3. **Static Export:** Required for Vercel deployment without server features
4. **Image Optimization:** Disabled for static export compatibility

### Reference Documents

- Architecture Document: `docs/ui-architecture.md`
- Brainstorming Results: `docs/brainstorming-session-results.md`
- Next.js Documentation: https://nextjs.org/docs

---

## Success Metrics

- ✅ Project initializes in < 5 minutes
- ✅ Zero dependency installation errors
- ✅ Build time < 30 seconds (for empty project)
- ✅ All linting passes with zero errors
- ✅ 100% of architectural requirements met

---

**Epic Owner:** Development Team  
**Created:** 2025-10-29  
**Last Updated:** 2025-10-29  
**Next Epic:** Epic 2 - Hero Section with Code Aesthetics

