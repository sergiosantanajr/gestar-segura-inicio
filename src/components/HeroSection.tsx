import { Button } from "@/components/ui/button";
import { Shield, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-pregnancy.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Gravidez segura começa com{" "}
                <span className="text-primary">informação certa</span>{" "}
                na hora certa.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Um plano acessível, técnico e validado por inteligência artificial para mulheres que querem engravidar com mais segurança, mesmo sem apoio profissional direto.
              </p>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-cta text-white font-semibold text-lg px-8 py-6 shadow-floating hover:shadow-card transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://pay.kiwify.com.br/VXVVnhg" target="_blank" rel="noopener noreferrer">
                Quero acessar o conteúdo do Gestar Segura
              </a>
            </Button>
              
              <p className="text-sm text-muted-foreground">
                🔒 Acesso imediato e vitalício
              </p>
            </div>

            {/* Selo de validação */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-teal-light/30">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">Validação Técnica</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Baseado em inteligência artificial GPT-4 e fontes como{" "}
                <span className="font-medium text-primary">OMS, FEBRASGO e Ministério da Saúde</span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Mulher preparando-se para gravidez segura" 
                className="w-full h-auto rounded-3xl shadow-floating object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-8 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-salmon-light/30 animate-pulse">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-salmon fill-salmon" />
                <span className="text-sm font-medium text-foreground">100% Digital</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-lilac-light/30 animate-pulse">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;