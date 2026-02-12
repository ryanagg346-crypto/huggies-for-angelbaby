import { useState } from "react";
import { Heart, Send, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const PersonalMessage = () => {
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = () => {
    if (message.trim() || recipientName.trim()) {
      setShowPreview(true);
    }
  };

  const handleReset = () => {
    setShowPreview(false);
  };

  return (
    <section className="py-20 px-4" id="personal-message">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cursive text-4xl md:text-6xl gradient-text mb-4">
            Create Your Hug Card
          </h2>
          <p className="text-muted-foreground">
            Write a heartfelt message for someone special
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input section */}
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  To (Name)
                </label>
                <Input
                  placeholder="Enter their name..."
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="rounded-xl border-primary/20 focus:border-primary bg-card/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  placeholder="Write your heartfelt hug message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl border-primary/20 focus:border-primary bg-card/50 min-h-[150px] resize-none"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerate}
                  className="flex-1 glow-button rounded-xl py-6 text-primary-foreground"
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Generate Card
                </Button>
                {showPreview && (
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="rounded-xl border-primary/30 hover:bg-primary/10"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Preview section */}
          <div className="relative">
            <div
              className={`glass-card rounded-3xl p-6 md:p-8 transition-all duration-500 ${
                showPreview
                  ? "opacity-100 transform scale-100"
                  : "opacity-50 transform scale-95"
              }`}
              style={{
                background: "linear-gradient(135deg, hsl(340, 82%, 95%) 0%, hsl(270, 67%, 92%) 50%, hsl(30, 100%, 95%) 100%)",
              }}
            >
              {/* Decorative hearts */}
              <div className="absolute top-4 left-4">
                <Heart className="w-6 h-6 text-primary/40 fill-primary/40" />
              </div>
              <div className="absolute top-4 right-4">
                <Heart className="w-6 h-6 text-primary/40 fill-primary/40" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Heart className="w-4 h-4 text-coral/40 fill-coral/40" />
              </div>
              <div className="absolute bottom-4 right-4">
                <Heart className="w-4 h-4 text-coral/40 fill-coral/40" />
              </div>

              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground mb-2">To</p>
                <p className="font-cursive text-3xl text-primary mb-6">
                  {recipientName || "Someone Special"} 💝
                </p>

                <div className="relative inline-block mb-6">
                  <Heart className="w-16 h-16 text-primary fill-primary animate-heartbeat" />
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6 px-4">
                  {message || "Your beautiful message will appear here..."}
                </p>

                <div className="border-t border-primary/20 pt-6">
                  <p className="font-cursive text-2xl text-primary">
                    Happy Hug Day! 🤗
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Sent with love 💕
                  </p>
                </div>
              </div>
            </div>

            {showPreview && (
              <div className="flex justify-center mt-4">
                <Button
                  variant="outline"
                  className="rounded-xl border-primary/30 hover:bg-primary/10"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Save Card
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalMessage;
