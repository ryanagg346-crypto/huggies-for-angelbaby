import { Heart } from "lucide-react";
import FallingHearts from "./FallingHearts";

const EndingSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <FallingHearts />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-8 md:p-16">
          {/* Heart decoration */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Heart className="w-20 h-20 text-primary fill-primary animate-heartbeat" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">🤍</span>
              </div>
            </div>
          </div>

          <h2 className="font-cursive text-3xl md:text-5xl lg:text-6xl gradient-text mb-6">
            No matter the distance,
            <br />
            my hug reaches you 🤍
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Because love knows no boundaries, and a heartfelt hug can travel across 
            any distance to warm your soul.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <span className="text-4xl animate-bounce animation-delay-100">💝</span>
            <span className="text-4xl animate-bounce animation-delay-200">🤗</span>
            <span className="text-4xl animate-bounce animation-delay-300">💖</span>
            <span className="text-4xl animate-bounce animation-delay-500">🥰</span>
            <span className="text-4xl animate-bounce animation-delay-700">💕</span>
          </div>

          {/* Footer message */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <p className="font-cursive text-xl text-primary">
              Share the love, spread the hugs! ✨
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Happy Hug Day 2026 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndingSection;
