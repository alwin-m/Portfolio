# Content Model & Entity Schemas (`CONTENT-MODEL.md`)

> **Data structures, entity relationships, and rendering specifications across the portfolio.**

---

## 1. Primary Entity Definitions

The platform models six key conceptual entities:

```text
               ┌───────────────────────┐
               │    Person (Subject)   │
               │      Alwin Madhu      │
               └───────────┬───────────┘
                           │
    ┌──────────────────────┼──────────────────────┬──────────────────────┐
    │                      │                      │                      │
    ▼                      ▼                      ▼                      ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Project    │    │ News / Update│    │Article/Writin│    │  Research /  │
│ (LIORA, etc.)│    │ (Journal Log)│    │(Architecture)│    │ Paper / Algo │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

---

## 2. Entity Specifications & Source Fields

### Entity 1: Person (Identity Subject)
- **Primary Subject**: Alwin Madhu (Jeen / `@alwin-m` / `© j_e_e_n._`).
- **Attributes**:
  - `name`: "Alwin Madhu"
  - `alternateName`: ["Jeen", "j_e_e_n._", "alwin-m"]
  - `description`: "Software developer, AI researcher, and computational biology student at Manipal University Jaipur."
  - `url`: `https://alwin-m.github.io/Portfolio/`
  - `sameAs`:
    - GitHub: `https://github.com/alwin-m`
    - LinkedIn: `https://www.linkedin.com/in/alwinmadhu7/`
    - ORCID: `https://orcid.org/0009-0008-2826-5082`
- **Schema Source**: Implemented as standard `JSON-LD` (`@type: Person`) in `index.html`, `about/about-alwin-madhu.html`, and case studies.

---

### Entity 2: Project (Software System / Platform)
- **Attributes**:
  - `id`: Short slug (`liora`, `scream`, `genome-sentinel`, `megamind`, `roscycle`).
  - `name`: Formal title (e.g. "LIORA").
  - `subtitle`: Brief summary tagline.
  - `category`: Technology domain ("Health Technology", "Decentralized P2P", "Computational Biology", "Personal AI", "Robotics").
  - `role`: Alwin Madhu's contribution ("Lead Architect", "Creator", "Co-Creator").
  - `year`: Development timeline ("2024–Present", "2025–Present", "2026").
  - `status`: Deployment state ("Active Development", "Experimental Phase", "Research Phase").
  - `technologies`: Array of tech stacks ("Flutter", "Firebase", "Wi-Fi Direct", "AutoDock Vina", "ROS 2").
  - `canonicalUrl`: `https://alwin-m.github.io/Portfolio/projects/project-[slug].html`.
  - `repositoryUrl`: External GitHub link (e.g. `https://github.com/alwin-m/liora`).
  - `downloadUrl`: APK or executable link (e.g. `https://alwin-m.github.io/Portfolio/Liora.apk`).
- **Schema Source**: Implemented as `JSON-LD` (`@type: SoftwareApplication`).

---

### Entity 3: News Item (Journal Entry)
- **Attributes**:
  - `date`: Timestamp string (e.g., "14 AUG 2026").
  - `tag`: Category badge ("Product", "Research", "Engineering", "Milestone").
  - `headline`: Article title.
  - `excerpt`: 1–2 sentence summary.
- **Rendering Targets**: `index.html` (Latest 3 items), `news/news.html` (Full timeline).

---

### Entity 4: Article / Writing (Technical Publication)
- **Attributes**:
  - `year`: Publication year.
  - `category`: Domain ("Architecture", "Engineering", "AI").
  - `title`: Essay title (e.g., "Building LIORA: Lessons in Privacy-First Health Engineering").
  - `summary`: Abstract of technical write-up.
- **Rendering Targets**: `writing/writing.html`.

---

### Entity 5: Research Paper / Algorithm
- **Attributes**:
  - `title`: Paper name (e.g., *Digitizing Touch: Haptic Feedback In Spatial Computing*).
  - `author`: "Alwin Madhu".
  - `format`: PDF asset (`DigitizingTouch.pdf`) or web documentation.
  - `algorithm`: Custom algorithmic engines designed by Alwin (e.g., *The Hathaway Algorithm* for cycle prediction).
- **Rendering Targets**: `research/research-overview.html`.

---

### Entity 6: Experiment (Sandbox Prototype)
- **Attributes**:
  - `title`: Prototype name (e.g. "Micro-blogging over Bluetooth Low Energy").
  - `status`: Sandbox tag ("P2P Sandbox", "Local AI Prototype").
  - `description`: Technical hypothesis and experimental execution details.
- **Rendering Targets**: `experiments/experiments.html`.
