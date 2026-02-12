import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onSendHug: () => void;
}

const HeroSection = ({ onSendHug }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background heartbeat effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/10 animate-pulse-glow" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated heart icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Heart 
              className="w-20 h-20 md:w-28 md:h-28 text-primary fill-primary animate-heartbeat drop-shadow-lg" 
            />
            <Heart 
              className="absolute inset-0 w-20 h-20 md:w-28 md:h-28 text-primary fill-primary opacity-30 animate-heartbeat animation-delay-200" 
              style={{ transform: "scale(1.2)" }}
            />
          </div>
        </div>

        {/* Main title */}
        <h1 className="font-cursive text-5xl md:text-7xl lg:text-8xl gradient-text mb-6 animate-slide-up">
          Happy Hug Day 🤗
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light animate-slide-up animation-delay-200">
          A hug is the purest form of love
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up animation-delay-300">
          <Button
            onClick={onSendHug}
            size="lg"
            className="glow-button text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full font-medium text-primary-foreground border-0"
          >
            <Heart className="mr-2 w-5 h-5 md:w-6 md:h-6 animate-heartbeat" />
            Send a Virtual Hug 💕
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-4">
          <span className="text-2xl animate-bounce animation-delay-100">💝</span>
          <span className="text-2xl animate-bounce animation-delay-300">🤗</span>
          <span className="text-2xl animate-bounce animation-delay-500">💖</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
