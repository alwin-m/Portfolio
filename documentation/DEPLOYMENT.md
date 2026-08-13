# Deployment Architecture & GitHub Pages Guide (`DEPLOYMENT.md`)

> **Hosting model, continuous deployment pipeline, static constraints, and pre-push checks.**

---

## 1. Hosting Environment & Deployment Model

- **Hosting Provider**: GitHub Pages (Static Web Hosting).
- **Target Repository**: `alwin-m/Portfolio`
- **Domain Root**: `https://alwin-m.github.io/Portfolio/`
- **Deployment Strategy**: Buildless continuous deployment directly from the root of the `main` branch.
- **CI/CD Automation**: GitHub Actions workflow defined in `.github/workflows/static.yml`.

---

## 2. GitHub Actions Workflow Configuration (`.github/workflows/static.yml`)

The deployment process is completely automated upon pushing commits to `main`:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 3. Static Serving Constraints & Rules

1. **Build Step Absence**: There is no Node.js build step, Webpack bundling, or static site generator (Hugo/Jekyll). Files uploaded to GitHub Pages are served *as-is*.
2. **Path Sensitivity**: Relative paths MUST be used for assets and CSS stylesheets (`assets/css/quiet.css` or `../assets/css/quiet.css`).
3. **MIME Types & Security Headers**:
   - Includes `<meta http-equiv="X-Content-Type-Options" content="nosniff">` in HTML headers.
4. **Custom Domain Notes**: If a custom domain (e.g. `alwinmadhu.com`) is added in the future, a `CNAME` file must be created in the repository root, and canonical tags in `SEO.md` must be updated accordingly.

---

## 4. Pre-Push Verification Checklist for AI Maintainers

Before committing code or pushing to `main`, AI agents must verify:

- [ ] **Single `index.html` Rule**: Confirm that ONLY the root directory contains `index.html`.
- [ ] **Unique HTML Filenames**: Confirm all sub-pages use globally unique names (e.g. `projects/project-liora.html`).
- [ ] **Internal Links Test**: Confirm all `<a href="...">` tags point to valid, existing relative HTML paths.
- [ ] **XML Sitemap Synchronization**: Confirm any new HTML file is listed in `sitemap.xml`.
- [ ] **Asset Paths**: Confirm images use valid relative file paths and exist in the repository.
