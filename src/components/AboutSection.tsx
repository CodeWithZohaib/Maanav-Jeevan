import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in treating every individual with kindness and understanding.",
    },
    {
      icon: Target,
      title: "Mission",
      description: "To create sustainable impact through education, healthcare, and community development.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "A world where every person has access to basic needs and opportunities to thrive.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Transforming Lives Through{" "}
                <span className="text-primary">Selfless Service</span>
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
              <div className="flex flex-wrap gap-4">
                {["Education", "Healthcare", "Women Empowerment", "Disaster Relief"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right content - Values cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={0.2 + index * 0.15} direction="right">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-5 p-6 bg-card rounded-2xl border border-border card-hover"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
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
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-secondary to-transparent origin-center"
          />
          
          <ScrollReveal className="text-center">
            <motion.div
              animate={isInView ? { scale: [0.8, 1.1, 1] } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full shadow-lg"
            >
              <Heart className="w-10 h-10 text-secondary-foreground" />
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
