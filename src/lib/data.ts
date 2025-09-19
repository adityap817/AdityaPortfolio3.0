
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

export type Milestone = {
    year: string;
    title: string;
    company: string;
    description: string;
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    technologies: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Backend & Systems',
    technologies: ['OOP', 'REST APIs', 'Async Programming', 'Hyper-V', 'HDFS', 'Hadoop', 'Spark', 'Hive', 'Unix/Linux', 'Networking', 'Security'],
  },
  {
    category: 'Frameworks',
    technologies: ['React', 'Node.js', 'Express', 'Next.js', 'FastAPI', 'AngularJS'],
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Firebase', 'GraphDB (SPARQL)'],
  },
  {
    category: 'Cloud/DevOps',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git', 'Maven', 'Gradle', 'Agile/Scrum'],
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
    { platform: "LeetCode", url: "https://leetcode.com" },
    { platform: "Instagram", url: "https://instagram.com" },
]

export const careerMilestones: Milestone[] = [
    {
        year: '2019 - 2023',
        title: 'Senior Developer',
        company: 'Tech Solutions Inc.',
        description: 'Led the development of a new client-facing analytics platform, improving data visualization and user engagement by 40%. Mentored junior developers and conducted code reviews.'
    },
    {
        year: '2021',
        title: 'Mid-Level Developer',
        company: 'Innovate LLC',
        description: 'Contributed to a large-scale e-commerce application, focusing on backend services and API integrations. Implemented a new payment gateway, increasing transaction success rate by 15%.'
    },
    {
        year: '2019',
        title: 'Junior Developer',
        company: 'Web Creators Co.',
        description: 'Started my professional journey by building and maintaining websites for small businesses. Gained foundational experience in HTML, CSS, JavaScript, and client communication.'
    },
    {
        year: '2018',
        title: 'Graduated University',
        company: 'University of Example',
        description: 'Completed my Bachelor\'s degree in Computer Science, where I discovered my passion for web development and software engineering.'
    }
]
