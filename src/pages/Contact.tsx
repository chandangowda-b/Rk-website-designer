import { useEffect } from "react";
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";

const PHONE = "8886014545";
const PHONE_DISPLAY = "+91 88860 14545";
const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "Hello, I'd like to enquire about your architecture & construction services."
)}`;
const ADDRESS_LINES = [
  "Alder & Vaux Studio",
  "3rd Floor, Trade Centre,",
  "Banjara Hills, Hyderabad,",
  "Telangana 500034, India",
];
const MAP_QUERY = "Banjara Hills, Hyderabad, Telangana 500034";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`;

const ContactPage = () => {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact — Alder & Vaux | Enquire Now";
    const description =
      "Contact Alder & Vaux for architecture, construction and design enquiries. Call 8886014545, message us on WhatsApp, or visit our studio.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24 border-b border-hairline">
        <div className="container-x">
          <p className="eyebrow text-foreground/60 mb-5 sm:mb-6 reveal">— Get in touch</p>
          <h1 className="display-serif text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] reveal">
            Enquire <span className="italic">now</span>.
          </h1>
          <p
            className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-foreground/70 reveal"
            style={{ transitionDelay: "80ms" }}
          >
            For new commissions, consultations or studio visits — we'd be glad to hear from
            you. A senior partner will respond within one working day.
          </p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Phone card */}
            <article className="group reveal border border-hairline p-8 sm:p-10 md:p-12 bg-background hover:bg-muted/40 transition-colors duration-500">
              <div className="flex items-start justify-between gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-ink/80 flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  01 / Call
                </span>
              </div>
              <p className="mt-8 sm:mt-10 text-xs uppercase tracking-[0.2em] text-foreground/50">
                Please contact
              </p>
              <p className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
                {PHONE_DISPLAY}
              </p>
              <p className="mt-3 text-sm text-foreground/60">
                Mon – Sat · 9:30 AM to 6:30 PM IST
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mt-8 inline-flex items-center gap-3 bg-ink text-bone px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wide hover:bg-ink/90 transition-colors duration-500"
              >
                Click to call <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </article>

            {/* WhatsApp card */}
            <article className="group reveal border border-hairline p-8 sm:p-10 md:p-12 bg-background hover:bg-muted/40 transition-colors duration-500" style={{ transitionDelay: "60ms" }}>
              <div className="flex items-start justify-between gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-ink/80 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  02 / WhatsApp
                </span>
              </div>
              <p className="mt-8 sm:mt-10 text-xs uppercase tracking-[0.2em] text-foreground/50">
                Chat with us
              </p>
              <p className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
                Message us<span className="italic"> instantly</span>.
              </p>
              <p className="mt-3 text-sm text-foreground/60">
                Quickest reply for project enquiries and quotations.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-[#25D366] text-white px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wide hover:opacity-90 transition-opacity duration-500"
              >
                Open WhatsApp <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Address + Map */}
      <section className="pb-20 sm:pb-28 md:pb-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
            {/* Address */}
            <div className="col-span-12 lg:col-span-5 reveal">
              <div className="h-full border border-hairline p-8 sm:p-10 md:p-12 flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-ink/80 flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <p className="mt-8 eyebrow text-foreground/60">— Studio</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
                  Visit our<br /><span className="italic">office</span>.
                </h2>
                <address className="mt-8 not-italic text-base sm:text-lg text-foreground/80 leading-relaxed">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>

                <div className="mt-8 pt-8 border-t border-hairline space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 mt-1 text-foreground/60 shrink-0" strokeWidth={1.5} />
                    <a href="mailto:studio@aldervaux.com" className="link-underline break-all">
                      studio@aldervaux.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-1 text-foreground/60 shrink-0" strokeWidth={1.5} />
                    <span className="text-foreground/70">Mon – Sat · 9:30 AM – 6:30 PM</span>
                  </div>
                </div>

                <a
                  href={MAP_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 self-start border border-ink/80 px-6 py-3.5 text-xs sm:text-sm tracking-wide hover:bg-ink hover:text-bone transition-colors duration-500"
                >
                  Get directions <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="col-span-12 lg:col-span-7 reveal" style={{ transitionDelay: "80ms" }}>
              <div className="h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[560px] border border-hairline overflow-hidden bg-muted">
                <iframe
                  title="Alder & Vaux office location"
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%", display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
