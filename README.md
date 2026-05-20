# Osher Elikamel | Portfolio

Personal developer portfolio showcasing my projects, experience, and technical skills. Built as a single-page application with React, TypeScript, and Material UI.

[![Portfolio demo](docs/demo.gif)](https://osher-elikamel.onrender.com)

## Sections

- **Hero** - Introduction with call-to-action buttons
- **About** - Bio, photo, and quick stats
- **Skills & Tech** - Organized by category: Frontend, Backend, Infrastructure & Databases, Tools & AI
- **Projects** - Featured work with descriptions, tech stacks, and GitHub links
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
- Scroll-reveal animations on all sections
- Responsive layout with mobile navigation drawer
- Bento grid design for skills and projects
- Resume download button in the navbar
- Live GitHub profile links on all projects

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
