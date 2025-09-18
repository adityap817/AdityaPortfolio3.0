import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { type Milestone } from "@/lib/data";

interface ExperienceProps {
  milestones: Milestone[];
}

export function Experience({ milestones }: ExperienceProps) {
  return (
    <section id="experience" className="w-full py-24 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Experience
          </span>
        </h2>
        <p className="mt-4 mb-12 text-xl text-muted-foreground text-center">
          A timeline of my career milestones and professional growth.
        </p>
      </div>
      <div className="relative w-full overflow-x-auto pb-8">
        <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-border"></div>
        <div className="relative flex w-max mx-auto px-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex flex-col items-center w-64 md:w-80 px-4">
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              <p className="text-lg font-semibold text-primary mt-8">{milestone.year}</p>
              <Card className="mt-4 text-center">
                <CardHeader>
                  <CardTitle>{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
