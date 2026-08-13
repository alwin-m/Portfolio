# Master Repository File Map (`FILE-MAP.md`)

> **Comprehensive mapping of every repository file: Purpose, Usage, Dependencies, Safe Edits, and Prohibited Actions.**

---

## 1. Root Directory Files

### `index.html`
- **Purpose**: Primary Magazine-Cover Homepage & Personal Entity Entry Point.
- **Used By**: Root URL (`https://alwin-m.github.io/Portfolio/`).
- **Dependencies**: `assets/css/quiet.css`, `assets/js/search.js`, `profile.jpg`, `liora.jpg`, `SCREAM.png`, `Megamind.png`, `ROSCYCLE.png`.
- **Safe to Edit For**: Updating hero taglines, adding/editing featured projects, updating latest news items, adding LLM context text.
- **Do NOT Edit For**: Local project details (edit `projects/project-[slug].html`), global design tokens (edit `quiet.css`).

### `downloads.html`
- **Purpose**: Public download directory for APKs (`Liora.apk`) and PDF documents (`portfolio_report.pdf`).
- **Dependencies**: `assets/css/quiet.css`.
- **Safe to Edit For**: Adding download links, updating APK version tags.
- **Do NOT Edit For**: Global header navigation logic.

### `sitemap.xml`
- **Purpose**: Search Engine XML Sitemap.
- **Used By**: Googlebot, Bingbot, `robots.txt`.
- **Safe to Edit For**: Adding new page URLs, updating `<lastmod>` timestamps.
- **Do NOT Edit For**: Styling or script logic.

### `robots.txt`
- **Purpose**: Web crawler directives.
- **Safe to Edit For**: Updating sitemap location, adjusting crawler permissions.

### `llms.txt`
- **Purpose**: Markdown context file for LLMs and AI search scrapers.
- **Safe to Edit For**: Adding new project URLs, updating personal bio summary.

---

## 2. Style & Script Assets (`assets/`)

### `assets/css/quiet.css`
- **Purpose**: Unified Quiet Intelligence Design System Stylesheet.
- **Used By**: **ALL 15 HTML Files** in the repository.
- **Dependencies**: Google Fonts (`Instrument Serif`, `Inter`, `DM Mono`).
- **Safe to Edit For**: Adding new reusable utility classes, adjusting dark mode tokens.
- **Do NOT Edit For**: Quick local layout hacks for a single page (write scoped inline styles or localized classes instead).

### `assets/js/scripts.js`
- **Purpose**: Shared scroll reveal and legacy navigation script.
- **Used By**: HTML pages requiring DOM scroll animations.
- **Safe to Edit For**: Adjusting scroll reveal thresholds.

---

## 3. Projects Directory (`projects/`)

### `projects/projects-overview.html`
- **Purpose**: Work & Projects Directory Hub.
- **Safe to Edit For**: Re-ordering project listings, adding new project cards.

### `projects/project-liora.html`
- **Purpose**: LIORA Menstrual Wellness Case Study.
- **Dependencies**: `liora.jpg`, `assets/css/quiet.css`.
- **Safe to Edit For**: Updating LIORA features, Hathaway Algorithm details, download links.
- **Do NOT Edit For**: Unrelated projects (SCREAM, Megamind).

### `projects/project-scream.html`
- **Purpose**: SCREAM Peer-to-Peer Mesh Social Network Case Study.
- **Dependencies**: `SCREAM.png`, `assets/css/quiet.css`.
- **Safe to Edit For**: Updating P2P mesh testing details, APK transition notes.

### `projects/project-genome-sentinel.html`
- **Purpose**: Genome Sentinel Computational Biology Case Study.
- **Safe to Edit For**: Updating AutoDock Vina research notes.

### `projects/project-megamind.html`
- **Purpose**: Megamind Local AI Desktop Assistant Case Study.
- **Safe to Edit For**: Updating local LLM architecture notes.

### `projects/project-roscycle.html`
- **Purpose**: ROS-Cycle Robotics Case Study.
- **Safe to Edit For**: Updating ROS 2 hardware telemetry notes.

---

## 4. Editorial & Profile Subdirectories

### `about/about-alwin-madhu.html`
- **Purpose**: Extended Personal Profile, Biography, and Competency Matrix.
- **Safe to Edit For**: Updating educational status, technical skills, philosophy.

### `writing/writing.html`
- **Purpose**: Technical Publications and Architecture Essays Hub.
- **Safe to Edit For**: Adding new technical essay listings.

### `news/news.html`
- **Purpose**: Timestamped Journal Log & Project Milestones.
- **Safe to Edit For**: Adding new timestamped news log entries.

### `experiments/experiments.html`
- **Purpose**: Sandbox for Unfinished Technical Prototypes.
- **Safe to Edit For**: Adding BLE microblogging or vision AI notes.

### `timeline/timeline.html`
- **Purpose**: Interactive Chronological Project Progression.
- **Safe to Edit For**: Appending new chronological milestones.

### `research/research-overview.html`
- **Purpose**: Academic Papers and Research Publications Overview.
- **Dependencies**: `DigitizingTouch.pdf`, `DigitizingTouch.png`.
- **Safe to Edit For**: Updating publication links and abstracts.

### `work/work-experience.html`
- **Purpose**: Professional & Academic Experience Overview.

### `contact/contact.html`
- **Purpose**: Contact channels, email, and social entity links.
