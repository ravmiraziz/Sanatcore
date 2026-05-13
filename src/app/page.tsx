import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TrophiesSection from "@/components/sections/TrophiesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TrophiesSection />
      <ClientsSection />
      <NewsSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
