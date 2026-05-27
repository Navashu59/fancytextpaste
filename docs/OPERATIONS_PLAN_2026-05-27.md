# FancyTextPaste Operations Plan - 2026-05-27

This document starts the first focused FancyTextPaste cleanup and optimization cycle after LetsRandomize completed its first operations cycle.

## Priority Context

Portfolio priority remains:

1. LetsRandomize - first wave completed, now in observation.
2. FancyTextPaste - secondary active site for this cycle.
3. LocalCodeFormat - paused.
4. LetsCalculator - paused.

Do not resume LocalCodeFormat or LetsCalculator until FancyTextPaste wave 1 is complete.

## Current Boundary

- Canonical local path for this cycle: `/Users/bluepha/fancytextpaste/repo`
- Canonical publish directory: `public`
- GitHub repo: `Navashu59/fancytextpaste`
- Cloudflare Pages project: `fancytextpaste`
- Historical monorepo source: `/Users/bluepha/seo-revenue-system/sites/fancy-text-generators`

## Data Baseline

GSC 90-day window: 2026-02-24 to 2026-05-25.

- Total: 16 clicks, 7,489 impressions, 0.21% CTR, average position 64.7.
- Recent 28-day window: 1 click, 9 impressions, average position 7.0.
- SEMrush US: `ERROR 50 :: NOTHING FOUND`, so there is no usable SEMrush keyword set for this domain yet.

The traffic pattern shows historical exposure but a recent collapse in impressions. Treat this cycle as recovery and cleanup, not expansion.

## Page Opportunities

Primary recovery pages from GSC 90-day data:

- `/` - 2 clicks, 2,153 impressions, average position 75.8.
- `/tools/bold-text-generator/` - 2 clicks, 1,467 impressions, average position 70.0.
- `/platforms/instagram-fonts/` - 1 click, 1,318 impressions, average position 70.4.
- `/tools/italic-text-generator/` - 0 clicks, 595 impressions, average position 61.1.
- `/tools/strikethrough-text-generator/` - 1 click, 470 impressions, average position 60.8.

Secondary pages with closer rankings but lower volume:

- `/tools/gothic-text-generator/`
- `/tools/mirror-text-generator/`
- `/tools/superscript-subscript-generator/`
- `/guides/how-zalgo-text-works/`

## Operating Strategy

Do not add new support pages in wave 1.

Wave 1 should focus on:

- Clean deployment boundary.
- GitHub-connected deploy for the independent repo.
- Title/meta and above-the-fold intent cleanup on the highest-exposure pages.
- Internal links around copy-paste font intent and platform intent.
- Clear explanation that these are Unicode text styles, not installed fonts.

## Cluster Focus

Primary cluster:

- `fancy text generator`
- `font copy and paste`
- `fonts copy and paste`
- `copy and paste fonts`
- `copy paste fonts`

Secondary cluster:

- `bold text generator`
- `bold text`
- `bold font generator`
- `bold generator`
- `italic text generator`
- `italic font generator`
- `strikethrough copy paste`

Platform cluster:

- `instagram fonts`
- `instagram font generator`
- `instagram text generator`
- `instagram bio font`
- `fonts for instagram`

## Measurement Plan

Check 7-14 days after deployment:

- Whether 28-day impressions recover from the current near-zero baseline.
- Whether homepage and top tool pages regain impressions.
- Whether CTR improves on pages that already had historical exposure.
- Whether Google starts showing clearer query/page matching for homepage, bold, Instagram, italic, and strikethrough pages.

If impressions recover but CTR stays weak, next action is SERP title/meta testing. If impressions do not recover after 14-21 days, inspect indexing, sitemap, and canonical behavior before adding more content.

## Ranking Improvement Method

Use this method after a page has real GSC exposure for a query but still ranks too low to earn meaningful clicks.

Trigger:

- A query has impressions in GSC.
- Google maps that query to a clear page.
- The page is not in the top 3, or it has low CTR despite relevant impressions.
- The query fits the active FancyTextPaste cluster.

Process:

1. Map the exposed query to its ranking page.
2. Search the query in Google and inspect the top 3 organic results.
3. Record the content blocks, questions, examples, tables, steps, compatibility notes, and FAQ topics those results cover.
4. Inspect Google SERP features, especially People Also Ask, featured snippets, related searches, and any visible answer modules.
5. Identify useful intent gaps that the current page does not answer.
6. Add only the gaps that genuinely help the user complete the page's job.
7. Write original wording and examples. Do not copy competitor phrasing or paragraph structure.
8. Prefer richer, more practical answers than the top results: platform-specific examples, Unicode limitations, copy-paste workflow, compatibility caveats, and tool-specific usage.
9. Update internal links only when they clarify the user's next action or route authority within the same cluster.
10. Recheck GSC after 7-14 days and compare impressions, clicks, CTR, average position, and new long-tail queries.

This method belongs to content refresh and ranking-lift work, not wave-1 boundary cleanup. For FancyTextPaste, use it after the current deployment has enough post-change GSC data to avoid rewriting pages blindly.
