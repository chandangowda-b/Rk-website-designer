import studio from "@/assets/about-studio.jpg";

const pillars = [
  { t: "Innovation", d: "Research-led design, computational tools, prototyping that questions every assumption." },
  { t: "Precision", d: "Drawings detailed to the millimetre. Construction supervised by the partner who designed it." },
  { t: "Sustainability", d: "Carbon as a design material. Every project tracks toward net-zero from day one." },
];

export const About = () => {
  return (
    <section id="about" className="bg-secondary/40">
      <div className="container-x py-20 sm:py-28 md:py-36 lg:py-40">
        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="col-span-12 md:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow mb-4 sm:mb-5 reveal">— About</p>
            <h2 className="display-serif text-[clamp(2.5rem,7vw,5.5rem)] reveal">
              Quietly building<br />
              <span className="italic text-foreground/60">since 1998.</span>
            </h2>
            <div className="mt-8 sm:mt-10 aspect-[4/3] overflow-hidden bg-muted reveal">
              <img
                src={studio}
                alt="Architectural model and blueprints in the studio"
                loading="lazy"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-10 sm:space-y-12 mt-4 md:mt-0">
            <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed reveal">
              <p>
                Rk Landmark is an architecture, construction and design
                practice founded in New York and now operating from studios in
                London and Singapore. We believe buildings should belong to their
                place, age with grace, and serve the people inside them long after
                we have left the site.
              </p>
              <p>
                Our work spans private residences, cultural institutions, civic
                masterplans and the smallest objects within them — held together by
                a single conviction: that craft, restraint and material honesty
                outlast trend.
              </p>
            </div>

            <div className="space-y-px reveal">
              {pillars.map((p, i) => (
                <div
                  key={p.t}
                  className="group flex items-start gap-4 sm:gap-6 md:gap-12 border-t border-hairline last:border-b py-6 sm:py-8 transition-colors duration-500 hover:bg-background"
                >
                  <span className="font-display text-xs sm:text-sm tracking-widest text-muted-foreground pt-2 w-8 sm:w-10 shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl mb-2">{p.t}</h3>
                    <p className="text-sm md:text-base text-foreground/70 max-w-md">{p.d}</p>
                  </div>
                  <span className="text-lg sm:text-xl pt-2 transition-transform duration-500 group-hover:translate-x-1 shrink-0">→</span>
                </div>
              ))}
            </div>

            <blockquote className="reveal border-l-2 border-ink pl-5 sm:pl-6 md:pl-8">
              <p className="font-display text-xl sm:text-2xl md:text-3xl italic leading-snug">
                "We do not chase the new. We pursue the inevitable —
                what each site has been quietly asking for, all along."
              </p>
              <footer className="mt-4 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Eleanor Vaux — Founding Partner
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
