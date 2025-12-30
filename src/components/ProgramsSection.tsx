import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, HeartPulse, Home, Sprout, Users, Baby } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Education for All",
    description: "Providing quality education to underprivileged children through schools and scholarship programs.",
    impact: "5,000+ students supported",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Camps",
    description: "Free medical camps in rural areas offering health checkups, medicines, and specialist consultations.",
    impact: "50+ camps annually",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Home,
    title: "Shelter & Housing",
    description: "Building homes for homeless families and providing disaster relief shelter assistance.",
    impact: "200+ homes built",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Sprout,
    title: "Rural Development",
    description: "Empowering villages through sustainable agriculture, clean water, and infrastructure projects.",
    impact: "30+ villages transformed",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development, self-help groups, and microfinance programs for women's independence.",
    impact: "2,000+ women empowered",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Baby,
    title: "Child Welfare",
    description: "Nutrition programs, orphan care, and child rights advocacy for a better future.",
    impact: "3,000+ children helped",
    color: "bg-pink-500/10 text-pink-600",
  },
];

export const ProgramsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section id="programs" className="py-24 bg-muted/50 relative overflow-hidden" ref={sectionRef}>
      {/* Central animated line */}
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary to-primary/0 origin-top"
      />

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Creating <span className="text-primary">Lasting Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Through our diverse programs, we address the most pressing needs of 
            communities and work towards sustainable development.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal
              key={program.title}
              delay={0.1 + (index % 3) * 0.15}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group h-full bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${program.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="inline-flex items-center px-3 py-1.5 bg-secondary/10 rounded-full">
                  <span className="text-sm font-medium text-secondary">
                    {program.impact}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Central pulsing element */}
        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-secondary/20 rounded-full blur-xl"
            />
            <div className="relative w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <Sprout className="w-8 h-8 text-secondary-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
