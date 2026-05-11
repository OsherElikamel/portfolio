export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'DevBoard',
    description:
      'A full-stack developer dashboard for tracking projects, tasks, and progress. Features a Kanban board with drag-and-drop, project management, voting system, and a polished dark/light UI.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/OsherElikamel/devboard',
    featured: true,
  },
  {
    title: 'AI Crypto Dashboard',
    description:
      'AI-powered crypto dashboard with real-time news, market insights, meme feed, and coin tracking. Integrates multiple AI and crypto APIs into a unified interface.',
    tech: ['React', 'TypeScript', 'Express', 'MongoDB', 'MUI'],
    github: 'https://github.com/OsherElikamel/ai-crypto-dashboard',
    featured: true,
  },
  {
    title: 'Live Code Classroom',
    description:
      'A real-time coding classroom where mentors observe students solving JavaScript exercises. Features live code sync via WebSockets, Monaco Editor, and instant solution checking with confetti.',
    tech: ['React', 'TypeScript', 'Socket.IO', 'MongoDB', 'Monaco Editor'],
    github: 'https://github.com/OsherElikamel/live-code-classroom',
    featured: true,
  },
];
