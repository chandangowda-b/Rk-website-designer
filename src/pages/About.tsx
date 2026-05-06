import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";
import hero from "@/assets/hero-building.jpg";
import studio from "@/assets/about-studio.jpg";
import interior from "@/assets/project-interior.jpg";

const values = [
  { t: "Integrity", d: "We say what we mean and we draw what we build. Trust is the foundation of every commission." },
  { t: "Excellence", d: "A relentless standard of craft — from the first sketch to the final detail on site." },
  { t: "Sustainability", d: "Every project tracks toward net-zero. Carbon is a design material, not an afterthought." },
  { t: "Innovation", d: "Computational design, prototyping and research that advance how buildings are made." },
  { t: "Client Commitment", d: "Senior-led delivery. The partner who designs your project is the partner you will know." },
];

const reasons = [
  { n: "01", t: "Experienced professionals", d: "Architects, engineers and builders with decades of cross-disciplinary practice." },
  { n: "02", t: "Premium execution", d: "Detailing supervised in person. Materials specified to last generations." },
  { n: "03", t: "End-to-end solutions", d: "From feasibility and design through construction, fit-out and aftercare." },
  { n: "04", t: "Timely delivery", d: "Programme discipline backed by integrated planning and procurement." },
  { n: "05", t: "Trusted partnerships", d: "Long-standing relationships with clients, consultants and master craftspeople." },
];

const stats = [
  { v: "26", l: "Years of practice" },
  { v: "340+", l: "Projects delivered" },
  { v: "120", l: "Specialists in studio" },
  { v: "98%", l: "Client satisfaction" },
];

