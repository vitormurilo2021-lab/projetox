import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Descubra quanto você realmente vai gastar no seu casamento (antes de gastar)
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Simule, organize e economize com um sistema simples que mostra exatamente onde cortar custos sem perder o que
            importa
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
