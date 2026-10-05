# Web Quality & SEO Rapid Checklist

| Phase | Item | Requirement | Status |
|---|---|---|---|
| **Phase 1** | `robots.txt` | Present, allows public routes, links sitemap | [ ] |
| | `sitemap.xml` | Generated with `<lastmod>` timestamps | [ ] |
| | Canonical tag | Absolute URL present in `<head>` | [ ] |
| | `llms.txt` | Context Markdown available at root | [ ] |
| | `<html lang>` | Document language explicitly defined | [ ] |
| **Phase 2** | `<title>` | Unique pattern: `[Page] \| [Brand]` | [ ] |
| | Heading `<h1>` | Strictly one single `<h1>` tag per page | [ ] |
| | OpenGraph | Full tags + `1200x630` preview image | [ ] |
| | Favicons | SVG + legacy .ico + Apple touch icon | [ ] |
| | Images `alt` | Contextual text or explicit `alt=""` | [ ] |
| | JSON-LD | Valid Schema.org structured data | [ ] |
| **Phase 3** | Source Maps | Disabled in production builds | [ ] |
| | Bundling | Code splitting & dynamic imports active | [ ] |
| | Image Formats | WebP / AVIF with fixed `width`/`height` | [ ] |
| | Lazy Loading | Media below fold uses `loading="lazy"` | [ ] |
| | View Source | No leaked environment variables or tokens | [ ] |
| **Phase 4** | Breakpoints | Mobile-first, zero horizontal scroll | [ ] |
| | Form States | Explicit visual and ARIA error states | [ ] |
| | Thank You Page | Conversion actions route to confirmation | [ ] |
| | Feedback | Feedback trigger accessible to users | [ ] |
| **Phase 5** | 404 Page | Custom branded page with navigation | [ ] |
| | Legal Pages | Terms and Privacy policies linked in footer | [ ] |
| | Analytics | Asynchronous/deferred, consent-compliant | [ ] |
