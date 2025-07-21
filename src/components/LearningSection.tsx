import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Utensils, Activity, BookOpen, Gift } from "lucide-react";

const LearningSection = () => {
  const learningItems = [
    {
      icon: CheckCircle,
      title: "Checklist de exames pré-gestacionais",
      description: "Lista completa dos exames essenciais e quando realizá-los"
    },
    {
      icon: Utensils,
      title: "Alimentação e fertilidade natural",
      description: "Guia nutricional para otimizar sua fertilidade de forma natural"
    },
    {
      icon: Calendar,
      title: "Calendário fértil e planejamento mensal",
      description: "Método para identificar seu período fértil com precisão"
    },
    {
      icon: Activity,
      title: "Fatores de risco gestacional e como evitá-los",
      description: "Identificação e prevenção dos principais riscos"
    },
    {
      icon: BookOpen,
      title: "Rotina de 30 dias de preparação física e hormonal",
      description: "Plano estruturado para preparar seu corpo adequadamente"
    },
    {
      icon: BookOpen,
      title: "Glossário técnico e recomendações práticas",
      description: "Termos médicos explicados de forma simples e ações práticas"
    }
  ];

  const bonusItems = [
    {
      icon: Gift,
      title: "Planner de Preparação",
      description: "Organize toda sua jornada de forma visual e prática"
    },
    {
      icon: Gift,
      title: "Mini-guia: 7 mitos sobre engravidar",
      description: "Derrube crenças populares com informação científica"
    },
    {
      icon: Gift,
      title: "Checklist de preparação",
      description: "Lista de verificação para não esquecer nada importante"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que você vai <span className="text-primary">aprender</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo completo e estruturado para sua preparação gestacional
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Conteúdo Principal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningItems.map((item, index) => (
              <Card key={index} className="border border-primary-light/20 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bônus */}
        <div className="bg-gradient-soft rounded-3xl p-8 border border-salmon-light/30">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            <span className="text-salmon">Bônus Exclusivos</span> 🎁
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bonusItems.map((item, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-salmon-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-salmon" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;