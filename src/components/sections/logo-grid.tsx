import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface LogoItem {
  name: string;
  logo: string;
}

interface LogoGridProps {
  logos: LogoItem[];
  variant?: "static" | "carousel";
  grayscale?: boolean;
}

export function LogoGrid({ logos, variant = "static", grayscale = true }: LogoGridProps) {
  if (variant === "carousel") {
    return (
      <ScrollReveal>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left gap-12 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 h-20 w-44 flex items-center justify-center"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className={`max-h-17 object-contain ${
                    grayscale ? "opacity-50 grayscale hover:opacity-100 hover:grayscale-0" : ""
                  } transition-all duration-300`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center p-4 rounded-lg"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className={`h-40 object-contain ${
                grayscale ? "opacity-50 grayscale hover:opacity-100 hover:grayscale-0" : ""
              } transition-all duration-300`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}