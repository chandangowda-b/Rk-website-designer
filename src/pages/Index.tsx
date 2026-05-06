import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Intro } from "@/components/site/Intro";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { People } from "@/components/site/People";
import { About } from "@/components/site/About";
import { Contact, Footer } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Rk Landmark — Architecture, Construction & Design Studio";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Rk Landmark is an award-winning architecture, construction and interior design studio crafting residential, commercial and urban spaces worldwide."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Projects />
      <Services />
      <People />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
