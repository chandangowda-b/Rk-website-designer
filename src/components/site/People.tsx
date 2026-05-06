import p1 from "@/assets/ceo.png";
import p2 from "@/assets/person-2.jpg";
import p3 from "@/assets/person-3.jpg";
import p4 from "@/assets/person-4.jpg";

const people = [
  { 
    name: "Krishna P", 
    role: "CONSTRUCTION DIRECTOR-CEO", 
    bio: "Leads RK Land Mark, bringing vast experience in executing both small and large-scale infrastructure projects across residential, commercial, and industrial sectors.", 
    img: p1 
  },
  { name: "Magnus Alder", role: "Partner, Master Planner", bio: "Two decades shaping civic spaces from Oslo to Singapore.", img: p2 },
  { name: "Mei Tanaka", role: "Director of Interiors", bio: "Material-driven interior concepts informed by Japanese craft.", img: p3 },
  { name: "Joseph Okafor", role: "Head of Engineering", bio: "Structural innovation grounded in sustainability and performance.", img: p4 },
];

export const People = () => {
  return (
    <section id="people" className="bg-background">
      <div className="container-x py-20 sm:py-28 md:py-36 lg:py-40">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4 sm:mb-5 reveal">— People</p>
            <h2 className="display-serif text-[clamp(2.5rem,7vw,5.5rem)] reveal">
              The hands<br />
              <span className="italic text-foreground/60">behind the work.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            {/* <p className="text-foreground/70 text-base md:text-lg reveal">
              A team of 84 architects, designers and engineers in three studios.
              Generous in spirit, exacting in craft.
            </p> */}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-10 sm:gap-y-12">
          {people.map((p, i) => (
            <figure key={p.name} className="group reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4 sm:mb-5">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:grayscale-0 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{p.role}</div>
                <div className="font-display text-lg sm:text-xl md:text-2xl mb-2">{p.name}</div>
                <p className="text-xs sm:text-sm text-foreground/70">{p.bio}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 sm:mt-24 border-t border-hairline pt-10 sm:pt-12 grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-3 sm:mb-4">— Culture</p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl">A studio built on people.</h3>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 text-foreground/70 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              We invest in long careers, deep mentorship and the quiet hours
              between briefs. Curiosity is hired for; mastery is grown.
            </p>
            <p>
              Every project is led by a partner, drawn by hand before it is ever
              modelled, and reviewed in the open studio every Friday morning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
