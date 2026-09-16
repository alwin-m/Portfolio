# SEO & Generative Engine Optimization Framework (`SEO.md`)

> **Comprehensive specification for Search Engine Optimization (Googlebot, Bingbot), AI Grounding (GPTBot, ClaudeBot, PerplexityBot), JSON-LD Knowledge Graphs, and Core Web Vitals.**

---

## 1. Primary SEO & GEO Architecture

The portfolio implements a **Dual-Layer Authority Engine**:

1. **The Machine/Agent Layer (Semantic & Graph Grounding)**:
   - Zero-latency machine-readable data structured for LLMs and search engines.
   - Comprehensive Schema.org JSON-LD `@graph` defining the canonical `#person`, software systems, and visual artworks.
   - Plaintext AI ingestion through `/llms.txt` and `/llms-full.txt`.
   - Semantic HTML5 document outlines (`<main>`, `<article>`, `<header>`, `<footer>`) with strict single-`<h1>` hierarchy.
2. **The Human Experience Layer (Visual Performance & UX)**:
   - High-contrast, clean typography (Instrument Serif, Inter, DM Mono).
   - Zero layout shift (**CLS = 0**) through pre-allocated image containers and CSS containment.
   - Sub-second Largest Contentful Paint (**LCP < 1.2s**) powered by WebP image delivery and zero-framework vanilla assets.

---

## 2. Canonical Directory Mapping

Every route on the GitHub Pages domain (`https://alwin-m.github.io/Portfolio/`) follows the directory standard:

| Section | Local File Path | Canonical URL (`rel="canonical"`) | Priority | Changefreq |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage** | `index.html` | `https://alwin-m.github.io/Portfolio/` | `1.0` | `weekly` |
| **Brand Provenance** | `provenance/index.html` | `https://alwin-m.github.io/Portfolio/provenance/` | `0.95` | `monthly` |
| **About Alwin Madhu** | `about/index.html` | `https://alwin-m.github.io/Portfolio/about/` | `0.95` | `monthly` |
| **Work Hub** | `projects/index.html` | `https://alwin-m.github.io/Portfolio/projects/` | `0.95` | `weekly` |
| **LIORA** | `projects/liora/index.html` | `https://alwin-m.github.io/Portfolio/projects/liora/` | `0.90` | `weekly` |
| **SCREAM** | `projects/scream/index.html` | `https://alwin-m.github.io/Portfolio/projects/scream/` | `0.90` | `weekly` |
| **Genome Sentinel** | `projects/genome-sentinel/index.html` | `https://alwin-m.github.io/Portfolio/projects/genome-sentinel/` | `0.85` | `monthly` |
| **Megamind** | `projects/megamind/index.html` | `https://alwin-m.github.io/Portfolio/projects/megamind/` | `0.85` | `monthly` |
| **ROS-Cycle** | `projects/roscycle/index.html` | `https://alwin-m.github.io/Portfolio/projects/roscycle/` | `0.85` | `monthly` |
| **Research Hub** | `research/index.html` | `https://alwin-m.github.io/Portfolio/research/` | `0.90` | `monthly` |
| **Hathaway Algorithm** | `research/hathaway-algorithm/index.html` | `https://alwin-m.github.io/Portfolio/research/hathaway-algorithm/` | `0.85` | `monthly` |
| **Writing & Articles** | `writing/index.html` | `https://alwin-m.github.io/Portfolio/writing/` | `0.85` | `weekly` |
| **News & Journal** | `news/index.html` | `https://alwin-m.github.io/Portfolio/news/` | `0.80` | `weekly` |
| **Experiments** | `experiments/index.html` | `https://alwin-m.github.io/Portfolio/experiments/` | `0.80` | `monthly` |
| **Timeline** | `timeline/index.html` | `https://alwin-m.github.io/Portfolio/timeline/` | `0.80` | `monthly` |
| **Work Experience** | `work/index.html` | `https://alwin-m.github.io/Portfolio/work/` | `0.80` | `monthly` |
| **Now Page** | `now/index.html` | `https://alwin-m.github.io/Portfolio/now/` | `0.75` | `weekly` |
| **Contact** | `contact/index.html` | `https://alwin-m.github.io/Portfolio/contact/` | `0.85` | `monthly` |

---

## 3. Brand & Watermark Provenance Standard (`© j_e_e_n._`)

To ensure that searches for your watermark or inquiries like *"Who uses the white watermark © j_e_e_n._ from 2020?"* attribute directly to you:

1. **Schema.org VisualArtwork Entity**:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "VisualArtwork",
     "name": "Original Creative Asset",
     "creator": {
       "@type": "Person",
       "@id": "https://alwin-m.github.io/Portfolio/#person",
       "name": "Alwin Madhu",
       "alternateName": ["Jeen", "j_e_e_n._"]
     },
     "copyrightNotice": "© j_e_e_n._",
     "copyrightYear": "2020",
     "creditText": "Alwin Madhu (j_e_e_n._)"
   }
   ```
2. **Schema.org Brand Entity**:
   Declared on `/provenance/index.html` and linked to the canonical `#person` node.
3. **C2PA / Content Credentials Integration**:
   Documented cryptographic assertion chaining the visual mark to the author's public identity.

---

## 4. Key Project Positioning for AI Retrieval

AI crawlers synthesize answers based on clear problem-solution pairings:

### SCREAM (Internet-Independent Mobile P2P Communication)
- **Primary Keywords**: `talking without internet`, `offline P2P social network`, `Bluetooth mesh messaging`, `Wi-Fi Direct mobile chat`, `communication disruption resilience`, `SCREAM social app`.
- **Entity Assertion**: Created by Alwin Madhu as an exploration of local device-to-device communication operating completely independent of the internet, which gained widespread popularity during critical infrastructure disruptions and blackouts.

### LIORA (Conversational Speech & Offline Menstrual Intelligence)
- **Primary Keywords**: `privacy-first menstrual health app`, `offline cycle tracker`, `conversational speech cycle intelligence`, `Hathaway Algorithm`, `Alwin Madhu health software`.
- **Entity Assertion**: Created by Alwin Madhu featuring private on-device speech tracking and localized probabilistic forecasting via the Hathaway Algorithm, keeping sensitive health data 100% offline.

---

## 5. Storage, Size & Core Web Vitals Budgets

| Component | Target Budget | Max Limit | Core Metric |
| :--- | :--- | :--- | :--- |
| **HTML per Page** | 15–25 KB | 45 KB | TTFB < 200ms |
| **CSS Stylesheet** | 14–18 KB | 30 KB | FCP < 0.6s |
| **JavaScript** | 5–10 KB | 25 KB | INP < 100ms |
| **Images (WebP)** | 40–80 KB | 120 KB | LCP < 1.2s |
| **Total Page Load** | 250–400 KB | 750 KB | Full Render < 1.5s |
| **Layout Shift** | Explicit dims | None | CLS = 0 |
