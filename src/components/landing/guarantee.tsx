import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section id="guarantee" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-lg border bg-card p-8 text-center shadow-lg md:flex-row md:text-left">
          <ShieldCheck className="size-24 shrink-0 text-primary md:size-32" />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Sua Satisfação ou seu Dinheiro de Volta</h2>
            <p className="text-muted-foreground">
              Teste o Plano Completo por 7 dias. Se você não achar que o valor que recebeu é muito maior do que o que
              pagou, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
