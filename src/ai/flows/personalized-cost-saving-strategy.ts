'use server';
/**
 * @fileOverview A Genkit flow for generating personalized cost-saving strategies for weddings.
 *
 * - personalizedCostSavingStrategy - A function that analyzes a simulated wedding budget and user priorities
 *                                    to provide tailored recommendations on where to cut costs.
 * - PersonalizedCostSavingStrategyInput - The input type for the personalizedCostSavingStrategy function.
 * - PersonalizedCostSavingStrategyOutput - The return type for the personalizedCostSavingStrategy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedCostSavingStrategyInputSchema = z.object({
  budget: z.array(
    z.object({
      category: z.string().describe('Category of wedding expense, e.g., "Buffet", "Decoracao", "Fotografia"'),
      estimatedCost: z.number().describe('Estimated cost for this category'),
      priorityLevel: z.enum(['high', 'medium', 'low']).describe('User priority level for this category (high, medium, or low)'),
    })
  ).describe('Detailed breakdown of the simulated wedding budget with user priorities per category.'),
  overallPriorities: z.array(z.string()).describe('General priorities or "must-haves" for the wedding, e.g., "good food", "live music", "intimate ceremony"'),
});
export type PersonalizedCostSavingStrategyInput = z.infer<typeof PersonalizedCostSavingStrategyInputSchema>;

const PersonalizedCostSavingStrategyOutputSchema = z.object({
  costSavingStrategies: z.array(
    z.object({
      category: z.string().describe('The category affected by the suggestion.'),
      suggestion: z.string().describe('A specific, actionable suggestion to save money in this category.'),
      estimatedSavings: z.string().optional().describe('An estimated amount or percentage of savings (e.g., "R$ 500", "10%").'),
      impactOnPriority: z.string().describe('An assessment of how this suggestion impacts the user\'s stated priorities (e.g., "Low impact on priorities", "May require compromise on \'good food\' priority").'),
    })
  ).describe('A list of personalized cost-saving recommendations.'),
});
export type PersonalizedCostSavingStrategyOutput = z.infer<typeof PersonalizedCostSavingStrategyOutputSchema>;

export async function personalizedCostSavingStrategy(input: PersonalizedCostSavingStrategyInput): Promise<PersonalizedCostSavingStrategyOutput> {
  return personalizedCostSavingStrategyFlow(input);
}

const personalizedCostSavingStrategyPrompt = ai.definePrompt({
  name: 'personalizedCostSavingStrategyPrompt',
  input: { schema: PersonalizedCostSavingStrategyInputSchema },
  output: { schema: PersonalizedCostSavingStrategyOutputSchema },
  prompt: `You are an expert wedding planner specializing in budget optimization and cost-saving strategies for weddings. Your goal is to help couples save money without compromising their most important priorities.

I have a simulated wedding budget and a list of my overall priorities. Please analyze this information and provide specific, actionable recommendations on where I can cut costs without impacting high-priority categories. For each recommendation, also indicate the estimated savings and how it impacts my stated priorities.

Here is the detailed budget breakdown for my wedding:
{{{json budget}}}

Here are my overall priorities for the wedding:
{{#each overallPriorities}}- {{{this}}}
{{/each}}

Provide your recommendations in a JSON array format, where each object has 'category', 'suggestion', 'estimatedSavings' (optional), and 'impactOnPriority'.`,
});

const personalizedCostSavingStrategyFlow = ai.defineFlow(
  {
    name: 'personalizedCostSavingStrategyFlow',
    inputSchema: PersonalizedCostSavingStrategyInputSchema,
    outputSchema: PersonalizedCostSavingStrategyOutputSchema,
  },
  async (input) => {
    const { output } = await personalizedCostSavingStrategyPrompt(input);
    return output!;
  }
);
