# Web Quality & SEO Rapid Checklist

| Phase | Item | Requirement | Status |
|---|---|---|---|
| **Phase 1** | `robots.txt` | Present, allows public routes & AI bots (GPTBot, ClaudeBot, PerplexityBot) | [ ] |
| | `sitemap.xml` | Generated with `<lastmod>` timestamps | [ ] |
| | Canonical tag | Absolute URL present in `<head>` | [ ] |
| | `llms.txt` | Context Markdown available at root | [ ] |
| | `<html lang>` | Document language explicitly defined | [ ] |
| **Phase 2** | Custom `<title>` | Per-page unique, 50-60 chars: `[Page] \| [Brand]` | [ ] |
| | Custom Description | Per-page unique `<meta name="description">`, 140-160 chars + CTA | [ ] |
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
| | Oculta claves API | Client bundles stripped of private keys/secrets | [ ] |
| | Elimina secretos Git | Zero credentials or `.env` in Git history | [ ] |
| | Clave pública DB | Client uses scoped anon/public keys only | [ ] |
| | Activa RLS | Row-Level Security enabled on DB tables | [ ] |
| | Cifra datos sensibles | PII & secrets encrypted in transit & at rest | [ ] |
| | Autenticación servidor | Server middleware & handlers enforce auth | [ ] |
| | Acceso a registros | Scoped queries by user_id (prevent IDOR) | [ ] |
| | Manipulación de campos | Mass assignment blocked (protected fields) | [ ] |
| | Cookies de sesión | HttpOnly, Secure, SameSite=Lax/Strict | [ ] |
| | Hashea contraseñas | Salted Argon2id or bcrypt (cost >= 12) | [ ] |
| | Limita intentos inicio | Rate limiting on login / auth endpoints | [ ] |
| | Protección contra bots | Turnstile / CAPTCHA on public submissions | [ ] |
| | Monitoriza consultas DB | Slow queries, N+1 & SQL injection audited | [ ] |
| | Valida entradas | Schema validation (Zod/Joi) on all requests | [ ] |
| | Escapa contenido usuario | Contextual output escaping & XSS prevention | [ ] |
| | Subida de archivos | MIME whitelist, magic bytes, isolated storage | [ ] |
| | Limita respuestas API | Pagination enforced, internal fields stripped | [ ] |
| | Cabeceras de seguridad | CSP, HSTS, X-Frame-Options, nosniff present | [ ] |
| | Fuerza HTTPS | Automatic 301 redirect to HTTPS + HSTS preload | [ ] |
| | Escanea dependencias | CI/CD dependency vulnerability scan active | [ ] |
| **Phase 4** | Breakpoints | Mobile-first, zero horizontal scroll | [ ] |
| | Form States | Explicit visual and ARIA error states | [ ] |
| | Thank You Page | Conversion actions route to confirmation | [ ] |
| | Feedback | Feedback trigger accessible to users | [ ] |
| **Phase 5** | 404 Page | Custom branded page with navigation | [ ] |
| | Privacy Policy | Detailed GDPR/CCPA disclosures linked in footer | [ ] |
| | Cookie Policy & Banner | Prior consent CMP, categories list & revoking link | [ ] |
| | Terms of Service | Scope, usage & liability terms linked in footer | [ ] |
| | Analytics | Asynchronous, deferred & linked to consent state | [ ] |
