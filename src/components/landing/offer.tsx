'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UpgradePopup } from './upgrade-popup';

const essentialFeatures = [
  'Simulador de custo do casamento',
  'Planilha de orçamento',
  'Plano simples de organização',
];

const completeFeatures = [
  'Decisões prontas (o que cortar e manter)',
  'Estratégias para economizar mais',
  'Exemplos reais de casamento simples',
  'Guia de prioridades (o que realmente importa)',
];

export function Offer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section id="offer" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Escolha como você quer planejar seu casamento
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 lg:grid-cols-2">
            {/* Plano Essencial */}
            <Card className="flex h-full flex-col">
              <CardHeader className="text-left">
                <CardTitle>Plano Essencial</CardTitle>
                <CardDescription>O começo perfeito para seu planejamento.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-left">
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ 19,90</span>
                  <span className="text-muted-foreground">/pagamento único</span>
                </div>
                <ul className="space-y-3">
                  {essentialFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="size-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="lg" onClick={() => setIsPopupOpen(true)}>
                  COMEÇAR COM O ESSENCIAL
                </Button>
              </CardFooter>
            </Card>

            {/* Plano Completo */}
            <Card className="relative flex h-full flex-col border-2 border-primary shadow-2xl">
              <div className="absolute -top-4 right-4 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                MAIS ESCOLHIDO
              </div>
              <CardHeader className="text-left">
                <CardTitle>Plano Completo</CardTitle>
                <CardDescription>O plano definitivo para economizar de verdade.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-left">
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ 29,90</span>
                  <span className="text-muted-foreground">/pagamento único</span>
                </div>
                <p className="mb-4 font-semibold">Tudo do Plano Essencial, e mais:</p>
                <ul className="space-y-3">
                  {completeFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="size-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" size="lg">
                  <Link href="/checkout?plan=completo">QUERO O PLANO COMPLETO</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <UpgradePopup isOpen={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </>
  );
}
