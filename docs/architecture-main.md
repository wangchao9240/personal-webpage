# Architecture – Next.js Frontend

## Executive Summary
A statically-exported Next.js 16 portfolio with experiential sections (hero, projects, experience, skills). Uses Tailwind 4 for styling, Framer Motion for animations, and react-three-fiber for hero background.

## Technology Stack
| Category | Technology | Version | Notes |
| --- | --- | --- | --- |
| Framework | Next.js | 16.0.1 | App Router, static export |
| UI | React | 19.2.0 | Server + client components |
| Styling | Tailwind CSS | 4 | Utility-first styling |
| 3D/Graphics | three.js + @react-three/fiber | 0.180 / 9.4 | Hero background |
| Animations | Framer Motion | 12.23 | Section transitions |

## Architecture Pattern
- Single-page, sectioned layout via Next App Router.
- Components grouped in `src/components/sections` for major layout blocks.
- Data-driven sections pulling from `src/data/*.ts`.

## Data Architecture
- Static arrays for projects, experience, skills (`src/data`).
- No backend or persistence.

## API Design
- Pure frontend; no API layer.

## Component Overview
- HeroSection: intro + three.js background.
- ProjectsSection: cards sourced from `projects.ts`.
- ExperienceSection: timeline cards using `experience.ts`.
- Shared UI (buttons, tag pills) in `src/components/ui`.

## Source Tree Summary
Refer to `source-tree-analysis.md` for annotated directories.

## Development Workflow
See `development-guide.md` for setup and commands.

## Deployment
- `next.config.ts` exports static assets (`output: 'export'`, `trailingSlash: true`).
- Suitable for Vercel static hosting or GitHub Pages.

## Testing Strategy
- Not implemented. Recommend Storybook or unit tests for sections.
