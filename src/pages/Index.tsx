import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { VolunteerSection } from "@/components/VolunteerSection";
import { DonateSection } from "@/components/DonateSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <VolunteerSection />
      <DonateSection />
      <Footer />
    </main>
  );
};

export default Index;
