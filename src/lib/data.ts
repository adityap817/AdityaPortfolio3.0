
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
    title: 'Scrum Simulator',
    description:
      'Built a Java-based Agile Scrum simulator. Led sprint planning and retrospectives, improving team efficiency by 20%.',
    technologies: ['Java', 'Agile', 'Scrum'],
    links: {
      repo: 'https://github.com/SER515asu/ser515-crystal',
    },
  },
  {
    id: 'proj-2',
    title: 'Travel Path: Itinerary Planner',
    description:
      'Delivered personalized itineraries using GNIS-LD, SPARQL, and knowledge graphs. Built with ReactJS, FastAPI for real-time, semantic trip planning.',
    technologies: ['React', 'FastAPI', 'SPARQL', 'Knowledge Graphs'],
    links: {
      live: 'https://travel-path-chi.vercel.app/',
    },
  },
  {
    id: 'proj-3',
    title: 'Go Text - Messenger',
    description:
      'Built with React and Firebase for real-time messaging and Google Auth. Stored messages with timestamps and unique IDs using Firestore.',
    technologies: ['React', 'Firebase', 'Firestore', 'Google Auth'],
    links: {
      repo: 'https://github.com/adityap817/WhatsApp-CLone-ReactJS-',
    },
  },
  {
    id: 'proj-4',
    title: 'Google Flights',
    description:
      'Recreated flight search UI using ReactJS, Material UI, and Google Places API. Followed design specs to ensure accurate layout and location autocomplete.',
    technologies: ['React', 'Material UI', 'Google Places API'],
    links: {
      live: 'https://google-flights-prod.vercel.app/',
    },
  },
  {
    id: 'proj-5',
    title: 'AI Chatbot Assistant',
    description:
      'An intelligent chatbot built with Genkit and integrated into a customer support portal. Provides instant answers and escalates complex issues.',
    technologies: ['Genkit', 'Next.js', 'Firebase', 'Tailwind CSS'],
    links: {
      repo: 'https://github.com',
    },
  },
  {
    id: 'proj-6',
    title: 'Real-time Stock Tracker',
    description:
      'A web application that displays real-time stock market data using WebSockets and advanced charting libraries for financial analysis.',
    technologies: ['React', 'WebSockets', 'D3.js', 'Node.js'],
    links: {
      repo: 'https://github.com',
      live: 'https://vercel.com',
    },
  },
  {
    id: 'proj-7',
    title: 'Social Media Aggregator',
    description:
      'A platform that aggregates content from various social media APIs into a single, unified feed. Includes filtering and search functionality.',
    technologies: ['Vue.js', 'Express', 'OAuth', 'MongoDB'],
    links: {
      repo: 'https://github.com',
    },
  },
  {
    id: 'proj-8',
    title: 'Cloud Storage Solution',
    description:
      'A custom cloud storage service with file versioning, sharing, and robust access control. Built on AWS S3 with a custom management interface.',
    technologies: ['AWS S3', 'Node.js', 'React', 'Docker'],
    links: {
      repo: 'https://github.com',
    },
  },
  {
    id: 'proj-9',
    title: 'IoT Smart Home Hub',
    description: 'A central hub for managing and monitoring IoT devices in a smart home. Features a responsive dashboard and push notifications.',
    technologies: ['MQTT', 'React', 'Node.js', 'PostgreSQL'],
    links: {
      repo: 'https://github.com',
    },
  },
  {
    id: 'proj-10',
    title: 'Code Collaboration Tool',
    description: 'A real-time code editor and collaboration platform, similar to Google Docs but for developers, with syntax highlighting and shared terminals.',
    technologies: ['WebRTC', 'React', 'Monaco Editor', 'Socket.IO'],
    links: {
      live: 'https://vercel.com',
    },
  },
  {
    id: 'proj-11',
    title: 'Recipe Finder App',
    description: 'An application that helps users find recipes based on ingredients they have. Uses a third-party recipe API and saves user favorites.',
    technologies: ['Next.js', 'tRPC', 'Prisma', 'Tailwind CSS'],
    links: {
      repo: 'https://github.com',
      live: 'https://vercel.com',
    },
  },
  {
    id: 'proj-12',
    title: 'Fitness Tracker PWA',
    description: 'A Progressive Web App to track workouts, set goals, and visualize progress. Works offline and is installable on mobile devices.',
    technologies: ['React', 'PWA', 'IndexedDB', 'Chart.js'],
    links: {
      repo: 'https://github.com',
    },
  },
];

export const socialLinks: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/adityap817/" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/adityap817/" },
    { platform: "LeetCode", url: "https://leetcode.com/adityaa_24" },
    { platform: "Instagram", url: "https://instagram.com/adityapaatil_/" },
]

export const careerMilestones: Milestone[] = [
    {
        year: '2019 - 2023',
        title: 'B.E Computer Engineering',
        company: 'Pune University',
        description: 'Completed my Bachelor\'s degree, where I built a strong foundation in computer science and software development.'
    },
    {
        year: '2023 - 2024',
        title: 'Assoc. IT Apps Specialist & Intern',
        company: 'Veritas Technologies LLC',
        description: 'Transitioned from an intern role to a specialist, working on internal applications and gaining experience in enterprise software development and IT operations.'
    },
    {
        year: '2024 - 2026',
        title: 'MS Software Engineering',
        company: 'Arizona State University',
        description: 'Pursuing a Master\'s degree to deepen my expertise in advanced software engineering principles and practices.'
    },
    {
        year: '2025 - Present',
        title: 'Summer Intern',
        company: 'Cohesity Inc.',
        description: 'Gained hands-on experience in a fast-paced tech environment, contributing to key projects and learning from industry professionals.'
    },
]
