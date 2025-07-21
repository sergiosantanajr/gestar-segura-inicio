import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import LearningSection from "@/components/LearningSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import QuizSection from "@/components/QuizSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatIsSection />
      <LearningSection />
      <TargetAudienceSection />
      <QuizSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <FloatingCTA />
    </div>
  );
};

export default Index;
