import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Target } from "lucide-react";

const TargetAudienceSection = () => {
  const audience = [
    {
      icon: Heart,
      title: "Mulheres que querem engravidar",
      description: "Nos próximos meses e buscam preparação adequada",
      color: "salmon"
    },
    {
      icon: Target,
      title: "Tentantes",
      description: "Que já estão tentando e querem otimizar suas chances",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Mulheres que sofreram perdas",
      description: "E desejam mais controle e prevenção na próxima gestação",
      color: "lilac"
    },
    {
      icon: Users,
      title: "Quem busca autonomia",
      description: "Mulheres que querem se informar e ter mais controle sobre sua jornada",
      color: "teal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Para quem é o <span className="text-primary">Gestar Segura</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Este conteúdo foi especialmente desenvolvido para mulheres que querem tomar as rédeas 
            de sua jornada reprodutiva com informação e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audience.map((item, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-floating transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-${item.color}-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.color} transition-all duration-300`}>
                  <item.icon className={`h-8 w-8 text-${item.color} group-hover:text-white transition-all duration-300`} />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-card border border-primary-light/30 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Você se identifica com alguma dessas situações?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Quer engravidar mas não sabe por onde começar</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Busca informações confiáveis sobre preparação gestacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Tem dificuldade de acesso a acompanhamento médico frequente</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Quer se sentir mais preparada e segura</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Deseja ter mais autonomia sobre sua fertilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Já tentou engravidar e quer otimizar o processo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;