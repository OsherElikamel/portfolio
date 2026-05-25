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
  {
    title: 'DocChat',
    description:
      'Upload a document and chat with its content using AI. Uses RAG to retrieve relevant chunks, then generates grounded answers with Llama 3.3 70B via Groq. Supports PDF, TXT, and Markdown files with a polished chat interface and dark/light mode.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Groq', 'MUI'],
    github: 'https://github.com/OsherElikamel/docchat',
    featured: true,
  },
  {
    title: 'PayTag Kiosk',
    description:
      'A desktop self-checkout kiosk simulator built with Flutter. Simulates the full retail flow: RFID tag scanning, item display, payment processing, and detailed logging. Supports multiple stores, bilingual UI (English/Hebrew), and configurable payment methods.',
    tech: ['Flutter', 'Dart', 'Provider', 'Excel'],
    github: 'https://github.com/OsherElikamel/kiosk-payment-demo',
    featured: true,
  },
  {
    title: 'Portfolio',
    description:
      'This website. A responsive developer portfolio built with React and Material UI, featuring dark/light theming, scroll-reveal animations, and a bento grid layout.',
    tech: ['React', 'TypeScript', 'MUI', 'Vite'],
    github: 'https://github.com/OsherElikamel/portfolio',
    live: 'https://osher-elikamel.onrender.com',
    featured: true,
  },
];
