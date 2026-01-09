import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/#about", isHash: true },
    { name: "Our Programs", href: "/#programs", isHash: true },
    { name: "Volunteer", href: "/#volunteer", isHash: true },
    { name: "Donate", href: "/donate", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ];

  const programs = [
    "Education for All",
    "Healthcare Camps",
    "Women Empowerment",
    "Rural Development",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16 relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg text-primary-foreground"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <ScrollReveal>
            <div>
              <a href="#home" className="flex items-center gap-2 mb-4">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <span className="font-display text-lg font-semibold">
                  Maanav Jeevan
                </span>
              </a>
              <p className="text-background/70 mb-6 leading-relaxed">
                Dedicated to serving humanity through compassion, action, and 
                sustainable development programs.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.isHash ? (
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-background/70 hover:text-primary transition-colors duration-300 inline-block"
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <motion.div whileHover={{ x: 5 }} className="inline-block">
                        <Link
                          to={link.href}
                          className="text-background/70 hover:text-primary transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Programs */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Our Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program}>
                    <span className="text-background/70">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-background/70">
                    123 Community Center, Sector 15, New Delhi - 110001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <motion.a 
                    href="tel:+911234567890" 
                    whileHover={{ x: 3 }}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    +91 123 456 7890
                  </motion.a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <motion.a 
                    href="mailto:contact@mjks.org" 
                    whileHover={{ x: 3 }}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    contact@mjks.org
                  </motion.a>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-background/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-background/60 text-sm">
            <p>© 2024 Maanav Jeevan Kalyan Society. All rights reserved.</p>
            <div className="flex gap-6">
              <motion.a href="#" whileHover={{ y: -2 }} className="hover:text-primary transition-colors">
                Privacy Policy
              </motion.a>
              <motion.a href="#" whileHover={{ y: -2 }} className="hover:text-primary transition-colors">
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
