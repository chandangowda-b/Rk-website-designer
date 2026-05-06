import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/ceo.png";
import p2 from "@/assets/person-2.jpg";
import p3 from "@/assets/person-3.jpg";
import p4 from "@/assets/person-4.jpg";
import hero from "@/assets/hero-building.jpg";

type Person = {
  title: string;
  name: string;
  bio: string;
  experience: string[];
  quote: string;
  img: string;
};

const people: Person[] = [
  {
    title: "Construction Director-CEO",
    name: "Krishna P",
    bio: "Krishna leads RK Land Mark, an Integrated Infrastructure Company headquartered in Bangalore. With vast experience executing numerous infrastructure works, he oversees both small and large-scale projects, managing facilities including Civil, PHE, Interiors, and M&E works. Under his leadership, the team handles everything from residential and commercial construction to advanced mechanization like modular and precast technology.",
    experience: [
      "20 years across all construction projects",
    ],
    quote: "We operate with Quality, Time, Cost & Safety, aiming to contribute in a substantial way to the construction sector.",
    img: p1,
  },

  {
    title: "Partner & Director of Master Planning",
    name: "Magnus Alder",
    bio: "Magnus leads our urban and civic work, shaping public realms from Oslo to Singapore. He brings a planner's patience and an architect's eye to every brief.",
    experience: [
      "20 years across 14 countries",
      "Lead designer, Helsinki Waterfront",
      "Council member, Urban Land Institute",
    ],
    quote: "A city is a hundred thousand quiet decisions made well.",
    img: p2,
  },
  {
    title: "Director of Interiors",
    name: "Mei Tanaka",
    bio: "Mei directs our interior practice with a material-first sensibility shaped by Japanese craft traditions and contemporary European design culture.",
    experience: [
      "Formerly senior associate, Vincent Van Duysen",
      "Featured in Wallpaper*, Dezeen, Casa Vogue",
      "Visiting critic, RCA London",
    ],
    quote: "Restraint is generosity. What you leave out is what people remember.",
    img: p3,
  },
  {
    title: "Head of Engineering",
    name: "Joseph Okafor",
    bio: "Joseph leads structural and environmental engineering across the studio, pairing rigorous performance modelling with a deep commitment to low-carbon construction.",
    experience: [
      "Chartered Structural Engineer (IStructE)",
      "Co-author, Mass Timber in Practice (2023)",
      "BREEAM and LEED accredited",
    ],
    quote: "The most beautiful structure is the one you can justify, gram for gram.",
    img: p4,
  },
];

const PeoplePage = () => {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our People — Rk Landmark";
    const desc = "Meet the partners, architects, and engineers leading Rk Landmark. Senior-led practice. Human-centered design.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/people");
  }, []);

  return (
    <main id="top" className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      {/* <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Alder & Vaux studio"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="container-x relative pb-16 sm:pb-24 md:pb-32 pt-32">
          <p className="eyebrow mb-5 reveal">— People</p>
          <h1
            className="display-serif reveal"
            style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)", lineHeight: 0.95 }}
          >
            Our People.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-foreground/75 reveal">
            A senior-led practice of architects, designers and engineers — guided by
            four partners whose conviction, craft and quiet leadership shape every
            project we make.
          </p>
        </div>
      </section> */}

      {/* Team rows */}
      <section className="border-t border-hairline">
        {people.map((p, i) => {
          const alt = i % 2 === 1;
          return (
            <article
              key={p.name}
              className={`border-b border-hairline ${alt ? "bg-muted/40" : "bg-background"}`}
            >
              <div className="container-x py-20 sm:py-28 lg:py-36">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left — title */}
                  <div className="lg:col-span-3 reveal order-1">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                      0{i + 1} / 04
                    </div>
                    <div className="font-display text-2xl sm:text-3xl lg:text-[2rem] leading-[1.15] text-foreground/90">
                      {p.title}
                    </div>
                    <div className="mt-6 h-px w-16 bg-ink/60" />
                  </div>

                  {/* Middle — portrait */}
                  <div className="lg:col-span-5 order-2 reveal">
                    <div className="group relative mx-auto max-w-md lg:max-w-none aspect-[4/5] overflow-hidden bg-muted">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        width={1000}
                        height={1250}
                        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1400ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/5" />
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="lg:col-span-4 order-3 reveal">
                    <h2
                      className="display-serif"
                      style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", lineHeight: 1 }}
                    >
                      {p.name}
                    </h2>

                    <p className="mt-5 sm:mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
                      {p.bio}
                    </p>

                    <ul className="mt-7 space-y-2">
                      {p.experience.map((e) => (
                        <li
                          key={e}
                          className="text-sm md:text-[15px] text-foreground/80 flex gap-3"
                        >
                          <span className="mt-2 h-px w-4 bg-ink/50 shrink-0" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>

                    <blockquote className="mt-8 pl-5 border-l border-ink/40">
                      <p className="font-display italic text-lg md:text-xl text-foreground/85 leading-snug">
                        “{p.quote}”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Values / Culture */}
      <section className="bg-background">
        <div className="container-x py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-12 gap-8 mb-14 sm:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4 reveal">— Values</p>
              <h2
                className="display-serif reveal"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)", lineHeight: 1 }}
              >
                A studio built<br />
                <span className="italic text-foreground/60">on people.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
              <p className="text-base md:text-lg text-foreground/70 reveal">
                Eighty-four architects, designers and engineers across three studios —
                generous in spirit, exacting in craft, and led by partners on every
                project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-hairline">
            {[
              {
                k: "Senior-led",
                t: "Partner on every project",
                d: "From the first sketch to the final walkthrough, a partner is in the room — not just on the cover sheet.",
              },
              {
                k: "Long careers",
                t: "Mentorship over hierarchy",
                d: "We invest in slow mastery. The studio is built to grow architects, not just deliver buildings.",
              },
              {
                k: "Open studio",
                t: "Friday morning reviews",
                d: "Every project is drawn by hand before it is modelled, and reviewed in the open studio each week.",
              },
            ].map((v, i) => (
              <div
                key={v.k}
                className={`reveal py-10 md:py-14 md:px-8 border-hairline ${
                  i > 0 ? "md:border-l border-t md:border-t-0" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  — {v.k}
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">
                  {v.t}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-[15px]">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone">
        <div className="container-x py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow mb-5 text-bone/70 reveal">— Join us / Contact</p>
              <h2
                className="display-serif reveal"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.95 }}
              >
                Work with us.<br />
                <span className="italic text-bone/60">Or work alongside us.</span>
              </h2>
              <p className="mt-6 max-w-xl text-bone/70 text-base md:text-lg reveal">
                We are always speaking with talented architects, designers and
                engineers. And we are always listening to clients with an idea worth
                building.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 reveal">
              <a
                href="/#contact"
                className="inline-flex items-center justify-between gap-4 border border-bone/70 px-6 py-4 text-sm tracking-wide hover:bg-bone hover:text-ink transition-colors duration-500"
              >
                Contact leadership <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:careers@alderandvaux.com"
                className="inline-flex items-center justify-between gap-4 border border-bone/30 px-6 py-4 text-sm tracking-wide hover:border-bone transition-colors duration-500"
              >
                Open positions <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default PeoplePage;
