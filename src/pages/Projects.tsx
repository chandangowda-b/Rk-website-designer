import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/site/Nav";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";
import urban from "@/assets/project-urban.jpg";
import hero from "@/assets/hero-building.jpg";

type Cat = "All" | "Residential" | "Commercial" | "Interior" | "Urban";

const projects = [
  {
    title: "Lumen House",
    category: "Residential",
    year: "2024",
    location: "Aspen, USA",
    img: residential,
    desc: "A glass-and-stone retreat carved into the alpine ridge, framing the valley through a single 18-meter aperture.",
    status: "Completed",
  },
  {
    title: "Meridian Tower",
    category: "Commercial",
    year: "2023",
    location: "Singapore",
    img: commercial,
    desc: "A 64-storey vertical campus rethinking how the workday breathes — sky gardens every nine floors.",
    status: "Completed",
  },
  {
    title: "Atelier Pavilion",
    category: "Interior",
    year: "2024",
    location: "Milan, Italy",
    img: interior,
    desc: "A restored palazzo interior layered with travertine, oiled walnut, and a quiet choreography of natural light.",
    status: "Completed",
  },
  {
    title: "Hanami District",
    category: "Urban",
    year: "2025",
    location: "Kyoto, Japan",
    img: urban,
    desc: "A 14-hectare riverside masterplan weaving low-rise residences, civic plazas and cherry-lined promenades.",
    status: "Ongoing",
  },
  {
    title: "Slate Residence",
    category: "Residential",
    year: "2022",
    location: "Oslo, Norway",
    img: interior,
    desc: "A monolithic family home wrapped in hand-cut slate, calibrated for the long northern winters.",
    status: "Completed",
  },
  {
    title: "Norden Plaza",
    category: "Commercial",
    year: "2024",
    location: "Copenhagen",
    img: commercial,
    desc: "A mixed-use civic anchor where retail, workspace and a public library share a single timber canopy.",
    status: "Completed",
  },
  {
    title: "Maris Villa",
    category: "Residential",
    year: "2025",
    location: "Côte d'Azur, France",
    img: residential,
    desc: "A horizon-facing coastal villa orchestrated around a 30-meter infinity pool and an open-air atrium.",
    status: "Ongoing",
  },
  {
    title: "Foundry Lofts",
    category: "Interior",
    year: "2023",
    location: "Brooklyn, USA",
    img: urban,
    desc: "An adaptive reuse of a 1908 iron foundry — raw shell, refined volumes, and an industrial sense of calm.",
    status: "Completed",
  },
] as const;

const cats: Cat[] = ["All", "Residential", "Commercial", "Interior", "Urban"];

