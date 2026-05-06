const items = [
  "RIBA Recognized",
  "AIA Honor Award 2024",
  "Wallpaper* Design Award",
  "LEED Platinum Certified",
  "Dezeen Top 100",
  "Architectural Digest Featured",
];

export const Marquee = () => {
  return (
    <div className="border-y border-hairline bg-background py-5 sm:py-6 overflow-hidden marquee-mask">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            <span className="font-display text-xl sm:text-2xl md:text-3xl text-foreground/70 italic whitespace-nowrap">{t}</span>
            <span className="block h-1 w-1 rounded-full bg-stone shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
