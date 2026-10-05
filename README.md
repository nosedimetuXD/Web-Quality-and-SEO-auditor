# Web Quality, Performance & Technical SEO Auditor Agent Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Format: Agent Skill Specification](https://img.shields.io/badge/Format-Agent%20Skill-brightgreen.svg)](SKILL.md)

An open-source, universal AI agent skill for automated web quality evaluation, technical SEO audits, Core Web Vitals optimization, accessibility (WCAG), production security checks, and modern machine discovery (`robots.txt`, `sitemap.xml`, `llms.txt`).

---

## 🚀 Overview

This skill equips any AI coding agent with a rigorous 5-phase auditing and remediation protocol. It enforces strict web development best practices before shipping code to production.

### Core Directives at a Glance
- **Phase 1: Crawler Directives & Machine Discovery**: `robots.txt`, XML sitemap, canonical links, AI `llms.txt`, HTML `lang`.
- **Phase 2: Metadata, Semantics, A11y & Structured Data**: Unique `<title>`, strict single `<h1>`, OpenGraph/Twitter cards, multi-format favicons, `alt` attributes, Schema.org JSON-LD.
- **Phase 3: Performance, Bundling & Security**: Production source map stripping, code splitting, WebP/AVIF images, layout shift prevention, lazy loading, secret leakage prevention.
- **Phase 4: UX, Form Handling & Responsive Design**: Mobile-first breakpoints, accessible form validation states, conversion confirmation pages, feedback channels.
- **Phase 5: System Pages & Observability**: Branded 404 pages, legal pages (Terms/Privacy), non-blocking telemetry.

---

## 📦 Compatibility & Installation

This skill follows the standard **Agent Skill Specification** (`SKILL.md`) and works out of the box across multiple AI coding assistants:

### 1. Antigravity / Gemini CLI
Copy the skill folder to your personal config:
```bash
cp -r "web-quality-and-seo-auditor" ~/.gemini/config/skills/
```

### 2. Claude Code
Copy into your local Claude skills directory:
```bash
cp -r "web-quality-and-seo-auditor" ~/.claude/skills/
```

### 3. Cursor / Windsurf / Copilot Workspace
- Copy the content of `SKILL.md` into your workspace rules file:
  - Cursor: `.cursorrules` or `.cursor/rules/web-quality.mdc`
  - Windsurf: `.windsurfrules`
  - GitHub Copilot: `.github/copilot-instructions.md`

### 4. Custom Agents (LangChain, CrewAI, AutoGen, Custom Prompts)
Load `SKILL.md` directly into the agent's system prompt or toolset definition.

---

## 📂 Repository Structure

```text
Web Quality and SEO auditor/
├── SKILL.md                 # Universal Agent Skill definition (Instructions + YAML frontmatter)
├── README.md                # Project documentation and usage guide
├── LICENSE                  # MIT License
├── templates/               # Standard boilerplate configuration files
│   ├── robots.txt           # Standard production robots.txt
│   ├── llms.txt             # LLM discovery context template
│   └── jsonld-website.json  # Basic Schema.org JSON-LD snippet
└── scripts/
    └── audit-checklist.md   # Quick human/agent verification checklist
```

---

## 🛠️ Output Protocol

When prompted to audit or remediate a website, the agent responds in 3 structured sections:
1. **Compliance Check Summary**: A status table evaluating each phase (**[PASS]**, **[WARN]**, **[FAIL]**).
2. **Remediation Plan**: Categorized issues prioritized from **P0** (critical) to **P2** (minor).
3. **Direct Implementation**: Production-ready code changes or config artifacts.

---

## 📄 License

Released under the [MIT License](LICENSE).
