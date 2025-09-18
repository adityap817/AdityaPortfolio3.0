import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Skill } from '@/lib/data';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
        Technical{' '}
        <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
          Skills
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        A look at the technologies I work with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <CardHeader>
              <CardTitle>{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
