export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'infrastructure' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'HTML & CSS', category: 'frontend' },
  { name: 'Flutter / Dart', category: 'frontend' },

  // Backend
  { name: 'Python', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },

  // Infrastructure
  { name: 'Linux', category: 'infrastructure' },
  { name: 'Docker', category: 'infrastructure' },
  { name: 'Ansible', category: 'infrastructure' },
  { name: 'Shell Scripting', category: 'infrastructure' },
  { name: 'PostgreSQL', category: 'infrastructure' },
  { name: 'MongoDB', category: 'infrastructure' },

  // Tools
  { name: 'Git & GitHub', category: 'tools' },
  { name: 'Claude Code', category: 'tools' },
  { name: 'Cursor', category: 'tools' },
  { name: 'Postman', category: 'tools' },
];

export const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  infrastructure: 'Infrastructure & Databases',
  tools: 'Tools & AI',
};
