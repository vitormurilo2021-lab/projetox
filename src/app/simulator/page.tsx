import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SimulatorClient } from './simulator-client';

export default function SimulatorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="font-headline text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl">
                Simulador de Casamento Inteligente
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Responda o formulário para simular seus gastos e receber uma estratégia de economia personalizada pela nossa IA.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <SimulatorClient />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
