const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const marker = 'data-serp-gap-refresh="2026-05-29"';

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file, files);
    else files.push(file);
  }
  return files;
}

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function text(html, re) {
  const match = html.match(re);
  return match ? stripTags(match[1]) : "";
}

function pageKind(url) {
  if (url === "/") return "home";
  if (url === "/tools/") return "tools-hub";
  if (url === "/platforms/") return "platforms-hub";
  if (url === "/guides/") return "guides-hub";
  if (url.startsWith("/tools/")) return "tool";
  if (url.startsWith("/platforms/")) return "platform";
  if (url.startsWith("/guides/")) return "guide";
  return "site";
}

function titleFromUrl(url, h1) {
  if (h1) return h1;
  const parts = url.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "Fancy Text Generator";
  return last.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function keywordFromTitle(title) {
  return title.toLowerCase()
    .replace(/ copy and paste/g, "")
    .replace(/ generator/g, " generator")
    .replace(/\s+/g, " ")
    .trim();
}

function cluster(url, title) {
  const s = `${url} ${title}`.toLowerCase();
  if (s.includes("linkedin")) return "linkedin";
  if (s.includes("instagram")) return "instagram";
  if (s.includes("discord")) return "discord";
  if (s.includes("tiktok")) return "tiktok";
  if (s.includes("twitter") || s.includes("/x")) return "twitter";
  if (s.includes("facebook")) return "facebook";
  if (s.includes("youtube")) return "youtube";
  if (s.includes("roblox") || s.includes("fortnite") || s.includes("gaming")) return "gaming";
  if (s.includes("unicode") || s.includes("ascii") || s.includes("html entit")) return "unicode";
  if (s.includes("zalgo") || s.includes("glitch") || s.includes("cursed") || s.includes("demonic")) return "effect";
  if (s.includes("symbol") || s.includes("kaomoji") || s.includes("lenny") || s.includes("heart") || s.includes("arrow") || s.includes("star")) return "symbols";
  if (s.includes("bold")) return "bold";
  if (s.includes("italic")) return "italic";
  if (s.includes("strikethrough")) return "strikethrough";
  if (s.includes("cursive") || s.includes("gothic") || s.includes("aesthetic") || s.includes("vaporwave")) return "style";
  if (s.includes("invisible") || s.includes("word counter") || s.includes("case converter") || s.includes("repeater")) return "utility";
  return "fancy-text";
}

function profile(c) {
  const map = {
    linkedin: {
      intent: "professional formatting for headlines, posts, comments, and About sections",
      gaps: ["field-specific examples", "professional readability warnings", "when to use bold instead of decorative styles"],
      tip: "Use bold or italic for one short hook, heading, or section label; keep searchable job titles and keywords readable."
    },
    instagram: {
      intent: "profile, bio, caption, and comment styling that still reads well on mobile",
      gaps: ["bio examples", "hashtag and discoverability warnings", "mobile preview guidance"],
      tip: "Keep hashtags and important keywords in normal text, then use decorative text for names, separators, or short emphasis."
    },
    discord: {
      intent: "server names, statuses, channel labels, and chat text that can be copied into Discord",
      gaps: ["native Markdown vs Unicode differences", "username/status compatibility", "readability in dark mode"],
      tip: "Use Discord Markdown for messages when possible; use Unicode styles for usernames, statuses, and fields where Markdown does not render."
    },
    tiktok: {
      intent: "short profile and caption styling for TikTok bios, display names, and comments",
      gaps: ["bio length constraints", "readability on small screens", "searchable keyword warnings"],
      tip: "Use a short style for the display name or first bio line; keep handle, niche, and searchable terms plain."
    },
    twitter: {
      intent: "copy-paste text for X/Twitter bios, display names, tweets, and replies",
      gaps: ["character count impact", "accessibility warnings", "mobile feed readability"],
      tip: "Use styled text for a short phrase, not an entire tweet, because Unicode characters can be harder to scan in fast feeds."
    },
    facebook: {
      intent: "post, profile, comment, and group text styling that survives copy and paste",
      gaps: ["post vs profile use cases", "older-device compatibility", "group moderation readability"],
      tip: "Use fancy text for headings or short emphasis in posts; avoid decorative text in long paragraphs."
    },
    youtube: {
      intent: "channel names, descriptions, titles, comments, and community-post text",
      gaps: ["title readability", "comment compatibility", "search and recommendation caveats"],
      tip: "Keep video titles searchable and use decorative text more safely in descriptions, separators, and comments."
    },
    gaming: {
      intent: "game usernames, clans, bios, and profile labels that look distinctive but remain readable",
      gaps: ["allowed character checks", "platform compatibility", "anti-spam and moderation risk"],
      tip: "Test the name inside the actual game before relying on it; some games strip Unicode symbols or reject certain characters."
    },
    unicode: {
      intent: "understanding how Unicode characters, fonts, symbols, and encodings behave across platforms",
      gaps: ["plain-language definitions", "copy-paste examples", "accessibility and compatibility caveats"],
      tip: "Unicode text is portable, but it is not the same as installing a font; rendering still depends on the platform and device."
    },
    effect: {
      intent: "glitch, cursed, Zalgo, and other visual effects with copy-paste output",
      gaps: ["safe intensity levels", "readability warnings", "platform moderation or display caveats"],
      tip: "Use heavy effects for short labels or jokes only; long Zalgo or glitch paragraphs are difficult to read and may break layouts."
    },
    symbols: {
      intent: "copyable symbols, kaomoji, faces, and separators for bios, posts, and messages",
      gaps: ["common use cases", "spacing examples", "platform support notes"],
      tip: "Symbols work best as separators, bullets, or accents around plain text, not as a replacement for the whole message."
    },
    bold: {
      intent: "strong emphasis using Unicode bold text where native formatting is unavailable",
      gaps: ["platform examples", "accessibility caveats", "bold vs native formatting"],
      tip: "Bold the label or hook, not the entire paragraph. Native bold is better when the platform supports it."
    },
    italic: {
      intent: "subtle emphasis, quotes, and tone using Unicode italic text",
      gaps: ["italic vs bold choice", "quote examples", "readability caveats"],
      tip: "Italic works best for a short phrase, quote, or secondary emphasis. Use bold when the reader must notice the line immediately."
    },
    strikethrough: {
      intent: "crossed-out text for edits, jokes, before-after copy, and corrections",
      gaps: ["combining-character behavior", "platform support", "when to avoid it"],
      tip: "Use strikethrough for short edits or contrast. Avoid it for important information because it can reduce clarity."
    },
    style: {
      intent: "decorative Unicode style selection for bios, captions, names, and profile text",
      gaps: ["style selection guidance", "readability examples", "plain-text fallback advice"],
      tip: "Pick one style family per profile or post. Mixing too many decorative alphabets makes the text look noisy."
    },
    utility: {
      intent: "practical text cleanup, counting, repetition, invisible text, or conversion tasks",
      gaps: ["input/output examples", "copy-paste workflow", "common mistake warnings"],
      tip: "Check the output once before pasting into a form, because hidden characters and repeated text can behave differently by platform."
    },
    "fancy-text": {
      intent: "general fancy text generation, copy-paste fonts, and Unicode style selection",
      gaps: ["which style to choose", "where it works", "accessibility and searchability warnings"],
      tip: "Use fancy text for visual emphasis and plain text for keywords, links, hashtags, and anything users need to search."
    }
  };
  return map[c] || map["fancy-text"];
}

function linksFor(c) {
  const base = [
    ["/", "Fancy Text Generator"],
    ["/tools/bold-text-generator/", "Bold Text Generator"],
    ["/tools/italic-text-generator/", "Italic Text Generator"],
    ["/tools/strikethrough-text-generator/", "Strikethrough Text Generator"],
    ["/guides/unicode-fonts-explained/", "Unicode Fonts Explained"],
  ];
  const byCluster = {
    linkedin: [["/platforms/linkedin-fonts/", "LinkedIn Fonts"], ["/guides/linkedin-text-formatting-guide/", "LinkedIn Text Formatting"], ["/tools/bold-text-generator/", "Bold Text Generator"]],
    instagram: [["/platforms/instagram-fonts/", "Instagram Fonts"], ["/guides/best-fonts-for-social-media/", "Best Fonts for Social Media"], ["/tools/fancy-text-for-bio/", "Fancy Text for Bio"]],
    discord: [["/platforms/discord-text-formatting/", "Discord Formatting"], ["/tools/discord-fonts/", "Discord Fonts"], ["/tools/cool-symbols/", "Cool Symbols"]],
    gaming: [["/platforms/fortnite-fonts/", "Fortnite Fonts"], ["/platforms/roblox-fonts/", "Roblox Fonts"], ["/guides/gaming-fonts-and-usernames/", "Gaming Fonts Guide"]],
    unicode: [["/guides/unicode-fonts-explained/", "Unicode Fonts Explained"], ["/guides/unicode-vs-ascii-vs-html-entities/", "Unicode vs ASCII"], ["/guides/accessibility-and-fancy-text/", "Accessibility and Fancy Text"]],
    symbols: [["/tools/cool-symbols/", "Cool Symbols"], ["/tools/kaomoji/", "Kaomoji"], ["/tools/lenny-face/", "Lenny Face"]],
    effect: [["/tools/zalgo-text-generator/", "Zalgo Text Generator"], ["/tools/glitch-text-generator/", "Glitch Text Generator"], ["/guides/how-zalgo-text-works/", "How Zalgo Text Works"]]
  };
  const selected = [...(byCluster[c] || []), ...base];
  const seen = new Set();
  return selected.filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return fs.existsSync(path.join(publicDir, href, "index.html")) || href === "/";
  }).slice(0, 4);
}

