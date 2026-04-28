import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Júlia & Léo',
    text: 'Mano, sério, a gente tava quase pirando com os gastos. Essa planilha salvou nossa vida! Conseguimos cortar umas paradas que nem imaginávamos e o casamento foi top, sem dever um rim.',
    avatarUrl: 'https://picsum.photos/seed/juleo/100/100',
    avatarFallback: 'JL',
    avatarHint: 'happy couple',
  },
  {
    name: 'Carla P.',
    text: 'Eu sou zero organizada, achei que ia ser um caos. Mas o plano guiado é tipo um GPS do casamento. Me mostrou tudo que eu precisava fazer, passo a passo. Deu tudo certo, e ainda sobrou grana pra lua de mel!',
    avatarUrl: 'https://picsum.photos/seed/carla/100/100',
    avatarFallback: 'CP',
    avatarHint: 'smiling woman',
  },
  {
    name: 'Fernando S.',
    text: 'Pensei que era só mais um "sistema mágico", mas o negócio funciona mesmo. O simulador abriu meus olhos pra onde a grana tava indo. Pra quem tá com o orçamento apertado, isso aqui é um achado. Valeu cada centavo.',
    avatarUrl: 'https://picsum.photos/seed/fernando/100/100',
    avatarFallback: 'FS',
    avatarHint: 'smiling man',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-secondary py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A galera que usou, amou!
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Veja o que casais reais estão falando sobre a tranquilidade de casar com o orçamento no controle.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col text-left shadow-lg">
                <CardContent className="flex-1 p-4">
                  <blockquote className="space-y-4">
                    <p className="text-sm text-foreground">
                      “{testimonial.text}”
                    </p>
                  </blockquote>
                </CardContent>
                <CardFooter className="flex items-center gap-4 border-t p-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
