import Image from 'next/image';
import { skills, type Skill } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface HeroProps {
  skills: Skill[];
}

export function Hero({ skills }: HeroProps) {
  const allTech = skills.flatMap(skill => skill.technologies);

  return (
    <section id="home" className="relative container flex flex-col items-center justify-center py-32 md:py-48 min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[10rem] md:text-[20rem] font-bold font-headline text-center text-muted-foreground/10 select-none whitespace-nowrap leading-none">
          ADITYA
        </h1>
      </div>
      
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full flex items-center justify-center">
          <div className="text-6xl md:text-7xl font-bold font-headline text-center text-primary select-none leading-none">
            Aditya Patil
          </div>
        </div>
        
        {allTech.map((tech, index) => {
          const angle = (index / allTech.length) * 360;
          const radius = 180 + Math.random() * 50;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <div
              key={tech}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                animation: `orbit 20s linear infinite`,
                animationDelay: `-${(index / allTech.length) * 20}s`
              }}
            >
              <Badge variant="secondary" className="text-lg shadow-lg whitespace-nowrap">
                {tech}
              </Badge>
            </div>
          );
        })}
      </div>
       <p className="relative text-2xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-center mt-24">
          I build and design modern, responsive, and performant web applications. Passionate about creating seamless user experiences from backend to frontend.
        </p>
    </section>
  );
}
