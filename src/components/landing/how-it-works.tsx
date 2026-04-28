import { FileQuestion, Calculator, BarChart, FileSpreadsheet, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: FileQuestion,
    title: '1. Responda um quiz rápido',
    description: 'Conte-nos sobre seu casamento dos sonhos. É rápido e fácil.',
  },
  {
    icon: Calculator,
    title: '2. Descubra quanto vai gastar',
    description: 'Nosso simulador calcula o custo estimado total do seu casamento.',
  },
  {
    icon: BarChart,
    title: '3. Veja onde economizar',
    description: 'Receba sugestões inteligentes para cortar custos sem abrir mão do que é importante.',
  },
  {
    icon: FileSpreadsheet,
    title: '4. Organize com uma planilha',
    description: 'Tenha tudo organizado em uma planilha simples e prática.',
  },
  {
    icon: CheckCircle,
    title: '5. Siga um plano simples',
    description: 'Execute um plano de ação claro para ter o casamento que você quer, sem dívidas.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl">
              Como Funciona?
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Em 5 passos simples, você sai da incerteza para o controle total do seu orçamento.
            </p>
          </div>
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
