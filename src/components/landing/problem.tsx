import { Card, CardContent } from '@/components/ui/card';
import { CircleDollarSign, AlertTriangle, PartyPopper } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: <CircleDollarSign className="size-8 text-destructive" />,
      title: 'Orçamento Estoura',
      description: 'Gastos saem do controle e o sonho vira um pesadelo financeiro.',
    },
    {
      icon: <AlertTriangle className="size-8 text-destructive" />,
      title: 'Gastos Desnecessários',
      description: 'Dinheiro é desperdiçado em coisas que não são prioridade para o casal.',
    },
    {
      icon: <PartyPopper className="size-8 text-destructive" />,
      title: 'Começar a Vida a Dois com Dívidas',
      description: 'A festa acaba, mas as contas ficam, gerando estresse e brigas.',
    },
  ];

  return (
    <section id="problem" className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O maior erro de quem vai casar
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              A maioria começa a organizar sem saber quanto vai gastar de verdade. O resultado?
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {problems.map((problem) => (
              <Card key={problem.title} className="flex flex-col items-center justify-start p-6 text-center">
                <CardContent className="flex flex-col items-center gap-4 p-0">
                  {problem.icon}
                  <h3 className="text-xl font-bold">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <blockquote className="border-l-4 border-primary pl-6 text-left">
            <p className="font-headline text-2xl font-bold italic text-primary md:text-3xl">
              “Você não precisa gastar mais — só precisa saber onde está gastando errado.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
