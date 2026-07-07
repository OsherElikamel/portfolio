import devboardImg from '../assets/projects/devboard.png';
import aiCryptoImg from '../assets/projects/ai-crypto.png';
import classroomImg from '../assets/projects/live-code-classroom.png';
import docchatImg from '../assets/projects/docchat.png';
import kioskImg from '../assets/projects/kiosk.png';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'DevBoard',
    description:
      'A full-stack developer dashboard for tracking projects, tasks, tech stacks, and learning notes. Features JWT auth with rate limiting, a fully interactive guest demo mode, task priorities and comments, and a polished dark/light UI.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/OsherElikamel/devboard',
    image: devboardImg,
    live: 'https://devboard-frontend-tagh.onrender.com',
  },
  {
    title: 'AI Crypto Dashboard',
    description:
      'AI-powered crypto dashboard with live coin prices, market news, AI-generated insights, and a community meme feed. Quiz-based onboarding personalizes the dashboard and insights to each user, with voting and per-section customization.',
    tech: ['React', 'TypeScript', 'Express', 'MongoDB', 'MUI'],
    github: 'https://github.com/OsherElikamel/ai-crypto-dashboard',
    image: aiCryptoImg,
  },
  {
    title: 'Live Code Classroom',
    description:
      'A real-time coding classroom where mentors observe students solving JavaScript exercises. Features live code sync via WebSockets, Monaco Editor, and instant solution checking with confetti.',
    tech: ['React', 'TypeScript', 'Socket.IO', 'MongoDB', 'Monaco Editor'],
    github: 'https://github.com/OsherElikamel/live-code-classroom',
    image: classroomImg,
  },
  {
    title: 'DocChat',
    description:
      'Upload a document and chat with its content using AI. Uses RAG to retrieve relevant chunks, then generates grounded answers with Llama 3.3 70B via Groq. Supports PDF, TXT, and Markdown files with a polished chat interface and dark/light mode.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Groq', 'MUI'],
    github: 'https://github.com/OsherElikamel/docchat',
    image: docchatImg,
  },
  {
    title: 'PayTag Kiosk',
    description:
      'A Flutter desktop self-checkout kiosk simulator. Covers the full retail flow from RFID scanning to payment, with multi-store support, bilingual UI, and payment logging.',
    tech: ['Flutter', 'Dart', 'Provider', 'Excel'],
    github: 'https://github.com/OsherElikamel/kiosk-payment-demo',
    image: kioskImg,
  },
  {
    title: 'Portfolio',
    description:
      'This website. A responsive developer portfolio built with React and Material UI, featuring dark/light theming, scroll-reveal animations, and a bento grid layout.',
    tech: ['React', 'TypeScript', 'MUI', 'Vite'],
    github: 'https://github.com/OsherElikamel/portfolio',
    live: 'https://osher-elikamel.onrender.com',
  },
];
