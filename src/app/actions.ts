'use server';

import { revalidatePath } from 'next/cache';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/data';

// In a real application, this would be a database call.
// For this prototype, we're just returning the in-memory array.
export async function getProjects() {
  return Promise.resolve(projects);
}

export async function addProject(newProject: Omit<Project, 'id'>) {
    // This is where you would typically insert the new project into your database.
    // For this prototype, we'll just add it to the in-memory array.
    // Note: This change will only persist until the server is restarted.
    const projectWithId: Project = {
        ...newProject,
        id: `proj-${projects.length + 1}`,
    };
    projects.push(projectWithId);
    
    // Revalidate the page to show the new project
    revalidatePath('/');

    return { success: true, project: projectWithId };
}

export async function deleteProject(id: string) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects.splice(index, 1);
        revalidatePath('/');
        return { success: true };
    }
    return { success: false, message: 'Project not found' };
}

export async function verifyPassword(password: string) {
    const isAdmin = password === process.env.ADMIN_PASSWORD;
    return { success: isAdmin };
}
