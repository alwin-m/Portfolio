# Alwin Madhu — Personal Digital Identity Platform (`PROJECT.md`)

> **Master Project Context & Operational Overview**

---

## 1. Project Purpose & Summary

This repository represents the official **personal digital identity platform, technology publication, and portfolio system** of **Alwin Madhu** (also known as *Jeen* / `@alwin-m` / `© j_e_e_n._`).

The site is designed as an **editorial + technology publication + professional identity system** rather than a conventional developer portfolio. It showcases software systems, computational biology research, peer-to-peer networking experiments, and technical publications while establishing machine-readable identity disambiguation across search engines and AI knowledge systems (ChatGPT, Perplexity, Gemini, Google AI Overviews).

---

## 2. Subject Identity & Disambiguation

- **Full Name**: Alwin Madhu
- **Alternate Names / Handles**: Jeen, j_e_e_n._, @alwin-m
- **Role / Profile**: Software Developer, AI Researcher, Computational Biology Student (BCA at Manipal University Jaipur)
- **Root Canonical Entity ID**: `https://alwin-m.github.io/Portfolio/#person`
- **Key Profiles / Proof Signals**:
  - **GitHub**: [https://github.com/alwin-m](https://github.com/alwin-m)
  - **LinkedIn**: [https://www.linkedin.com/in/alwinmadhu7/](https://www.linkedin.com/in/alwinmadhu7/)
  - **ORCID**: [https://orcid.org/0009-0008-2826-5082](https://orcid.org/0009-0008-2826-5082)
  - **Copyright Watermark**: `© j_e_e_n._`

---

## 3. Core Design Philosophy: "Quiet Intelligence"

The visual and architectural identity of the website is built upon the **"Quiet Intelligence"** design framework:
- **Calm Technology Positioning** (inspired by Anthropic): Generous whitespace, restrained typography, subtle monochromatic palettes, zero loud badges.
- **Editorial Credibility & Hierarchy** (inspired by BBC): High typographic contrast, clean editorial headers, category metadata, timestamped news logs.
- **Controlled Information Density** (inspired by Palantir): Structured meta boxes, precise technical tags, machine-readable schemas.
- **"Prove, Don't Claim"**: Reliance on concrete project evidence, technical documentation, architectural flow diagrams, and downloadables rather than self-congratulatory adjectives.

---

## 4. Primary Site Sections & Page Architecture

1. **Homepage (`/index.html`)**: Magazine-cover entry point introducing Alwin Madhu, featured project nodes (LIORA, SCREAM, Genome Sentinel, ROS-Cycle, Megamind), latest journal updates, profile summary, and ⌘K quick search.
2. **Work / Projects (`/projects/projects-overview.html`)**: Complete editorial listing of software and research projects.
3. **Project Case Studies**:
   - `projects/project-liora.html`: Privacy-first menstrual wellness app & Hathaway Algorithm.
   - `projects/project-scream.html`: Offline peer-to-peer mesh network social platform.
   - `projects/project-genome-sentinel.html`: AI computational drug discovery & AutoDock Vina integration.
   - `projects/project-megamind.html`: Local offline AI desktop assistant.
   - `projects/project-roscycle.html`: ROS 2 robotics hardware control system.
4. **Writing / Articles (`/writing/writing.html`)**: Deep-dive technical articles on privacy engineering, P2P mesh networking, and offline AI.
5. **Journal / News (`/news/news.html`)**: Timestamped development updates and milestone announcements.
6. **About Profile (`/about/about-alwin-madhu.html`)**: Extended profile detailing education, philosophy, technical competencies, and contact nodes.
7. **Experiments (`/experiments/experiments.html`)**: Sandbox for unfinished technical prototypes (BLE microblogging, vision-based window management).
8. **Timeline (`/timeline/timeline.html`)**: Interactive chronological progression of project developments.
9. **Research (`/research/research-overview.html`)**: Summary of academic publications, haptics papers (*Digitizing Touch*), and algorithms.
10. **Work Experience (`/work/work-experience.html`)**: Experience breakdown and research roles.
11. **Contact (`/contact/contact.html`)**: Communication channels and identity references.

---

## 5. Technology Stack & Constraints

- **Core**: Vanilla HTML5, Vanilla CSS3 (custom properties in `assets/css/quiet.css`), Vanilla JavaScript (ES6+ in `assets/js/scripts.js` and `assets/js/search.js`).
- **Framework Dependencies**: **None**. Zero external JS frameworks (no React, Next.js, Vue, jQuery, or Tailwind).
- **Typography**: Google Fonts via CDN (`Instrument Serif`, `Inter`, `DM Mono`).
- **Hosting / Deployment**: GitHub Pages static web hosting deployed directly from the `main` branch root via `.github/workflows/static.yml`.
- **Search System**: Client-side modal search (`⌘K`) powered by `assets/js/search.js`.

---

## 6. Documentation Navigation Layer

All maintainers and AI coding agents must use the following documentation suite located in `documentation/`:

| Document | Purpose |
| :--- | :--- |
| **`PROJECT.md`** | Master project context, identity definitions, and design philosophy (This file). |
| **`AI-AGENTS.md`** | Mandatory operating instructions, safety constraints, and workflows for AI agents. |
| **`ARCHITECTURE.md`** | System architecture, static serving model, script/style loading order, and directory layout. |
| **`DESIGN-SYSTEM.md`** | CSS token specifications, font pairings, color palettes, spacing grid, and breakpoints. |
| **`UI-COMPONENTS.md`** | Component catalog (`header`, `footer`, `ed-item`, `news-item`, `search-overlay`, `case-meta`). |
| **`CONTENT-MODEL.md`** | Data entity schemas (Person, Project, News, Article, Experiment) and source fields. |
| **`PROJECTS.md`** | Complete project registry (LIORA, SCREAM, Genome Sentinel, Megamind, ROS-Cycle). |
| **`ASSETS.md`** | Inventory of image, PDF, script, and documentation assets across the codebase. |
| **`SEO.md`** | Metadata architecture, OpenGraph, sitemap, canonical links, and JSON-LD schemas. |
| **`AI-DISCOVERABILITY.md`** | Machine readability, LLM indexing strategy, entity disambiguation, and `llms.txt`. |
| **`DEPLOYMENT.md`** | GitHub Pages deployment workflow, static hosting rules, and CI/CD checks. |
| **`FILE-MAP.md`** | File-by-file purpose, dependencies, safe edit targets, and forbidden modifications. |
| **`CHANGELOG.md`** | Record of major architectural, structural, and documentation updates. |
| **`project-map.json`** | Machine-readable index for instant targeted retrieval by AI tools. |

---

## 7. Master Operating Guidelines for Maintainers & AI

1. **Strict Non-Destructive Editing**: Never perform unrequested redesigns, UI modernizations, or file reorganizations.
2. **Unique HTML Naming Policy**: Every HTML file must have a globally unique filename (e.g., `projects/project-liora.html`). Only the root homepage may use `index.html`.
3. **Targeted Scoping**: Always inspect `FILE-MAP.md` before editing to minimize file touches and token usage.
4. **Preserve Identity Connections**: Structured JSON-LD schemas (`#person`, `#software`, `#breadcrumb`), canonical links, and social URLs must remain intact during all content edits.
