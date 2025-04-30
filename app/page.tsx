import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExpertiseSection from "./sections/ExpertiseSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
