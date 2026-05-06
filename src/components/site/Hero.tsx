import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/hero-building.jpg";
import heroTower from "@/assets/img3.avif";
import heroConcrete from "@/assets/img2.avif";
import heroVilla from "@/assets/img1.avif";

const slides = [
  {
    image: hero,
    eyebrow: "Architecture · Construction · Design — Est. 1998",
    title: (
      <>
        Designing spaces<br />
        <span className="italic font-light">that shape</span> the future.
      </>
    ),
    sub: "A multidisciplinary studio crafting architecture, interiors and urban environments where precision, restraint and material honesty meet.",
  },
  {
    image: heroTower,
    eyebrow: "Commercial · High-Rise · Mixed-Use",
    title: (
      <>
        Vertical visions,<br />
        <span className="italic font-light">grounded</span> in craft.
      </>
    ),
    sub: "From flagship towers to civic landmarks — engineered with rigor, detailed with care, and built to endure.",
  },
  {
    image: heroConcrete,
    eyebrow: "Material · Light · Form",
    title: (
      <>
        Honest materials,<br />
        <span className="italic font-light">timeless</span> presence.
      </>
    ),
    sub: "Concrete, glass and stone composed with restraint to create spaces that feel inevitable.",
  },
  {
    image: heroVilla,
    eyebrow: "Residential · Hospitality · Bespoke",
    title: (
      <>
        Private worlds,<br />
        <span className="italic font-light">crafted</span> in detail.
      </>
    ),
    sub: "Luxury residences and retreats where architecture, landscape and interiors meet as one composition.",
  },
];

const AUTO_MS = 6000;

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    timer.current = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), AUTO_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index]);

  const active = slides[index];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-bone"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={`Architectural project ${i + 1}`}
          width={1920}
          height={1080}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === index ? "opacity-90 animate-ken-burns" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay - Slightly darker on mobile for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90 sm:from-ink/60 sm:via-ink/30 sm:to-ink/85" />
      <div className="absolute inset-0 bg-ink/30 sm:bg-ink/20" />

      {/* Main Content Container */}
      {/* Changed pt-32 to pt-40 on mobile to clear nav, adjusted pb to give room for controls */}
      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-32 pt-40 sm:pb-28 md:pb-32 lg:pb-36">
        
        <div key={`meta-${index}`} className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8 animate-fade-in">
          <span className="block h-px w-6 sm:w-10 bg-bone/70" />
          <span className="eyebrow text-bone/80 text-[9px] sm:text-[11px] leading-tight">
            {active.eyebrow}
          </span>
        </div>

        <h1
          key={`title-${index}`}
          // Adjusted clamp to ensure it fits well on narrow screens without breaking awkwardly
          className="display-serif text-[clamp(2.25rem,9vw,8.4rem)] sm:text-[clamp(2.75rem,11vw,8.4rem)] leading-[1.05] sm:leading-[0.95] max-w-[18ch] animate-fade-up-slow"
        >
          {active.title}
        </h1>

        <div className="mt-6 sm:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <p
            key={`sub-${index}`}
            className="max-w-md text-bone/85 text-[13px] sm:text-base md:text-lg leading-relaxed animate-fade-in"
          >
            {active.sub}
          </p>
          
          {/* Buttons stack closer on mobile, side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mt-2 sm:mt-0">
            <Link
              to="/projects"
              className="inline-flex justify-center items-center gap-3 bg-bone text-ink px-5 sm:px-6 py-3.5 sm:py-3.5 text-sm tracking-wide hover:bg-bone/90 transition-colors duration-500 text-center"
            >
              Explore Projects <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-3 border border-bone/60 px-5 sm:px-6 py-3.5 sm:py-3.5 text-sm tracking-wide hover:bg-bone hover:text-ink transition-colors duration-500 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      {/* Adjusted bottom position to ensure it stays on screen on mobile browsers with bottom toolbars */}
      <div className="absolute inset-x-0 bottom-6 sm:bottom-8 z-20 flex items-center justify-between px-4 sm:px-8 md:px-12">
        <div className="flex items-center gap-2 sm:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className="group relative h-[2px] w-6 sm:w-12 overflow-hidden bg-bone/30"
            >
              <span
                className={`absolute inset-y-0 left-0 bg-bone transition-all duration-700 ease-out ${
                  i === index ? "w-full" : "w-0 group-hover:w-1/3"
                }`}
              />
            </button>
          ))}
          <span className="ml-2 sm:ml-3 text-bone/70 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] uppercase tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center border border-bone/40 text-bone/90 hover:bg-bone hover:text-ink transition-colors duration-500"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center border border-bone/40 text-bone/90 hover:bg-bone hover:text-ink transition-colors duration-500"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};