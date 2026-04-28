'use client';

import { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { personalizedCostSavingStrategy } from '@/ai/flows/personalized-cost-saving-strategy';
import type { PersonalizedCostSavingStrategyOutput } from '@/ai/flows/personalized-cost-saving-strategy';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, PlusCircle, Trash2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const budgetItemSchema = z.object({
  category: z.string().min(1, 'Categoria é obrigatória.'),
  estimatedCost: z.coerce.number().min(0, 'Custo deve ser positivo.'),
  priorityLevel: z.enum(['high', 'medium', 'low']),
});

const formSchema = z.object({
  budget: z.array(budgetItemSchema).min(1, 'Adicione ao menos um item ao orçamento.'),
  overallPriorities: z.array(z.string()).min(1, 'Selecione ao menos uma prioridade.'),
});

type FormData = z.infer<typeof formSchema>;

const ALL_PRIORITIES = ['Comida boa', 'Música ao vivo', 'Decoração incrível', 'Local dos sonhos', 'Cerimônia intimista', 'Muitos convidados'];
const INITIAL_BUDGET = [
    { category: 'Buffet', estimatedCost: 15000, priorityLevel: 'high' as const },
    { category: 'Decoração', estimatedCost: 8000, priorityLevel: 'medium' as const },
    { category: 'Fotografia', estimatedCost: 5000, priorityLevel: 'high' as const },
    { category: 'Local da Festa', estimatedCost: 10000, priorityLevel: 'high' as const },
];

export function SimulatorClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState<PersonalizedCostSavingStrategyOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: INITIAL_BUDGET,
      overallPriorities: ['Comida boa', 'Música ao vivo'],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'budget',
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setAiResult(null);
    try {
      const result = await personalizedCostSavingStrategy(data);
      setAiResult(result);
    } catch (error) {
      console.error('Error fetching AI suggestions:', error);
      toast({
        variant: 'destructive',
        title: 'Erro ao gerar sugestões',
        description: 'Não foi possível se comunicar com a IA. Tente novamente mais tarde.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seu Planejamento</CardTitle>
        <CardDescription>Preencha os campos abaixo para obter sua estratégia personalizada.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Orçamento Detalhado */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Orçamento Detalhado</Label>
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-1 gap-2 rounded-md border p-4 md:grid-cols-4 md:gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`budget.${index}.category`}>Categoria</Label>
                  <Input {...form.register(`budget.${index}.category`)} id={`budget.${index}.category`} />
                  {form.formState.errors.budget?.[index]?.category && <p className="text-sm text-destructive">{form.formState.errors.budget[index].category.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`budget.${index}.estimatedCost`}>Custo (R$)</Label>
                  <Input {...form.register(`budget.${index}.estimatedCost`)} type="number" id={`budget.${index}.estimatedCost`} />
                   {form.formState.errors.budget?.[index]?.estimatedCost && <p className="text-sm text-destructive">{form.formState.errors.budget[index].estimatedCost.message}</p>}
                </div>
                <div className="flex items-end gap-2">
                   <div className="w-full space-y-2">
                     <Label>Prioridade</Label>
                     <Controller
                        control={form.control}
                        name={`budget.${index}.priorityLevel`}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Prioridade" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">Alta</SelectItem>
                                    <SelectItem value="medium">Média</SelectItem>
                                    <SelectItem value="low">Baixa</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                        />
                   </div>
                   <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                     <Trash2 className="size-4" />
                   </Button>
                </div>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={() => append({ category: '', estimatedCost: 0, priorityLevel: 'medium' })}>
              <PlusCircle className="mr-2 size-4" /> Adicionar Categoria
            </Button>
          </div>

          {/* Prioridades Gerais */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Prioridades Gerais do Casamento</Label>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {ALL_PRIORITIES.map((priority) => (
                <div key={priority} className="flex items-center space-x-2">
                  <Controller
                    name="overallPriorities"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value?.includes(priority)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, priority])
                            : field.onChange(field.value?.filter((value) => value !== priority));
                        }}
                      />
                    )}
                  />
                  <label htmlFor={priority} className="text-sm font-medium leading-none">
                    {priority}
                  </label>
                </div>
              ))}
            </div>
             {form.formState.errors.overallPriorities && <p className="text-sm text-destructive">{form.formState.errors.overallPriorities.message}</p>}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full" size="lg">
            {isLoading ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Wand2 className="mr-2 size-4" />}
            Gerar Estratégia de Economia
          </Button>
        </form>

        {aiResult && (
          <div className="mt-12">
            <h3 className="mb-6 text-center font-headline text-2xl font-bold">💡 Estratégias de Economia Personalizadas</h3>
            <Accordion type="single" collapsible className="w-full">
              {aiResult.costSavingStrategies.map((strategy, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg">{strategy.category}</AccordionTrigger>
                  <AccordionContent className="space-y-4 px-2 text-base">
                    <p><strong className="text-primary">Sugestão:</strong> {strategy.suggestion}</p>
                    {strategy.estimatedSavings && <p><strong className="text-primary">Economia Estimada:</strong> {strategy.estimatedSavings}</p>}
                    <p><strong className="text-primary">Impacto nas Prioridades:</strong> {strategy.impactOnPriority}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