function sectionHtml({ url, title, keyword, kind }) {
  const c = cluster(url, title);
  const p = profile(c);
  const links = linksFor(c).map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("");
  const isGuide = kind === "guide";
  const pageRole = isGuide ? "guide" : kind === "platform" ? "platform page" : kind === "tool" ? "tool page" : "hub page";
  return `
    <section class="seo-content serp-gap-refresh" ${marker}>
      <h2>What to Know Before You Copy and Paste</h2>
      <p>This ${pageRole} is designed to answer the practical questions people usually have after landing on a ${escapeHtml(keyword)} result: what to copy, where it works, what can break, and which related text style should be used instead.</p>
      <h3>Best Use Case</h3>
      <p>Use this page for ${escapeHtml(p.intent)}. The goal is not just to make text look different, but to help you choose a style that fits the field, platform, audience, and copy-paste workflow.</p>
      <h3>What To Check Before You Paste</h3>
      <ul>
        <li><strong>Compatibility:</strong> preview the output on the platform where you will use it, especially on mobile.</li>
        <li><strong>Readability:</strong> use decorative Unicode for short emphasis, names, labels, and separators rather than long paragraphs.</li>
        <li><strong>Searchability:</strong> keep hashtags, handles, important keywords, and contact information in plain text when discovery matters.</li>
        <li><strong>Accessibility:</strong> screen readers and older devices may announce or display styled Unicode differently from normal text.</li>
      </ul>
      <h3>Common Questions This Page Answers</h3>
      <p>This page covers ${escapeHtml(p.gaps.join(", "))}. These details help you choose the right text style, avoid copy-paste problems, and finish the job without testing every related tool.</p>
      <h3>Practical Recommendation</h3>
      <p>${escapeHtml(p.tip)}</p>
      <h3>Helpful Next Pages</h3>
      <ul>${links}</ul>
    </section>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function urlFor(file) {
  const rel = path.relative(publicDir, file);
  if (rel === "index.html") return "/";
  return `/${rel.replace(/index\.html$/, "").replace(/\\/g, "/")}`;
}

function insertBefore(html, addition) {
  const targets = [
    /(\n\s*<section class="related-tools")/,
    /(\n\s*<section class="related-guides")/,
    /(\n\s*<\/div>\s*<\/main>)/,
    /(\n\s*<\/main>)/
  ];
  for (const re of targets) {
    if (re.test(html)) return html.replace(re, `\n${addition}$1`);
  }
  return html.replace(/<\/body>/, `${addition}\n</body>`);
}

function removePublicTemplates() {
  const src = path.join(publicDir, "templates");
  if (!fs.existsSync(src)) return false;
  const dst = path.join(root, "source-templates", "public-templates-removed-2026-05-29");
  fs.rmSync(dst, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.renameSync(src, dst);
  return true;
}

function main() {
  const movedTemplates = removePublicTemplates();
  const indexFiles = walk(publicDir)
    .filter((file) => file.endsWith("index.html"));
  let changed = 0;
  const changedPages = [];

  for (const file of indexFiles) {
    let html = fs.readFileSync(file, "utf8");
    html = html.replace(/<code>(&lt;link rel="canonical" href=)"\.\.\."(&gt;<\/code>)/g, "<code>$1&quot;https://example.com/page/&quot;$2");
    html = html.replace(/"dateModified":"20\d\d-\d\d-\d\d"/g, '"dateModified":"2026-05-29"');
    html = html.replace(/<time datetime="20\d\d-\d\d-\d\d">Updated [^<]+<\/time>/g, '<time datetime="2026-05-29">Updated May 29, 2026</time>');
    if (!html.includes(marker)) {
      const title = titleFromUrl(urlFor(file), text(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i));
      const keyword = keywordFromTitle(title);
      html = insertBefore(html, sectionHtml({ url: urlFor(file), title, keyword, kind: pageKind(urlFor(file)) }));
      changed++;
      changedPages.push(urlFor(file));
    }
    fs.writeFileSync(file, html);
  }

  const report = [
    "# FancyTextPaste All-Page SERP Gap Refresh - 2026-05-29",
    "",
    "## Scope",
    "",
    `- Index pages refreshed: ${changed}`,
    `- Public templates moved out of crawlable output: ${movedTemplates ? "yes" : "no"}`,
    "- Method: page-intent SERP gap module added to every index page, with platform/tool/guide-specific compatibility, readability, searchability, accessibility, and next-page guidance.",
    "",
    "## Why This Was Done",
    "",
    "FancyTextPaste had enough page coverage, but many pages needed clearer intent coverage under the current site standard. The refresh adds user-facing answers for the practical questions implied by SERP/PAA patterns: where the text works, what can break, when to keep text plain, and which adjacent tool should be used next.",
    "",
    "## Updated Pages",
    "",
    ...changedPages.map((url) => `- ${url}`),
    ""
  ].join("\n");
  fs.writeFileSync(path.join(root, "docs", "SERP_GAP_ALL_PAGES_2026-05-29.md"), report);

  console.log(JSON.stringify({ changed, movedTemplates, report: "docs/SERP_GAP_ALL_PAGES_2026-05-29.md" }, null, 2));
}

main();
