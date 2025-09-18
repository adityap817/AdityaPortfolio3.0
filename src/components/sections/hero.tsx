import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold font-headline">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#B3B751] to-[#45B69C] text-transparent bg-clip-text">
              Hello
            </span>
            , I&apos;m Aditya
          </h1>
          <h2 className="inline">
            , a{' '}
            <span className="inline bg-gradient-to-r from-[#45B69C] to-[#B3B751] text-transparent bg-clip-text">
              Full-Stack Developer
            </span>
            .
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          I build and design modern, responsive, and performant web applications. Passionate about creating seamless user experiences from backend to frontend.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="#contact">
            <Button className="w-full md:w-1/3">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" className="w-full md:w-1/3">
              View My Work
            </Button>
          </a>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="w-full h-80 rounded-lg bg-muted-foreground/10 animate-pulse" />
      </div>
    </section>
  );
}
