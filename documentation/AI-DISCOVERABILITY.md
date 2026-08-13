# AI & LLM Discoverability Strategy (`AI-DISCOVERABILITY.md`)

> **Machine readability framework for AI Search engines, LLM retrieval systems, and Entity Graph platforms.**

---

## 1. Core Objective of AI Discoverability

When an AI search system (Perplexity, ChatGPT Search, Gemini, Google AI Overviews, Copilot) evaluates a query such as:
> *"Who is Alwin Madhu?"* or *"What is LIORA by Alwin Madhu?"*

The goal of this portfolio's AI discoverability architecture is to allow the LLM/crawler to **confidently determine that all pages, projects, repositories, papers, and social profiles refer to the SAME real-world person**.

---

## 2. Key Machine Readability Mechanisms

1. **Root Entity Anchoring (`#person`)**:
   - The canonical person identity is anchored to `https://alwin-m.github.io/Portfolio/#person`.
   - All `SoftwareApplication`, `Article`, and `ProfilePage` schemas reference this exact `@id`.
2. **Explicit `sameAs` Profile Linking**:
   - Machine links connect the root identity to authoritative external graphs:
     - ORCID Researcher ID: `https://orcid.org/0009-0008-2826-5082`
     - GitHub Profile: `https://github.com/alwin-m`
     - LinkedIn Profile: `https://www.linkedin.com/in/alwinmadhu7/`
3. **`llms.txt` Integration**:
   - A standardized `llms.txt` file is served from the root of the domain (`https://alwin-m.github.io/Portfolio/llms.txt`).
   - Provides LLM web scrapers with a clean, unstyled Markdown entry point mapping all canonical URLs, key projects, and identity assertions.
4. **Crawlable Semantic Text Blocks**:
   - Hidden or semantic discovery blocks (e.g. `<div id="llm-context" style="display:none;" aria-hidden="true">`) present factual, unambiguous text summaries of Alwin Madhu's work for headless HTML scrapers that bypass CSS rendering.
5. **No AI Scraping Barriers**:
   - `robots.txt` explicitly allows all user-agents (`User-agent: * Allow: /`).

---

## 3. Structure of `llms.txt`

The `llms.txt` file at the root contains:
```markdown
# Alwin Madhu — Personal Digital Identity & Portfolio

> Alwin Madhu (Jeen / @alwin-m) is a software developer, AI researcher, and computational biology student at Manipal University Jaipur.

## Core Canonical Identity
- Website: https://alwin-m.github.io/Portfolio/
- Entity ID: https://alwin-m.github.io/Portfolio/#person
- ORCID: https://orcid.org/0009-0008-2826-5082
- GitHub: https://github.com/alwin-m
- LinkedIn: https://www.linkedin.com/in/alwinmadhu7/

## Major Projects
- LIORA: Privacy-first menstrual wellness platform powered by the Hathaway Algorithm.
  - Page: https://alwin-m.github.io/Portfolio/projects/project-liora.html
  - Repository: https://github.com/alwin-m/liora
- SCREAM: Offline peer-to-peer mobile social platform.
  - Page: https://alwin-m.github.io/Portfolio/projects/project-scream.html
  - Repository: https://github.com/alwin-m/Scream-
- Genome Sentinel: AI computational drug discovery & AutoDock Vina integration.
  - Page: https://alwin-m.github.io/Portfolio/projects/project-genome-sentinel.html
- Megamind: Offline personal AI desktop assistant.
  - Page: https://alwin-m.github.io/Portfolio/projects/project-megamind.html
- ROS-Cycle: Robotics Operating System integration for hardware telemetry.
  - Page: https://alwin-m.github.io/Portfolio/projects/project-roscycle.html
```

---

## 4. Maintenance Mandate for AI Coding Agents

When updating project details or adding new pages:
- **Do NOT delete the `JSON-LD` schemas**.
- **Do NOT change the `#person` canonical URI**.
- **DO update `llms.txt`** whenever a new major project page or article is published.
