'use server';

/**
 * @fileOverview Generates alternative color palettes for a portfolio based on project content and reference images.
 *
 * - generateColorPalette - A function that generates a color palette for the portfolio.
 * - GenerateColorPaletteInput - The input type for the generateColorPalette function.
 * - GenerateColorPaletteOutput - The return type for the generateColorPalette function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateColorPaletteInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('Descriptions of the projects in the portfolio.'),
  referenceImageUris:
    z.array(z.string().describe(
      "Reference images as data URIs that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    )).optional().describe('Optional reference images to guide the color palette generation.'),
});
export type GenerateColorPaletteInput = z.infer<typeof GenerateColorPaletteInputSchema>;

const GenerateColorPaletteOutputSchema = z.object({
  palette: z.array(z.string()).describe('An array of color hex codes.'),
});
export type GenerateColorPaletteOutput = z.infer<typeof GenerateColorPaletteOutputSchema>;

export async function generateColorPalette(input: GenerateColorPaletteInput): Promise<GenerateColorPaletteOutput> {
  return generateColorPaletteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateColorPalettePrompt',
  input: {schema: GenerateColorPaletteInputSchema},
  output: {schema: GenerateColorPaletteOutputSchema},
  prompt: `You are a color palette generation expert. You will generate a color palette of 5 hex codes based on the project descriptions and reference images provided.

  Project Descriptions:
  {{#each projectDescriptions}}
    - {{{this}}}
  {{/each}}

  {{#if referenceImageUris}}
  Reference Images:
  {{#each referenceImageUris}}
    {{media url=this}}
  {{/each}}
  {{/if}}

  Return a JSON object with a "palette" field containing an array of 5 hex codes.
  The palette should aesthetically pleasing and appropriate for a professional portfolio website with a dark mode theme.
  Consider the reference images, if provided, when determining the color palette.`,
});

const generateColorPaletteFlow = ai.defineFlow(
  {
    name: 'generateColorPaletteFlow',
    inputSchema: GenerateColorPaletteInputSchema,
    outputSchema: GenerateColorPaletteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
