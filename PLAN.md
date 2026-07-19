# Atlas Geospatial Solutions — Portfolio Website

## Goal
A clean, modern, responsive portfolio website hosted on **GitHub Pages** to showcase
Atlas Geospatial Solutions' uncrewed-systems work. Built to be easy to extend later into
uncrewed vehicle development (UUG/UAV/UGV/USV).

## Tech Choice
- **Plain static site** (HTML + CSS + minimal vanilla JS). No build step required.
  - Reason: GitHub Pages serves static files directly; zero build complexity, easy
    commits via VS Code Source Control, easy for the user to edit content later.
  - Alternatively a static generator (Jekyll/Hugo) — but plain HTML keeps it simplest
    and most transparent for a non-developer to maintain.

## Structure
```
/  (atlas-geo-solutions)
├── index.html              # Home / hero + overview
├── about.html              # Company + capabilities
├── services.html           # Service offerings (each capability as a card)
├── portfolio.html          # Gallery of example work (placeholder cards)
├── contact.html            # Contact form + info
├── assets/
│   ├── css/styles.css      # Single stylesheet (responsive, modern)
│   ├── js/main.js          # Mobile nav toggle, small interactions
│   └── img/                # Logo placeholders + gallery placeholders
├── _config.yml             # GitHub Pages config (baseurl, title)
└── README.md               # How to edit & deploy
```

## Pages & Content
1. **index.html** — Hero (company name + tagline), short intro, CTA to portfolio/contact,
   highlights of capabilities.
2. **about.html** — Mission, who we are, the uncrewed-systems approach, future vision
   (vehicle development roadmap: UAV/UGV/USV/UUG).
3. **services.html** — Cards for: Photogrammetry, Aerial Inspections, Aerial Photography,
   3D Modeling, FPV Flying & Instruction, UAV Operation Instruction, and a "Future:
   Uncrewed Vehicle Development" section.
4. **portfolio.html** — Grid of project placeholders (image + title + short description)
   that the user can swap for real work later.
5. **contact.html** — Email/phone/social placeholders + simple mailto form.

## Design
- Modern, technical/geospatial aesthetic: dark navy + accent (cyan/teal), clean sans-serif,
  subtle grid/map motif.
- Fully responsive (mobile nav hamburger). Accessible (semantic HTML, alt text).
- Reusable header/footer across pages.

## GitHub Pages Setup
- `_config.yml` with `title` and `baseurl` (repo name `atlas-geo-solutions`).
- Site served from root (`/`), Pages source = branch `main` (root).
- `.nojekyll` not needed since no underscores conflict except `_config.yml` (which is fine).

## Deployment / Source Control
- Initialize git, commit all files, push to `git@github.com:bobdude247/atlas-geo-solutions.git`
  branch `main`.
- After push, user enables Pages in repo Settings → Source: Deploy from a branch → `main`.
- VS Code Source Control works directly (repo already in workspace folder).

## Steps
1. Create folder structure + placeholder images (SVG).
2. Write `_config.yml`, `README.md`.
3. Build shared CSS (`assets/css/styles.css`) and JS (`assets/js/main.js`).
4. Build the 5 HTML pages with real, editable placeholder content.
5. `git init`, add remote, commit, push to `main`.
6. Report how to enable GitHub Pages + how to edit/commit from VS Code.

## Notes / Assumptions
- Using placeholder images/text the user can replace. No real logos/photos available yet.
- Keeping everything editable by a non-developer (clear section comments minimal, but files
  are straightforward).
