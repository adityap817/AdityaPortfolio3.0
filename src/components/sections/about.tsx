'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateAboutMe } from '@/ai/flows/about-me-section';
import { Loader2, Wand2, Copy, Cpu, Database, GanttChart, Server, Code } from 'lucide-react';

function AboutMeGenerator() {
  const [achievements, setAchievements] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!achievements.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please enter your achievements to generate a summary.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateAboutMe({ achievements });
      setSummary(result.summary);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description:
          'Failed to generate summary. Please check the console for details.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    toast({
        title: 'Copied!',
        description: 'Summary copied to clipboard.',
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          AI Summary Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          List your professional achievements below and let AI craft a catchy
          &quot;About Me&quot; summary for you.
        </p>
        <Textarea
          placeholder="e.g., Led a team of 5 engineers to build a scalable e-commerce platform, increasing sales by 30%..."
          value={achievements}
          onChange={(e) => setAchievements(e.target.value)}
          rows={5}
        />
        <Button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Generate Summary
        </Button>
        {summary && (
          <div className="p-4 bg-muted/50 rounded-lg border space-y-2 relative">
            <p className="font-semibold">Generated Summary:</p>
            <p className="text-muted-foreground">{summary}</p>
            <Button size="icon" variant="ghost" className="absolute top-2 right-2" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

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
        <div className="px-6 pt-12">
            <AboutMeGenerator />
        </div>
      </div>
    </section>
  );
}
