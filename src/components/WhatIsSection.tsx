import { Card, CardContent } from "@/components/ui/card";
import { Book, Brain, Heart, Shield } from "lucide-react";

const WhatIsSection = () => {
  const features = [
    {
      icon: Book,
      title: "Conteúdo Digital Completo",
      description: "Material estruturado para planejamento gestacional seguro, baseado em evidências científicas."
    },
    {
      icon: Brain,
      title: "Baseado em IA",
      description: "Desenvolvido com apoio da tecnologia GPT-4 para garantir informações precisas e atualizadas."
    },
    {
      icon: Heart,
      title: "Cuidado Feminino",
      description: "Focado na autonomia e empoderamento da mulher em sua jornada para a maternidade."
    },
    {
      icon: Shield,
      title: "Fontes Confiáveis",
      description: "Informações validadas por organizações como OMS, FEBRASGO, CDC e Ministério da Saúde."
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que é o <span className="text-primary">Gestar Segura</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um conteúdo digital completo para planejamento gestacional seguro, 
            com base em evidências científicas, estruturado com apoio da inteligência artificial 
            e sem necessidade de acompanhamento médico direto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-floating transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-card border border-teal-light/30 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Por que escolher o Gestar Segura?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Muitas mulheres enfrentam dificuldades para acessar informações confiáveis sobre preparação para gravidez. 
              O Gestar Segura foi criado para democratizar o acesso a conhecimento técnico e seguro, 
              permitindo que você se prepare adequadamente, mesmo sem consultas médicas frequentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;