# Atlas Geospatial Solutions

Portfolio website for Atlas Geospatial Solutions — showcasing uncrewed-systems work
(photogrammetry, aerial inspections, aerial photography, 3D modeling, FPV and UAV
instruction), with room to grow into uncrewed vehicle development (UAV/UGV/USV/UUG).

Hosted on **GitHub Pages**.

## Structure

```
index.html      Home
about.html      Company & capabilities
services.html   Service offerings
portfolio.html  Example work gallery
contact.html    Contact info
assets/css/     Styles
assets/js/      Scripts
assets/img/     Images (SVG placeholders)
_config.yml     GitHub Pages config
```

## How to edit

- **Page text:** open any `.html` file and edit the text between the tags.
- **Images:** replace the files in `assets/img/` (keep the same names, or update the
  `src` in the HTML). Real photos should be `.jpg`/`.png`/`.webp`.
- **Colors/style:** edit `assets/css/styles.css`. Main accent is `#22d3ee` (cyan).

## How to deploy (GitHub Pages)

1. Push to the `main` branch (see below).
2. In the GitHub repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: `main` → `/ (root)`**, then **Save**.
3. Wait ~1 minute, then visit `https://bobdude247.github.io/atlas-geo-solutions/`.

## Committing from VS Code

1. Open this folder in VS Code.
2. Go to the **Source Control** panel (Ctrl+Shift+G).
3. Stage changes (hover a file → `+`, or `+` on "Changes").
4. Type a commit message and press Ctrl+Enter.
5. Click the **Sync** (↻) button to push to GitHub.

> The git remote is already set to `git@github.com:bobdude247/atlas-geo-solutions.git`.
> Pushing uses your SSH key, so no password is needed.
