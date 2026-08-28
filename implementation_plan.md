# 🔍 Pre-Release Audit Report — Alwin Madhu Portfolio

## Executive Summary

The audit uncovered **significant structural issues** that would cause visitors to hit 404 errors on nearly half the site. The root cause: **two generations of pages coexist**, and the older generation uses `index.html`-based navigation that points to files that don't exist.

---

## CRITICAL ISSUE: Two Navigation Systems

The site has **two distinct page generations**:

### Generation 1 — "Legacy Pages" (Old Design, Inline CSS)
These use an old navigation pattern linking to `../about/index.html`, `../projects/index.html`, etc.:
- [about-alwin-madhu.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/about/about-alwin-madhu.html)
- [contact.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/contact/contact.html)
- [now.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/now/now.html)
- [research-overview.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/research/research-overview.html)
- [timeline.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/timeline/timeline.html)
- [work-experience.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/work/work-experience.html)

### Generation 2 — "Quiet Intelligence Pages" (quiet.css, search.js)
These use the correct navigation linking to `../projects/projects-overview.html`, `../writing/writing.html`, etc.:
- [index.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/index.html) (homepage)
- [projects-overview.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/projects/projects-overview.html)
- All 5 project case studies
- [news.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/news/news.html)
- [writing.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/writing/writing.html)
- [experiments.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/experiments/experiments.html)

