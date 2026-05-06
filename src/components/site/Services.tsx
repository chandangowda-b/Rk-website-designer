const services = [
  { n: "01", t: "Architecture Design", d: "Conceptual through construction documentation for landmark buildings, residences and cultural spaces." },
  { n: "02", t: "Construction Planning", d: "Programme management, value engineering and on-site execution led by senior partners." },
  { n: "03", t: "Interior Concepts", d: "Bespoke interiors, material curation and furniture design tuned to each client's life." },
  { n: "04", t: "Urban Development", d: "Masterplans, mixed-use districts and public realm strategy at the scale of the city." },
  { n: "05", t: "Sustainable Design", d: "Net-zero strategies, passive systems and circular materials embedded from day one." },
  { n: "06", t: "Renovation & Modernization", d: "Adaptive reuse and heritage-sensitive transformation of existing structures." },
];

const process = [
  { n: "I.", t: "Listen", d: "Brief, site, story" },
  { n: "II.", t: "Sketch", d: "Concept & form" },
  { n: "III.", t: "Refine", d: "Detail & material" },
  { n: "IV.", t: "Build", d: "On-site precision" },
  { n: "V.", t: "Live", d: "Inhabit & evolve" },
];

export const Services = () => {
  return (
    <section id="services" className="bg-ink text-bone">
      <div className="container-x py-20 sm:py-28 md:py-36 lg:py-40">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow text-bone/60 mb-4 sm:mb-5 reveal">— What We Do</p>
            <h2 className="display-serif text-[clamp(2.5rem,7vw,5.5rem)] reveal">Six disciplines, one studio.</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-end">
            <p className="text-bone/70 text-base md:text-lg max-w-xl reveal">
              From the first hand-drawn line to the final delivered key, each
              discipline is led by partners who treat craft as a discipline and
              detail as the difference.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-bone/15">
          {services.map((s, i) => (
            <article
              key={s.t}
              className="group relative border-b border-bone/15 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r p-6 sm:p-8 md:p-12 transition-colors duration-500 hover:bg-bone hover:text-ink reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-8 sm:mb-12">
                <span className="font-display text-sm tracking-wider opacity-70">{s.n}</span>
                <span className="text-xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">{s.t}</h3>
              <p className="text-sm leading-relaxed opacity-70 max-w-xs">{s.d}</p>
            </article>
          ))}
        </div>

        {/* process */}
        <div className="mt-20 sm:mt-24 md:mt-28">
          <p className="eyebrow text-bone/60 mb-8 sm:mb-10 reveal">— Process</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 sm:gap-y-10 gap-x-6 border-t border-bone/15 pt-8 sm:pt-10">
            {process.map((p, i) => (
              <div key={p.t} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="font-display text-xl sm:text-2xl text-bone/50 mb-3 sm:mb-4">{p.n}</div>
                <div className="font-display text-xl sm:text-2xl mb-2">{p.t}</div>
                <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-bone/60">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
