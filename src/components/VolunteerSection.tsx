import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Clock, MapPin, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const volunteerPerks = [
  {
    icon: Heart,
    title: "Make a Difference",
    description: "Directly impact lives and contribute to meaningful change in communities.",
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with like-minded individuals who share your passion for service.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Volunteer at your own pace with weekday and weekend opportunities.",
  },
  {
    icon: MapPin,
    title: "Local & Remote",
    description: "Choose from on-ground activities or support from anywhere.",
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
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Join Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Become a <span className="text-primary">Volunteer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your time and skills can make an incredible difference. Join our family 
            of 500+ volunteers making the world a better place.
          </p>
        </ScrollReveal>

        {/* Perks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {volunteerPerks.map((perk, index) => (
            <ScrollReveal key={perk.title} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 bg-card rounded-2xl border border-border"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15 }}
                  className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4"
                >
                  <perk.icon className="w-7 h-7 text-primary" />
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="bg-primary rounded-3xl p-8 sm:p-10 text-primary-foreground">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">
                Ready to Make a Difference?
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Fill out the form and our volunteer coordinator will reach out 
                to discuss how you can contribute to our mission. Whether you have 
                a few hours a week or want to commit long-term, there's a place 
                for you here.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <span>Fill the volunteer form</span>
                </div>
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <span>Attend orientation session</span>
                </div>
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <span>Start volunteering!</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-card border-border"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 bg-card border-border"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us why you want to volunteer and any skills you'd like to share..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button type="submit" variant="warm" size="lg" className="w-full">
                <Users className="w-5 h-5" />
                Submit Application
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
