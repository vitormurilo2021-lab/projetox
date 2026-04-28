import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            O sistema que corta até 40% dos custos do seu casamento antes de você gastar
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Simulador baseado nas suas escolhas + planilha automática + plano guiado que mostra exatamente o que manter e o que eliminar
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="px-8 text-lg">
              <Link href="/simulator">QUERO PLANEJAR MEU CASAMENTO</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
