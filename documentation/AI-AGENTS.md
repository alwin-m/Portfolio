# AI Agent Operational Guide & Safety Directives (`AI-AGENTS.md`)

> **Mandatory rules and workflow constraints for AI coding assistants working on Alwin Madhu's Portfolio codebase.**

---

## 1. Golden Rules of System Maintenance

Future AI agents MUST strictly obey the following rules when interacting with this repository:

1. **READ DOCUMENTATION FIRST**: Always consult `FILE-MAP.md`, `PROJECTS.md`, or `UI-COMPONENTS.md` before attempting any code edit.
2. **NO UNREQUESTED REDESIGNS**: Never change the visual identity, colors, typography, layout grid, component hierarchy, or animations unless explicitly instructed by the user.
3. **MAKE MINIMAL TARGETED EDITS**: Touch only the exact lines/files required to fulfill the user's request. Do NOT touch unrelated files ("while I'm here" modifications are strictly forbidden).
4. **NO DESTRUCTIVE REFACTORING**: Do not replace vanilla HTML/CSS/JS with frameworks (React, Vue, Tailwind, Next.js). Do not rewrite working code simply to conform to a personal style preference.
5. **ENFORCE UNIQUE HTML FILENAMES (RULE 9)**:
   - **Root homepage**: `index.html` (the ONLY allowed `index.html` in the entire repository).
   - **Sub-pages**: MUST use descriptive, globally unique filenames (e.g., `about/about-alwin-madhu.html`, `projects/project-liora.html`, `news/news.html`). NEVER create `subfolder/index.html`.
6. **PRESERVE STRUCTURED DATA & SEO**: Never delete or mangle JSON-LD scripts (`SoftwareApplication`, `Person`, `BreadcrumbList`, `FAQPage`), meta descriptions, canonical URLs, or heading tags (`<h1>`).
7. **PRESERVE CANONICAL ENTITY CONNECTIVITY**: The root canonical identity is `https://alwin-m.github.io/Portfolio/#person`. Ensure sameAs links (GitHub, LinkedIn, ORCID) and author references remain consistent across all project pages.
8. **DO NOT INVENT PROJECT MATERIAL**: Use existing screenshots (`liora.jpg`, `SCREAM.png`, `Megamind.png`, `ROSCYCLE.png`), papers (`DigitizingTouch.pdf`), and documentation (`SCREAM_CANONICAL_DOCUMENTATION.md`) as source material. Mark unknown fields as unknown.

---

## 2. Standard Targeted Change Workflow

When responding to a user prompt, follow this 12-step execution pipeline:

```text
[USER REQUEST]
      │
      ▼
[1. READ RELEVANT DOCS] ──► Check documentation/FILE-MAP.md & project-map.json
      │
      ▼
[2. DETERMINE SCOPE] ────► Local (1 file) vs Global (CSS/Header/Footer)
      │
      ▼
[3. IDENTIFY TARGET FILES]► Locate exact file path (e.g., projects/project-liora.html)
      │
      ▼
[4. INSPECT CODE] ────────► View target file; check imports & structured data
      │
      ▼
[5. EXECUTE MINIMAL CHANGE]► Modify only the target line/element
      │
      ▼
[6. CHECK DEPENDENCIES] ──► Verify internal links and ⌘K search index references
      │
      ▼
[7. CHECK SEO & JSON-LD] ─► Confirm canonical link and schema scripts remain intact
      │
      ▼
[8. CHECK RESPONSIVE LAYOUT]► Ensure styles work on desktop and mobile breakpoints
      │
      ▼
[9. CHECK ACCESSIBILITY] ─► Confirm ARIA labels, alt text, and semantic HTML
      │
      ▼
[10. VERIFY IN BROWSER/CLI]► Run link verification or inspect DOM output
      │
      ▼
[11. UPDATE CHANGELOG] ──► If architectural/structural, log in documentation/CHANGELOG.md
      │
      ▼
[12. FINAL REPORT] ──────► Report exact changes made to user concisely
```

---

## 3. Scoping Classification Examples

### Scenario A: Local Content Change
- **User Prompt**: *"Update the release year for LIORA to 2025-2026."*
- **Action**:
  - Open `projects/project-liora.html`.
  - Locate `.case-meta-val` under Year.
  - Modify only `projects/project-liora.html`.
  - **Do NOT touch**: `quiet.css`, `index.html`, `search.js`, or any other project page.

### Scenario B: Global UI Change
- **User Prompt**: *"Add a new link 'Journal' to the main navigation bar across all pages."*
- **Action**:
  - Recognize that Navigation is a **SHARED COMPONENT**.
  - Inspect `documentation/UI-COMPONENTS.md` under `Header & Navigation`.
  - Update nav links in `index.html`, `projects/projects-overview.html`, `projects/project-liora.html`, `projects/project-scream.html`, `projects/project-genome-sentinel.html`, `projects/project-megamind.html`, `projects/project-roscycle.html`, `news/news.html`, `writing/writing.html`, `about/about-alwin-madhu.html`, `experiments/experiments.html`, `timeline/timeline.html`, `work/work-experience.html`, `research/research-overview.html`, `contact/contact.html`.
  - Check mobile drawer nav in all files.

### Scenario C: Content Addition
- **User Prompt**: *"Add a new news update about LIORA."*
- **Action**:
  - Open `news/news.html` and `index.html` (since home displays latest news).
  - Add the new `.news-item` block.
  - Update `assets/data/search-index.json` or `index.html` search array if search indexing is updated.
  - **Do NOT**: Redesign the news list CSS or alter existing news items.

---

## 4. Anti-Patterns & Prohibited Actions

- ❌ **DO NOT** convert static `.html` files into a single-page application (SPA) or introduce build tooling (Webpack, Vite, Tailwind CLI) unless explicitly requested.
- ❌ **DO NOT** edit global CSS variables in `assets/css/quiet.css` to fix a styling issue on a single page. Write localized overrides inside the page or create a specific scoped class.
- ❌ **DO NOT** delete comments or docstrings from existing code.
- ❌ **DO NOT** create orphan files without linking them to the sitemap and navigation.
- ❌ **DO NOT** guess variable names or file paths—always inspect the codebase first.

---

## 5. Reporting Unrelated Issues

If an AI agent discovers bugs, broken links, or accessibility flaws while inspecting files:
- **DO NOT fix them automatically** unless they are directly related to the user request.
- **DO include them in the final summary** under a section titled `Potential Improvements Discovered (Not Modified)`.
