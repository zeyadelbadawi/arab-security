import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface LogoItem {
  name: string;
  logo: string;
}

interface LogoGridProps {
  logos: LogoItem[];
  variant?: "static" | "carousel";
}

export function LogoGrid({ logos, variant = "static" }: LogoGridProps) {
  if (variant === "carousel") {
    return (
      <ScrollReveal>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left gap-12 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="group flex-shrink-0 h-24 w-48 flex items-center justify-center"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="group flex items-center justify-center p-4 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-xl"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-28 max-w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
