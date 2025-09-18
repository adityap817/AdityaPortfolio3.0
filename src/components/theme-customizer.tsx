"use client"

import { useState } from "react"
import { Paintbrush, Loader2, Wand2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { generateColorPalette } from "@/ai/flows/dynamic-color-theme-generation"
import { projects } from "@/lib/data"
import { readFileAsDataURL } from "@/lib/utils"
import { useTheme } from "./theme-provider"

export function ThemeCustomizer() {
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [generatedPalette, setGeneratedPalette] = useState<string[] | null>(null)
  const { toast } = useToast()
  const { applyTheme } = useTheme()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!image) {
      toast({
        title: "Image required",
        description: "Please upload a reference image to generate a palette.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setGeneratedPalette(null)
    try {
      const imageAsDataUrl = await readFileAsDataURL(image);
      const projectDescriptions = projects.map((p) => p.description);
      const result = await generateColorPalette({
        projectDescriptions,
        referenceImageUris: [imageAsDataUrl],
      })
      setGeneratedPalette(result.palette)
    } catch (error) {
      console.error(error)
      toast({
        title: "Generation Failed",
        description: "Could not generate a color palette. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleApplyTheme = () => {
    if (generatedPalette) {
      applyTheme(generatedPalette);
      toast({
        title: "Theme Applied!",
        description: "The new AI-generated theme has been applied."
      });
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="rounded-full shadow-lg">
            <Paintbrush className="h-4 w-4" />
            <span className="sr-only">Customize Theme</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>AI Theme Customizer</SheetTitle>
            <SheetDescription>
              Generate a new color palette for the website using AI. Upload a
              reference image to guide the generation process.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-6 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Reference Image</Label>
              <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            {imagePreview && (
              <div className="relative w-full h-40 rounded-md overflow-hidden border">
                <img src={imagePreview} alt="Image Preview" className="w-full h-full object-cover" />
              </div>
            )}

            <Button onClick={handleGenerate} disabled={isLoading || !image}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Generate Palette
            </Button>

            {generatedPalette && (
              <div className="space-y-4">
                <h4 className="font-medium">Generated Palette:</h4>
                <div className="flex gap-2">
                  {generatedPalette.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full border-2"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <Button onClick={handleApplyTheme}>Apply This Theme</Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
