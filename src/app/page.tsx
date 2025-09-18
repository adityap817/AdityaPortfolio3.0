import { Header } from '@/components/header';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { ThemeCustomizer } from '@/components/theme-customizer';
import { projects, socialLinks, careerMilestones } from '@/lib/data';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Experience } from '@/components/sections/experience';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience milestones={careerMilestones} />
        <About />
        <Projects projects={projects} />
        <Contact socialLinks={socialLinks} />
      </main>
      <ThemeCustomizer />
      <div className="fixed bottom-4 right-4 z-50">
         <a href="#home">
          <Button size="icon" className="rounded-full">
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
