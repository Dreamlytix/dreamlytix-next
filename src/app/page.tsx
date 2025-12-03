import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Hero from "@/components/sections/Hero/Hero";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Services from "@/components/sections/Services/Services";
import TechStack from "@/components/sections/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TechStack />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
