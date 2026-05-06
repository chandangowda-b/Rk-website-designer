import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";

import construction from "@/assets/service-construction.jpg";
import mep from "@/assets/service-mep.jpg";
import finishes from "@/assets/service-finishes.jpg";
import cleanroom from "@/assets/service-cleanroom.jpg";
import hero from "@/assets/hero-building.jpg";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";
import urban from "@/assets/project-urban.jpg";
import studio from "@/assets/about-studio.jpg";

type Service = {
  n: string;
  title: string;
  desc: string;
  img: string;
  group: string;
};

const services: Service[] = [
  { n: "01", title: "Construction", group: "Build", img: construction, desc: "Turnkey civil construction led by senior partners — from foundations to handover, executed with surgical precision." },
  { n: "02", title: "Architecture", group: "Design", img: hero, desc: "Concept-to-completion architectural design that shapes landmark buildings, residences and cultural spaces." },
  { n: "03", title: "Design & Build", group: "Design", img: commercial, desc: "An integrated single-point delivery model uniting design intelligence with construction discipline." },
  { n: "04", title: "Interiors", group: "Design", img: interior, desc: "Bespoke interior architecture, material curation and joinery tuned to how our clients actually live and work." },
  { n: "05", title: "Electric Works", group: "MEP", img: mep, desc: "End-to-end LV/MV electrical systems engineered for resilience, efficiency and quiet long-term performance." },
  { n: "06", title: "Plumbing", group: "MEP", img: mep, desc: "Hydraulic systems and water networks designed for pressure, longevity and absolute reliability." },
  { n: "07", title: "HVAC Systems", group: "MEP", img: mep, desc: "Climate engineering with whisper-quiet air handling, intelligent zoning and best-in-class energy ratings." },
  { n: "08", title: "Roads & Drains", group: "Infrastructure", img: urban, desc: "External works, pavements, kerbing and stormwater drainage built to civic-grade specifications." },
  { n: "09", title: "Sewage Treatment", group: "Infrastructure", img: urban, desc: "STP & WWTP systems engineered for compliance, low odor and circular water reuse on-site." },
  { n: "10", title: "Water Proofing", group: "Envelope", img: finishes, desc: "Multi-layer waterproofing strategies for roofs, basements and wet areas — guaranteed for decades, not seasons." },
  { n: "11", title: "Painting Works", group: "Finishes", img: finishes, desc: "Premium internal and external finishes in flawless application — color, texture and lasting protection." },
  { n: "12", title: "Glass & ACP", group: "Envelope", img: commercial, desc: "Structural glazing, curtain walls and Aluminium Composite Panel cladding for striking modern facades." },
  { n: "13", title: "Aluminium & SS Works", group: "Fabrication", img: cleanroom, desc: "Architectural aluminium and stainless steel fabrication — railings, partitions, screens and bespoke trims." },
  { n: "14", title: "Fabrication", group: "Fabrication", img: construction, desc: "Custom structural and ornamental steel fabrication, MIG/TIG welded to architectural tolerance." },
  { n: "15", title: "Doors & Windows", group: "Envelope", img: interior, desc: "Performance doors, windows and façade openings — solid core timber, aluminium and uPVC systems." },
  { n: "16", title: "Granite, Marble & Tiles", group: "Finishes", img: finishes, desc: "Natural stone sourcing and laying — book-matched marble, granite slabs and large-format tiling." },
  { n: "17", title: "Arts & Murals", group: "Finishes", img: interior, desc: "Commissioned murals, sculptural reliefs and signature art installations integrated into architecture." },
  { n: "18", title: "Landscaping", group: "Outdoor", img: finishes, desc: "Hard and soft landscape design — courtyards, water features, planting and external lighting choreography." },
  { n: "19", title: "Fencing", group: "Outdoor", img: urban, desc: "Perimeter security, decorative fencing and gates engineered for both protection and aesthetic presence." },
  { n: "20", title: "Material Supply", group: "Logistics", img: construction, desc: "Quality-vetted material procurement and just-in-time supply chains across every project trade." },
  { n: "21", title: "Man Power Supply", group: "Logistics", img: construction, desc: "Skilled and certified labour deployment — masons, fabricators, electricians and finishing teams on demand." },
  { n: "22", title: "Cleanrooms", group: "Specialist", img: cleanroom, desc: "ISO-classified cleanroom construction for pharma, electronics and life sciences — sealed, validated, certified." },
];

const process = [
  { n: "I.", t: "Plan", d: "Brief, site, feasibility" },
  { n: "II.", t: "Design", d: "Concept, detail, BIM" },
  { n: "III.", t: "Build", d: "On-site precision" },
  { n: "IV.", t: "Deliver", d: "Handover & care" },
];

const reasons = [
  { n: "01", t: "Single-point accountability", d: "One studio, one partner, one signed promise — from first sketch to final key." },
  { n: "02", t: "Senior-led delivery", d: "Every project is run by a partner. No handovers to junior teams once you sign." },
  { n: "03", t: "Material honesty", d: "We specify, source and supply ourselves — no dilution between the spec and the wall." },
  { n: "04", t: "On-time, on-budget", d: "Programme management discipline borrowed from infrastructure, applied to every project size." },
];

