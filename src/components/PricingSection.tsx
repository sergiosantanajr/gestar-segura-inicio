import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, CreditCard, Smartphone, FileText, Zap, Shield, Infinity } from "lucide-react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 35,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { hours: 12, minutes: 35, seconds: 42 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: Zap,
      text: "Acesso imediato após pagamento"
    },
    {
      icon: Infinity,
      text: "Acesso vitalício ao conteúdo"
    },
    {
      icon: Smartphone,
      text: "100% digital - acesse de qualquer lugar"
    },
    {
      icon: Shield,
      text: "Conteúdo baseado em fontes confiáveis"
    }
  ];

  const paymentMethods = [
    {
      icon: Smartphone,
      name: "PIX",
      detail: "Aprovação instantânea"
    },
    {
      icon: CreditCard,
      name: "Cartão",
      detail: "Em até 12x sem juros"
    },
    {
      icon: FileText,
      name: "Boleto",
      detail: "Aprovação em 1-2 dias úteis"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Investimento para sua <span className="text-primary">preparação segura</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um valor acessível para informações que podem fazer toda a diferença na sua jornada
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Timer de urgência */}
          <div className="bg-gradient-cta rounded-2xl p-6 text-white text-center mb-8 shadow-floating">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Oferta por tempo limitado</span>
            </div>
            <div className="flex justify-center gap-4 text-2xl font-bold">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-sm opacity-80">horas</span>
              </div>
              <span className="self-center">:</span>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-sm opacity-80">min</span>
              </div>
              <span className="self-center">:</span>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-sm opacity-80">seg</span>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <Card className="shadow-floating border-2 border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-hero text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Gestar Segura</h3>
                <p className="opacity-90">Conteúdo digital completo</p>
              </div>

              {/* Price */}
              <div className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground line-through mb-1">
                    De R$ 97,00 por apenas
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    R$ 39<span className="text-xl">,90</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Pagamento único • Acesso vitalício
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-left">
                      <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-cta text-white font-semibold text-lg py-6 mb-6 shadow-floating hover:shadow-card transition-all duration-300 transform hover:scale-105"
                >
                  Quero garantir agora meu acesso
                </Button>

                {/* Payment methods */}
                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    Formas de pagamento seguras:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="text-center p-3 rounded-xl border border-muted hover:border-primary/30 transition-all duration-200">
                        <method.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-sm font-medium text-foreground">{method.name}</div>
                        <div className="text-xs text-muted-foreground">{method.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security badges */}
                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    <span>Compra 100% segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>SSL Criptografado</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guarantee */}
          <div className="mt-8 text-center">
            <div className="bg-lilac-light/20 border border-lilac-light rounded-2xl p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="h-6 w-6 text-lilac" />
                <span className="font-semibold text-foreground">Garantia de 7 dias</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Se o conteúdo não te ajudar como esperado, devolvemos 100% do valor. Sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;