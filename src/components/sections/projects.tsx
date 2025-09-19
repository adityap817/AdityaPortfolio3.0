'use client';

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
import { Github, ExternalLink, Trash2, Loader2 } from 'lucide-react';
import type { Project } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { AddProjectDialog } from '@/components/add-project-dialog';
import { useAdmin } from '../admin-provider';
import { deleteProject } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from 'react';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const { isAdmin } = useAdmin();
  const { toast } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const findImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const result = await deleteProject(id);
      if (result.success) {
        toast({
          title: 'Project Deleted',
          description: 'The project has been successfully removed.',
        });
      } else {
        throw new Error(result.message || 'Failed to delete project');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description:
          'There was an error deleting the project. Please try again.',
        variant: 'destructive',
      });
    } finally {
        setDeletingId(null);
    }
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

      {isAdmin && (
        <div className="flex justify-center mb-8">
          <AddProjectDialog />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => {
          const projectImage = findImage(project.id);
          const isDeleting = deletingId === project.id;
          return (
            <Card key={project.id} className="overflow-hidden flex flex-col relative">
              {isAdmin && (
                 <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 z-10 h-8 w-8"
                        disabled={isDeleting}
                    >
                        {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                        <span className="sr-only">Delete Project</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the
                        project &quot;{project.title}&quot;.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(project.id)}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
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
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
