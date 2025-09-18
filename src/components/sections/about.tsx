'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateAboutMe } from '@/ai/flows/about-me-section';
import { Loader2, Wand2, Copy } from 'lucide-react';
import Image from 'next/image';

function AboutMeGenerator() {
  const [achievements, setAchievements] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!achievements.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please enter your achievements to generate a summary.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateAboutMe({ achievements });
      setSummary(result.summary);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description:
          'Failed to generate summary. Please check the console for details.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    toast({
        title: 'Copied!',
        description: 'Summary copied to clipboard.',
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          AI Summary Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          List your professional achievements below and let AI craft a catchy
          &quot;About Me&quot; summary for you.
        </p>
        <Textarea
          placeholder="e.g., Led a team of 5 engineers to build a scalable e-commerce platform, increasing sales by 30%..."
          value={achievements}
          onChange={(e) => setAchievements(e.target.value)}
          rows={5}
        />
        <Button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Generate Summary
        </Button>
        {summary && (
          <div className="p-4 bg-muted/50 rounded-lg border space-y-2 relative">
            <p className="font-semibold">Generated Summary:</p>
            <p className="text-muted-foreground">{summary}</p>
            <Button size="icon" variant="ghost" className="absolute top-2 right-2" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                  About{' '}
                </span>
                Me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                I am a dedicated and results-oriented Full-Stack Developer with
                a passion for building intuitive and efficient web applications.
                With a strong foundation in both front-end and back-end
                technologies, I excel at turning complex problems into elegant,
                user-friendly solutions. My goal is to continuously learn and
                leverage new technologies to create impactful digital
                experiences.
              </p>
            </div>
          </div>
          <div className="relative group w-full md:w-1/2">
             <Image
                src="https://picsum.photos/seed/10/400/400"
                alt="Aditya Patil"
                width={400}
                height={400}
                data-ai-hint="man portrait"
                className="rounded-lg object-cover w-full h-full"
              />
          </div>
        </div>
        <div className="px-6 pt-12">
            <AboutMeGenerator />
        </div>
      </div>
    </section>
  );
}
