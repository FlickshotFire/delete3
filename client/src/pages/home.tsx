import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import CurrentProjects from "@/components/sections/current-projects";
import ParticleSystem from "@/components/3d/particle-system";

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-black text-white overflow-x-hidden">
      <ParticleSystem />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CurrentProjects />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}