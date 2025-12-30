import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Sparkles, Check, ArrowRight } from "lucide-react";

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
    <section id="donate" className="py-24 relative overflow-hidden bg-background" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], rotate: [90, 0, 90] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6 shadow-lg"
            >
              <HandHeart className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Support Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
              <Heart className="w-16 h-16 text-primary fill-primary" />
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Heart className="w-16 h-16 text-primary/50" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 2.2, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="absolute inset-0"
              >
                <Heart className="w-16 h-16 text-primary/30" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Amount selection */}
          <ScrollReveal delay={0.2}>
            <motion.div 
              whileHover={{ boxShadow: "0 20px 60px -15px hsl(var(--primary) / 0.2)" }}
              className="bg-card rounded-3xl p-8 sm:p-10 border border-border shadow-lg"
            >
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-4 font-medium">Select Amount (₹)</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {donationAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedAmount(amount)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-muted text-foreground hover:bg-primary/10"
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
                className="text-center mb-8 py-5 bg-secondary/10 rounded-2xl"
              >
                <div className="flex items-center justify-center gap-2 text-secondary">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold text-lg">{currentImpact}</span>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="xl"
                    variant="warm"
                    className="shadow-lg w-full sm:w-auto"
                  >
                    <Heart className="w-5 h-5" />
                    Donate ₹{selectedAmount.toLocaleString()}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="xl"
                    variant="outline"
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto"
                  >
                    Monthly Giving
                  </Button>
                </motion.div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-muted-foreground text-sm">
                {["100% Tax Deductible", "Secure Payment", "Instant Receipt"].map((item, index) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Check className="w-4 h-4 text-secondary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
