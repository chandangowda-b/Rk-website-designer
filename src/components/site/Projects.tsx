import { useState } from "react";
import { cn } from "@/lib/utils";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";
import urban from "@/assets/project-urban.jpg";

type Cat = "All" | "Residential" | "Commercial" | "Interior" | "Urban";

const projects = [
  { title: "Lumen House", category: "Residential", year: "2024", location: "Aspen, USA", img: residential },
  { title: "Meridian Tower", category: "Commercial", year: "2023", location: "Singapore", img: commercial },
  { title: "Atelier Pavilion", category: "Interior", year: "2024", location: "Milan, Italy", img: interior },
  { title: "Hanami District", category: "Urban", year: "2025", location: "Kyoto, Japan", img: urban },
  { title: "Slate Residence", category: "Residential", year: "2022", location: "Oslo, Norway", img: interior },
  { title: "Norden Plaza", category: "Commercial", year: "2024", location: "Copenhagen", img: commercial },
] as const;

const cats: Cat[] = ["All", "Residential", "Commercial", "Interior", "Urban"];

export const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="bg-background">
      <div className="container-x pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-16 sm:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-16">
          <div>
            <p className="eyebrow mb-4 sm:mb-5 reveal">— Selected Works</p>
            <h2 className="display-serif text-[clamp(2.5rem,8vw,5.5rem)] reveal">Projects.</h2>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-14 md:gap-y-16">
          {filtered.map((p, i) => {
            const span = i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "sm:col-span-2 md:col-span-12";
            const tall = i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[16/10] md:aspect-[16/8]";
            return (
              <a
                key={p.title + i}
                href="#"
                className={cn("group block reveal", span)}
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className={cn("relative overflow-hidden bg-muted", tall)}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-700" />
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 text-bone/90 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    № {String(i + 1).padStart(3, "0")}
                  </div>
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-bone text-ink flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    →
                  </div>
                </div>
                <div className="mt-4 sm:mt-5 flex items-start justify-between gap-4 sm:gap-6">
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-muted-foreground mb-1.5 truncate">
                      {p.category} · {p.location}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl">{p.title}</h3>
                  </div>
                  <div className="font-display text-lg sm:text-xl text-foreground/60 shrink-0">{p.year}</div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-20 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-ink px-6 sm:px-8 py-3.5 sm:py-4 text-sm tracking-wide hover:bg-ink hover:text-bone transition-colors duration-500"
          >
            View Full Portfolio <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