const ProjectsPage = () => {
  const [active, setActive] = useState<Cat>("All");
  useReveal();

  useEffect(() => {
    document.title = "Projects — Rk Landmark | Architecture & Construction Portfolio";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Explore the Rk Landmark portfolio — residential, commercial, interior and urban architecture projects built to inspire.");
    window.scrollTo(0, 0);
  }, []);

  const filtered = projects.filter((p) => active === "All" || p.category === active);
  const featured = projects[3]; // Hanami District

  return (
    <main id="top" className="bg-background text-foreground">
      <Nav />

      {/* HERO BANNER */}
      {/* <section className="relative min-h-[92svh] w-full overflow-hidden flex items-end">
        <img
          src={hero}
          alt="Alder & Vaux portfolio of architectural projects"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80" />
        <div className="relative container-x w-full pb-16 sm:pb-20 md:pb-28 lg:pb-32 pt-32 text-bone">
          <p className="eyebrow text-bone/80 mb-5 sm:mb-6 reveal">— Selected Portfolio · 2018—2025</p>
          <h1 className="display-serif text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] reveal">
            Built to <em className="italic font-light">Inspire.</em>
          </h1>
          <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-6 sm:gap-10 max-w-4xl reveal">
            <p className="text-bone/80 text-sm sm:text-base leading-relaxed sm:col-span-2">
              A living archive of homes, towers, interiors and districts shaped by Alder & Vaux —
              each one a quiet conversation between site, material, and the people who will inhabit it.
            </p>
            <div className="flex sm:justify-end items-end gap-8">
              <div>
                <div className="font-display text-3xl sm:text-4xl">120+</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-bone/60 mt-1">Projects</div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl">22</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-bone/60 mt-1">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FEATURED SPOTLIGHT */}
      <section className="container-x pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <p className="eyebrow mb-4 reveal">— Featured Spotlight</p>
            <h2 className="display-serif text-[clamp(2rem,5vw,3.5rem)] reveal">In focus.</h2>
          </div>
          <div className="hidden sm:block text-[11px] uppercase tracking-[0.22em] text-muted-foreground reveal">
            Currently on site
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="relative overflow-hidden bg-muted aspect-[4/3] lg:aspect-[5/4] group">
              <img
                src={featured.img}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute top-5 left-5 bg-bone text-ink text-[10px] uppercase tracking-[0.22em] px-3 py-1.5">
                {featured.status}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: "120ms" }}>
            <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-5">
              {featured.category} · {featured.location} · {featured.year}
            </div>
            <h3 className="display-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-6">
              {featured.title}
            </h3>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed mb-8">
              {featured.desc} A choreography of stone walkways, low timber pavilions and water gardens —
              designed to be read slowly, season by season.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-hairline pt-6">
              <div>
                <div className="font-display text-2xl">14<span className="text-stone">ha</span></div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Site</div>
              </div>
              <div>
                <div className="font-display text-2xl">38</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Buildings</div>
              </div>
              <div>
                <div className="font-display text-2xl">2026</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Completion</div>
              </div>
            </div>
            <a href="#grid" className="inline-flex items-center gap-3 border border-ink px-6 py-3.5 text-sm tracking-wide hover:bg-ink hover:text-bone transition-colors duration-500">
              Read the case study <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section id="grid" className="container-x pt-10 sm:pt-16 pb-20 sm:pb-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 sm:mb-14">
          <div>
            <p className="eyebrow mb-4 reveal">— All Works</p>
            <h2 className="display-serif text-[clamp(2.25rem,6vw,4.5rem)] reveal">The portfolio.</h2>
          </div>
          <div className="flex flex-wrap gap-2 reveal">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "text-[11px] sm:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.2em] px-3 sm:px-4 py-2 border transition-colors duration-300",
                  active === c
                    ? "bg-ink text-bone border-ink"
                    : "bg-transparent text-foreground/70 border-hairline hover:border-ink hover:text-ink"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-14 sm:gap-y-16">
          {filtered.map((p, i) => (
            <a
              key={p.title + i}
              href="#"
              className="group block reveal"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="relative overflow-hidden bg-muted aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 left-4 text-bone text-[10px] uppercase tracking-[0.22em] flex items-center gap-2">
                  <span className={cn("h-1.5 w-1.5 rounded-full", p.status === "Ongoing" ? "bg-[hsl(38_70%_60%)]" : "bg-bone/80")} />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">{p.status}</span>
                </div>
                <div className="absolute inset-x-5 bottom-5 text-bone translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-sm leading-relaxed line-clamp-3">{p.desc}</p>
                </div>
                <div className="absolute bottom-5 right-5 h-10 w-10 rounded-full bg-bone text-ink flex items-center justify-center opacity-0 group-hover:opacity-0 transition-all duration-500" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-1.5 truncate">
                    {p.category} · {p.location}
                  </div>
                  <h3 className="font-display text-2xl sm:text-[1.7rem] leading-tight">{p.title}</h3>
                </div>
                <div className="font-display text-lg text-foreground/60 shrink-0">{p.year}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TRUST / EXCELLENCE */}
      <section className="bg-ink text-bone">
        <div className="container-x py-20 sm:py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-bone/60 mb-5 reveal">— A Standard of Excellence</p>
              <h2 className="display-serif text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.02] reveal">
                Trusted by clients who measure quality in <em className="italic font-light">decades</em>, not seasons.
              </h2>
            </div>
            <div className="lg:col-span-5 reveal">
              <p className="text-bone/70 text-base sm:text-lg leading-relaxed">
                For more than twenty years, Rk landmark has partnered with families, founders, civic
                bodies and developers to deliver work that endures — quietly, precisely, and with
                an unwavering respect for craft.
              </p>
            </div>
          </div>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-bone/15 pt-12">
            {[
              ["22+", "Years of practice"],
              ["120", "Delivered projects"],
              ["38", "International awards"],
              ["96%", "Repeat clients"],
            ].map(([n, l]) => (
              <div key={l} className="reveal">
                <div className="font-display text-4xl sm:text-5xl">{n}</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-bone/55 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24 sm:py-32 md:py-40 text-center">
        <p className="eyebrow mb-5 reveal">— Begin</p>
        <h2 className="display-serif text-[clamp(2.5rem,8vw,6rem)] leading-[0.98] max-w-5xl mx-auto reveal">
          Let's build your <em className="italic font-light">vision.</em>
        </h2>
        <p className="mt-6 sm:mt-8 max-w-xl mx-auto text-foreground/70 text-base sm:text-lg leading-relaxed reveal">
          From a first conversation to the final keystone, we partner with a small number of clients
          each year. We'd be glad to hear about yours.
        </p>
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center reveal">
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-3 bg-ink text-bone px-8 py-4 text-sm tracking-wide hover:bg-ink/85 transition-colors duration-500"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 border border-ink px-8 py-4 text-sm tracking-wide hover:bg-ink hover:text-bone transition-colors duration-500"
          >
            Back to studio
          </Link>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default ProjectsPage;
