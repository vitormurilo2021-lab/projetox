'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Zap } from 'lucide-react';

interface UpgradePopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function UpgradePopup({ isOpen, onOpenChange }: UpgradePopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <Zap className="size-12 text-primary" />
          <DialogTitle className="font-headline text-2xl font-bold">OFERTA RELÂMPAGO!</DialogTitle>
          <DialogDescription className="text-center text-base">
            Leve o <strong>Plano Completo</strong> com todas as ferramentas de economia por um preço especial.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 text-center">
            <p className="text-muted-foreground">De <span className="line-through">R$ 29,90</span> por apenas</p>
            <p className="text-4xl font-bold text-primary">R$ 19,90</p>
            <p className="mt-1 text-xs font-bold text-primary">(Oferta válida apenas agora)</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-4 text-sm">
          <div className="rounded-lg border p-4 text-center">
            <h4 className="font-bold">Essencial</h4>
            <p className="mt-2 text-muted-foreground">
                Noção básica dos custos
            </p>
          </div>
          <div className="rounded-lg border-2 border-primary p-4 text-center">
            <h4 className="font-bold">Completo</h4>
             <p className="mt-2 text-foreground">
                Controle total + economia real
            </p>
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-2 sm:flex-col sm:space-x-0">
          <Button asChild size="lg">
            <a href="https://pay.wiapy.com/Iyha8XoywQ">EU QUERO A OFERTA!</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="https://pay.wiapy.com/fmH551Jot">Não, obrigado. Continuar com o Essencial</a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
