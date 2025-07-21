import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marina Silva",
      age: 32,
      location: "São Paulo, SP",
      text: "O Gestar Segura me deu a segurança que eu precisava. Estava perdida sobre quais exames fazer e como me preparar. Agora me sinto muito mais confiante para engravidar.",
      rating: 5,
      highlight: "Segurança e confiança"
    },
    {
      name: "Juliana Costa",
      age: 28,
      location: "Belo Horizonte, MG",
      text: "Depois de uma perda, eu estava com medo de tentar novamente. O conteúdo me ajudou a entender melhor os fatores de risco e como me preparar adequadamente. Muito completo!",
      rating: 5,
      highlight: "Superou medos e dúvidas"
    },
    {
      name: "Carolina Mendes",
      age: 35,
      location: "Rio de Janeiro, RJ",
      text: "Informação técnica de qualidade em linguagem acessível. Como médica, posso dizer que o conteúdo é bem fundamentado e as fontes são confiáveis. Recomendo!",
      rating: 5,
      highlight: "Validado por profissional"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que dizem quem já <span className="text-primary">acessou</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de mulheres que se sentiram mais preparadas e seguras
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-floating overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Testimonial Content */}
                <div className="p-8 md:p-12">
                  <div className="flex justify-center mb-6">
                    <Quote className="h-12 w-12 text-primary opacity-20" />
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                        <Star key={index} className="h-5 w-5 text-salmon fill-salmon" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    <div className="inline-block bg-primary-light px-4 py-2 rounded-full mb-4">
                      <span className="text-sm font-medium text-primary">
                        {testimonials[currentTestimonial].highlight}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentTestimonial].age} anos • {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white/90 border-primary-light/30 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white/90 border-primary-light/30 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* CTA after testimonials */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-cta text-white font-semibold px-8 py-6 shadow-floating hover:shadow-card transition-all duration-300 transform hover:scale-105"
            >
              Quero ter essa segurança também
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;