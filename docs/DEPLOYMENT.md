# FancyTextPaste Deployment

Canonical source:

- Repository: `Navashu59/fancytextpaste`
- Local path: `/Users/bluepha/fancytextpaste/repo`
- Publish directory: `public`
- Cloudflare Pages project: `fancytextpaste`
- Production domains:
  - `fancytextpaste.com`
  - `www.fancytextpaste.com`
  - `fancytextpaste.pages.dev`

## Current Deploy Method

Production deploys are handled by GitHub Actions:

- Workflow: `.github/workflows/deploy-cloudflare-pages.yml`
- Trigger: push to `main` or manual `workflow_dispatch`
- Command: `wrangler pages deploy public --project-name=fancytextpaste --commit-dirty=true`

Required GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Historical Source

The historical monorepo source is:

- `/Users/bluepha/seo-revenue-system/sites/fancy-text-generators`

Keep the historical source as a fallback until GitHub-connected deploys are verified for this repo. Do not delete it during the first cleanup pass.

## Verification Checklist

Before pushing a content deploy:

- `public/index.html` exists.
- `public/sitemap.xml` exists.
- `public/robots.txt` exists.
- JSON-LD parses on edited pages.
- Core generators still render and copy actions remain available.

After deployment:

- Confirm GitHub Actions completed successfully.
- Confirm live pages return the expected title and `dateModified`.
- Record the deployed commit in `docs/OPERATIONS_LOG.md`.
