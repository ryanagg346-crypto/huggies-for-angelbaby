import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a romantic ambient track
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1bab.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    audioRef.current.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Audio playback failed");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Button
      onClick={toggleMusic}
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
      title={isPlaying ? "Mute music" : "Play romantic music"}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-primary animate-pulse" />
      ) : (
        <VolumeX className="w-6 h-6 text-muted-foreground" />
      )}
      
      {/* Pulsing ring when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
      )}
    </Button>
  );
};

export default MusicToggle;
