import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const findImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="projects" className="container py-24 sm:py-32 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          My{' '}
          <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => {
          const projectImage = findImage(project.id);
          return (
            <Card key={project.id} className="overflow-hidden flex flex-col">
              {projectImage && (
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={1200}
                    height={800}
                    data-ai-hint={projectImage.imageHint}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-start gap-2">
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