### Root-level Legacy Pages (Old Design, Inline CSS)
Standalone pages from the original portfolio that are NOT linked from the new design:
- [scream.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/scream.html) — 683 lines, rich SCREAM documentation
- [downloads.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/downloads.html) — LIORA APK download page
- [research.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/research.html) — Research page (old design)
- [projects.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/projects.html) — Actually mislabeled as "AI Prompts"
- [prompts.html](file:///c:/Users/alwin/Downloads/Portfolio-main%20(1)/Portfolio-main/prompts.html) — AI Prompts page

---

## 1. Broken Internal Links (CRITICAL)

> [!CAUTION]
> **42+ broken internal links** across the site. Six pages use `index.html`-based navigation that points to files that **do not exist**.

| Source Page | Broken Link | Reason |
|---|---|---|
| about/about-alwin-madhu.html | `index.html` (self-ref as "About") | No `about/index.html` exists |
| about/about-alwin-madhu.html | `../projects/index.html` | No `projects/index.html` exists |
| about/about-alwin-madhu.html | `../work/index.html` | No `work/index.html` exists |
| about/about-alwin-madhu.html | `../research/index.html` | No `research/index.html` exists |
| about/about-alwin-madhu.html | `../writing/index.html` | No `writing/index.html` exists |
| about/about-alwin-madhu.html | `../timeline/index.html` | No `timeline/index.html` exists |
| about/about-alwin-madhu.html | `../now/index.html` | No `now/index.html` exists |
| about/about-alwin-madhu.html | `../contact/index.html` | No `contact/index.html` exists |
| contact/contact.html | `../about/index.html` | Same issue |
| contact/contact.html | All `../*/index.html` links | Same issue |
| now/now.html | All `../*/index.html` links | Same issue |
| research/research-overview.html | All `../*/index.html` links | Same issue |
| timeline/timeline.html | All `../*/index.html` links | Same issue |
| work/work-experience.html | All `../*/index.html` links | Same issue |
| downloads.html | `projects.html` | Links to misnamed legacy page |
| downloads.html | `Liora.apk` | **File does not exist** in repo |
| projects.html | Has canonical pointing to `prompts.html` | Wrong identity |
| index.html | `${item.url}` | Template literal leaked into HTML |

---

## 2. Orphan Page Classification

| Page | Status | Explanation |
|---|---|---|
| `scream.html` | **ORPHANED** | 683-line rich SCREAM documentation. No incoming links from any page. Contains valuable FAQ, history, and structured data. |
| `downloads.html` | **SEMI-ORPHANED** | Only linked from `project-liora.html` via `../downloads.html`. Not in main navigation. Contains LIORA download functionality. |
| `research.html` | **ORPHANED** | Legacy research page. Superseded by `research/research-overview.html`. |
| `projects.html` | **ORPHANED / MISLABELED** | Title says "AI Prompts" but filename is `projects.html`. Canonical points to `prompts.html`. |
| `prompts.html` | **ORPHANED** | AI Prompts page. No incoming links. |
| `now/now.html` | **ORPHANED** | Not linked from any navigation in the QI system. Only discoverable via old `index.html`-style links (which are broken). |
| `work/work-experience.html` | **ORPHANED** | Not linked from QI navigation. |
| `research/research-overview.html` | **ORPHANED** | Not linked from QI navigation. |
| `timeline/timeline.html` | **SEMI-ORPHANED** | Not linked from QI main nav, but mentioned in search index. |
| `contact/contact.html` | **ORPHANED** | Not linked from QI navigation. |

---

## 3. Sitemap Issues (CRITICAL)

> [!WARNING]
> The sitemap contains URLs that use `index.html`-implied directory URLs (e.g., `/about/`, `/projects/liora/`) but the actual files use different filenames. Since this is a static site on GitHub Pages with no server-side routing, these URLs will **404**.

| Sitemap URL | Actual File | Status |
|---|---|---|
| `/about/` | `about/about-alwin-madhu.html` | ❌ 404 |
| `/projects/` | `projects/projects-overview.html` | ❌ 404 |
| `/projects/liora/` | `projects/project-liora.html` | ❌ 404 |
| `/projects/scream/` | `projects/project-scream.html` | ❌ 404 |
| `/projects/genome-sentinel/` | `projects/project-genome-sentinel.html` | ❌ 404 |
| `/projects/megamind/` | `projects/project-megamind.html` | ❌ 404 |
| `/projects/roscycle/` | `projects/project-roscycle.html` | ❌ 404 |
| `/work/` | `work/work-experience.html` | ❌ 404 |
| `/research/` | `research/research-overview.html` | ❌ 404 |
| `/writing/` | `writing/writing.html` | ❌ 404 (only `writing/writing.html` exists) |
| `/timeline/` | `timeline/timeline.html` | ❌ 404 |
| `/now/` | `now/now.html` | ❌ 404 |
| `/contact/` | `contact/contact.html` | ❌ 404 |
| `/Liora.apk` | — | ❌ File does not exist in repo |
| `/Portfolio/` + `/Portfolio/index.html` | Duplicate entry | ⚠️ Redundant |

---

## 4. Canonical URL Issues

| Page | Canonical | Issue |
|---|---|---|
| `about/about-alwin-madhu.html` | `/about/` | Will 404 — no index.html there |
| `research/research-overview.html` | `/research/` | Will 404 |
| `timeline/timeline.html` | `/timeline/` | Will 404 |
| `work/work-experience.html` | `/work/` | Will 404 |
| `now/now.html` | `/now/` | Will 404 |
| `contact/contact.html` | `/contact/` | Will 404 |
| `projects.html` | `/prompts.html` | Wrong! Points to different file |

---

## 5. Files to Remove (Safe)

| File | Reason | Dependencies Checked |
|---|---|---|
| `test_write_access.txt` | Development test file | ✅ No references |
| `sample_dct.jpg` | Provenance research sample | ✅ No HTML references |
| `sample_exif.jpg` | Provenance research sample | ✅ No HTML references |
| `sample_lsb.png` | Provenance research sample | ✅ No HTML references |
| `sample_lsb_cropped.png` | Provenance research sample | ✅ No HTML references |
| `sample_test.png` | Provenance research sample | ✅ No HTML references |
| `provenance_prototype.py` | Python prototype script | ✅ No HTML references |
| `PROVENANCE_RESEARCH.md` | Research notes for provenance | ✅ Documentation only |
| `claude code.jpg` | Development artifact | ✅ No HTML references |
| `Claude.md` | AI conversation log | ✅ No HTML references |
| `QUICK_START.md` | Old quick start guide | ✅ No HTML references |
| `REDESIGN_SUMMARY.md` | Old redesign notes | ✅ No HTML references |
| `portfolio_report.pdf` | Old PDF report | ✅ No HTML references |
| `SCREAM_CANONICAL_DOCUMENTATION.md` | Superseded by `scream.html` content | ✅ No HTML references |

> [!IMPORTANT]  
> `scream.html`, `downloads.html`, and `research.html` contain **meaningful project content** and should NOT be deleted. They should be either integrated or preserved and linked.

---

## Proposed Fix Strategy

### Fix 1: Migrate Gen-1 pages to Quiet Intelligence navigation
Update navigation in all 6 Gen-1 pages (`about`, `contact`, `now`, `research-overview`, `timeline`, `work-experience`) to use the correct file paths matching the QI system.

### Fix 2: Rewrite sitemap.xml with actual file URLs
Replace all directory-style URLs with the real `.html` file URLs. Remove the non-existent `Liora.apk` entry.

### Fix 3: Fix canonical URLs
Update canonical `<link>` tags on all pages to point to the actual deployed file URLs.

### Fix 4: Add missing pages to QI navigation
Add `Research`, `Timeline`, `Work`, `Contact`, `Now` to the homepage footer links so visitors can discover them.

### Fix 5: Fix index.html template literal leak
The `${item.url}` string in the inline search script is a template literal that should work in JS, but it's appearing as a raw `href` attribute in one place.

### Fix 6: Clean up obsolete files
Remove development artifacts and samples listed above.

### Fix 7: Preserve legacy content pages
Keep `scream.html` and `downloads.html` as they contain valuable content, and ensure they are linkable.

### Fix 8: Update robots.txt
Update Allow paths to use actual file paths instead of directory paths.

---

> [!IMPORTANT]
> **Please review and approve this plan.** The navigation fix alone will resolve 42+ broken links across the site.
