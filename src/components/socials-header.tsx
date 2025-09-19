'use client';

import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Code2, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const socialIconMap: { [key: string]: React.ReactNode } = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  leetcode: <Code2 className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
};

export function SocialsHeader() {
  const pathname = usePathname();

  // Simple check to only show on the home page if desired
  if (pathname !== '/') {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 border border-border/40 bg-background/60 backdrop-blur-lg rounded-full shadow-lg">
        {socialLinks.map((link) => (
          <a
            href={link.url}
            key={link.platform}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground transition-colors"
            >
              {socialIconMap[link.platform.toLowerCase()]}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
}
