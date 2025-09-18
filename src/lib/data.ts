export type Skill = {
  category: string;
  technologies: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    repo?: string;
    live?: string;
  };
};

export type SocialLink = {
    platform: string;
    url: string;
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'DevOps & Tools',
    technologies: ['Docker', 'Git', 'CI/CD', 'Firebase', 'Vercel', 'AWS'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Project Alpha',
    description:
      'A comprehensive web analytics dashboard that provides real-time insights into user behavior and site performance. Built with Next.js and a robust backend.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Chart.js'],
    links: {
      repo: 'https://github.com',
      live: 'https://vercel.com',
    },
  },
  {
    id: 'proj-2',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce site with product management, shopping cart functionality, and a secure checkout process. Optimized for performance and user experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    links: {
      repo: 'https://github.com',
      live: 'https://vercel.com',
    },
  },
  {
    id: 'proj-3',
    title: 'Mobile Task Manager',
    description:
      'A cross-platform mobile application for task management, featuring offline capabilities and synchronization across devices. Built with React Native.',
    technologies: ['React Native', 'Firebase', 'Redux Toolkit'],
    links: {
      repo: 'https://github.com',
    },
  },
  {
    id: 'proj-4',
    title: 'Headless CMS',
    description:
      'A flexible and developer-friendly headless CMS that allows content creators to manage data for multiple frontends through a clean API.',
    technologies: ['Python', 'Django REST Framework', 'Docker', 'PostgreSQL'],
    links: {
      repo: 'https://github.com',
    },
  },
];

export const socialLinks: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Twitter", url: "https://twitter.com" },
]
