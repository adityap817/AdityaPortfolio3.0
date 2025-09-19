import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { type Milestone } from "@/lib/data";
import { Building, Code, GraduationCap, Briefcase } from "lucide-react";

interface ExperienceProps {
  milestones: Milestone[];
}

const companyIcons: { [key: string]: React.ReactNode } = {
  'Cohesity Inc.': <Building className="h-8 w-8 text-primary" />,
  'Veritas Technologies LLC': <Briefcase className="h-8 w-8 text-primary" />,
  'Arizona State University': <GraduationCap className="h-8 w-8 text-primary" />,
  'Pune University': <GraduationCap className="h-8 w-8 text-primary" />,
}

const WavyLine = () => (
  <svg
    className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden md:block"
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

const VerticalLine = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-border md:hidden"></div>
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
        <p className="mt-4 mb-12 md:mb-20 text-xl text-muted-foreground text-center">
          A timeline of my career milestones and professional growth.
        </p>
      </div>
      
      {/* Horizontal Timeline for Desktop */}
      <div className="container relative hidden md:block">
        <WavyLine />
        <div className="relative flex justify-between w-full">
          {milestones.map((milestone, index) => {
            const isAbove = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="relative flex flex-col items-center group"
              >
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                ></div>
                
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${isAbove ? 'bottom-[calc(50%_+_1rem)]' : 'top-[calc(50%_+_1rem)]'}`}
                >
                  <div className="w-px h-8 bg-border"></div>
                </div>
                
                <div className={`relative z-20 w-64 md:w-80 ${isAbove ? 'mb-24' : 'mt-24'}`}>
                   <Card className="shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative">
                      <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {milestone.year}
                      </div>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          {companyIcons[milestone.company] || <Building className="h-8 w-8 text-primary" />}
                          <div className="flex-1 pt-1">
                            <CardTitle className="text-base">{milestone.title}</CardTitle>
                            <CardDescription>{milestone.company}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Vertical Timeline for Mobile */}
      <div className="container relative md:hidden">
        <VerticalLine />
        <div className="flex flex-col items-center gap-12 w-full">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative w-full flex justify-center group">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
              <div className="w-full max-w-sm pl-8">
                <Card className="shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative ml-4">
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {milestone.year}
                  </div>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      {companyIcons[milestone.company] || <Building className="h-8 w-8 text-primary" />}
                      <div className="flex-1 pt-1">
                        <CardTitle className="text-base">{milestone.title}</CardTitle>
                        <CardDescription>{milestone.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
