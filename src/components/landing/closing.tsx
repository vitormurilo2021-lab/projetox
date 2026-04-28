import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Closing() {
  return (
    <section id="closing" className="w-full bg-primary text-primary-foreground py-20 md:py-28 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Antes de gastar, descubra o valor real do seu casamento
          </h2>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 text-lg">
              <Link href="/simulator">COMEÇAR AGORA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
