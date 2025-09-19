"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { type SocialLink } from "@/lib/data"
import { Github, Linkedin, Code2, Instagram } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const socialIconMap: { [key: string]: React.ReactNode } = {
  github: <Github className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
  leetcode: <Code2 className="h-6 w-6" />,
  instagram: <Instagram className="h-6 w-6" />,
}

interface ContactProps {
  socialLinks: SocialLink[];
}

export function Contact({ socialLinks }: ContactProps) {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const linkedinLink = socialLinks.find(
    (link) => link.platform.toLowerCase() === 'linkedin'
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    if (linkedinLink) {
      window.open(linkedinLink.url, '_blank');
    }
    toast({
      title: "Redirecting to LinkedIn",
      description: "You can send me a message there.",
    })
    form.reset()
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
        Get In{' '}
        <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
          Touch
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        Have a question or want to work together? Feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Send Message</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-6">
           <h3 className="text-2xl font-bold">Connect With Me</h3>
           <p className="text-muted-foreground">
             You can also find me on these platforms.
           </p>
           <div className="flex gap-4">
            {socialLinks.map(link => (
              <a href={link.url} key={link.platform} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label={link.platform}>
                  {socialIconMap[link.platform.toLowerCase()]}
                </Button>
              </a>
            ))}
           </div>
           <div className="relative pt-8">
              <div className="bg-card p-6 rounded-lg shadow-lg border flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                  <AvatarImage src="/adi.jpg" alt="Aditya Patil" data-ai-hint="profile picture" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <p className="font-alex-brush text-4xl text-foreground -rotate-6">
                  Aditya Patil
                </p>
              </div>
           </div>
        </div>
      </div>
       <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Aditya Patil. All Rights Reserved.</p>
      </div>
    </section>
  )
}
