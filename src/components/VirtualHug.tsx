import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const VirtualHug = () => {
  const [isHugging, setIsHugging] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [burstHearts, setBurstHearts] = useState<number[]>([]);

  const handleHug = () => {
    setIsHugging(true);
    
    // Create burst hearts
    const newHearts = Array.from({ length: 12 }, (_, i) => i);
    setBurstHearts(newHearts);

    setTimeout(() => {
      setShowMessage(true);
    }, 400);

    setTimeout(() => {
      setIsHugging(false);
      setShowMessage(false);
      setBurstHearts([]);
    }, 3000);
  };

  return (
    <section className="relative py-20 px-4" id="virtual-hug">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cursive text-4xl md:text-6xl gradient-text mb-8 animate-fade-in">
          Feel the Warmth
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Click to receive a warm virtual hug from someone who cares
        </p>

        <div className="relative flex justify-center items-center min-h-[300px]">
          {/* Hug animation container */}
          <div className="relative">
            {/* Left arm */}
            <div
              className={`absolute -left-20 md:-left-32 top-1/2 -translate-y-1/2 text-6xl md:text-8xl transition-transform duration-500 ${
                isHugging ? "animate-hug-left" : ""
              }`}
            >
              🤗
            </div>

            {/* Center heart button */}
            <Button
              onClick={handleHug}
              disabled={isHugging}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full glass-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 disabled:opacity-100"
            >
              <Heart
                className={`w-16 h-16 md:w-20 md:h-20 text-primary fill-primary ${
                  isHugging ? "animate-heartbeat" : ""
                }`}
              />
              
              {/* Heart burst animation */}
              {burstHearts.map((heart) => (
                <Heart
                  key={heart}
                  className="absolute w-6 h-6 text-primary fill-primary animate-heart-burst"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${heart * 30}deg) translateY(-50px)`,
                    animationDelay: `${heart * 0.05}s`,
                  }}
                />
              ))}
            </Button>

            {/* Right arm */}
            <div
              className={`absolute -right-20 md:-right-32 top-1/2 -translate-y-1/2 text-6xl md:text-8xl transition-transform duration-500 ${
                isHugging ? "animate-hug-right" : ""
              }`}
              style={{ transform: "translateY(-50%) scaleX(-1)" }}
            >
              🤗
            </div>
          </div>
        </div>

        {/* Hug message */}
        <div
          className={`mt-8 transition-all duration-500 ${
            showMessage
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 inline-block">
            <p className="font-cursive text-2xl md:text-4xl text-primary">
              You are hugged tightly 💖
            </p>
            <p className="text-muted-foreground mt-2">
              Feel the warmth spreading through your heart
            </p>
          </div>
        </div>

        {!isHugging && !showMessage && (
          <p className="mt-8 text-sm text-muted-foreground animate-pulse">
            Tap the heart to receive a hug
          </p>
        )}
      </div>
    </section>
  );
};

export default VirtualHug;
