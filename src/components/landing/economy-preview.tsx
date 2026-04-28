'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function EconomyPreview() {
  const [estimatedCost, setEstimatedCost] = useState(15000);
  const savings = estimatedCost * 0.3; // 30% savings

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="economy-preview" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="items-center text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Arraste e veja quanto você pode economizar no seu casamento
            </CardTitle>
            <CardDescription className="max-w-md text-lg">
              Baseado em casamentos reais, veja uma estimativa de economia possível usando um planejamento inteligente.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <div className="w-full max-w-sm">
                <Slider
                    defaultValue={[15000]}
                    min={5000}
                    max={25000}
                    step={5000}
                    onValueChange={(value) => setEstimatedCost(value[0])}
                    className="my-6"
                />
            </div>
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Gasto estimado: <span className="font-bold text-foreground">{formatCurrency(estimatedCost)}</span>
              </p>
              <p className="text-2xl font-bold">
                Você pode economizar até{' '}
                <span className="text-green-600">{formatCurrency(savings)}</span> usando o sistema
              </p>
            </div>
            <Button asChild size="lg" className="mt-4 px-8 text-lg">
              <Link href="#offer">QUERO REDUZIR MEUS GASTOS</Link>
            </Button>
            <p className="text-xs text-muted-foreground text-center max-w-sm pt-4">
              Esses valores são estimativas baseadas em casamentos reais. O valor exato depende das suas escolhas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
