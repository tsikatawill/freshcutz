import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
