import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const quotes = [
  {
    text: "A hug is a perfect gift—one size fits all, and nobody minds if you exchange it.",
    author: "Unknown"
  },
  {
    text: "Sometimes, a silent hug is the only thing to say.",
    author: "Unknown"
  },
  {
    text: "Hugging is the most beautiful form of communication that allows the other person to know beyond a doubt that they matter.",
    author: "Unknown"
  },
  {
    text: "A hug is like a boomerang—you get it back right away.",
    author: "Bil Keane"
  },
  {
    text: "Never wait until tomorrow to hug someone you could hug today.",
    author: "Unknown"
  },
  {
    text: "A hug is the shortest distance between friends.",
    author: "Unknown"
  },
  {
    text: "Millions and millions of years would still not give me half enough time to describe that tiny instant of all eternity when you put your arms around me.",
    author: "Jacques Prévert"
  },
];

const LoveQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentQuote]);

  const nextQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cursive text-4xl md:text-6xl gradient-text mb-4">
          Words of Love
        </h2>
        <p className="text-muted-foreground mb-12">
          Beautiful thoughts about the power of hugs
        </p>

        <div className="relative">
          {/* Quote card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mx-4 md:mx-12">
            <Quote className="w-10 h-10 text-primary/30 mb-6 mx-auto" />
            
            <div
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-6 font-light">
                "{quotes[currentQuote].text}"
              </p>
              <p className="text-primary font-medium flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 fill-primary" />
                {quotes[currentQuote].author}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevQuote}
              className="rounded-full w-12 h-12 glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentQuote(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? "bg-primary w-6"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextQuote}
              className="rounded-full w-12 h-12 glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveQuotes;
