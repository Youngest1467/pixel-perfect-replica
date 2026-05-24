# William Wright Commercial — Nanaimo

Marketing microsite for the William Wright Commercial Nanaimo office: commercial real estate sales, leasing, and landlord/tenant representation across Vancouver Island.

## Tech stack

- TanStack Start (React 19, file-based routing, SSR)
- Vite 7
- Tailwind CSS v4 (semantic tokens in `src/styles.css`)
- TanStack Query
- Deployed on Cloudflare Workers

## Getting started

```bash
bun install
bun run dev
```

The dev server runs at http://localhost:5173.

## Project structure

```
src/
  routes/        # File-based routes (index, about, services, team, contact, sitemap)
  components/    # Header, Footer, shared UI
  assets/        # Hero and property imagery
  styles.css     # Design tokens (brand red, typography, spacing)
public/
  robots.txt     # Crawler directives
```

## Pages

- `/` — Home with hero, stats and featured transactions
- `/services` — Commercial service offerings
- `/team` — Nanaimo office team
- `/about` — Company history and BC network
- `/contact` — Office location and inquiry form
- `/sitemap.xml` — Dynamic sitemap

## Deployment

Build the production bundle:

```bash
bun run build
```

The app is configured for Cloudflare Workers (edge runtime).
