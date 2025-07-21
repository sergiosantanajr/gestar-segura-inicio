import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const finalBenefits = [
    "Informações técnicas e confiáveis",
    "Acesso imediato e vitalício", 
    "Linguagem acessível e prática",
    "Baseado em fontes científicas",
    "Sem necessidade de consultas frequentes",
    "Preparação completa e estruturada"
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main message */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Você quer gerar uma nova vida.
              <br />
              <span className="text-salmon">Comece com segurança e preparo.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Sua jornada para a maternidade merece toda a informação e cuidado possível. 
              O Gestar Segura está aqui para te acompanhar nessa preparação.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {finalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-salmon flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-white text-primary font-bold text-xl px-12 py-8 shadow-floating hover:shadow-card transition-all duration-300 transform hover:scale-105 group"
            >
              Quero me preparar com o Gestar Segura
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <div className="space-y-2">
              <p className="text-white/90 text-lg">
                ✨ Acesso imediato • 💎 Conteúdo vitalício • 🔒 Compra 100% segura
              </p>
              <p className="text-white/80">
                Apenas R$ 39,90 • Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* Final encouragement */}
          <div className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <p className="text-white/90 text-lg leading-relaxed italic">
              "A preparação para uma gravidez saudável não é sorte, é planejamento. 
              E todo planejamento começa com a informação certa."
            </p>
            <div className="mt-4 text-white/70">
              — Equipe Gestar Segura
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;