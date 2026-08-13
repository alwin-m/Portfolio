# Quiet Intelligence Design System (`DESIGN-SYSTEM.md`)

> **Official Design Token Architecture, Typographic Scale, & Visual Guidelines**

---

## 1. Overview & Aesthetic Principles

The Quiet Intelligence design system (`assets/css/quiet.css`) governs the visual identity of Alwin Madhu's digital identity platform. It is characterized by:
- **Restrained Monochromatic Palette**: High-contrast dark typography on off-white surfaces (`#F8F8F6`).
- **Dual Typographic Contrast**: Expressive, elegant serif headings (`Instrument Serif`) combined with ultra-clean, high-legibility body copy (`Inter`).
- **Precision Technical Accents**: Monospaced tags (`DM Mono`) for metadata, timestamps, and architectural tags.
- **Generous Whitespace**: High vertical rhythm allowing content to breathe.

---

## 2. Design Tokens (`assets/css/quiet.css`)

### A. Color Palette Tokens
| Token | Hex Value | Purpose / Usage |
| :--- | :--- | :--- |
| `--bg` | `#F8F8F6` | Primary background color (Off-white / Warm Gray) |
| `--surface` | `#F0EFED` | Card backgrounds, hover states, quote boxes |
| `--border` | `#E4E3E0` | Subtle divider lines, card borders, nav border |
| `--text` | `#1A1A19` | Primary body and heading text (Near black) |
| `--text-2` | `#6B6B66` | Secondary body text, sub-headings, meta captions |
| `--text-3` | `#9C9C96` | Tertiary text, timestamps, copyright metadata |
| `--accent` | `#4A90D9` | Accent highlight color (Sky blue) |
| `--accent-h` | `#3A7BC8` | Hover accent color |
| `--dark` | `#1A1A19` | Dark mode / inverted surface background |
| `--dark-2` | `#2A2A28` | Secondary dark surface |
| `--white` | `#FAFAF8` | Pure white element fills |

### B. Typography Tokens
| Token | Font Family | Fallbacks | Usage |
| :--- | :--- | :--- | :--- |
| `--serif` | `'Instrument Serif'` | Georgia, 'Times New Roman', serif | Display titles (`.t-display`), hero headers |
| `--sans` | `'Inter'` | system-ui, -apple-system, sans-serif | Section headers, body text, navigation |
| `--mono` | `'DM Mono'` | 'SF Mono', 'Fira Code', monospace | Code tags, dates, timestamps, technical meta |

### C. Typographic Scale Classes
- `.t-display`: `clamp(48px, 8vw, 96px)`, font-family: `--serif`, weight: `400`, line-height: `1.0`.
- `.t-h1`: `clamp(36px, 5vw, 64px)`, font-family: `--sans`, weight: `200`, line-height: `1.08`.
- `.t-h2`: `clamp(28px, 3.5vw, 44px)`, font-family: `--sans`, weight: `300`, line-height: `1.15`.
- `.t-h3`: `clamp(20px, 2.5vw, 28px)`, font-family: `--sans`, weight: `400`, line-height: `1.25`.
- `.t-body-lg`: `clamp(18px, 2vw, 22px)`, font-family: `--sans`, weight: `300`, line-height: `1.6`.
- `.t-body`: `16px`, font-family: `--sans`, weight: `400`, line-height: `1.65`.
- `.t-mono`: `13px`, font-family: `--mono`, weight: `400`, letter-spacing: `0.02em`.

### D. Spacing Scale Tokens
- `--space-xs`: `8px`
- `--space-sm`: `16px`
- `--space-md`: `24px`
- `--space-lg`: `40px`
- `--space-xl`: `64px`
- `--space-2xl`: `96px`
- `--space-3xl`: `140px`

### E. Layout Tokens & Container Bounds
- `--max-w`: `1120px` (Max container width for standard pages).
- `--gutter`: `clamp(20px, 5vw, 60px)` (Horizontal fluid padding).
- `.container`: `max-width: var(--max-w); margin: 0 auto; padding: 0 var(--gutter);`

### F. Animation & Motion Tokens
- `--ease`: `cubic-bezier(0.16, 1, 0.3, 1)` (Custom ease-out curve).
- `--dur-fast`: `200ms`
- `--dur-med`: `400ms`
- `--dur-slow`: `600ms`
- Scroll Reveal Class (`.reveal`): Transitions opacity from `0` to `1` and `translateY(24px)` to `translateY(0)` when `.in` class is appended by `IntersectionObserver`.

---

## 3. Responsive Breakpoints

| Breakpoint | Target Device | CSS Media Query | Layout Adjustments |
| :--- | :--- | :--- | :--- |
| **Desktop** | Large Displays | `@media (min-width: 1024px)` | Full multi-column grid, inline nav. |
| **Tablet** | iPad / Tablets | `@media (max-width: 1023px)` | Reduced padding, stacked sidebars. |
| **Mobile** | Smartphones | `@media (max-width: 767px)` | Header converts to hamburger menu (`#qiHam`), single-column grid. |

---

## 4. Accessibility & Reduced Motion

- **`prefers-reduced-motion` Support**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    .reveal { opacity: 1 !important; transform: none !important; }
  }
  ```
- **Focus States**: `:focus-visible` triggers a distinct `--accent` outline for keyboard navigation.
- **High Contrast**: Complies with WCAG AAA contrast ratios (> 12:1 text contrast).
