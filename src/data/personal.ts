import avatarImg from '../assets/osher.jpeg';
import { projects } from './projects';
import { skills } from './skills';

export const personal = {
  name: 'Osher Elikamel',
  title: 'Full-Stack Developer',
  tagline: 'Building production systems across backend, frontend, and infrastructure',
  bio: `Full-Stack Developer with hands-on experience shipping production systems across backend, frontend, and infrastructure. I work with Python/FastAPI, Node.js, React, and Flutter, with a focus on system integration, automation, and Linux environments.

I use AI-assisted development tools (Claude Code, Cursor) as a core part of how I build — accelerating delivery without compromising code quality. Currently open to new Full-Stack roles.`,
  email: 'oshercft@gmail.com',
  github: 'OsherElikamel',
  linkedin: 'osher-elikamel',
  location: 'Israel',
  resumePath: '/resume.pdf',
  avatarUrl: avatarImg,
  stats: {
    yearsExperience: '2+',
    projectsCompleted: String(projects.length),
    technologiesUsed: String(skills.length),
  },
};
