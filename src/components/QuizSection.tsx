import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle, Clock, Target } from "lucide-react";

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions = [
    {
      question: "Há quanto tempo você está tentando engravidar?",
      options: [
        { value: "não-tentando", label: "Ainda não comecei, mas planejo em breve" },
        { value: "0-6-meses", label: "Há menos de 6 meses" },
        { value: "6-12-meses", label: "Entre 6 meses e 1 ano" },
        { value: "mais-1-ano", label: "Há mais de 1 ano" }
      ]
    },
    {
      question: "Você já fez exames pré-gestacionais?",
      options: [
        { value: "nenhum", label: "Nunca fiz exames específicos" },
        { value: "alguns", label: "Fiz alguns exames básicos" },
        { value: "completos", label: "Fiz um check-up completo recente" },
        { value: "não-sei", label: "Não sei quais exames são necessários" }
      ]
    },
    {
      question: "Como você avalia seu conhecimento sobre preparação para gravidez?",
      options: [
        { value: "nenhum", label: "Sei muito pouco sobre o assunto" },
        { value: "básico", label: "Tenho conhecimento básico" },
        { value: "intermediário", label: "Sei algumas coisas importantes" },
        { value: "avançado", label: "Me considero bem informada" }
      ]
    },
    {
      question: "Com que frequência você consegue consultar um médico?",
      options: [
        { value: "difícil", label: "Tenho dificuldade de acesso" },
        { value: "ocasional", label: "Apenas quando necessário" },
        { value: "regular", label: "Consulto regularmente" },
        { value: "frequente", label: "Tenho acompanhamento frequente" }
      ]
    }
  ];

  const getResult = () => {
    const score = answers.reduce((total, answer) => {
      if (answer === "não-tentando" || answer === "nenhum" || answer === "não-sei" || answer === "difícil") return total + 1;
      if (answer === "alguns" || answer === "básico" || answer === "ocasional") return total + 2;
      if (answer === "0-6-meses" || answer === "intermediário" || answer === "regular") return total + 3;
      return total + 4;
    }, 0);

    if (score <= 8) {
      return {
        title: "Você está no início da jornada",
        description: "O Gestar Segura é perfeito para você! Você precisa de uma base sólida de conhecimento para começar sua preparação com segurança.",
        icon: Target,
        color: "salmon",
        urgency: "alta"
      };
    } else if (score <= 12) {
      return {
        title: "Você tem conhecimento básico",
        description: "O Gestar Segura vai complementar e estruturar melhor o que você já sabe, dando mais confiança e direcionamento.",
        icon: Clock,
        color: "primary",
        urgency: "média"
      };
    } else {
      return {
        title: "Você está bem informada",
        description: "O Gestar Segura pode ser uma excelente ferramenta de consulta e validação do seu conhecimento atual.",
        icon: CheckCircle,
        color: "lilac",
        urgency: "baixa"
      };
    }
  };

  const handleAnswer = (value: string) => {
    setSelectedAnswer(value);
  };

  const nextQuestion = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      setSelectedAnswer("");

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedAnswer("");
  };

  const result = showResult ? getResult() : null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Diagnóstico Rápido: <span className="text-primary">Qual seu perfil?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Responda 4 perguntas simples e descubra como o Gestar Segura pode te ajudar
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <Card className="shadow-card border border-primary-light/20">
              <CardContent className="p-8">
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-cta h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {questions[currentQuestion].question}
                </h3>

                <RadioGroup value={selectedAnswer} onValueChange={handleAnswer} className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-xl border border-muted hover:border-primary/30 hover:bg-primary-light/5 transition-all duration-200 cursor-pointer">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer text-foreground">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <Button 
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  className="w-full mt-8 bg-gradient-cta text-white"
                  size="lg"
                >
                  {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima Pergunta"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-floating border border-primary-light/20">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-${result?.color}-light rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {result?.icon && <result.icon className={`h-10 w-10 text-${result.color}`} />}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {result?.title}
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {result?.description}
                </p>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-cta text-white font-semibold"
                  >
                    Quero acessar o Gestar Segura agora
                  </Button>

                  <Button 
                    variant="outline" 
                    onClick={resetQuiz}
                    className="w-full"
                  >
                    Refazer o teste
                  </Button>
                </div>

                {result?.urgency === "alta" && (
                  <div className="mt-6 p-4 bg-salmon-light/20 border border-salmon-light rounded-xl">
                    <div className="flex items-center gap-2 text-salmon">
                      <AlertCircle className="h-5 w-5" />
                      <span className="font-medium">Recomendação especial para você!</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Seu perfil indica alta necessidade de orientação. O Gestar Segura pode ser seu primeiro passo essencial.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;