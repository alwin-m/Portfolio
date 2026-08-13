# SEO Architecture & Metadata Framework (`SEO.md`)

> **Comprehensive guide to page titles, canonical URLs, XML sitemaps, robots.txt, and JSON-LD schemas.**

---

## 1. Primary SEO Principles

The portfolio implements strict SEO best practices to ensure high ranking for searches regarding **Alwin Madhu**, **LIORA**, **SCREAM**, **Hathaway Algorithm**, and related research:
- **Unique Page Title Tags**: Every HTML page possesses a distinct `<title>` tag combining the page concept with `Alwin Madhu`.
- **Compelling Meta Descriptions**: Every page defines a specific `<meta name="description">` summarized for search engine snippet generation.
- **Canonical URLs**: Every page includes a `<link rel="canonical">` tag pointing to its official, non-query URL on `https://alwin-m.github.io/Portfolio/`.
- **Single `<h1>` Tag**: Strict HTML5 semantic hierarchy enforcing exactly one `<h1>` per page.
- **Structured Data Integration**: Rich `JSON-LD` schemas on all pages.

---

## 2. Page Metadata & Title Mapping

| Page File | Page Title (`<title>`) | Canonical URL (`rel="canonical"`) |
| :--- | :--- | :--- |
| `index.html` | Alwin Madhu — Personal Digital Identity & Portfolio | `https://alwin-m.github.io/Portfolio/` |
| `projects/projects-overview.html` | Work & Projects \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/projects/projects-overview.html` |
| `projects/project-liora.html` | LIORA — Privacy-First Wellness Platform \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/projects/project-liora.html` |
| `projects/project-scream.html` | SCREAM — Peer-to-Peer Social Platform \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/projects/project-scream.html` |
| `projects/project-genome-sentinel.html` | Genome Sentinel — AI Computational Drug Discovery \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/projects/project-genome-sentinel.html` |
| `projects/project-megamind.html` | Megamind — Offline Personal AI Assistant \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/projects/project-megamind.html` |
| `projects/project-roscycle.html` | ROS-Cycle — Robotics & Automation Systems \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/projects/project-roscycle.html` |
| `writing/writing.html` | Writing & Technical Articles \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/writing/writing.html` |
| `news/news.html` | News & Updates \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/news/news.html` |
| `about/about-alwin-madhu.html` | About Alwin Madhu — Software Developer & Researcher | `https://alwin-m.github.io/Portfolio/about/about-alwin-madhu.html` |
| `experiments/experiments.html` | Experiments \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/experiments/experiments.html` |
| `timeline/timeline.html` | Timeline \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/timeline/timeline.html` |
| `research/research-overview.html` | Research & Publications \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/research/research-overview.html` |
| `work/work-experience.html` | Work Experience \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/work/work-experience.html` |
| `contact/contact.html` | Contact \| Alwin Madhu | `https://alwin-m.github.io/Portfolio/contact/contact.html` |

---

## 3. XML Sitemap & Crawler Directives

### A. Sitemap File (`sitemap.xml`)
Located at the root of the workspace. Lists all canonical HTML pages with `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://alwin-m.github.io/Portfolio/</loc>
    <lastmod>2026-08-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://alwin-m.github.io/Portfolio/projects/projects-overview.html</loc>
    <lastmod>2026-08-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://alwin-m.github.io/Portfolio/projects/project-liora.html</loc>
    <lastmod>2026-08-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <!-- additional unique pages -->
</urlset>
```

### B. Robots File (`robots.txt`)
Directs web crawlers and specifies sitemap location:
```text
User-agent: *
Allow: /

Sitemap: https://alwin-m.github.io/Portfolio/sitemap.xml
```

---

## 4. Structured Data Schema Reference (`JSON-LD`)

### A. Person Schema (`#person`)
Embedded on Homepage (`index.html`) and About Page (`about-alwin-madhu.html`):
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://alwin-m.github.io/Portfolio/#person",
  "name": "Alwin Madhu",
  "alternateName": ["Jeen", "j_e_e_n._", "alwin-m"],
  "description": "Software developer, AI researcher, and creator of LIORA, SCREAM, and Genome Sentinel.",
  "url": "https://alwin-m.github.io/Portfolio/",
  "sameAs": [
    "https://github.com/alwin-m",
    "https://www.linkedin.com/in/alwinmadhu7/",
    "https://orcid.org/0009-0008-2826-5082"
  ]
}
```

### B. Software Application Schema (`#software`)
Embedded on Project pages (`project-liora.html`, `project-scream.html`):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://alwin-m.github.io/Portfolio/projects/project-liora.html#software",
  "name": "LIORA",
  "operatingSystem": "Android",
  "applicationCategory": "HealthApplication",
  "description": "Privacy-first menstrual wellness application operating offline with zero cloud tracking.",
  "url": "https://alwin-m.github.io/Portfolio/projects/project-liora.html",
  "creator": {
    "@type": "Person",
    "@id": "https://alwin-m.github.io/Portfolio/#person",
    "name": "Alwin Madhu"
  }
}
```
