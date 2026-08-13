# Documentation & Architectural Changelog (`CHANGELOG.md`)

> **Record of major system updates, file refactoring, design system integrations, and documentation milestones.**

---

## [Unreleased / Current] — 2026-08-14

### Architectural & File Naming Refactoring (Rule 9 Enforcement)
- **Refactored Sub-Directory Filenames**: Eliminated all duplicate `index.html` files across subdirectories to adhere strictly to Rule 9 (Unique HTML Filename Policy). Only the workspace root retains `index.html`.
  - `about/index.html` → `about/about-alwin-madhu.html`
  - `projects/index.html` → `projects/projects-overview.html`
  - `projects/liora/index.html` → `projects/project-liora.html`
  - `projects/scream/index.html` → `projects/project-scream.html`
  - `projects/genome-sentinel/index.html` → `projects/project-genome-sentinel.html`
  - `projects/megamind/index.html` → `projects/project-megamind.html`
  - `projects/roscycle/index.html` → `projects/project-roscycle.html`
  - `work/index.html` → `work/work-experience.html`
  - `writing/index.html` → `writing/writing.html`
  - `research/index.html` → `research/research-overview.html`
  - `timeline/index.html` → `timeline/timeline.html`
  - `now/index.html` → `now/now.html`
  - `contact/index.html` → `contact/contact.html`
- **Removed Empty Folders**: Cleaned up empty subdirectories (`projects/liora/`, `projects/scream/`, etc.) placing uniquely named case studies directly under `projects/`.

### Design System Integration ("Quiet Intelligence")
- **Created Design System**: Designed `assets/css/quiet.css` implementing editorial typography (`Instrument Serif`, `Inter`, `DM Mono`), monochromatic warm palettes (`#F8F8F6`), and responsive container bounds.
- **Redesigned Homepage**: Rewrote root `index.html` as a magazine-cover editorial entry point.
- **Redesigned Editorial Case Studies**: Refactored project pages (`project-liora.html`, `project-scream.html`, `project-genome-sentinel.html`, `project-megamind.html`, `project-roscycle.html`) to follow the 6-part case study layout (The Idea, The Problem, The Approach, System Architecture, Field Testing, Links).
- **Added ⌘K Search**: Integrated client-side modal search across all pages.

### Complete AI Context & Documentation System
- **Created Documentation Suite (`documentation/`)**: Built 14 dedicated documentation files (`PROJECT.md`, `AI-AGENTS.md`, `ARCHITECTURE.md`, `DESIGN-SYSTEM.md`, `UI-COMPONENTS.md`, `CONTENT-MODEL.md`, `PROJECTS.md`, `ASSETS.md`, `SEO.md`, `AI-DISCOVERABILITY.md`, `DEPLOYMENT.md`, `FILE-MAP.md`, `CHANGELOG.md`, `project-map.json`).
- **Added Machine-Readable Map**: Created `documentation/project-map.json` for fast targeted LLM context retrieval.
