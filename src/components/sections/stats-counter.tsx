import type { StatItem } from "@/lib/types";
import { CounterAnimation } from "@/components/animation/counter-animation";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface StatsCounterProps {
  stats: StatItem[];
  theme?: "light" | "dark";
}

export function StatsCounter({ stats, theme = "light" }: StatsCounterProps) {
  const bgClass = theme === "dark" ? "bg-navy" : "bg-gray-50";
  const valueColor = theme === "dark" ? "text-white" : "text-navy";
  const labelColor = theme === "dark" ? "text-white/60" : "text-gray-500";
  const borderColor = theme === "dark" ? "border-white/10" : "border-gray-200";

  return (
    <section className={`${bgClass} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center p-6 rounded-xl border ${borderColor} ${
                  theme === "dark" ? "bg-white/5" : "bg-white"
                }`}
              >
                <div className={`text-3xl sm:text-4xl font-display font-bold ${valueColor}`}>
                  <CounterAnimation value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className={`text-sm mt-2 ${labelColor}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}