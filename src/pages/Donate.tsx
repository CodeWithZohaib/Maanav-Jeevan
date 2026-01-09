import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, HandHeart, Sparkles, Check, ArrowRight, CreditCard, Shield, Clock, Users } from "lucide-react";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const donationImpact = [
  { amount: 500, impact: "Provides books for 5 children" },
  { amount: 1000, impact: "One month's nutrition for a child" },
  { amount: 2500, impact: "Medical checkup for 10 families" },
  { amount: 5000, impact: "Skill training for 2 women" },
  { amount: 10000, impact: "School fees for 1 year" },
  { amount: 25000, impact: "Complete family support for 6 months" },
];

const donationTypes = [
  { id: "one-time", label: "One-time", icon: Heart },
  { id: "monthly", label: "Monthly", icon: Clock },
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    panNumber: "",
    address: "",
  });

  const currentImpact = donationImpact.find((d) => d.amount === selectedAmount)?.impact || 
    (selectedAmount > 25000 ? "Major community development project" : "Making a difference in lives");

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    if (value && !isNaN(Number(value))) {
      setSelectedAmount(Number(value));
    }
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
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
          <ScrollReveal className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6 shadow-lg"
            >
              <HandHeart className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Make a <span className="text-primary">Difference</span> Today
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your generosity fuels our mission to uplift communities and transform lives. 
              Every rupee counts in creating lasting change.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="pb-24 relative">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Donation Form - Main */}
              <ScrollReveal className="lg:col-span-3">
                <motion.div
                  whileHover={{ boxShadow: "0 20px 60px -15px hsl(var(--primary) / 0.15)" }}
                  className="bg-card rounded-3xl p-8 border border-border shadow-lg"
                >
                  {/* Donation Type */}
                  <div className="mb-8">
                    <Label className="text-foreground font-semibold mb-4 block">Donation Type</Label>
                    <div className="flex gap-3">
                      {donationTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setDonationType(type.id)}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            donationType === type.id
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "bg-muted text-foreground hover:bg-primary/10"
                          }`}
                        >
                          <type.icon className="w-4 h-4" />
                          {type.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <Label className="text-foreground font-semibold mb-4 block">Select Amount (₹)</Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {donationAmounts.map((amount) => (
                        <motion.button
                          key={amount}
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-3 rounded-xl font-semibold transition-all duration-300 ${
                            selectedAmount === amount && !customAmount
                              ? "bg-primary text-primary-foreground shadow-lg"
                              : "bg-muted text-foreground hover:bg-primary/10"
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </motion.button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₹</span>
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="pl-8 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Impact Display */}
                  <motion.div
                    key={selectedAmount}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 py-4 px-5 bg-secondary/10 rounded-2xl"
                  >
                    <div className="flex items-center gap-2 text-secondary">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-semibold">{currentImpact}</span>
                    </div>
                  </motion.div>

                  {/* Donor Information */}
                  <div className="space-y-4 mb-8">
                    <Label className="text-foreground font-semibold block">Your Information</Label>
                    <Input
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <Input
                      placeholder="PAN Number (for 80G certificate)"
                      value={formData.panNumber}
                      onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                    <Input
                      placeholder="Address (optional)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="xl"
                      variant="warm"
                      className="w-full shadow-lg text-lg"
                    >
                      <CreditCard className="w-5 h-5" />
                      Donate ₹{selectedAmount.toLocaleString()} {donationType === "monthly" && "/ month"}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </motion.div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-6 mt-6 text-muted-foreground text-sm">
                    {[
                      { icon: Check, text: "100% Tax Deductible" },
                      { icon: Shield, text: "Secure Payment" },
                      { icon: Clock, text: "Instant Receipt" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-secondary" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Sidebar - Impact Info */}
              <ScrollReveal delay={0.2} className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Why Donate */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-card rounded-2xl p-6 border border-border shadow-md"
                  >
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Why Your Donation Matters
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "100% of donations go to programs",
                        "Transparent fund utilization",
                        "Regular impact updates",
                        "Tax benefits under 80G",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border"
                  >
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Our Impact So Far
                    </h3>
                    <div className="space-y-4">
                      {[
                        { number: "15,000+", label: "Lives Impacted" },
                        { number: "50+", label: "Active Programs" },
                        { number: "₹2Cr+", label: "Funds Utilized" },
                      ].map((stat) => (
                        <div key={stat.label} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{stat.label}</span>
                          <span className="font-display font-bold text-primary text-lg">{stat.number}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Contact for Large Donations */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      Planning a Large Donation?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      For donations above ₹1 Lakh, contact us for personalized assistance.
                    </p>
                    <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Donate;
