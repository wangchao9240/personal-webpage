# Development Guide

## Prerequisites
- Node.js 20+
- npm 10+

## Setup
```bash
npm install
```

## Local Development
```bash
npm run dev
```
Runs Next.js 16 App Router on http://localhost:3000 with hot reload.

## Linting & Formatting
```bash
npm run lint
npm run format
npm run format:check
```

## Production Build
```bash
npm run build
npm run start
```
`next.config.ts` sets `output: 'export'` for static deployment and `trailingSlash: true`.

## Testing Strategy
Currently no automated test suite checked in. Recommend adding Jest + React Testing Library for components and Playwright for page flows.
