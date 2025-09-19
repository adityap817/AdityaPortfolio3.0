'use client';

import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Code2, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const socialIconMap: { [key: string]: React.ReactNode } = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  leetcode: <Code2 className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
};

export function SocialsHeader() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-30">
      <div className="relative flex flex-col items-center gap-2">
        {/* Rope */}
        <div className="w-px h-8 bg-border/80"></div>
        
        <div className="flex flex-col items-center gap-2 p-2 border border-border/40 bg-background/60 backdrop-blur-lg rounded-full shadow-lg">
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
    </div>
  );
}
