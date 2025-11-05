# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is "Raponi Gardens" - a professional landscape architecture portfolio website showcasing landscaping services, projects, and company information. The project is built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

All commands should be run from the `landscape/` directory:

```pwsh
cd landscape
```

### Common Commands

- **Development server**: `npm run dev` (runs on http://localhost:3000)
- **Production build**: `npm run build`
- **Start production server**: `npm start`
- **Lint**: `npm run lint`

### Package Management

This project uses npm (not yarn, pnpm, or bun). Always use `npm` for installing dependencies.

## Architecture

### Directory Structure

```
landscape/
├── src/
│   └── app/
│       ├── components/        # All React components (10 total)
│       ├── assets/            # Images and static media
│       ├── projects/          # /projects route
│       ├── layout.tsx         # Root layout with metadata & fonts
│       ├── page.tsx           # Homepage (composed of components)
│       └── globals.css        # Global styles & Tailwind import
├── public/                    # Public static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

### Key Components

The homepage (`src/app/page.tsx`) is a client component that composes 10 section components in this order:
1. Header (sticky navigation with mobile menu)
2. Hero
3. Services
4. About
5. Stats
6. Team
7. Portfolio
8. Testimonials
9. Contact
10. Footer

**Component notes:**
- All components are in `src/app/components/` as `.jsx` files
- Header and Footer are reused across pages
- Header has scroll-based styling and mobile menu state
- Projects page (`src/app/projects/page.jsx`) features expandable project details with filtering

### Routing

- **Homepage**: `/` (single-page with anchor navigation)
- **Projects page**: `/projects` (dedicated route with detailed project views)
- Navigation uses Next.js `<Link>` and hash anchors (e.g., `#services`, `#contact`)

### Styling

- **Tailwind CSS v4** with PostCSS
- Custom Geist fonts (sans & mono) via `next/font/google`
- Color scheme: green-800/900 primary, yellow-400/500 accents
- Dark mode preference detection in `globals.css`
- Responsive design with mobile-first breakpoints

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017
- Mix of `.tsx` (layout) and `.jsx` (components, projects page)

### Third-Party Libraries

- **framer-motion**: Animation library used in Header mobile menu
- **lucide-react**: Icon library (Menu, X, ArrowLeft, ChevronDown/Up, etc.)
- **Next.js Image**: Optimized images throughout

## Development Guidelines

### When Adding New Features

1. **Components**: Create in `src/app/components/` as `.jsx` files (project uses JSX for components)
2. **Pages/Routes**: Add new route folders under `src/app/` following App Router conventions
3. **Assets**: Place in `src/app/assets/` and import directly
4. **Styling**: Use Tailwind utility classes; maintain green/yellow color scheme

### When Editing Components

- Maintain the existing `.jsx` extension for components
- Use `"use client"` directive where needed (most components use client features)
- Follow existing patterns for responsive design (hidden md:flex, grid grid-cols-1 md:grid-cols-X)
- Keep consistent with framer-motion animations for interactions

### Image Handling

- Import images from `src/app/assets/` using ES6 imports
- Use Next.js `<Image>` component with `fill` prop for hero/project images
- Provide `alt` text for accessibility

### Content Updates

The main content is hardcoded in components. For project updates, edit the `allProjects` array in `src/app/projects/page.jsx`.

## Testing

No test framework is currently configured. When adding tests:
1. Choose a testing library (Jest, Vitest, or Playwright)
2. Add test scripts to `package.json`
3. Create test files adjacent to components or in a dedicated `__tests__` directory

## Important Notes

- This is a portfolio/showcase site, not a CMS-driven application
- The project is KRA compliant (mentioned in metadata)
- Client list includes: Rubis Energy Kenya, Kiambu County Government, Nyansiongo Tea Factory, DHL Kenya
- All projects are currently marked as "completed"
