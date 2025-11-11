# Source Tree Analysis

```
personal-website/
├── src/
│   ├── app/            # Next.js App Router entrypoints (layout/page)
│   ├── components/     # Reusable UI blocks (hero, sections, shared UI)
│   ├── contexts/       # Theme context provider
│   ├── data/           # Typed content for experience/projects/skills
│   ├── hooks/          # Custom hooks (scroll spy, intersection observers)
│   ├── lib/            # Utilities/helpers
│   └── types/          # Shared TypeScript interfaces
├── public/             # Static assets and imagery
├── docs/               # PM/UX archives and workflow outputs
├── package.json        # Next.js 16 project configuration
└── tsconfig.json       # TS project settings
```

- Entry point: `src/app/page.tsx` with `layout.tsx`
- Styling: `src/app/globals.css` + Tailwind 4
- Asset pipeline: `public/` for images, exported via Next static output
