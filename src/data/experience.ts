export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: 'PayTag',
    role: 'Full-Stack Developer',
    period: 'Dec 2025 – Present',
    highlights: [
      'Extend and maintain a production Flutter/Dart self-checkout kiosk application, including integrations with internal services and external APIs',
      'Maintain and extend an Ansible-based automation system, using shell and Python scripts to deploy and configure software across client machines remotely',
      'Work in Linux environments, handling system configuration, caching, and log analysis to troubleshoot production issues',
    ],
  },
  {
    company: 'Gilon',
    role: 'Full-Stack Developer',
    period: 'Nov 2024 – Dec 2025',
    highlights: [
      'Sole developer responsible for building a security algorithm into a full web-based information security platform',
      'Designed and developed the platform across a multi-layer microservices architecture using Python/FastAPI, Node.js, and React',
      'Created technical documentation covering architecture, development processes, and research findings',
    ],
  },
  {
    company: 'Vayyar',
    role: 'QA Tester',
    period: 'Jul 2024 – Nov 2024',
    highlights: [
      'Tested radar and camera sensors in automotive environments',
      'Collaborated with PMs, QA engineers, and developers to design and execute test plans',
    ],
  },
  {
    company: 'Sela College',
    role: 'Software Development Course',
    period: '2023 – 2024',
    highlights: [
      'Intensive full-stack program covering frontend, backend, and infrastructure',
      'Graduated with a GPA of 96',
    ],
  },
  {
    company: 'Artillery Corps, IDF',
    role: 'Sergeant, Team Leader',
    period: '2020 – 2022',
    highlights: [
      'Served as a howitzer team leader in the Artillery Corps',
      'Led a team in operational activities and managed logistical planning and equipment readiness',
    ],
  },
];
