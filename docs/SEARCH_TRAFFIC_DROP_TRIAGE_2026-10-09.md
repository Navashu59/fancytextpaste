# FancyTextPaste Search Traffic Drop Triage - 2026-10-09

## Scope and baseline

- Source: Search Console Search Analytics API for `sc-domain:fancytextpaste.com`, Web search, `dataState=final`. Latest final day at collection was 2026-10-06. GA4 property `527502448` was checked separately; GSC clicks and GA4 sessions are not interchangeable.
- Google's September 2026 spam update ran from September 24 to October 8, 2026 (US/Pacific): https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu . Timing does not establish causation.
- Compare complete seven-day windows with the same weekday mix; do not use October 7 onward until GSC marks those days final.

| Final GSC window | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| Sep 21-27 | 690 | 27,855 | 2.48% | 8.08 |
| Sep 28-Oct 4 | 396 | 26,741 | 1.48% | 8.77 |
| Oct 5-6 (two days, not a week) | 94 | 7,957 | 1.18% | 8.95 |

The complete week lost 294 clicks (-42.6%) while impressions fell only 4.0%. Daily clicks fell from 113 on Sep 24 to 61 on Sep 25 and stayed mostly in the 41-62 range through Oct 6. The timing is consistent with a search-result change, but no single cause is proven. The repository's last commit before this review was Sep 16; no local commit coincided with the Sep 25 break.

| Page, Sep 21-27 -> Sep 28-Oct 4 | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| `/tools/italic-text-generator/` | 241 -> 142 | 13,898 -> 14,732 | 1.73% -> 0.96% | 6.96 -> 7.45 |
| `/platforms/roblox-fonts/` | 134 -> 54 | 2,392 -> 1,793 | 5.60% -> 3.01% | 5.21 -> 5.77 |
| `/tools/bold-text-generator/` | 52 -> 28 | 2,485 -> 1,598 | 2.09% -> 1.75% | 9.00 -> 11.48 |
| `/tools/cool-font-generator/` | 16 -> 39 | 828 -> 1,436 | 1.93% -> 2.72% | 18.94 -> 14.18 |

Italic and Roblox account for 179 of the 294 net lost clicks (60.9%). The surviving query-level rows are much smaller than page totals because Search Console anonymizes some queries; do not attribute the full loss to any one visible query. Both affected URLs passed URL Inspection, are submitted and indexed, and have Google-selected canonicals matching their self-canonicals. Last reported crawls were Oct 5 for Italic and Sep 19 for Roblox.

## GA4 instrumentation issue

- GA4 property `527502448` has web stream `G-CZD0573ZSF`, matching the production pages' tag ID.
- Sep 21-Oct 6 GSC recorded 1,180 search clicks, while GA4 reported only four `google / organic` sessions (seven sessions from all sources). Definitions differ, but this gap makes GA4 unusable for corroborating the traffic trend.
- Production's `public/_headers` CSP allowed only same-origin scripts and connections. A clean Playwright browser on the home, Italic, and Roblox pages reported `gtag/js` blocked with `csp`, and no Analytics collection request. The live response header matched `public/_headers`.
- The scoped fix permits `www.googletagmanager.com` as a script source and Google's documented Analytics collection hosts as connection sources. It does not add a tag or enable AdSense; other CSP directives remain unchanged. Reference: https://developers.google.com/tag-platform/security/guides/csp .
- Before deployment, a browser test substituting the proposed CSP loaded `gtag.js` (HTTP 200) and attempted a `www.google-analytics.com/g/collect` request. The test intercepted that request so it did not create a synthetic Analytics session.
- The existing CSP also blocks the AdSense script and Cloudflare Insights beacon. Those are separate pre-existing issues. This change intentionally does not enable ad scripts, change ad layout, or broaden the policy for either service; ad serving and any consent requirements need a separate review.

## Decision gate and guardrails

1. Verify the deployed CSP response, a real Analytics collection request, generator typing/copy, and desktop/mobile layout. Check GA4 Realtime; then allow 24-48 hours for standard reports. Historical GA4 gaps cannot be backfilled.
2. When Oct 9-15 are all final in GSC, compare them with a pre-update seven-day window and Oct 2-8, including sitewide, Italic, Roblox, Bold, and Cool Font pages. Split leading query groups by device and country where volume permits. Check the live search results before changing titles or descriptions.
3. If the main pages recover without intervention, make no ranking-motivated edits. If they remain materially down, verify narrowly scoped accuracy corrections one page at a time. Roblox's page currently promises broad Unicode compatibility and filtering exemptions; Roblox says display names are filtered and character support is limited or conditional: https://en.help.roblox.com/hc/en-us/articles/4401938870292-Changing-Your-Display-Name . Italic's page has unconditional compatibility claims alongside caveats. Correct claims only after verification, preserving URL, canonical, title, H1, generator controls, and layout in the first pass.
4. After any page change, compare at least seven final GSC days against equal weekdays and unaffected control pages. Revert only if evidence connects a deterioration to that change. Avoid broad rewrites and do not treat low-volume percentage changes as decisive.

No content, metadata, URL, canonical, generator, or ad-layout changes were made in this triage.
