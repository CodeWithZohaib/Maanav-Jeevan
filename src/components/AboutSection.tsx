import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Sparkles } from "lucide-react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in treating every individual with kindness and understanding.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Target,
      title: "Mission",
      description: "To create sustainable impact through education, healthcare, and community development.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "A world where every person has access to basic needs and opportunities to thrive.",
      color: "bg-accent/10 text-accent-foreground",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <ScrollReveal>
              <motion.span 
                initial={{ width: 0 }}
                animate={isInView ? { width: "3rem" } : { width: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block h-1 bg-primary rounded-full mb-4"
              />
              <span className="block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Transforming Lives Through{" "}
                <span className="text-secondary">Selfless Service</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2010, Maanav Jeevan Kalyan Society has been at the forefront 
                of humanitarian efforts, working tirelessly to uplift underprivileged 
                communities across the region.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our dedicated team of volunteers and staff work round the clock to 
                ensure that help reaches those who need it most. From education to 
                healthcare, from disaster relief to women empowerment – we leave no 
                stone unturned in our mission to serve humanity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {["Education", "Healthcare", "Women Empowerment", "Disaster Relief"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                    className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border cursor-default transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right content - Values cards */}
          <div className="space-y-5">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={0.2 + index * 0.15} direction="right">
                <motion.div
                  whileHover={{ x: 10, boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-5 p-6 bg-card rounded-2xl border border-border group cursor-default"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`flex-shrink-0 w-14 h-14 ${value.color} rounded-xl flex items-center justify-center transition-transform`}
                  >
                    <value.icon className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Central animated element */}
        <div className="mt-24 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
          />
          
          <ScrollReveal className="text-center relative">
            <motion.div
              animate={isInView ? { scale: [0.8, 1.1, 1], rotate: [0, 10, 0] } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg relative"
            >
              <Heart className="w-10 h-10 text-primary-foreground" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary/30 rounded-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-2 -right-2 sm:right-1/4"
            >
              <Sparkles className="w-6 h-6 text-accent" />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-2xl font-display font-semibold text-foreground mt-8 max-w-xl mx-auto">
              "The best way to find yourself is to lose yourself in the service of others."
            </p>
            <p className="text-center text-muted-foreground mt-3">— Mahatma Gandhi</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
