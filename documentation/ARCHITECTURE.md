# System Architecture & Technical Specifications (`ARCHITECTURE.md`)

> **Comprehensive breakdown of file layout, execution lifecycle, routing rules, and serving model.**

---

## 1. System Architecture Overview

The Alwin Madhu digital identity platform is architected as a **zero-dependency, static, buildless website** deployed on **GitHub Pages**. 

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           GitHub Pages Edge                             │
│       (Serves static files directly from 'main' branch root)            │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ HTTP GET
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                              Client Browser                             │
├────────────────────────────────────┬────────────────────────────────────┤
│ 1. HTML DOM Parsing               │ index.html, project-liora.html, etc.│
│ 2. CSS Style Application          │ assets/css/quiet.css               │
│ 3. Font Loading                   │ Google Fonts (Inter, Instrument)   │
│ 4. JS Interactivity               │ IntersectionObserver reveal, ⌘K    │
│ 5. Structured Data Parsing        │ JSON-LD (Person, Software, Schema)  │
└────────────────────────────────────┴────────────────────────────────────┘
```

---

## 2. Directory Layout & File Hierarchy

```text
Portfolio-main/
├── .github/
│   └── workflows/
│       └── static.yml            # GitHub Pages deployment pipeline
├── index.html                    # Root Homepage (Magazine Cover Layout)
├── downloads.html                # APK and document download directory
├── sitemap.xml                   # XML Sitemap for search engines
├── robots.txt                    # Crawler access permissions & sitemap link
├── llms.txt                      # LLM context & markdown entry point
├── assets/
│   ├── css/
│   │   └── quiet.css             # Unified Quiet Intelligence Design System
│   └── js/
│       ├── scripts.js            # Legacy smooth scroll & section reveal helpers
│       └── search.js             # Client-side ⌘K search logic (if modularized)
├── about/
│   └── about-alwin-madhu.html    # Profile, biography, competencies
├── projects/
│   ├── projects-overview.html    # All Projects directory hub
│   ├── project-liora.html        # LIORA Case Study
│   ├── project-scream.html       # SCREAM Case Study
│   ├── project-genome-sentinel.html # Genome Sentinel Case Study
│   ├── project-megamind.html     # Megamind Case Study
│   └── project-roscycle.html     # ROS-Cycle Case Study
├── writing/
│   └── writing.html              # Articles, technical publications
├── news/
│   └── news.html                 # Timestamped journal updates
├── experiments/
│   └── experiments.html          # Prototypes and sandboxes
├── timeline/
│   └── timeline.html             # Chronological timeline
├── research/
│   └── research-overview.html    # Research papers and academic algorithms
├── work/
│   └── work-experience.html      # Industry and academic roles
├── contact/
│   └── contact.html              # Contact information & profile links
└── documentation/                # System documentation & AI Context map
    ├── PROJECT.md
    ├── AI-AGENTS.md
    ├── ARCHITECTURE.md
    ├── DESIGN-SYSTEM.md
    ├── UI-COMPONENTS.md
    ├── CONTENT-MODEL.md
    ├── PROJECTS.md
    ├── ASSETS.md
    ├── SEO.md
    ├── AI-DISCOVERABILITY.md
    ├── DEPLOYMENT.md
    ├── FILE-MAP.md
    ├── CHANGELOG.md
    └── project-map.json
```

---

## 3. HTML File Naming Protocol (Rule 9)

To ensure machine readability, eliminate routing ambiguities on GitHub Pages, and avoid token confusion for AI maintainers:

- **Root Homepage**: MUST be named `index.html` at the workspace root.
- **Sub-pages**: MUST use descriptive, globally unique filenames.
- **Forbidden**: `projects/index.html`, `about/index.html`, `news/index.html`.
- **Approved Canonical Paths**:
  - `/` → `index.html`
  - `/about/about-alwin-madhu.html`
  - `/projects/projects-overview.html`
  - `/projects/project-liora.html`
  - `/projects/project-scream.html`
  - `/projects/project-genome-sentinel.html`
  - `/projects/project-megamind.html`
  - `/projects/project-roscycle.html`
  - `/writing/writing.html`
  - `/news/news.html`
  - `/experiments/experiments.html`
  - `/timeline/timeline.html`
  - `/research/research-overview.html`
  - `/work/work-experience.html`
  - `/contact/contact.html`

---

## 4. Script & Style Execution Pipeline

Every page loads styles and scripts in a standardized sequence:

1. **Font Preconnect & Stylesheets**:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@100;200;300;400;500&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="../assets/css/quiet.css">
   ```
2. **Structured Data Injection**:
   - `JSON-LD` scripts embedded inside `<head>` before body render.
3. **DOM Content & Intersection Observer**:
   - Inline IIFE script at bottom of `<body>` attaches `IntersectionObserver` to `.reveal` elements for scroll transitions.
   - Attach click handlers for hamburger menu (`#qiHam` / `#qiMnav`).
4. **⌘K Client Search System**:
   - Search modal triggered by `Cmd+K` / `Ctrl+K` or clicking `⌘K` button.
   - Evaluates search input against `searchData` array and renders real-time matched links.

---

## 5. Performance & Resource Constraints

- **Total Page Payload**: < 50 KB gzip (excluding heavy visual assets).
- **Image Optimization**: WebP / JPG / PNG formats with explicit `loading="lazy"` and alt text attributes.
- **CSS Architecture**: Single shared stylesheet `assets/css/quiet.css` (< 20 KB raw) with native CSS variables.
- **Zero Third-Party Tracking**: No analytics scripts (Google Analytics, Mixpanel), no ad trackers, zero cookies.
