# Repository Guidelines

## Project Structure & Module Organization
The Next.js 16 App Router lives under `src/app`, with each route exposing page/server components. Shared UI and motion primitives live in `src/components`, while scene logic for react-three/fiber sits in `src/hooks` and `src/lib`. Typed data (projects, contact links) is centralized in `src/data` with interfaces in `src/types`. Static media, fonts, and favicon variants belong in `public/`. Documentation and launch playbooks are tracked in `docs/` plus `DEPLOYMENT_GUIDE.md`.

## Build, Test, and Development Commands
- `npm run dev`: Start the hot-reloading dev server on port 3000.
- `npm run build`: Type-check and emit the production bundle.
- `npm run start`: Serve the build output locally; mirrors the Vercel runtime.
- `npm run lint`: Run the Next.js ESLint config (includes React, hooks, accessibility, and @react-three rules).
- `npm run format` / `npm run format:check`: Apply or verify Prettier across TS/MD/JSON.

## Coding Style & Naming Conventions
Stick to TypeScript, module SCSS, and Tailwind utility classes co-located with components. Prettier defaults (2-space indent, double quotes in JSON, semicolons off) are enforced; never hand-format. Components, hooks, and contexts use PascalCase file names (e.g., `HeroCanvas.tsx`, `useCursorTilt.ts`). Data constants favor camelCase exports.

## Testing Guidelines
No automated harness ships yet, so smoke-test via `npm run dev` and record repro steps in the PR. When adding coverage, prefer Jest + React Testing Library for UI units and Playwright for flows; store specs in `src/__tests__` and `tests/e2e`. Target ≥80% line coverage and include screenshots for visual tweaks.

## Commit & Pull Request Guidelines
The history follows Conventional Commits (e.g., `feat: update projects`, `docs: add summary`). Keep subjects under 65 characters and scope optional unless it clarifies (e.g., `feat(scene): ...`). PRs must summarize intent, link issues, list test evidence, and attach screenshots or videos of UI/3D deltas. Include preview deployment links whenever Vercel generates them.

## Deployment & Environment Notes
Follow `DEPLOYMENT_GUIDE.md` for Vercel promotion; `npm run build` must pass locally before requesting deploys. Store API keys in `.env.local` and access via `process.env`. Heavy assets should be optimized and dropped into `public/media` to keep the repo lightweight.