const AboutPage = () => {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About — Alder & Vaux | Architecture, Construction & Design";
    const desc = "Learn about Alder & Vaux — a global architecture, construction and design practice committed to craft, precision and sustainability.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/about`);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Alder & Vaux studio architecture"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-background" />
        </div>
        <div className="container-x relative pb-16 sm:pb-24 md:pb-32 pt-32">
          <p className="eyebrow text-bone/80 mb-5 reveal">— About Us</p>
          <h1 className="display-serif text-bone text-[clamp(3rem,9vw,8rem)] leading-[0.95] reveal">
            A practice built on<br />
            <span className="italic text-bone/70">craft and conviction.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-bone/80 reveal">
            For more than two decades, Alder &amp; Vaux has delivered architecture,
            construction and design with quiet ambition — buildings made to belong to
            their place, age with grace, and serve the lives within.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-x grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-5 reveal">— Our Story</p>
            <h2 className="display-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] reveal">
              Founded in a small<br />
              <span className="italic text-foreground/60">drawing room, 1998.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p className="reveal">
              The practice began with two architects, one north-facing window, and a
              shared belief that good buildings outlast the trends that briefly surround
              them. From a single residential commission, the studio grew patiently —
              taking on the cultural, civic and commercial work that now defines us.
            </p>
            <p className="reveal">
              Today we operate from studios in New York, London and Singapore, with a
              team of 120 architects, engineers, designers and builders. The original
              conviction has not changed: every project is led by a partner, drawn by
              hand before it is drawn by machine, and supervised in person until the day
              the keys are handed over.
            </p>
            <p className="reveal">
              We were founded to build timeless spaces — and we measure success in
              decades, not deadlines.
            </p>
          </div>
        </div>

        <div className="container-x mt-16 sm:mt-20 grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 md:col-span-7 aspect-[16/10] overflow-hidden bg-muted reveal">
            <img src={studio} alt="Studio interior with architectural models" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-5 aspect-[16/10] overflow-hidden bg-muted reveal">
            <img src={interior} alt="Completed interior project" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-secondary/40 border-y border-hairline">
        <div className="container-x py-20 sm:py-28 md:py-36 grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 md:col-span-6 md:border-r md:border-hairline md:pr-12">
            <p className="eyebrow mb-5 reveal">— Mission</p>
            <h3 className="display-serif text-[clamp(1.75rem,4vw,3rem)] leading-tight reveal">
              To deliver architecture of <span className="italic text-foreground/60">quality, precision and consequence</span> — for the people who use it and the places that hold it.
            </h3>
            <p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed reveal">
              We approach every commission as a long-term obligation: to the client, to
              the craft, and to the city or landscape it joins.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:pl-4 mt-10 md:mt-0">
            <p className="eyebrow mb-5 reveal">— Vision</p>
            <h3 className="display-serif text-[clamp(1.75rem,4vw,3rem)] leading-tight reveal">
              To shape the spaces and <span className="italic text-foreground/60">communities of the next century</span> — quietly, sustainably, and built to last.
            </h3>
            <p className="mt-6 text-foreground/75 text-base md:text-lg leading-relaxed reveal">
              We see architecture as civic infrastructure — a contribution to the public
              record that should outlive the hands that made it.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 sm:py-28 md:py-36">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-12 sm:mb-16">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow mb-5 reveal">— Core Values</p>
              <h2 className="display-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] reveal">
                Five principles<br />
                <span className="italic text-foreground/60">we will not compromise.</span>
              </h2>
            </div>
            <p className="col-span-12 md:col-span-6 md:col-start-7 text-foreground/75 text-base md:text-lg leading-relaxed reveal self-end">
              They are not slogans. They are the working conditions of the studio — the
              standards by which we hire, design, build and decline.
            </p>
          </div>

          <div className="space-y-px">
            {values.map((v, i) => (
              <div
                key={v.t}
                className="reveal group grid grid-cols-12 gap-4 sm:gap-6 md:gap-12 border-t border-hairline last:border-b py-7 sm:py-9 transition-colors duration-500 hover:bg-secondary/40"
              >
                <span className="col-span-2 md:col-span-1 font-display text-xs sm:text-sm tracking-widest text-muted-foreground pt-2">
                  0{i + 1}
                </span>
                <h3 className="col-span-10 md:col-span-4 font-display text-2xl sm:text-3xl md:text-4xl">{v.t}</h3>
                <p className="col-span-12 md:col-span-6 md:col-start-7 text-foreground/75 text-sm md:text-base leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-ink text-bone">
        <div className="container-x py-20 sm:py-28 md:py-36">
          <div className="grid grid-cols-12 gap-8 mb-14 sm:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow text-bone/70 mb-5 reveal">— Why Choose Us</p>
              <h2 className="display-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] reveal">
                Senior-led practice.<br />
                <span className="italic text-bone/60">Built for the long view.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
            {reasons.map((r) => (
              <div key={r.n} className="reveal border-t border-bone/15 pt-6">
                <span className="font-display text-xs tracking-widest text-bone/50">{r.n}</span>
                <h3 className="font-display text-xl sm:text-2xl mt-3 mb-3">{r.t}</h3>
                <p className="text-sm md:text-base text-bone/70 leading-relaxed max-w-sm">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 sm:py-24 md:py-32 border-b border-hairline">
        <div className="container-x">
          <p className="eyebrow mb-10 sm:mb-14 reveal text-center md:text-left">— By the Numbers</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-10">
            {stats.map((s) => (
              <div key={s.l} className="reveal text-center md:text-left md:border-l md:border-hairline md:first:border-l-0 md:pl-8 md:first:pl-0">
                <div className="display-serif text-[clamp(3rem,7vw,6rem)] leading-none">{s.v}</div>
                <div className="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-x py-24 sm:py-32 md:py-40 text-center">
          <p className="eyebrow mb-6 reveal">— Begin</p>
          <h2 className="display-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] max-w-4xl mx-auto reveal">
            Let's build something<br />
            <span className="italic text-foreground/60">exceptional.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-foreground/70 text-base md:text-lg reveal">
            Whether the brief is a private residence or a civic landmark, we begin every
            conversation the same way — by listening.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 reveal">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-ink text-bone px-7 py-4 text-[13px] tracking-wide hover:bg-ink/90 transition-colors duration-500"
            >
              Start a Project <span aria-hidden>→</span>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 border border-ink/80 px-7 py-4 text-[13px] tracking-wide hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default AboutPage;
