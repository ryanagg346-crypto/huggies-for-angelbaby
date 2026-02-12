import { useState, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import HeroSection from "@/components/HeroSection";
import VirtualHug from "@/components/VirtualHug";
import LoveQuotes from "@/components/LoveQuotes";
import PersonalMessage from "@/components/PersonalMessage";
import EndingSection from "@/components/EndingSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const hugSectionRef = useRef<HTMLDivElement>(null);

  const scrollToHug = () => {
    hugSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(340, 100%, 98%) 0%, hsl(340, 82%, 97%) 25%, hsl(270, 67%, 97%) 50%, hsl(30, 100%, 97%) 75%, hsl(340, 100%, 98%) 100%)",
      }}
    >
      {/* Background effects */}
      <FloatingHearts />
      <Sparkles />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection onSendHug={scrollToHug} />
        
        <div ref={hugSectionRef}>
          <VirtualHug />
        </div>
        
        <LoveQuotes />
        
        <PersonalMessage />
        
        <EndingSection />
      </main>

      {/* Music toggle */}
      <MusicToggle />

      {/* Gradient overlay at bottom */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-40"
        style={{
          background: "linear-gradient(to top, hsl(340, 100%, 98%), transparent)",
        }}
      />
    </div>
  );
};

export default Index;
