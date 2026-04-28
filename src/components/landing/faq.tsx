import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const faqs = [
    {
      question: "Para quem é o Casei Barato?",
      answer: "Para qualquer casal que queira organizar um casamento incrível sem começar a vida a dois com dívidas. Não importa se o seu orçamento é grande ou pequeno, o sistema te ajuda a usar o dinheiro de forma inteligente.",
    },
    {
      question: "O pagamento é único ou é uma assinatura?",
      answer: "O pagamento é 100% único. Você paga uma vez e tem acesso a todas as ferramentas e materiais do plano que escolher para sempre, sem mensalidades ou taxas escondidas.",
    },
    {
      question: "E se eu não souber nada sobre organização de casamentos?",
      answer: "Perfeito! O sistema foi desenhado exatamente para isso. O plano guiado te pega pela mão e mostra o passo a passo de tudo que você precisa fazer, desde as primeiras decisões até o dia da festa.",
    },
    {
        question: "Vou receber o acesso na hora?",
        answer: "Sim! Assim que o pagamento for confirmado, você receberá um e-mail com o link de acesso imediato a todo o material. Sem espera, sem complicação.",
    },
  ];

  export function Faq() {
    return (
      <section id="faq" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Ainda tem dúvidas? Aqui estão as respostas para as perguntas mais comuns.
              </p>
            </div>
            <div className="text-left">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
          </div>
        </div>
      </section>
    )
  }