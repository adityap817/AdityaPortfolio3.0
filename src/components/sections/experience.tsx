import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { type Milestone } from "@/lib/data";

interface ExperienceProps {
  milestones: Milestone[];
}

export function Experience({ milestones }: ExperienceProps) {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
        My{' '}
        <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
          Experience
        </span>
      </h2>
      <p className="mt-4 mb-12 text-xl text-muted-foreground text-center">
        A timeline of my career milestones and professional growth.
      </p>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-border"></div>
        {milestones.map((milestone, index) => (
          <div key={index} className="relative mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-1.5 border-4 border-background"></div>
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} w-full`}>
              <div className="w-1/2"></div>
              <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                 <p className="text-lg font-semibold text-primary">{milestone.year}</p>
              </div>
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'ml-auto pl-8' : 'pr-8'}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
