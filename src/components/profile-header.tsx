'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileHeader() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <div className="fixed top-20 left-4 z-30">
      <div className="relative flex flex-col items-center gap-2">
        {/* Rope */}
        <div className="w-px h-8 bg-border/80"></div>

        <div className="p-1 border border-border/40 bg-background/60 backdrop-blur-lg rounded-full shadow-lg">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://picsum.photos/seed/aditya/100/100"
              alt="Aditya Patil"
              data-ai-hint="profile picture"
            />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
