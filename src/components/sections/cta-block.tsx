import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface CTABlockProps {
  title: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  variant?: "banner" | "inline";
  theme?: "navy" | "gradient" | "teal";
}

export function CTABlock({
  title,
  subtitle,
  primaryText = "Get a Consultation",
  primaryHref = "/contact",
  secondaryText,
  secondaryHref,
  variant = "banner",
  theme = "gradient",
}: CTABlockProps) {
  const bgClass = {
    navy: "bg-navy",
    gradient: "bg-gradient-to-r from-navy via-navy-light to-navy",
    teal: "bg-teal",
  }[theme];

  if (variant === "inline") {
    return (
      <ScrollReveal className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${bgClass} rounded-2xl p-8 sm:p-12 text-center`}>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">{title}</h3>
            {subtitle && <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={primaryHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-display font-semibold rounded-lg transition-all duration-300"
              >
                {primaryText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {secondaryText && secondaryHref && (
                <Link
                  to={secondaryHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 hover:border-white text-white font-display font-semibold rounded-lg transition-all !bg-transparent hover:!bg-transparent"
                >
                  <Phone className="w-4 h-4" />
                  {secondaryText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <section className={`${bgClass} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">{title}</h2>
          {subtitle && <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={primaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-display font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              {primaryText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryText && secondaryHref && (
              <Link
                to={secondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white font-display font-semibold rounded-lg transition-all !bg-transparent hover:!bg-transparent"
              >
                <Phone className="w-4 h-4" />
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}