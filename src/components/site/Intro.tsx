export const Intro = () => {
  const stats = [
    { k: "27", l: "Years of practice" },
    { k: "184", l: "Built projects" },
    { k: "32", l: "Cities worldwide" },
    { k: "46", l: "Awards" },
  ];

  return (
    <section className="container-x py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="display-serif text-[clamp(1.875rem,5vw,4.5rem)] reveal">
          We compose buildings the way a writer composes a sentence —{" "}
          <span className="italic text-foreground/60">with intention, rhythm, and silence.</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 w-full">
          {stats.map((s, i) => (
            <div key={s.l} className="reveal flex flex-col items-center" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">{s.k}</div>
              {/* Added mx-auto here to ensure the line centers properly */}
              <div className="hairline mx-auto mb-3" />
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};