'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift } from 'lucide-react';
import { useState } from 'react';
import { UpgradePopup } from './upgrade-popup';

const essentialFeatures = [
  'Simulador básico de custo',
  'Planilha simples de orçamento',
  'Guia inicial de organização',
];

const completeFeatures = [
    'Simulador completo baseado nas suas escolhas',
    'Planilha inteligente com controle automático',
    'Plano guiado passo a passo até o casamento',
    'Decisões prontas (o que cortar e o que manter)',
    'Estratégias práticas para reduzir custos',
    'Exemplos reais de casamentos simples',
];

const bonuses = [
    { text: 'Guia de fornecedores mais baratos' },
    { text: 'Checklist completo do casamento' },
    { text: 'Ideias de decoração econômica' },
    { text: 'Estratégias para economizar com buffet' },
    { text: 'Lista do que NÃO gastar dinheiro' },
]

export function Offer() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
      <>
      <section id="offer" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Escolha o plano ideal para organizar seu casamento sem gastar à toa
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 lg:grid-cols-2">
            {/* Plano Essencial */}
            <Card className="flex h-full flex-col">
              <CardHeader className="text-left">
                <CardTitle>Plano Essencial</CardTitle>
                <CardDescription>Ideal para quem quer começar a ter uma noção dos custos.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-left">
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ 10,90</span>
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
                  COMEÇAR PELO ESSENCIAL
                </Button>
              </CardFooter>
            </Card>

            {/* Plano Completo */}
            <Card className="relative flex h-full flex-col border-2 border-primary bg-card shadow-2xl lg:scale-105">
              <div className="absolute -top-4 right-4 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                MAIS ESCOLHIDO
              </div>
              <CardHeader className="text-left">
                <CardTitle className="text-2xl">Plano Completo</CardTitle>
                <CardDescription>Planejamento completo + economia real.</CardDescription>
                <div className="pt-4">
                  <Image
                    src="https://res.cloudinary.com/dmq11clja/image/upload/v1717404891/BANNER_CASEI_BARATO_ktb6bj.webp"
                    alt="Banner mostrando economia no casamento"
                    width={1200}
                    height={418}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="couple saving money"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-6 text-left">
                <div className="mb-6">
                  <span className="text-5xl font-bold">R$ 29,90</span>
                  <span className="text-muted-foreground">/pagamento único</span>
                </div>

                <div className="space-y-3">
                    <p className="font-semibold">Tudo do Plano Essencial, e mais:</p>
                    <ul className="space-y-3">
                    {completeFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-1 size-5 shrink-0 text-primary" />
                        <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="rounded-lg bg-primary/5 p-4">
                    <h4 className="mb-3 font-bold">Você também recebe:</h4>
                    <ul className="space-y-3">
                        {bonuses.map((bonus) => (
                            <li key={bonus.text} className="flex items-start gap-2">
                                <Gift className="mt-1 size-5 shrink-0 text-primary" />
                                <span>{bonus.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
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
