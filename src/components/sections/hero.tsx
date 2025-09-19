import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';
import { FileText, Handshake, Linkedin } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Hero() {
  const linkedinLink = socialLinks.find(
    (link) => link.platform.toLowerCase() === 'linkedin'
  );

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center py-32 md:py-48 min-h-[80vh] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 dark:bg-primary/20 rounded-full blur-3xl opacity-80 flow-item-1"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/30 dark:bg-accent/20 rounded-full blur-3xl opacity-80 flow-item-2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 dark:bg-primary/20 rounded-full blur-3xl opacity-80 flow-item-3"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center flex-grow">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <h1 className="text-[10rem] md:text-[20rem] font-bold font-headline text-center text-muted-foreground/10 select-none whitespace-nowrap leading-none">
            ADITYA
          </h1>
        </div>
        <div className="relative text-center container flex flex-col items-center flex-grow justify-center">
          <h2 className="text-6xl md:text-8xl font-bold font-headline">
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Aditya Patil
            </span>
          </h2>
          <p className="relative text-2xl text-muted-foreground md:w-10/12 mx-auto text-center mt-8">
            I build and design modern, responsive, and performant web
            applications. Passionate about creating seamless user experiences
            from backend to frontend.
          </p>
        </div>
      </div>

      <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pb-8">
        {linkedinLink && (
          <Popover>
            <PopoverTrigger asChild>
              <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="transition-transform duration-300 hover:scale-110">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/adi.jpg" alt="Aditya Patil" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Aditya Patil</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-Stack Developer | Building Innovative Solutions
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Passionate about creating modern web applications and seamless user experiences. Let's connect!
                </p>
                <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full">
                    View Profile
                  </Button>
                </a>
              </div>
            </PopoverContent>
          </Popover>
        )}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="secondary">
            <FileText className="mr-2 h-5 w-5" />
            Check my Resume
          </Button>
        </a>
        <a href="#contact">
          <Button size="lg" variant="outline">
            <Handshake className="mr-2 h-5 w-5" />
            Collaborate
          </Button>
        </a>
      </div>
    </section>
  );
}