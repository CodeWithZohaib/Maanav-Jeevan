import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
  Users,
  Heart,
  HandHeart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["123 Community Center, Sector 15", "New Delhi - 110001, India"],
    link: "https://maps.google.com",
    linkText: "Get Directions",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 123 456 7890", "+91 987 654 3210"],
    link: "tel:+911234567890",
    linkText: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@mjks.org", "volunteer@mjks.org"],
    link: "mailto:contact@mjks.org",
    linkText: "Send Email",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    link: null,
    linkText: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
];

const inquiryTypes = [
  { id: "general", label: "General Inquiry" },
  { id: "volunteer", label: "Volunteer Opportunity" },
  { id: "donation", label: "Donation Related" },
  { id: "partnership", label: "Partnership / CSR" },
  { id: "media", label: "Media / Press" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "general",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "general",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mb-6 shadow-lg"
            >
              <MessageSquare className="w-10 h-10 text-secondary-foreground" />
            </motion.div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you. 
              Reach out and let's create positive change together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 15px 40px -10px hsl(var(--primary) / 0.15)" }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-md h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.link && (
                    <motion.a
                      href={info.link}
                      whileHover={{ x: 3 }}
                      className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline"
                    >
                      {info.linkText}
                      <Send className="w-3 h-3" />
                    </motion.a>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-3">
              <motion.div
                whileHover={{ boxShadow: "0 20px 60px -15px hsl(var(--primary) / 0.1)" }}
                className="bg-card rounded-3xl p-8 border border-border shadow-lg"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground font-medium mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Phone & Inquiry Type */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType" className="text-foreground font-medium mb-2 block">
                        Inquiry Type *
                      </Label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="xl"
                      variant="warm"
                      className="w-full shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Quick Actions */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border"
                >
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <motion.a
                      href="/donate"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Make a Donation</p>
                        <p className="text-muted-foreground text-sm">Support our cause</p>
                      </div>
                    </motion.a>
                    <motion.a
                      href="/#volunteer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl hover:bg-secondary/5 transition-colors"
                    >
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Become a Volunteer</p>
                        <p className="text-muted-foreground text-sm">Join our team</p>
                      </div>
                    </motion.a>
                    <motion.a
                      href="/#programs"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl hover:bg-accent/5 transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <HandHeart className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Explore Programs</p>
                        <p className="text-muted-foreground text-sm">See our initiatives</p>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-md"
                >
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Connect With Us
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Follow us on social media for updates, stories, and ways to get involved.
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Response Time */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">
                        Quick Response
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We typically respond within 24-48 hours on business days. 
                        For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg h-[400px] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
