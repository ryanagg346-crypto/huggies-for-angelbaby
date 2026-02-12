import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FallingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const colors = [
  "text-primary fill-primary",
  "text-coral fill-coral",
  "text-lavender fill-lavender",
  "text-accent fill-accent",
];

const FallingHearts = () => {
  const [hearts, setHearts] = useState<FallingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FallingHeart[] = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 15 + 10,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-fall"
          style={{
            left: `${heart.x}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            className={`${heart.color} opacity-60`}
            style={{
              width: heart.size,
              height: heart.size,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;
