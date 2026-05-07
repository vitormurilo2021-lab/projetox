import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-8 text-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              O simulador de gastos que vai te ajudar fazer um casamento lindo por <span className="text-accent">menos de R$ 7.326!</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              <strong className="font-bold text-foreground">Simulador</strong> baseado nas suas escolhas +{' '}
              <strong className="font-bold text-foreground">planilha automática</strong> +{' '}
              <strong className="font-bold text-foreground">plano guiado</strong> que mostra exatamente o que{' '}
              <strong className="font-bold text-foreground">manter</strong> e o que{' '}
              <strong className="font-bold text-foreground">eliminar</strong>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dmq11clja/image/upload/v1717404891/BANNER_CASEI_BARATO_ktb6bj.webp"
              alt="Banner mostrando economia no casamento"
              width={1200}
              height={418}
              className="rounded-lg shadow-xl"
              priority
              data-ai-hint="couple saving money"
            />
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="px-8 text-lg">
              <Link href="#offer">QUERO PLANEJAR MEU CASAMENTO</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
