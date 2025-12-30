import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, HeartPulse, Home, Sprout, Users, Baby, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Education for All",
    description: "Providing quality education to underprivileged children through schools and scholarship programs.",
    impact: "5,000+ students supported",
    gradient: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Camps",
    description: "Free medical camps in rural areas offering health checkups, medicines, and specialist consultations.",
    impact: "50+ camps annually",
    gradient: "from-rose-500/20 to-rose-600/10",
    iconColor: "text-rose-600",
  },
  {
    icon: Home,
    title: "Shelter & Housing",
    description: "Building homes for homeless families and providing disaster relief shelter assistance.",
    impact: "200+ homes built",
    gradient: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Sprout,
    title: "Rural Development",
    description: "Empowering villages through sustainable agriculture, clean water, and infrastructure projects.",
    impact: "30+ villages transformed",
    gradient: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development, self-help groups, and microfinance programs for women's independence.",
    impact: "2,000+ women empowered",
    gradient: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Baby,
    title: "Child Welfare",
    description: "Nutrition programs, orphan care, and child rights advocacy for a better future.",
    impact: "3,000+ children helped",
    gradient: "from-pink-500/20 to-pink-600/10",
    iconColor: "text-pink-600",
  },
];

export const ProgramsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section id="programs" className="py-24 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      {/* Central animated line */}
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 origin-top hidden lg:block"
      />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-40 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: "3rem" } : { width: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block h-1 bg-secondary rounded-full mb-4"
          />
          <span className="block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ScrollReveal
              key={program.title}
              delay={0.1 + (index % 3) * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group h-full bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${program.gradient} transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} mb-6`}
                  >
                    <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {program.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        {program.impact}
                      </span>
                    </div>
                    <motion.div
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 5, opacity: 1 }}
                      className="text-primary"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
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
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-secondary/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 bg-secondary/20 rounded-full blur-lg"
            />
            <div className="relative w-16 h-16 bg-gradient-to-br from-secondary to-teal-light rounded-full flex items-center justify-center shadow-lg">
              <Sprout className="w-8 h-8 text-secondary-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
