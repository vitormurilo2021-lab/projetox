import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { text: 'Clareza total do seu orçamento real' },
  { text: 'Controle total sobre cada gasto' },
  { text: 'Economia real de dinheiro' },
  { text: 'Casamento dos sonhos sem dívidas' },
];

export function Transformation() {
  return (
    <section id="transformation" className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 text-left">
                <CheckCircle2 className="size-8 shrink-0 text-primary" />
                <p className="text-xl font-semibold md:text-2xl">{benefit.text}</p>
              </div>
            ))}
          </div>
          <blockquote className="border-l-4 border-primary pl-6 text-left">
            <p className="font-headline text-3xl font-black italic text-primary md:text-4xl">
              Você para de adivinhar e começa a decidir.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
