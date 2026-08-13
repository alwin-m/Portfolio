# Asset Registry & Media Inventory (`ASSETS.md`)

> **Complete inventory of static media, screenshots, documents, and helper scripts.**

---

## 1. Primary Image & Media Inventory

| Asset Filename | File Type | Size | Primary Usage / Associated Project | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `profile.jpg` | Image (JPG) | ~396 KB | Home (`index.html`), About (`about-alwin-madhu.html`) | Primary headshot / profile image of Alwin Madhu. |
| `liora.jpg` | Image (JPG) | ~140 KB | LIORA (`project-liora.html`), Home | Interface preview screenshot of the LIORA mobile app. |
| `SCREAM.png` | Image (PNG) | ~1.49 MB | SCREAM (`project-scream.html`), Home | P2P architecture & mobile mesh interface diagram. |
| `Megamind.png` | Image (PNG) | ~1.86 MB | Megamind (`project-megamind.html`), Home | Local AI desktop assistant interface screenshot. |
| `ROSCYCLE.png` | Image (PNG) | ~1.68 MB | ROS-Cycle (`project-roscycle.html`), Home | Robotics hardware telemetry visualization. |
| `BlueMind.png` | Image (PNG) | ~1.31 MB | Research (`research-overview.html`), Genome Sentinel | Visual asset for computational biology research. |
| `DigitizingTouch.png` | Image (PNG) | ~1.18 MB | Research (`research-overview.html`) | Graphic summary for *Digitizing Touch* haptics paper. |
| `claude code.jpg` | Image (JPG) | ~310 KB | Development / Research Context | AI pair-programming environment screenshot. |
| `sample_dct.jpg` | Image (JPG) | ~67 KB | Research / Steganography Demos | Sample discrete cosine transform image. |
| `sample_exif.jpg` | Image (JPG) | ~4.2 KB | Research / Metadata Demos | Sample EXIF metadata image. |
| `sample_lsb.png` | Image (PNG) | ~3.5 KB | Research / Steganography Demos | Sample least-significant-bit image. |
| `sample_lsb_cropped.png` | Image (PNG) | ~2.8 KB | Research / Steganography Demos | Cropped LSB image. |
| `sample_test.png` | Image (PNG) | ~3.3 KB | Research / Testing | Test image asset. |

---

## 2. Document & Download Inventory

| Filename | Type | Size | Usage / Location | Description |
| :--- | :--- | :--- | :--- | :--- |
| `DigitizingTouch.pdf` | PDF | ~2.04 MB | Research (`research-overview.html`) | Full academic research paper: *Digitizing Touch: Haptic Feedback In Spatial Computing*. |
| `portfolio_report.pdf` | PDF | ~29.3 KB | Downloads (`downloads.html`) | Project report document. |
| `SCREAM_CANONICAL_DOCUMENTATION.md` | Markdown | ~9.8 KB | Root Repository | Canonical reference document for SCREAM project history and P2P transition. |
| `PROVENANCE_RESEARCH.md` | Markdown | ~4.1 KB | Root Repository | Technical research notes on digital provenance. |
| `GITHUB_ENTITY_GUIDELINES.md` | Markdown | ~3.0 KB | Root Repository | Entity disambiguation guidelines for GitHub profile. |
| `QUICK_START.md` | Markdown | ~11.6 KB | Root Repository | Maintenance guide for portfolio updates. |
| `REDESIGN_SUMMARY.md` | Markdown | ~14.0 KB | Root Repository | Technical summary of design transitions. |
| `Claude.md` | Markdown | ~23.4 KB | Root Repository | System architecture notes. |

---

## 3. Code & Prototype Assets

| Filename | Language | Purpose |
| :--- | :--- | :--- |
| `provenance_prototype.py` | Python | Standalone prototype script demonstrating digital watermarking and provenance research. |
| `assets/js/scripts.js` | JavaScript | Helper script for scroll reveal and mobile navigation. |
| `assets/css/quiet.css` | CSS | Complete Quiet Intelligence design system stylesheet. |

---

## 4. Asset Handling Guidelines for AI Agents

1. **Do NOT delete or overwrite existing images** (`liora.jpg`, `SCREAM.png`, `Megamind.png`, `ROSCYCLE.png`, `profile.jpg`) during routine content updates.
2. **Path References**: Always use relative paths (`../liora.jpg` when inside subdirectories, `liora.jpg` on homepage).
3. **Accessibility**: All `<img>` tags MUST include descriptive `alt` attributes (e.g., `alt="LIORA mobile application interface"`).
4. **Lazy Loading**: Retain `loading="lazy"` on non-hero images to optimize loading speed on mobile connections.
