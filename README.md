# Osher Elikamel | Portfolio

Personal developer portfolio showcasing my projects, experience, and technical skills. Built as a single-page application with React, TypeScript, and Material UI.

**[Live Site](https://osher-elikamel.onrender.com)**

![Portfolio demo](docs/demo.gif)

## Sections

- **Hero** - Introduction with call-to-action buttons
- **About** - Bio, photo, and quick stats (derived from the data files)
- **Projects** - Featured work with screenshots, descriptions, tech stacks, GitHub and live-demo links
- **Skills & Tech** - Organized by category: Frontend, Backend, Infrastructure & Databases, Tools & AI
- **Experience** - Professional timeline: PayTag, Gilon, Vayyar, and military service
- **Contact** - Email, GitHub, and LinkedIn links
- **Resume** - Downloadable PDF from the navbar

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Material UI 9 | Component library and theming |

## Features

- Dark / light mode toggle with smooth transitions
- Scroll-reveal animations on all sections (respects reduced-motion preferences)
- Responsive layout with mobile navigation drawer
- Bento grid design with project screenshots
- One-click resume download in the navbar
- GitHub and live-demo links on project cards

## Quick Start

```bash
npm install
npm run dev
```

Then visit http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `dist/` - ready to deploy as a static site.

## Project Structure

```
src/
├── components/
│   ├── common/         # BentoCard, BentoGrid, ScrollReveal, SectionTitle, ThemeToggle
│   ├── layout/         # Navbar, Footer
│   └── sections/       # Hero, About, Skills, Projects, Experience, Contact
├── data/               # personal.ts, skills.ts, projects.ts, experience.ts
├── hooks/              # useScrollReveal
├── theme/              # MUI theme (light + dark)
├── assets/             # Profile photo
├── App.tsx
└── main.tsx
```

All content is driven by the data files in `src/data/` - update those to change what appears on the site.
