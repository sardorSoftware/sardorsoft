'use client';

// components/Projects.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Assuming you have an image property
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]); // Project data state
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch project data from the API when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data: Project[] = await response.json(); // Type the response data
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Unable to load projects. Please try again later.'); // Set error message
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>; // Display loading state
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Display error state
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="mb-8 text-4xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="overflow-hidden rounded-lg border">
            <Image
              src={
                project.image ||
                `/placeholder.svg?height=200&width=400&text=Project+${project.id}`
              }
              alt={project.title}
              width={400}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
              <p className="mb-4 text-base">{project.description}</p>
              <Button variant="outline" asChild>
                <Link href={project.link}>View Project</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
