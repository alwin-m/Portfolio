# UI Component Map (`UI-COMPONENTS.md`)

> **Comprehensive catalog of shared and localized UI components across the portfolio codebase.**

---

## 1. Component Taxonomy & Usage Matrix

| Component | Scope | Primary HTML Target | CSS Classes | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Global Header** | **SHARED** | All HTML files | `.qi-header`, `.qi-header-inner`, `.qi-brand`, `.qi-nav` | Sticky top navigation bar with brand link, nav links, ⌘K button, and GitHub link. |
| **Mobile Drawer Nav** | **SHARED** | All HTML files | `.qi-mnav`, `.qi-ham` | Slide-down mobile navigation menu toggled via hamburger button. |
| **Global Footer** | **SHARED** | All HTML files | `.qi-footer`, `.qi-footer-inner`, `.qi-footer-name`, `.qi-footer-links` | Identity footer containing copyright, social entity links, and project listing. |
| **⌘K Search Overlay** | **SHARED** | All HTML files | `.search-overlay`, `.search-box`, `.search-input`, `.search-results` | Fuzzy search modal overlay triggered by `Cmd+K` keyboard shortcut or header button. |
| **Editorial Item (`ed-item`)**| Localized | `index.html`, `projects-overview.html` | `.ed-list`, `.ed-item`, `.ed-num`, `.ed-title`, `.ed-meta`, `.ed-tech` | Editorial project row showcasing project number, title, description, and technologies. |
| **News Row (`news-item`)** | Localized | `index.html`, `news.html`, `writing.html` | `.news-list`, `.news-item`, `.news-date`, `.news-tag`, `.news-headline` | Article/update listing row displaying timestamp tag, headline, and excerpt. |
| **Case Meta Box** | Localized | All project case studies | `.case-meta`, `.case-meta-item`, `.case-meta-label`, `.case-meta-val` | 4-column structured metadata grid (Role, Year, Status, Technologies). |
| **Case Study Section** | Localized | All project case studies | `.case-section`, `.case-section-title` | Editorial prose block for project narratives (The Idea, The Problem, Architecture). |

---

## 2. Detailed Component Specifications

### 1. Global Header (`.qi-header`)
- **Status**: **SHARED COMPONENT across ALL 15 HTML files**.
- **Implementation**: HTML markup inside `<header class="qi-header">`.
- **CSS File**: `assets/css/quiet.css` (lines 140–220).
- **Sub-elements**:
  - Brand Link (`.qi-brand`): Navigates to `/index.html`.
  - Navigation Menu (`.qi-nav`): Links to Work, Writing, News, About.
  - Search Trigger Button (`#searchTrigger`): Class `.search-trigger`. Triggers `openSearch()` in `assets/js/search.js`.
  - External Link (`.ext`): Opens Alwin Madhu's GitHub profile (`https://github.com/alwin-m`).
  - Mobile Hamburger Button (`#qiHam`): Toggles `.qi-mnav`.

> [!CAUTION]
> **Modifying the Global Header**: If adding or changing a navigation item in `.qi-header`, **you MUST update all 15 HTML files** across the repository to prevent navigation drift.

---

### 2. Mobile Drawer Navigation (`.qi-mnav`)
- **Status**: **SHARED COMPONENT across ALL 15 HTML files**.
- **HTML Element**: `<div class="qi-mnav" id="qiMnav" aria-hidden="true">`.
- **Behavior**: Toggled via JavaScript click listener on `#qiHam`. Expands downwards using CSS max-height transition.

---

### 3. Global Footer (`.qi-footer`)
- **Status**: **SHARED COMPONENT across ALL 15 HTML files**.
- **HTML Element**: `<footer class="qi-footer">`.
- **CSS File**: `assets/css/quiet.css` (lines 500–560).
- **Contains**:
  - Name: `Alwin Madhu`
  - Role: `Software Developer · Builder · Researcher`
  - Projects: `LIORA · SCREAM · Genome Sentinel · Megamind · ROSCYCLE`
  - Entity Links: Work, Writing, News, About, GitHub, LinkedIn, ORCID (`https://orcid.org/0009-0008-2826-5082`).
  - Copyright Watermark: `© 2026 Alwin Madhu · © j_e_e_n._`

---

### 4. ⌘K Search Overlay (`.search-overlay`)
- **Status**: **SHARED COMPONENT across ALL 15 HTML files**.
- **Implementation**: Modal overlay markup at bottom of body + `assets/js/search.js`.
- **Key Binding**: `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) or `Escape` to close.
- **Search Data Source**: Array embedded in `assets/js/search.js` containing categories: `Projects`, `Writing`, `Research`, `Pages`, `Technologies`.

---

### 5. Editorial Project Item (`.ed-item`)
- **Status**: Localized Component.
- **Used In**: `index.html`, `projects/projects-overview.html`.
- **Markup Structure**:
  ```html
  <a href="projects/project-liora.html" class="ed-item">
    <span class="ed-num">01</span>
    <div>
      <h3 class="ed-title">LIORA</h3>
      <p class="ed-meta">Privacy-first menstrual wellness platform.</p>
      <span class="ed-tech">Flutter · Firebase · Hathaway Algorithm</span>
    </div>
    <span class="ed-arrow">→</span>
  </a>
  ```

---

### 6. Case Study Meta Box (`.case-meta`)
- **Status**: Localized Component.
- **Used In**: `projects/project-liora.html`, `projects/project-scream.html`, `projects/project-genome-sentinel.html`, `projects/project-megamind.html`, `projects/project-roscycle.html`.
- **Markup Structure**:
  ```html
  <div class="case-meta">
    <div class="case-meta-item">
      <div class="case-meta-label">Role</div>
      <div class="case-meta-val">Lead Architect</div>
    </div>
    <!-- Year, Status, Technologies -->
  </div>
  ```
