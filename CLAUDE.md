# CLAUDE.md

See global rules in `~/.claude/CLAUDE.md`. This file contains only what is specific to this project.

## About This Project

Personal/business website for Connell Music (connellmusic.com). Static HTML/CSS/JS. Pages live in the project root; shared assets live in `assets/images/`.

## Deploying

```bash
vercel --prod
```

## Site-Specific Conventions

- The mobile nav hides the email icon (`.nav-email`) at ≤960px — keep this in mind when editing the header.
- Before deploying, check mobile layout (especially nav) on small screen widths (375px iPhone SE).
