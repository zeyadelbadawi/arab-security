import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  theme?: "light" | "dark";
  overline?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  theme = "light",
  overline,
}: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "text-center" : "text-left";
  const titleColor = theme === "light" ? "text-navy" : "text-white";
  const subtitleColor = theme === "light" ? "text-gray-600" : "text-white/70";

  return (
    <ScrollReveal className={`mb-12 ${alignClass}`}>
      {overline && (
        <span className="inline-block text-teal text-xs font-semibold uppercase tracking-[0.1em] mb-3">
          {overline}
        </span>
      )}
      <h2 className={`font-display font-bold text-3xl sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${subtitleColor} max-w-2xl ${alignment === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}