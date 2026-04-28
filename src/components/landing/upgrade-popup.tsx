'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Check } from 'lucide-react';

interface UpgradePopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function UpgradePopup({ isOpen, onOpenChange }: UpgradePopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center font-bold">Espere — você pode economizar mais!</DialogTitle>
          <DialogDescription className="text-center text-base">
            Por apenas <strong className="text-primary">R$ 10 a mais</strong>, você libera o Plano Completo e descobre <strong className="text-primary">exatamente</strong> onde cortar custos para economizar ainda mais no seu casamento.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4 text-sm">
          <div className="rounded-lg border p-4">
            <h4 className="font-bold">Essencial</h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="mt-1 size-4 shrink-0 text-green-500" />
                <span>Simulação básica</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-primary p-4">
            <h4 className="font-bold">Completo</h4>
             <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2">
                <Check className="mt-1 size-4 shrink-0 text-primary" />
                <span>Simulação + decisões prontas + estratégias de economia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>
            De <span className="line-through">R$ 29,90</span> por apenas mais R$10,00.
          </p>
          <p className="font-bold text-primary">(Oferta válida apenas agora)</p>
        </div>
        <DialogFooter className="flex flex-col gap-2 sm:flex-col sm:space-x-0">
          <Button asChild size="lg">
            <Link href="/checkout?plan=completo&upgrade=true">SIM, QUERO DESBLOQUEAR O COMPLETO</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" onClick={() => onOpenChange(false)}>
            <Link href="/checkout?plan=essencial">Não, obrigado. Continuar com o Essencial</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
