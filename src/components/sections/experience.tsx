import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { type Milestone } from "@/lib/data";

interface ExperienceProps {
  milestones: Milestone[];
}

const WavyLine = () => (
    <svg
      className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2"
      preserveAspectRatio="none"
      viewBox="0 0 1000 100"
    >
      <path
        d="M-5,50 Q125,0 250,50 T500,50 T750,50 T1005,50"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2"
      />
    </svg>
);


export function Experience({ milestones }: ExperienceProps) {
  return (
    <section id="experience" className="w-full py-24 sm:py-32 overflow-hidden">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Experience
          </span>
        </h2>
        <p className="mt-4 mb-20 text-xl text-muted-foreground text-center">
          A timeline of my career milestones and professional growth.
        </p>
      </div>
      <div className="container relative">
        <WavyLine />
        <div className="relative flex justify-between w-full">
          {milestones.map((milestone, index) => {
            const isAbove = index % 2 === 0;
            return (
            <div 
              key={index} 
              className="relative flex flex-col items-center group"
              // Align items alternately above and below the line
              style={{ transform: isAbove ? 'translateY(-70px)' : 'translateY(70px)' }}
            >
              {/* Branch */}
              <div 
                className={`absolute ${isAbove ? 'top-full' : 'bottom-full'} left-1/2 w-px h-16 bg-border`}
              ></div>
              
              {/* Dot on the timeline */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
              ></div>
              
              <div className="relative z-20 w-64 md:w-72">
                 <div className={`absolute left-1/2 -translate-x-1/2 flex items-center ${isAbove ? 'bottom-[-14px]' : 'top-[-14px]'}`}>
                    <div className="bg-primary text-primary-foreground text-xs font-bold rounded-full h-7 w-7 flex items-center justify-center z-30">
                        {milestone.year}
                    </div>
                 </div>
                 <Card className="shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-base">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
