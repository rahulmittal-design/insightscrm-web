# InsightsCRM — Marketing Website

New marketing website for **InsightsCRM**, the specialized CRM for capital-markets professionals (ANALEC). Rebuilds www.insightscrm.com per the project FRD: modern, SEO-friendly, accessible (WCAG 2.1 AA), CMS-ready and high-conversion.

## Stack
- **Next.js 14** (App Router, TypeScript) — SSR/SSG for SEO (ARCH-001)
- **Tailwind CSS** wired to the InsightsCRM **design tokens** (`tailwind.config.ts` + `tokens.css`)
- **next/font** — Inter (UI/body) + Source Serif 4 (editorial)
- Security headers, sitemap, robots, manifest, structured data built in

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (what Vercel runs)
```

## Project structure
```
app/                 Routes (App Router)
  page.tsx           Homepage
  markets/           Markets listing + [slug] template (5 markets)
  solutions/         Solutions with anchor nav + separated security section
  resources/         Listing w/ search + filter, [slug] article template
  about/ contact/    Static content pages
  request-demo/      Lead form (validation, business-email check, UTM-ready)
  privacy-policy/ cookie-policy/
  sitemap.ts robots.ts manifest.ts icon.svg
components/           Header, Footer, Logo, Button, Section, Card, DemoCTA
data/                 markets.ts, solutions.ts, articles.ts (CMS stand-in)
lib/                  site config, helpers, policy template
```

## Design system
- `tokens.css` — canonical CSS-variable design tokens (color, type, spacing, radius, shadow, motion).
- `insightscrm-design-system.html` — visual style guide (in the project root of the kit).
- All text/UI color pairs verified **WCAG 2.1 AA**. Primary CTA = Insight Blue 600 (6.7:1); accent CTA = Signal Red 600 (5.4:1).

## CMS integration (next phase)
`data/*.ts` are typed stand-ins for a headless CMS (Strapi / Contentful / Sanity). Swap the data-access layer for CMS fetches; component contracts stay the same.

## Deploy (Vercel)
1. Push to GitHub.
2. Vercel → **Add New → Project → Import** the repo (auto-detects Next.js).
3. Set env vars from `.env.example` in Project Settings.
4. Deploy. Add the production domain when ready.

## FRD coverage (scaffold)
Homepage, Markets (template + 5), Solutions (+separated security), Resources (search/filter + article template), About, Contact, Request-a-Demo (validation/UTM-ready), Login redirect, Privacy/Cookie pages, SEO (metadata/sitemap/robots/canonical-ready/schema), security headers, responsive + accessible nav.

## Not yet wired (intentional, next phases)
Live CMS, form backend/API + email routing, GA4/GTM + consent banner, full copy migration, 301 redirect map, OG raster image export.
