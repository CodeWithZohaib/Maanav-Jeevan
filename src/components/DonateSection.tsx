import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Sparkles, Check } from "lucide-react";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const donationImpact = [
  { amount: 500, impact: "Provides books for 5 children" },
  { amount: 1000, impact: "One month's nutrition for a child" },
  { amount: 2500, impact: "Medical checkup for 10 families" },
  { amount: 5000, impact: "Skill training for 2 women" },
  { amount: 10000, impact: "School fees for 1 year" },
];

export const DonateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedAmount, setSelectedAmount] = useState(1000);

  const currentImpact = donationImpact.find((d) => d.amount === selectedAmount)?.impact || "";

  return (
    <section id="donate" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Animated shapes */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-6"
            >
              <HandHeart className="w-10 h-10 text-secondary-foreground" />
            </motion.div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Support Our <span className="text-secondary">Mission</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Every contribution, no matter how small, creates ripples of change. 
              Your donation helps us continue our work and reach more lives.
            </p>
          </ScrollReveal>

          {/* Central animated heart */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="flex justify-center mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative"
            >
              <Heart className="w-16 h-16 text-secondary fill-secondary" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Heart className="w-16 h-16 text-secondary" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Amount selection */}
          <ScrollReveal delay={0.2}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
              <div className="text-center mb-8">
                <p className="text-primary-foreground/80 mb-4">Select Amount (₹)</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {donationAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedAmount(amount)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? "bg-secondary text-secondary-foreground shadow-lg"
                          : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Impact display */}
              <motion.div
                key={selectedAmount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8 py-4 border-y border-primary-foreground/10"
              >
                <div className="flex items-center justify-center gap-2 text-secondary">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">{currentImpact}</span>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
                >
                  <Heart className="w-5 h-5" />
                  Donate ₹{selectedAmount.toLocaleString()}
                </Button>
                <Button
                  size="xl"
                  variant="hero-outline"
                >
                  Monthly Giving
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-primary-foreground/70 text-sm">
                {["100% Tax Deductible", "Secure Payment", "Instant Receipt"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
