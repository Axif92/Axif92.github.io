# Asiful Haque Ratul: portfolio

A static personal portfolio built on the same engine and design as `rafsanul-portfolio`: no framework, no runtime dependencies. A ~550-line Node script turns one content file into plain HTML pages.

- **Pages:** home (hero, about, selected work rail, "by the numbers" panels, education, experience, skills, certifications, work strip, contact), `/work/` (filterable and searchable), one case study per project at `/work/<slug>/`, `/resume/` and a 404 page.
- **Stack:** HTML, CSS and vanilla JS, built by `build.mjs` on Node 18+. Google Fonts serves Schibsted Grotesk and JetBrains Mono.
- **Features:** light/dark theme (remembered), scroll-spy nav and mobile menu, draggable project rail, scroll-driven word highlighting, coursework tabs, experience accordions, project filter + search synced to the URL with an empty state, image lightbox, copy-email toast, mailto contact form (says so on screen), resume preview + download, back-to-top, reduced-motion support.

## Run locally

```bash
npm run dev        # builds to dist/ and serves http://localhost:4321
npm run build      # build only
```

Nothing to install.

## Folder structure

```
content/site.mjs        ← ALL text and data: edit this file
build.mjs               ← page templates and the build
src/styles.css          ← design tokens and all styling
src/main.js             ← interactions (progressive enhancement)
public/                 ← copied as-is into dist/
  assets/img/           ← WebP images (portrait, logos, dashboards, charts, resume previews)
  assets/docs/          ← resume PDF
  assets/og.jpg         ← social share image (1200×630)
resume-source/          ← resume.html + export.mjs (prints the PDF with local Edge)
docs/CONTENT-NOTES.md   ← sources, conflicts between them, missing info
serve.mjs               ← local preview server (not for production)
dist/                   ← build output (generated; do not edit)
```

## Update content

Everything lives in `content/site.mjs`; run `npm run build` after any edit.

- **New project:** copy an object in `projects`.
  1. Unique `slug`; `category` is `erp`, `bi`, `ml` or `banking`.
  2. Start `context` with `Professional ·`, `MS coursework ·` or `Independent ·` so visitors know where it came from.
  3. Fill in `title`, `summary`, `problem`, `process`, `findings`, `tools`, `gallery`, `links`.
  4. No screenshots (e.g. confidential client work)? Leave out `cover` and set `metric: ['80', 'client instances upgraded']`; the build draws a title card.
  5. `featured: true` puts it in the home-page rail.
- **New job:** add to `leadership` (rendered as the Experience accordion).
- **New certificate:** add to `achievements`; `href` adds a "Verify" link.
- **New skill:** add to a `skills` group; add a matching word to `tags` to link the group to projects whose `tools` contain it.
- **Socials:** add `{ label, href }` to `site.socials` (LinkedIn, GitHub…).
- **Clock in the nav:** `site.clock` (`label`, IANA `timeZone`).
- **Rules to keep:** only state documented outcomes; no proficiency percentages.

The build stops with an error if a project points at a missing image or reuses a slug.

## Replace images and documents

1. Put images in `public/assets/img/` as WebP (photos 900–1400px wide, dashboards 1200–1600px). Use the `im(name, w, h, alt, caption)` helper in `site.mjs`; it adds the `-sm.webp` phone copy automatically when the image is wider than 720px, so create that copy too (any converter works, e.g. https://squoosh.app).
2. **Portrait:** `portrait.webp` is 433×442, the only photo available. A larger photo (1400px+) would look much sharper in the hero; replace the file and update `hero.photo` / `about.portrait` sizes.
3. **Resume:**
   1. Edit `resume-source/resume.html`.
   2. `node resume-source/export.mjs` prints `public/assets/docs/asiful-haque-ratul-resume.pdf` with local Microsoft Edge.
   3. Replace `public/assets/img/resume-page.webp` and `resume-page-2.webp` with images of the two pages (screenshot or "export page as image", 1024×1449).
   4. Update `site.resume.updated`, then build.

## Deploy

`dist/` is plain static files.

- **GitHub Pages:** push this folder; `.github/workflows/deploy.yml` builds and publishes on every push to `main` (Settings → Pages → Source: GitHub Actions). For a project site set `site.base` to `'/<repo>/'`.
- **Netlify / Cloudflare Pages:** build command `node build.mjs`, output `dist`. `public/_headers` sets cache headers there.
- Then set `site.url` to the live domain and rebuild: this enables canonical URLs, absolute OG URLs and `sitemap.xml`.
