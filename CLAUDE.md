# CLAUDE.md

See global rules in `~/.claude/CLAUDE.md`. This file contains only what is specific to this project.

## About This Project

Personal/business website for Connell Music (connellmusic.com). Static HTML/CSS/JS. Pages live in the project root; shared assets live in `assets/images/`.

## Deploying

Vercel deploys this site from GitHub (`jameswconnell/connell-music`, branch `main`). On the "push" trigger word: commit, then `git push origin main`. Do not run `vercel --prod` — an upload from the folder leaves GitHub behind the live site.

`.vercelignore` keeps `CLAUDE.md`, `.claude/` and `Reports/` off the public site.

Local preview: the `static` configuration in `.claude/launch.json` (http://localhost:8020, clean URLs like `/video`).

## Site-Specific Conventions

- The mobile nav hides the email icon (`.nav-email`) at ≤960px — keep this in mind when editing the header.
- Before deploying, check mobile layout (especially nav) on small screen widths (375px iPhone SE).
