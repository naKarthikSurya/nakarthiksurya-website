# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Karthik Surya (nakarthiksurya.com), built with Next.js (Pages Router), React 18, TypeScript, Tailwind CSS, and shadcn/ui. Originally a Lovable/Vite project migrated to Next.js — this explains the split page structure described below.

## Commands

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build
- `npm run lint` — ESLint over the repo
- `npm run test` — run all Vitest tests once
- `npm run test:watch` — Vitest watch mode
- Single test file: `npx vitest run src/test/example.test.ts`

Tests use Vitest + Testing Library with jsdom; they live in `src/**/*.{test,spec}.{ts,tsx}` and share setup from `src/test/setup.ts`.

## Architecture

### Split page structure (important)

Routing and rendering are split between two `pages` directories:

- `pages/` (repo root) — Next.js route files. Most are thin wrappers that just re-export a view component, e.g. `pages/about.tsx` is `import AboutPage from "@/pages/About"; export default AboutPage;`. Data-fetching (`getStaticPaths`/`getStaticProps`/`getServerSideProps`) also lives here (see `pages/projects/[id].tsx`, `pages/sitemap.xml.tsx`).
- `src/pages/` — the actual view components (page bodies) with all UI logic.

To add a page: create the view in `src/pages/`, add a wrapper route in `pages/`, and add the route to both `src/config/seo-data.js` (routeSeo) and the static page list in `pages/sitemap.xml.tsx`.

The `@/` alias maps to `src/` (configured in both `tsconfig.json` and `vitest.config.ts`), so `@/pages/...` always refers to view components, never routes.

### App shell

`pages/_app.tsx` wraps every route in `Layout` (Navbar + Footer), React Query provider, tooltip provider, and both toasters, and wires Google Analytics/GTM pageview tracking to router events (`src/lib/gtag.ts`).

### Data as config

Site content is centralized in `src/config/`:

- `projects.ts` — the single source of truth for projects. It drives the projects listing, the statically generated `/projects/[id]` case-study pages (paths come from `project.id`), and sitemap entries.
- `seo-data.js` — site metadata, per-route SEO entries (`routeSeo`), and helpers (`buildPageTitle`, `getCanonicalUrl`). `seo.ts` just re-exports it; import via `@/config/seo`.

### SEO

`src/components/Seo.tsx` is a custom component every page renders: meta tags, OpenGraph/Twitter cards, canonical URLs, and JSON-LD structured data (including FAQ and project/SoftwareApplication schemas via props). Defaults come from `routeSeo` keyed by the current router path. The sitemap is generated server-side at `pages/sitemap.xml.tsx`.

### Contact form (dual mode)

`src/pages/Contact.tsx` sends email via Brevo in one of two modes:

- **API mode** (preferred): posts to `pages/api/contact.ts`, which validates input, applies spam heuristics, and calls Brevo with the server-side `BREVO_API_KEY`.
- **Client-side mode**: if `NEXT_PUBLIC_BREVO_API_KEY` is set, the browser calls Brevo directly.

Env vars are documented in `.env.example`; `NEXT_PUBLIC_*` vars are browser-exposed, the rest are server-only.

### Styling

Tailwind with a brutalist design system (bold borders, vibrant accents) defined in `tailwind.config.ts` and `src/index.css`. shadcn/ui components are vendored in `src/components/ui/` (config in `components.json`). Animations use Framer Motion; 3D visuals use three.js via `@react-three/fiber` (`src/components/InteractiveScene3D.tsx`).