const ServicesPage = () => {
  useReveal();

  useEffect(() => {
    document.title = "What We Do — Rk landmark | Architecture, Construction & Design";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "End-to-end construction, architecture, MEP, interiors and specialist services delivered by a single luxury studio.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* Hero */}
      {/* <section className="relative min-h-[92svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Architectural construction project at golden hour"
            className="w-full h-full object-cover scale-105"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-background" />
        </div> */}

        {/* <div className="container-x relative z-10 pb-16 sm:pb-20 md:pb-28 pt-32">
          <div className="max-w-5xl">
            <p className="eyebrow text-bone/80 mb-5 sm:mb-6 reveal">— What We Do</p>
            <h1 className="display-serif text-bone text-[clamp(3rem,10vw,8rem)] reveal">
              Twenty-two<br />disciplines.<br />One studio.
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-bone/80 text-base sm:text-lg leading-relaxed reveal">
              End-to-end construction, design and engineering — delivered as a
              single, integrated practice. Every trade in-house. Every detail
              owned. Every promise signed by a partner.
            </p>
          </div>
        </div> */}

        {/* <div className="absolute bottom-6 right-5 sm:right-10 z-10 flex items-center gap-3 text-bone/70 text-[11px] tracking-[0.2em] uppercase">
          <span className="block w-8 h-px bg-bone/50" />
          Scroll
        </div>
      </section> */}

      {/* Intro statement */}
      {/* <section className="container-x py-20 sm:py-28 md:py-36">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-4 sm:mb-5 reveal">— Capabilities</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="display-serif text-[clamp(1.75rem,4.2vw,3.5rem)] leading-[1.05] reveal">
              From the first feasibility line to the final delivered key — every
              discipline that builds a world-class project, held under one roof
              and one signature.
            </p>
          </div>
        </div>
      </section> */}

      {/* Services grid */}
      <section className="bg-ink text-bone">
        <div className="container-x py-20 sm:py-28 md:py-36">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow text-bone/60 mb-4 sm:mb-5 reveal">— Services</p>
              <h2 className="display-serif text-[clamp(2.25rem,6vw,4.5rem)] reveal">
                Every trade. In-house.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
              <p className="text-bone/70 text-base md:text-lg max-w-xl reveal">
                Twenty-two integrated capabilities — civil, MEP, envelope,
                finishes, fabrication and specialist works — delivered without
                subcontracting risk.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative bg-bone/[0.03] border border-bone/10 overflow-hidden flex flex-col reveal"
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="w-full h-full object-cover scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between text-[11px] tracking-[0.2em] uppercase text-bone/80">
                    <span>{s.n}</span>
                    <span>{s.group}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl sm:text-[1.75rem] leading-tight text-bone">
                      {s.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-sm text-bone/70 leading-relaxed mb-6 flex-1">
                    {s.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between text-[12px] tracking-[0.18em] uppercase text-bone/90 hover:text-bone group/cta"
                  >
                    <span className="link-underline">Enquire</span>
                    <span className="text-lg transition-transform duration-500 group-hover/cta:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-20 sm:py-28 md:py-36">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-4 sm:mb-5 reveal">— Our Process</p>
            <h2 className="display-serif text-[clamp(2.25rem,6vw,4.5rem)] reveal">
              Four stages.<br />One discipline.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-muted-foreground text-base md:text-lg max-w-xl reveal">
              A linear, transparent journey from idea to inhabited building —
              with one partner accountable through every stage.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-hairline">
          {process.map((p, i) => (
            <div
              key={p.t}
              className="group border-b border-hairline md:border-b-0 [&:not(:last-child)]:border-r border-hairline py-10 sm:py-14 pr-4 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-xl sm:text-2xl text-stone mb-6 sm:mb-10">{p.n}</div>
              <div className="font-display text-3xl sm:text-4xl mb-3">{p.t}</div>
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {p.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/40">
        <div className="container-x py-20 sm:py-28 md:py-36 grid grid-cols-12 gap-6 sm:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4 sm:mb-5 reveal">— Why Choose Us</p>
              <h2 className="display-serif text-[clamp(2.25rem,6vw,4.5rem)] reveal">
                The reason clients return.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md reveal">
                We are a studio engineered around accountability. Fewer projects.
                Senior people. Better buildings.
              </p>
              <div className="mt-8 aspect-[4/3] overflow-hidden reveal hidden lg:block">
                <img
                  src={studio}
                  alt="Inside the studio"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="border-t border-hairline">
              {reasons.map((r, i) => (
                <article
                  key={r.t}
                  className="grid grid-cols-12 gap-4 py-8 sm:py-10 border-b border-hairline reveal"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="col-span-2 font-display text-stone text-lg">{r.n}</div>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl sm:text-3xl mb-3">{r.t}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{r.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone">
        <div className="container-x py-24 sm:py-32 md:py-40 text-center">
          <p className="eyebrow text-bone/60 mb-6 reveal">— Start a Project</p>
          <h2 className="display-serif text-[clamp(2.5rem,9vw,7rem)] reveal">
            Let's build<br />your vision.
          </h2>
          <p className="mt-6 sm:mt-8 max-w-xl mx-auto text-bone/70 reveal">
            Tell us about the site, the brief, the ambition. A partner will
            personally reply within one working day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 reveal">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-bone/80 px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-bone hover:text-ink transition-colors duration-500"
            >
              Enquire now <span aria-hidden>→</span>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-7 py-4 text-[12px] tracking-[0.2em] uppercase text-bone/80 hover:text-bone link-underline"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default ServicesPage;
