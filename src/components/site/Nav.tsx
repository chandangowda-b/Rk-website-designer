import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.avif"; // <-- Your logo import

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "What We Do" },
  { href: "/people", label: "People" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Transparent (light text) only on home hero before scroll
  const transparent = isHome && !scrolled;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur-md border-b border-hairline shadow-[0_1px_0_rgba(0,0,0,0.02)]"
      )}
    >
      <div
        className={cn(
          "container-x flex items-center justify-between transition-[height] duration-500",
          scrolled ? "h-17 md:h-24" : "h-17 md:h-24"
        )}
      >
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Rk landmark — Home"
          className={cn(
            "flex items-center gap-3 group transition-colors duration-500",
            transparent ? "text-bone" : "text-foreground"
          )}
        >
<img 
            src={logoImg} 
            alt="Company Logo" 
            className={cn(
              "h-18 md:h-30 w-auto transition-all duration-500", // <-- Increased logo size here (h-12 on mobile, h-16 on desktop)
              transparent ? "brightness-0 invert" : "" 
            )}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {links.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                cn(
                  "relative text-[13px] tracking-wide transition-colors duration-300 py-2",
                  "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-current",
                  "after:transition-[width] after:duration-500",
                  transparent
                    ? "text-bone/85 hover:text-bone"
                    : "text-foreground/75 hover:text-foreground",
                  isActive
                    ? cn(
                        "after:w-full",
                        transparent ? "text-bone font-medium" : "text-foreground font-medium"
                      )
                    : "after:w-0 hover:after:w-full"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className={cn(
            "hidden md:inline-flex items-center gap-2 text-[13px] tracking-wide px-4 py-2 border transition-colors duration-500",
            transparent
              ? "border-bone/70 text-bone hover:bg-bone hover:text-ink"
              : "border-ink/80 text-foreground hover:bg-ink hover:text-bone"
          )}
        >
          Start a Project
          <span aria-hidden>→</span>
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((s) => !s)}
        >
          <span
            className={cn(
              "h-px w-6 transition-all duration-300",
              transparent && !open ? "bg-bone" : "bg-ink",
              open && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-6 transition-all duration-300",
              transparent && !open ? "bg-bone" : "bg-ink",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-px w-6 transition-all duration-300",
              transparent && !open ? "bg-bone" : "bg-ink",
              open && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* mobile */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t bg-background transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[80vh] opacity-100 border-hairline" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <nav className="container-x py-8 flex flex-col gap-1">
          {links.map((l, i) => (
            <NavLink
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={({ isActive }) =>
                cn(
                  "font-display text-2xl py-3 border-b border-hairline/60 flex items-center justify-between transition-all duration-500",
                  open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
                  isActive ? "text-foreground" : "text-foreground/70"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  <span
                    className={cn(
                      "h-px transition-all duration-500",
                      isActive ? "w-10 bg-foreground" : "w-4 bg-foreground/30"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-ink text-bone px-5 py-3.5 text-sm tracking-wide"
          >
            Start a Project <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};