import { Hero } from "@/components/hero";
import { ParticleBackground } from "@/components/particle-background";
import { SelectedWork } from "@/components/selected-work";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { FloatingNav } from "@/components/floating-nav";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black">
      <FloatingNav />

      <ParticleBackground />
      <Hero />
      <SelectedWork />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
