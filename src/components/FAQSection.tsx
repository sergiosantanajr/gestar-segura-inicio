import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O Gestar Segura substitui o acompanhamento médico?",
      answer: "Não. O Gestar Segura é uma base de conhecimento preventiva e educativa. Ele complementa, mas nunca substitui o acompanhamento profissional. Sempre recomendamos consultar um médico durante seu planejamento gestacional."
    },
    {
      question: "É difícil de aplicar as informações?",
      answer: "Não! Todo o conteúdo foi desenvolvido com linguagem direta e passo a passo. Você encontrará checklists, guias práticos e explicações simples para aplicar as orientações no seu dia a dia."
    },
    {
      question: "O acesso ao conteúdo é imediato?",
      answer: "Sim! Após a confirmação do pagamento, você recebe o acesso por e-mail automaticamente. No caso do PIX, o acesso é liberado em até 5 minutos."
    },
    {
      question: "Por quanto tempo tenho acesso ao material?",
      answer: "O acesso é vitalício! Você pode consultar o material quantas vezes quiser, quando quiser, pelo tempo que precisar."
    },
    {
      question: "Como posso tirar dúvidas sobre o conteúdo?",
      answer: "O material foi desenvolvido para ser auto-explicativo, mas caso tenha dúvidas, você pode entrar em contato conosco através dos canais de suporte disponibilizados após a compra."
    },
    {
      question: "O conteúdo é atualizado?",
      answer: "Sim! Como o acesso é vitalício, você recebe automaticamente qualquer atualização ou melhoria que fizermos no conteúdo, sempre baseado nas mais recentes evidências científicas."
    },
    {
      question: "Funciona para mulheres de qualquer idade?",
      answer: "O conteúdo é focado em mulheres em idade reprodutiva que desejam engravidar. As informações são aplicáveis para diferentes idades, mas sempre recomendamos considerar fatores individuais e consultar um profissional."
    },
    {
      question: "Posso compartilhar o conteúdo?",
      answer: "O conteúdo é para uso pessoal. Cada acesso é individual e não deve ser compartilhado. Caso outras pessoas tenham interesse, elas podem adquirir o próprio acesso."
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dúvidas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais questões sobre o Gestar Segura
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-card border border-primary-light/20 p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-muted rounded-xl px-6 data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ainda tem dúvidas? Estamos aqui para ajudar!
            </p>
            <div className="space-y-4">
              <button className="bg-gradient-cta text-white font-semibold px-8 py-4 rounded-xl shadow-floating hover:shadow-card transition-all duration-300 transform hover:scale-105">
                Quero esclarecer minhas dúvidas e garantir meu acesso
              </button>
              <p className="text-sm text-muted-foreground">
                💬 Suporte disponível após a compra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;