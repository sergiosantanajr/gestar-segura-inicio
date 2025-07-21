import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isExpanded ? (
        // Compact floating button
        <Button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 rounded-full bg-gradient-cta text-white shadow-floating hover:shadow-card transition-all duration-300 transform hover:scale-110 group"
        >
          <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      ) : (
        // Expanded card
        <div className="bg-white rounded-2xl shadow-floating border border-primary-light/20 p-6 max-w-sm animate-scale-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-foreground mb-1">Gestar Segura</h3>
              <p className="text-sm text-muted-foreground">Preparação completa para gravidez</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="h-8 w-8 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">R$ 39,90</div>
              <div className="text-xs text-muted-foreground line-through">De R$ 97,00</div>
            </div>
            
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✅ Acesso imediato</li>
              <li>✅ Conteúdo vitalício</li>
              <li>✅ Baseado em evidências</li>
            </ul>
            
            <Button 
              className="w-full bg-gradient-cta text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Garantir Acesso Agora
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              🔒 Pagamento 100% seguro
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;