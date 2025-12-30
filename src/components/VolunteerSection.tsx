import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Clock, MapPin, Heart, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const volunteerPerks = [
  {
    icon: Heart,
    title: "Make a Difference",
    description: "Directly impact lives and contribute to meaningful change in communities.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with like-minded individuals who share your passion for service.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Volunteer at your own pace with weekday and weekend opportunities.",
    color: "bg-accent/10 text-accent-foreground",
  },
  {
    icon: MapPin,
    title: "Local & Remote",
    description: "Choose from on-ground activities or support from anywhere.",
    color: "bg-purple-100 text-purple-600",
  },
];

export const VolunteerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="volunteer" className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: "3rem" } : { width: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block h-1 bg-primary rounded-full mb-4"
          />
          <span className="block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Join Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Become a <span className="text-secondary">Volunteer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your time and skills can make an incredible difference. Join our family 
            of 500+ volunteers making the world a better place.
          </p>
        </ScrollReveal>

        {/* Perks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {volunteerPerks.map((perk, index) => (
            <ScrollReveal key={perk.title} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-14 h-14 ${perk.color} rounded-xl mb-4`}
                >
                  <perk.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {perk.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {perk.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Central animated element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16"
        />

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 sm:p-10 text-primary-foreground shadow-xl relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">
                  Ready to Make a Difference?
                </h3>
                <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                  Fill out the form and our volunteer coordinator will reach out 
                  to discuss how you can contribute to our mission. Whether you have 
                  a few hours a week or want to commit long-term, there's a place 
                  for you here.
                </p>
                
                <div className="space-y-5">
                  {[
                    "Fill the volunteer form",
                    "Attend orientation session",
                    "Start volunteering!",
                  ].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                      className="flex items-center gap-4 text-primary-foreground/95"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <span className="font-medium">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div whileFocus={{ scale: 1.01 }}>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-13 bg-card border-border focus:border-primary transition-colors"
                />
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-13 bg-card border-border focus:border-primary transition-colors"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-13 bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us why you want to volunteer and any skills you'd like to share..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card border-border resize-none focus:border-primary transition-colors"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" variant="warm" size="lg" className="w-full shadow-lg">
                  <Send className="w-5 h-5" />
                  Submit Application
                </Button>
              </motion.div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>We respond within 24 hours</span>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
