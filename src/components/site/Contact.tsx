export const Contact = () => {
  return (
    <section id="contact" className="bg-ink text-bone">
      <div className="container-x py-20 sm:py-28 md:py-36 lg:py-44">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow text-bone/60 mb-5 sm:mb-6 reveal">— Begin</p>
            <h2 className="display-serif text-[clamp(2.75rem,9vw,7.5rem)] reveal">
              Let's draw the<br />
              <span className="italic">first line</span> together.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 reveal">
            <a
              href="mailto:studio@aldervaux.com"
              className="inline-flex items-center gap-3 bg-bone text-ink px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wide hover:bg-bone/90 transition-colors duration-500 break-all"
            >
              studio@aldervaux.com <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-6 sm:gap-x-8 border-t border-bone/15 pt-10 sm:pt-12">
          {[
            { t: "New York", l: ["112 Franklin St.", "NY 10013"] },
            { t: "London", l: ["28 Redchurch St.", "E2 7DP"] },
            { t: "Singapore", l: ["8 Marina Blvd.", "018981"] },
            { t: "General", l: ["+1 212 555 0184", "press@aldervaux.com"] },
          ].map((c, i) => (
            <div key={c.t} className="reveal min-w-0" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-bone/50 mb-3">{c.t}</div>
              {c.l.map((ln) => (
                <div key={ln} className="text-bone/90 text-sm md:text-base break-words">{ln}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-ink text-bone/60 border-t border-bone/10">
      <div className="container-x py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs tracking-wide">
        <div className="flex items-center gap-3">
          <span className="block w-2 h-2 bg-bone rotate-45" />
          <span>© {new Date().getFullYear()} Alder &amp; Vaux. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="#" className="link-underline">Instagram</a>
          <a href="#" className="link-underline">LinkedIn</a>
          <a href="#" className="link-underline">Press Kit</a>
          <a href="#" className="link-underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
