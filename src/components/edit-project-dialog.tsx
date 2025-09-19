'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { updateProject } from '@/app/actions';
import { Loader2, Pencil } from 'lucide-react';
import { type Project } from '@/lib/data';
import { readFileAsDataURL } from '@/lib/utils';
import Image from 'next/image';

const projectSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  technologies: z.string().min(1, 'Please enter at least one technology.'),
  repoUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  liveUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  image: z.instanceof(File).optional(),
});

interface EditProjectDialogProps {
  project: Project;
}

export function EditProjectDialog({ project }: EditProjectDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(project.imageUrl || null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
  });

  useEffect(() => {
    if (isOpen) {
        form.reset({
            title: project.title,
            description: project.description,
            technologies: project.technologies.join(', '),
            repoUrl: project.links.repo || '',
            liveUrl: project.links.live || '',
        });
        setImagePreview(project.imageUrl || null);
    }
  }, [isOpen, project, form]);


  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue('image', file);
      const dataUrl = await readFileAsDataURL(file);
      setImagePreview(dataUrl);
    }
  };

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    setIsSubmitting(true);
    try {
        let newImageUrl: string | undefined = project.imageUrl;
        if (values.image) {
            newImageUrl = await readFileAsDataURL(values.image);
        } else if (imagePreview === null) {
            newImageUrl = undefined;
        }

        const updatedProjectData: Project = {
            id: project.id,
            title: values.title,
            description: values.description,
            technologies: values.technologies.split(',').map(tech => tech.trim()),
            links: {
                repo: values.repoUrl,
                live: values.liveUrl,
            },
            imageUrl: newImageUrl,
        };

        const result = await updateProject(updatedProjectData);

        if (result.success) {
            toast({
                title: 'Project Updated!',
                description: 'Your project has been updated successfully.',
            });
            form.reset();
            setIsOpen(false);
        } else {
            throw new Error(result.message || 'Failed to update project');
        }
    } catch (error) {
        toast({
            title: 'Error',
            description: 'There was an error updating your project. Please try again.',
            variant: 'destructive',
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Edit Project</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
          <DialogDescription>
            Update the details for your project below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Project Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Project description..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormItem>
                <FormLabel>Project Image</FormLabel>
                <FormControl>
                    <Input type="file" accept="image/*" onChange={handleImageChange} />
                </FormControl>
                <FormMessage />
            </FormItem>

            {imagePreview && (
                <div className="w-full aspect-video relative">
                    <Image src={imagePreview} alt="Image preview" fill className="object-cover rounded-md" />
                    <Button variant="destructive" size="sm" className="absolute top-2 right-2" onClick={() => setImagePreview(null)}>
                        Remove Image
                    </Button>
                </div>
            )}

            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="React, Next.js, Tailwind CSS" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repository URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://github.com/..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="liveUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
