'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Database, GanttChart, Server, Code } from 'lucide-react';

const skills = [
    {
        category: 'Languages',
        technologies: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
        icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
        category: 'Backend & Systems',
        technologies: ['OOP', 'REST APIs', 'Async Programming', 'Hyper-V', 'HDFS', 'Hadoop', 'Spark', 'Hive', 'Unix/Linux', 'Networking', 'Security'],
        icon: <Server className="h-8 w-8 text-primary" />,
    },
    {
        category: 'Frameworks',
        technologies: ['React', 'Node.js', 'Express', 'Next.js', 'FastAPI', 'AngularJS'],
        icon: <GanttChart className="h-8 w-8 text-primary" />,
    },
    {
        category: 'Databases',
        technologies: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Firebase', 'GraphDB (SPARQL)'],
        icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
        category: 'Cloud/DevOps',
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git', 'Maven', 'Gradle', 'Agile/Scrum'],
        icon: <Cpu className="h-8 w-8 text-primary" />,
    },
];

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 rounded-lg py-12">
        <div className="px-6 flex flex-col gap-8 md:gap-12">
            <div className="pb-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                  My{' '}
                </span>
                Skills
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                A showcase of the technologies and tools I work with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillCategory) => (
                <Card key={skillCategory.category} className="flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {skillCategory.icon}
                    <CardTitle>{skillCategory.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skillCategory.technologies.map((tech) => (
                       <div key={tech} className="bg-background border text-sm text-foreground px-3 py-1 rounded-md">
                        {tech}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
