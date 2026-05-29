# FancyTextPaste Operations Log

## 2026-05-27 - Wave 1 Start

Boundary findings:

- GitHub repo `Navashu59/fancytextpaste` existed but only contained `README.md`.
- Active source was in `/Users/bluepha/seo-revenue-system/sites/fancy-text-generators`.
- Cloudflare Pages project `fancytextpaste` existed with domains `fancytextpaste.com`, `www.fancytextpaste.com`, and `fancytextpaste.pages.dev`.
- Cloudflare Pages project had no Git Provider connection.
- Historical monorepo deploy command was `bash scripts/deploy-all.sh --site fancytextpaste`.

Actions:

- Created independent local source at `/Users/bluepha/fancytextpaste/repo`.
- Copied the current deployable static site into `public/`.
- Added GitHub Actions workflow for Cloudflare Pages deployment from `public/`.
- Added deployment documentation and this operations log.
- Optimized wave-1 recovery pages: homepage, bold text generator, Instagram fonts, italic text generator, and strikethrough text generator.
- Repaired stale internal links from the italic page to existing small-text and vaporwave pages.
- Added 301 redirects for historical GSC URLs `/fonts-copy-paste/` and `/guides/how-to-create-glitch-text/`.

Data baseline:

- GSC 90-day window 2026-02-24 to 2026-05-25: 16 clicks, 7,489 impressions, 0.21% CTR, average position 64.7.
- GSC recent 28-day window: 1 click, 9 impressions, average position 7.0.
- SEMrush US returned `ERROR 50 :: NOTHING FOUND`.

Initial diagnosis:

- The site had historical exposure in March and early April but almost no recent GSC visibility.
- The first wave should be recovery and cleanup, not broad expansion.
- Highest-priority pages for wave 1 are homepage, bold text generator, Instagram fonts, italic text generator, and strikethrough text generator.

## 2026-05-27 - Wave 1 Deploy Verified

Content changes deployed:

- Commit `8594008` optimized the wave-1 recovery pages and historical redirects.
- GitHub Actions run `26505460750` completed successfully.
- Live verification confirmed updated titles and `dateModified` value `2026-05-27` on the homepage, bold text generator, Instagram fonts, italic text generator, and strikethrough text generator.
- Live verification confirmed 301 redirects:
  - `/fonts-copy-paste/` -> `/`
  - `/guides/how-to-create-glitch-text/` -> `/tools/glitch-text-generator/`

Deployment boundary:

- Canonical source is `/Users/bluepha/fancytextpaste/repo/public`.
- Canonical GitHub repo is `Navashu59/fancytextpaste`.
- Canonical deployment is GitHub Actions to Cloudflare Pages project `fancytextpaste`.
- The old monorepo deploy path now skips `fancytextpaste` and prints the canonical source/deploy route.

Known follow-up:

- GitHub Actions reported Node.js 20 deprecation warnings for `actions/checkout@v4` and `cloudflare/wrangler-action@v3`; upgrade workflow/action versions or opt into Node 24 in a later maintenance pass.
- Observe GSC for 7-14 days before adding new support pages.
- Compare impressions, clicks, CTR, average position, indexed URL count, and query/page distribution against the 2026-02-24 to 2026-05-25 baseline.

## 2026-05-29 - Full-Site SERP Gap Refresh

Scope:

- Applied the SERP gap refresh method to all 75 index pages.
- Added a marked page-intent section to every index page: `data-serp-gap-refresh="2026-05-29"`.
- Moved crawlable HTML templates out of `public/templates/` into `source-templates/public-templates-removed-2026-05-29/`.
- Fixed the canonical-tag example on `/guides/unicode-vs-ascii-vs-html-entities/` so it no longer appears as a broken local link.
- Added JSON-LD to `404.html`.
- Rebuilt `public/sitemap.xml` so it contains all 75 index pages, including `/tools/invisible-text/` and `/tools/superscript-subscript/`.
- Added the execution report at `docs/SERP_GAP_ALL_PAGES_2026-05-29.md`.

Validation:

- 75 index pages.
- 75 sitemap URLs.
- 76 HTML files including `404.html`.
- 76 HTML files have parseable JSON-LD.
- 0 broken internal links.
- All 75 index pages include the 2026-05-29 SERP gap marker.
- Browser smoke test passed on homepage, `/platforms/linkedin-fonts/`, `/tools/italic-text-generator/`, and mobile `/tools/bold-text-generator/`.

Next observation plan:

- Recheck GSC after deployment and compare against the 2026-02-24 to 2026-05-25 baseline.
- Watch whether impressions recover beyond the recent 28-day near-zero baseline.
- Pay special attention to LinkedIn, italic, strikethrough, bold, Instagram, and homepage queries.
- Do not add more broad font-style pages until GSC shows which refreshed clusters regain impressions.
