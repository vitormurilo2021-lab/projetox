'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Suspense } from 'react';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');

  return (
    <Card className="w-full">
      <CardHeader className="items-center text-center">
        <CheckCircle2 className="size-16 text-green-500" />
        <CardTitle className="text-2xl">Página de Checkout (Demonstração)</CardTitle>
        <CardDescription>
          Esta é uma página de demonstração. Em um aplicativo real, aqui seria a integração com um gateway de pagamento.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-2 text-lg">
          Você selecionou o: <span className="font-bold capitalize text-primary">{plan === 'completo' ? "Plano Completo" : "Plano Essencial"}</span>
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container flex max-w-2xl items-center justify-center py-16 md:py-24">
          <Suspense fallback={<div className="text-center text-muted-foreground">Carregando...</div>}>
            <CheckoutContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
