# AI Agent Operational Guide & System Directives (`AI-AGENTS.md`)

> **Mandatory architectural rules, SEO/GEO constraints, and workflow guidelines for AI coding assistants working on Alwin Madhu's Portfolio repository.**

---

## 1. Golden Rules of System Architecture

Future AI coding agents MUST strictly obey the following rules when interacting with this repository:

1. **READ DOCUMENTATION FIRST**: Always consult `FILE-MAP.md`, `PROJECTS.md`, or `documentation/SEO.md` before attempting any code edit.
2. **CLEAN CANONICAL DIRECTORY ARCHITECTURE (GITHUB PAGES STANDARD)**:
   - Every route in the portfolio must be backed by a full, self-contained `index.html` inside its directory (e.g. `about/index.html`, `projects/index.html`, `projects/liora/index.html`, `projects/scream/index.html`, `provenance/index.html`).
   - **STRICTLY PROHIBITED**: Never generate 0-second `<meta http-equiv="refresh">` redirect stubs. Search engines (Googlebot) treat them as soft-404s, and AI scrapers (GPTBot, ClaudeBot, PerplexityBot) discard empty shells.
3. **CANONICAL URL HARMONY**:
   - The `<link rel="canonical">`, OpenGraph URL (`og:url`), and `sitemap.xml` `<loc>` must all match the exact directory URL with a trailing slash (e.g., `https://alwin-m.github.io/Portfolio/projects/liora/`).
4. **BRAND PROVENANCE & WATERMARK INTEGRITY**:
   - The white watermark signature **`© j_e_e_n._`** (established in **2020**) is the verified copyright marking and brand signature of Alwin Madhu.
   - Always preserve Schema.org `VisualArtwork` and `Brand` structured data, IPTC/XMP copyright headers, and the canonical knowledge node at `/provenance/`.
5. **STRICT STORAGE & CORE WEB VITALS BUDGETS**:
   - **HTML Page Weight**: < 45 KB uncompressed per page (Target: 15–25 KB).
   - **CSS**: Pure vanilla CSS (`quiet.css` < 20 KB). Never introduce heavy CSS frameworks (Tailwind CLI, Bootstrap).
   - **JavaScript**: Vanilla JS only (`scripts.js` + `search.js` < 20 KB). Zero runtime framework overhead (no React/Vue hydration).
   - **Images**: Must be modern WebP or optimized JPEG < 120 KB each with explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS = 0).
   - **Core Web Vitals Targets**: LCP < 1.2s, INP < 100ms, CLS = 0.
6. **NO DESTRUCTIVE REFACTORING**:
   - Do not replace vanilla HTML/CSS/JS with single-page applications (SPAs) or introduce bundlers (Vite, Webpack) unless explicitly instructed.
7. **PRESERVE STRUCTURED DATA & KNOWLEDGE GRAPH**:
   - Never remove or mangle JSON-LD scripts (`Person`, `SoftwareApplication`, `VisualArtwork`, `BreadcrumbList`, `FAQPage`), meta descriptions, or heading structures (`<h1>`).
   - Root canonical identity is `https://alwin-m.github.io/Portfolio/#person`.
8. **DO NOT INVENT PROJECT CLAIMS**:
   - Base all descriptions on verified source materials:
     - **SCREAM**: Offline peer-to-peer mobile messaging over BLE/Wi-Fi Direct; talking without internet; popularity gained through communication disruptions.
     - **LIORA**: Privacy-first menstrual wellness and conversational speech tracking platform; Hathaway Algorithm; 100% offline data storage.
     - **Genome Sentinel**: AI computational drug discovery and AutoDock Vina molecular docking.
     - **Megamind**: Offline personal AI assistant with local LLM.

---

## 2. Standard Targeted Change Workflow

When responding to a user prompt, follow this 10-step execution pipeline:

```text
[USER REQUEST]
      │
      ▼
[1. READ RELEVANT DOCS] ──► Check documentation/FILE-MAP.md & SEO.md
      │
      ▼
[2. DETERMINE SCOPE] ────► Single Node (projects/liora/) vs Global (Header/Footer/CSS)
      │
      ▼
[3. INSPECT TARGET FILE] ─► View target file; inspect canonical link & JSON-LD
      │
      ▼
[4. EXECUTE MINIMAL CHANGE]► Modify only the target line/element
      │
      ▼
[5. VERIFY INTERNAL LINKS]► Ensure clean relative links (e.g. ../../projects/)
      │
      ▼
[6. CHECK SEO & JSON-LD] ─► Confirm canonical URL, OpenGraph, and schema graph
      │
      ▼
[7. CHECK RESPONSIVENESS] ─► Validate on 320px mobile through 1920px desktop
      │
      ▼
[8. TEST IN LOCAL SERVER] ─► Ensure HTTP 200 responses with zero broken links
      │
      ▼
[9. UPDATE SITEMAP/LLMS] ─► If new page added, update sitemap.xml and llms.txt
      │
      ▼
[10. FINAL REPORT] ───────► Report exact changes made concisely to user
```

---

## 3. Directory & Canonical URL Standard

All canonical files follow the directory standard:

| Section | Canonical File Location | Public Canonical URL |
| :--- | :--- | :--- |
| **Homepage** | `index.html` | `https://alwin-m.github.io/Portfolio/` |
| **Brand Provenance** | `provenance/index.html` | `https://alwin-m.github.io/Portfolio/provenance/` |
| **About** | `about/index.html` | `https://alwin-m.github.io/Portfolio/about/` |
| **Work Hub** | `projects/index.html` | `https://alwin-m.github.io/Portfolio/projects/` |
| **LIORA** | `projects/liora/index.html` | `https://alwin-m.github.io/Portfolio/projects/liora/` |
| **SCREAM** | `projects/scream/index.html` | `https://alwin-m.github.io/Portfolio/projects/scream/` |
| **Genome Sentinel** | `projects/genome-sentinel/index.html` | `https://alwin-m.github.io/Portfolio/projects/genome-sentinel/` |
| **Megamind** | `projects/megamind/index.html` | `https://alwin-m.github.io/Portfolio/projects/megamind/` |
| **ROS-Cycle** | `projects/roscycle/index.html` | `https://alwin-m.github.io/Portfolio/projects/roscycle/` |
| **Research Hub** | `research/index.html` | `https://alwin-m.github.io/Portfolio/research/` |
| **Hathaway Algorithm** | `research/hathaway-algorithm/index.html` | `https://alwin-m.github.io/Portfolio/research/hathaway-algorithm/` |
| **Writing** | `writing/index.html` | `https://alwin-m.github.io/Portfolio/writing/` |
| **News** | `news/index.html` | `https://alwin-m.github.io/Portfolio/news/` |
| **Experiments** | `experiments/index.html` | `https://alwin-m.github.io/Portfolio/experiments/` |
| **Timeline** | `timeline/index.html` | `https://alwin-m.github.io/Portfolio/timeline/` |
| **Work Experience** | `work/index.html` | `https://alwin-m.github.io/Portfolio/work/` |
| **Now** | `now/index.html` | `https://alwin-m.github.io/Portfolio/now/` |
| **Contact** | `contact/index.html` | `https://alwin-m.github.io/Portfolio/contact/` |
